import {Component} from "@angular/core";
import {AlertController, LoadingController, NavController, ViewController} from "ionic-angular";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {HomePage} from "../home/home";
import {ApiService} from "../../services/api.service";
import {ContasPage} from "../conta/contas";
import {KEY_TELA_ANTERIOR_LOGIN} from "../conta/login";
import {createObjectKey, exibirMensagemErro} from "../../shared";
import {PageChildBase} from "../../infra/page-child-base";
import {IAction} from "../../services/iaction";

@Component({
    selector: 'page-pedido-pagamento',
    templateUrl: 'pedido-pagamento.html'
})
export class PedidoPagamentoPage extends PageChildBase {

    private cupomDesconto: string;
    private isProcessando: boolean;

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                private pedido: PedidoViewData,
                private apiService: ApiService,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController) {

        super(navCtrl, viewCtrl);

    }

    private pedidoOpcaoPagamento(tipoEntrega: 'dinheiro' | 'cartao') {
        this.pedido.isTipoPagamentoDinheiro = (tipoEntrega == "dinheiro");
    }

    incluirCupomDesconto() {

        let alert = this.alertCtrl.create({

            title: 'Incluir cupom de desconto',
            inputs: [
                {
                    name: 'cupom',
                    placeholder: 'cupom',
                    value: this.cupomDesconto
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: data => {

                    }
                },
                {
                    text: 'Salvar',
                    handler: data => {
                        this.validarCupomDesconto(data.cupom);
                    }
                }
            ]
        });

        alert.present();

    }

    private validarCupomDesconto(cupom: string) {

        let loading = this.loadingCtrl.create({
            content: 'Validando cupom...'
        });


        let action = <IAction> {

            onCompleted: (itens) => {

                loading.dismiss();
                this.cupomDesconto = cupom;
                this.pedido.adicionarCupomDesconto(itens[0]);

            },
            onError: (erro) => {
                loading.dismiss();
                console.log(erro);
                exibirMensagemErro('Não foi possível usar o cupom.', erro, this.alertCtrl);

            },
            onFinally: () => {
            }
        };


        loading.present();

        // executa a transação
        let observablePesq = this.apiService.consultarCupom(cupom, this.pedido.cliente.id);

        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);

    }

    private textoBotaoFinalizar(): string {

        let tipoAcao = this.tipoAcaoFinalizar();

        switch (tipoAcao) {
            case "login":
                return "Efetuar Login";
            default:
                return "Finalizar";
        }

    }

    private tipoAcaoFinalizar(): "endereco" | "login" | "finalizarPedido" {

        if (!this.pedido.cliente) {
            return "login";
        }

        return "finalizarPedido";

    }

    private finalizarPedido(): void {

        if (!!this.isProcessando) return;

        let tipoAcao = this.tipoAcaoFinalizar();

        if (tipoAcao == "login") {
            this.navCtrl.push(ContasPage, createObjectKey(KEY_TELA_ANTERIOR_LOGIN, PedidoPagamentoPage));
            return;
        }


        this.isProcessando = true;
        this.pedido.finalizarPedido(this.navCtrl, this.alertCtrl, HomePage, this.apiService, () => this.isProcessando = false);

    }

}
