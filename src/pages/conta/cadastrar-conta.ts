import {Component} from "@angular/core";
import {AlertController, LoadingController, NavController, NavParams, ViewController} from "ionic-angular";
import {Cliente, Endereco, Regiao} from "../../services/dados";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {ApiService} from "../../services/api.service";
import {IAction} from "../../services/iaction";
import {KEY_TELA_ANTERIOR_LOGIN} from "./login";
import {MinhaContaPage} from "./minha-conta";
import {exibirMensagemErro, IsEmail} from "../../shared";
import {ItemVendaService} from "../../services/item-venda.service";
import {PageChildBase} from "../../infra/page-child-base";

@Component({
    selector: 'page-cadastrar-conta',
    templateUrl: 'cadastrar-conta.html'
})
export class CadastrarContaPage extends PageChildBase {

    private cliente: Cliente
    private endereco: Endereco;

    private regioes: Array<Regiao>;
    private cidades: Array<Regiao>;
    private bairros: Array<Regiao>;

    private regiaoDefault: Regiao;
    private _bairroSelecionado: Regiao;

    private _cidadeSelecionada: Regiao;

    private nomeBairro: string;
    private nomeCidade: string;

    private telaAnterior: any;

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                public navParams: NavParams,
                private apiService: ApiService,
                private pedido: PedidoViewData,
                private loadingCtrl: LoadingController,
                private vendaService: ItemVendaService,
                private alertCtrl: AlertController) {

        super(navCtrl, viewCtrl);
        this.telaAnterior = this.navParams.get(KEY_TELA_ANTERIOR_LOGIN);

        this.cliente = new Cliente();
        this.endereco = new Endereco();

        let regiao = new Regiao();

        regiao.cidade = "Outra Cidade";
        regiao.bairro = "Outro Bairro";
        regiao.regiaoId = -999;

        this.regiaoDefault = regiao;

        if (!!this.pedido.cliente) {

            let clieo = this.pedido.cliente;
            let clied = this.cliente;

            // copia os dados do cliente para edição
            clied.id = clieo.id;
            clied.nome = clieo.nome;
            clied.telefone = clieo.telefone;
            clied.login = clieo.login;

            if (!!clieo.endereco) {
                let end = clieo.endereco;
                this.endereco.logradouro = end.logradouro;
                this.endereco.cep = end.cep;
                this.endereco.numero = end.numero;
                this.endereco.complemento = end.complemento;
                this.endereco.regiao = end.regiao;
            }

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
                } else if (regiao.regiaoId == -999 && regiaoEnde.regiaoId == -999) {
                    this.cidadeSelecionada = regiao;
                    this.nomeCidade = regiaoEnde.cidade;
                    break;
                }
            }

            for (let regiao of this.bairros) {
                if (regiao.bairro == regiaoEnde.bairro) {
                    this.bairroSelecionado = regiao;
                    break;
                } else if (regiao.regiaoId == -999 && regiaoEnde.regiaoId == -999) {
                    this.bairroSelecionado = regiao;
                    this.nomeBairro = regiaoEnde.bairro;
                    break;
                }
            }

        });

    }

    private set cidadeSelecionada(regiao: Regiao) {

        this._cidadeSelecionada = regiao;
        this.bairroSelecionado = null;
        this.bairros = new Array<Regiao>();
        this.bairros = this.regioes.filter(a => a.cidade == regiao.cidade);
        this.bairros.push(this.regiaoDefault);
    }

    private get cidadeSelecionada(): Regiao {
        return this._cidadeSelecionada;
    }

    private set bairroSelecionado(regiao: Regiao) {
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

                this.vendaService.regioes = itens;
                this.cidades.push(this.regiaoDefault);
                this.vendaService.cidades = this.cidades;
                if (!!callBackAfterLoad) callBackAfterLoad();

            },
            onError: (erro) => {

                loading.dismiss();

                exibirMensagemErro('Não foi possível consultar a lista de regiões.', erro, this.alertCtrl);
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


    private validarPreenchimento() {

        let clie = this.cliente;

        if (!clie.login || !clie.nome || !clie.telefone || (!clie.senha && !clie.id)) {

            let alert = this.alertCtrl.create({
                title: 'Atenção!',
                subTitle: "Os campos Nome, Telefone, E-mail e Senha são obrigatórios.",
                buttons: [
                    {
                        text: 'Ok',
                    }]
            });

            alert.present();

            return false;

        } else if (IsEmail(clie.login) == false) {

            let alert = this.alertCtrl.create({
                title: 'Atenção!',
                subTitle: "Por favor, informe um e-mail válido.",
                buttons: [
                    {
                        text: 'Ok',
                    }]
            });

            alert.present();
            return false;

        }

        return true;

    }

    private salvar() {

        if (!this.validarPreenchimento()) return;

        let loading = this.loadingCtrl.create({
            content: 'Salvando dados cadastrais...'
        });

        let action = <IAction> {

            onCompleted: (dados) => {

                loading.dismiss();

                let isNovo = true;

                if (!!this.cliente.id) {
                    isNovo = false;

                } else if (dados.length == 0) {

                    let alert = this.alertCtrl.create({
                        title: 'Atenção!',
                        subTitle: "Seu cadastro não foi salvo. Por favor, tente novamente.",
                        buttons: [{text: 'Ok',}]
                    });

                    alert.present();
                    return;
                } else {
                    this.cliente.id = dados[0].id;
                }

                this.pedido.cliente = this.cliente;

                if (isNovo == true) {
                    let alert = this.alertCtrl.create({
                        title: 'Parabéns!',
                        subTitle: "Cadastro realizado com sucesso.",
                        buttons: [{
                            text: 'Ok',
                            handler: (data) => {
                                this.voltarParaTelaAnterior();
                            }
                        }]
                    });

                    alert.present();

                } else {

                    let alert = this.alertCtrl.create({
                        title: 'Parabéns!',
                        subTitle: "Alterações salvas com sucesso.",
                        buttons: [{
                            text: 'Ok',
                            handler: (data) => {
                                this.voltarParaTelaAnterior();
                            }
                        }]
                    });

                    alert.present();

                }

            },
            onError: (erro) => {

                loading.dismiss();
                let alert = this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: "Não foi possível realizar a operação. " + erro.motivo,
                    buttons: [
                        {
                            text: 'Ok',
                        }]
                });

                alert.present();


            },
            onFinally: () => {
            }
        };

        let regiao = new Regiao();

        if (!this.bairroSelecionado) {
            regiao = null;
        } else {

            regiao.regiaoId = this.bairroSelecionado.regiaoId;
            regiao.cidade = this.bairroSelecionado.cidade;
            regiao.bairro = this.bairroSelecionado.bairro;

            if (this.cidadeSelecionada.regiaoId == -999) {
                regiao.cidade = this.nomeCidade;
            }

            if (this.bairroSelecionado.regiaoId == -999) {
                regiao.bairro = this.nomeBairro;
            }

        }

        this.cliente.endereco = this.endereco;
        this.cliente.endereco.regiao = regiao;

        loading.present();

        // executa a transação
        let observablePesq = this.apiService.salvarCliente(this.cliente);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);

    }

    private voltarParaTelaAnterior() {
        if (!this.telaAnterior) {
            this.navCtrl.setRoot(MinhaContaPage);
        } else {
            this.navCtrl.setRoot(this.telaAnterior);
        }
    }

}
