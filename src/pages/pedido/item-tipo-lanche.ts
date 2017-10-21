import {Component} from "@angular/core";
import {AlertController, LoadingController, NavController, ViewController} from "ionic-angular";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {ItemVenda} from "../../services/item-venda";
import {IAction} from "../../services/iaction";
import {ApiService} from "../../services/api.service";
import {ItemVendaService} from "../../services/item-venda.service";
import {ItemAddQuantPage} from "./item-add-quant";
import {PageChildBase} from "../../infra/page-child-base";
import {exibirMensagemErro} from "../../shared";

@Component({
    selector: 'page-item-tipo-lanche',
    templateUrl: 'item-tipo-lanche.html'
})
export class ItemTipoLanchePage extends PageChildBase {


    private dataSourceTable: Array<ItemVenda> = new Array<ItemVenda>();

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
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
            content: 'Consultando lanches disponíveis...'
        });

        this.dataSourceTable = new Array<ItemVenda>();

        let action = <IAction> {

            onCompleted: (itens) => {
                loading.dismiss();
                this.dataSourceTable = itens;
                this.vendaService.lanches = itens;
            },
            onError: (erro) => {
                loading.dismiss();
                console.log(erro);
                exibirMensagemErro('Não foi possível carregar a lista de lanches.', erro, this.alertCtrl);
                this.navCtrl.pop();
            },
            onFinally: () => {
            }
        };


        if (!this.vendaService.lanches || this.vendaService.lanches.length == 0) {

            loading.present();

            // executa a transação
            let observablePesq = this.apiService.listarLanches();

            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        } else {
            this.dataSourceTable = this.vendaService.lanches;
        }

        // impede que o comando submit dê um refresh na tela
        return false;

    }

    venderItem(item: ItemVenda) {
        item.tipo = "lanche";
        this.navCtrl.push(ItemAddQuantPage, {
            item: item
        });
    }

}
