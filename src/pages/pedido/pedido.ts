import {AfterContentInit, Component} from "@angular/core";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {ItemTiposPage} from "./item-tipos";
import {ItemPedidoViewData} from "../../viewdata/item-pedido.viewdata";
import {PedidoPagamentoPage} from "./pedido-pagamento";
import {PedidoEnderecoPage} from "./pedido-endereco";
import {createObjectKey} from "../../shared";
import {KEY_TELA_ANTERIOR_LOGIN} from "../conta/login";
import {ContasPage} from "../conta/contas";
import {HorarioAtendimento} from "../../services/dados";
import {HomePage} from "../home/home";

@Component({
    selector: 'page-pedido',
    templateUrl: 'pedido.html'
})
export class PedidoPage implements AfterContentInit {

    constructor(public navCtrl: NavController, public navParams: NavParams,
                private pedido: PedidoViewData,
                private horarioAtendimento: HorarioAtendimento,
                private alertCtrl: AlertController) {


    }

    ngAfterContentInit()
    {
        this.verificarAtendimento();
    }

    private verificarAtendimento()
    {
        if (this.horarioAtendimento.isFechado)
        {
            let alert = this.alertCtrl.create({
                title: 'Desculpe :(',
                message: `Não estamos atendendo no momento.`,
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel',
                        handler: () => {
                            this.navCtrl.setRoot(HomePage);
                        }
                    }
                ]
            });
            alert.present();
        }
    }

    pedidoOpcaoEntrega(tipoEntrega: 'retirar' | 'receber') {

        this.pedido.isReceberPedidoCasa = (tipoEntrega == "receber");
    }

    irParaAdicionarItem() {
        this.navCtrl.push(ItemTiposPage);
    }

    removerItem(item: ItemPedidoViewData) {

        let alert = this.alertCtrl.create({
            title: 'Atenção',
            message: `Você confirma a exclusão do item '${item.nome}'?`,
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Sim',
                    handler: () => {
                        this.pedido.removerItem(item);
                    }
                }
            ]
        });
        alert.present();

    }

    private textoBotaoEtapa(): string {

        let tipoAcao = this.tipoAcaoProximaEtapa();

        switch (tipoAcao) {
            case "endereco":
                return "Local de Entrega";
            case "login":
                return "Efetuar Login";
            default:
                return "Pagamento";
        }

    }

    private tipoAcaoProximaEtapa(): "endereco" | "login" | "pagamento" {

        if (!this.pedido.cliente) {
            return "login";
        }

        if (this.pedido.isReceberPedidoCasa) {
            return "endereco";
        } else {
            return "pagamento";
        }

    }

    private irParaProximaEtapa(): void {

        let tipoAcao = this.tipoAcaoProximaEtapa();

        if (tipoAcao == "login") {
            this.navCtrl.push(ContasPage, createObjectKey(KEY_TELA_ANTERIOR_LOGIN, PedidoPage));
            return;
        }

        if (tipoAcao == "endereco") {
            this.navCtrl.push(PedidoEnderecoPage);
            return;
        }

        this.navCtrl.push(PedidoPagamentoPage);

    }

    itemTapped(event, item) {
        this.navCtrl.push(PedidoPage, {
            item: item
        });
    }

}
