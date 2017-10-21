import {Component} from "@angular/core";
import {AlertController, LoadingController, NavController, ViewController} from "ionic-angular";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {Cliente, Endereco, Regiao} from "../../services/dados";
import {ApiService} from "../../services/api.service";
import {PageChildBase} from "../../infra/page-child-base";
import {IAction} from "../../services/iaction";
import {ItemVendaService} from "../../services/item-venda.service";
import {PedidoPagamentoPage} from "./pedido-pagamento";
import {exibirMensagemErro} from "../../shared";


@Component({
    selector: 'pedido-endereco',
    templateUrl: 'pedido-endereco.html'
})
export class PedidoEnderecoPage extends PageChildBase {

    private cliente: Cliente
    private endereco: Endereco;

    private regioes: Array<Regiao>;
    private cidades: Array<Regiao>;
    private bairros: Array<Regiao>;

    private regiaoDefault: Regiao;
    private _bairroSelecionado: Regiao;

    private _cidadeSelecionada: Regiao;

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                private pedido: PedidoViewData,
                private alertCtrl: AlertController,
                private vendaService: ItemVendaService,
                private loadingCtrl: LoadingController,
                private apiService: ApiService) {

        super(navCtrl, viewCtrl);

        let regiao = new Regiao();

        regiao.cidade = "Não encontrei...";
        regiao.bairro = "Não encontrei...";

        this.regiaoDefault = regiao;

        this.cliente = new Cliente();
        this.endereco = new Endereco();

        let clieo = this.pedido.cliente;
        let clied = this.cliente;

        // copia os dados do cliente para edição
        clied.nome = clieo.nome;
        clied.telefone = clieo.telefone;

        if (!!clieo.endereco) {
            let end = clieo.endereco;
            this.endereco.logradouro = end.logradouro;
            this.endereco.numero = end.numero;
            this.endereco.complemento = end.complemento;
            let regiao = new Regiao();

            if (!!end.regiao) {
                regiao.bairro = end.regiao.bairro;
                regiao.cidade = end.regiao.cidade;
                regiao.regiaoId = end.regiao.regiaoId;
            }

            this.endereco.regiao = regiao;

        }

    }

    childAfterViewInit() {

        this.carregarRegioes(() => {

            if (!this.endereco.regiao) return;

            let regiaoEnde = this.endereco.regiao;

            for (let regiao of this.cidades) {
                if (regiao.cidade == regiaoEnde.cidade) {
                    this.cidadeSelecionada = regiao;
                    break;
                }
            }

            for (let regiao of this.bairros) {
                if (regiao.bairro == regiaoEnde.bairro) {
                    this.bairroSelecionado = regiao;
                    break;
                }
            }

        });

    }

    private validarPreenchimento(isModoSilencioso?: boolean) {

        let clie = this.cliente;
        let end = this.endereco;

        if (!this._cidadeSelecionada || this._cidadeSelecionada.regiaoId < 1) return false;
        if (!this._bairroSelecionado || this._bairroSelecionado.regiaoId < 1) return false;

        if (!clie.nome || !clie.telefone || !end.logradouro || !end.numero) {

            if (!isModoSilencioso) {
                let alert = this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: "Todos os campos são obrigatórios.",
                    buttons: [
                        {
                            text: 'Ok',
                        }]
                });

                alert.present();
            }

            return false;
        }

        return true;

    }

    private set cidadeSelecionada(regiao: Regiao) {

        this._cidadeSelecionada = regiao;
        this.bairroSelecionado = null;

        if (!regiao.regiaoId) {
            let alert = this.alertCtrl.create({
                title: 'Desculpe! :(',
                subTitle: "Ainda não atendemos à sua região. Escolha outro lugar ou retorne para a tela anterior e marque 'Retirar' para buscar seu pedido no local.",
                buttons: [
                    {
                        text: 'Ok',
                    }]
            });

            alert.present();
            return;
        }


        this.bairros = new Array<Regiao>();
        this.bairros = this.regioes.filter(a => a.cidade == regiao.cidade);
        this.bairros.push(this.regiaoDefault);
    }

    private get cidadeSelecionada(): Regiao {
        return this._cidadeSelecionada;
    }

    private set bairroSelecionado(regiao: Regiao) {
        if (!!regiao && !regiao.regiaoId) {
            let alert = this.alertCtrl.create({
                title: 'Desculpe! :(',
                subTitle: "Ainda não atendemos à sua região. Escolha outro lugar ou retorne para a tela anterior e marque 'Retirar' para buscar seu pedido no local.",
                buttons: [
                    {
                        text: 'Ok',
                    }]
            });

            alert.present();
            return;
        }

        this._bairroSelecionado = regiao;
    }

    private get bairroSelecionado(): Regiao {
        return this._bairroSelecionado;
    }

    carregarRegioes(callBackAfterLoad: () => void) {

        let loading = this.loadingCtrl.create({
            content: 'Consultando regiões disponíveis...'
        });

        this.regioes = new Array<Regiao>();
        this.bairros = new Array<Regiao>();
        this.cidades = new Array<Regiao>();

        let action = <IAction> {

            onCompleted: (itens) => {

                loading.dismiss();
                this.regioes = itens;
                this.cidades = [];
                let keys = {};

                // inclui somente cidades diferentes (distinct)
                for (let regiao of itens) {
                    if (!keys[regiao.cidade]) {
                        this.cidades.push(regiao);
                        keys[regiao.cidade] = true;
                    }
                }
                keys = null;
                this.cidades.push(this.regiaoDefault);
                this.vendaService.regioes = itens;
                this.vendaService.cidades = this.cidades;
                if (!!callBackAfterLoad) callBackAfterLoad();

            },
            onError: (erro) => {

                loading.dismiss();

                exibirMensagemErro('Não foi possível consultar a lista de regiões. Por favor, tente novamente', erro, this.alertCtrl);
                this.navCtrl.pop();
                return false;
            },
            onFinally: () => {
            }
        };


        if (!this.vendaService.cidades || this.vendaService.cidades.length == 0) {

            loading.present();

            // executa a transação
            let observablePesq = this.apiService.listarRegioes();
            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);

        } else {

            this.regioes = this.vendaService.regioes;
            this.cidades = this.vendaService.cidades;
            if (!!callBackAfterLoad) callBackAfterLoad();

        }

        // impede que o comando submit dê um refresh na tela
        return false;

    }

    private irParaProximaEtapa() {

        if (!this.validarPreenchimento()) return;

        this.pedido.clienteEntrega = this.cliente;
        this.pedido.enderecoEntrega = this.endereco;
        this.pedido.enderecoEntrega.regiao = this._bairroSelecionado;
        this.pedido.taxaEntrega = this._bairroSelecionado.frete;
        this.navCtrl.push(PedidoPagamentoPage);

    }


}
