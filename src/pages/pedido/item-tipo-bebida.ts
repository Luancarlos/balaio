import {Component} from "@angular/core";
import {AlertController, LoadingController, NavController, NavParams, ViewController} from "ionic-angular";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {ItemVenda} from "../../services/item-venda";
import {ApiService} from "../../services/api.service";
import {ItemVendaService} from "../../services/item-venda.service";
import {IAction} from "../../services/iaction";
import {ItemAddQuantPage} from "./item-add-quant";
import {PageChildBase} from "../../infra/page-child-base";
import {exibirMensagemErro} from "../../shared";

@Component({
    selector: 'page-item-tipo-bebida',
    templateUrl: 'item-tipo-bebida.html'
})
export class ItemTipoBebidaPage extends PageChildBase {

    private dataSourceTable: Array<ItemVenda> = new Array<ItemVenda>();

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                public navParams: NavParams,
                private pedidoService: PedidoViewData,
                private apiService: ApiService,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
                private vendaService: ItemVendaService) {

        super(navCtrl, viewCtrl);
        this.carregarLista();

    }


    carregarLista() {

        let loading = this.loadingCtrl.create({
            content: 'Consultando bebidas disponíveis...'
        });

        this.dataSourceTable = new Array<ItemVenda>();

        let action = <IAction> {

            onCompleted: (itens) => {
                loading.dismiss();
                this.dataSourceTable = itens;
                this.vendaService.bebidas = itens;
            },
            onError: (erro) => {
                loading.dismiss();
                console.error('erro api bebidas', erro);
                exibirMensagemErro('Não foi possível carregar a lista de bebidas.', erro, this.alertCtrl);
                this.navCtrl.pop();
            },
            onFinally: () => {
            }
        };


        if (!this.vendaService.bebidas || this.vendaService.bebidas.length == 0) {

            loading.present();

            // executa a transação
            let observablePesq = this.apiService.listarBebidas();

            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        } else {
            this.dataSourceTable = this.vendaService.bebidas;
        }

        // impede que o comando submit dê um refresh na tela
        return false;


    }

    venderItem(item: ItemVenda) {

        item.tipo = "bebida";
        this.navCtrl.push(ItemAddQuantPage, {
            item: item
        });

    }

}
