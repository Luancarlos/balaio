import {Component} from "@angular/core";
import {AlertController, LoadingController, NavController, NavParams, ViewController} from "ionic-angular";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {ItemTipoPizzaPage} from "./item-tipo-pizza";
import {ItemVenda, ItemVendaPizza} from "../../services/item-venda";
import {IAction} from "../../services/iaction";
import {ItemVendaService} from "../../services/item-venda.service";
import {ApiService} from "../../services/api.service";
import {ItemAddQuantPage} from "./item-add-quant";
import {PageChildBase} from "../../infra/page-child-base";
import {exibirMensagemErro} from "../../shared";

@Component({
    selector: 'page-item-tipo-pizza-borda',
    templateUrl: 'item-tipo-pizza-borda.html'
})
export class ItemTipoPizzaBordaPage extends PageChildBase {

    private dataSourceTable: ItemVenda[];

    private pizza: ItemVendaPizza;

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                navParams: NavParams,
                private pedidoService: PedidoViewData,
                private apiService: ApiService,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
                private vendaService: ItemVendaService) {

        super(navCtrl, viewCtrl);

        // If we navigated to this page, we will have an item available as a nav param
        this.pizza = <ItemVendaPizza> navParams.get('item');

        this.carregarLista();

    }

    protected childAfterViewInit() {

        if (!this.pizza) {
            this.navCtrl.push(ItemTipoPizzaPage);
        }
    }

    carregarLista() {

        let loading = this.loadingCtrl.create({
            content: 'Consultando bordas de pizzas disponíveis...'
        });

        this.dataSourceTable = new Array<ItemVenda>();

        let action = <IAction> {

            onCompleted: (itens) => {
                loading.dismiss();
                this.dataSourceTable = itens;
                this.vendaService.bordasPizzas = itens;
            },
            onError: (erro) => {
                loading.dismiss();
                console.log(erro);
                exibirMensagemErro('Não foi possível carregar a lista de bordas.', erro, this.alertCtrl);
                this.navCtrl.pop();
            },
            onFinally: () => {
            }
        };

        if (!this.vendaService.bordas || this.vendaService.bordas.length == 0) {

            loading.present();

            // executa a transação
            let observablePesq = this.apiService.listarBordas();

            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);

        } else {

            this.dataSourceTable = this.vendaService.bordasPizzas;

        }

        // impede que o comando submit dê um refresh na tela
        return false;

    }


    private selecionarBorda(borda: ItemVenda) {

        if (!!borda.valor) {
            this.pizza.borda = borda;
        } else {
            this.pizza.borda = null;
        }

        this.venderItem(this.pizza);

    }

    venderItem(item: ItemVenda) {
        item.tipo = "pizza";
        this.navCtrl.push(ItemAddQuantPage, {
            item: item
        });
    }
}
