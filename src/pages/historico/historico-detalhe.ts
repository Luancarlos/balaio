import {Component} from "@angular/core";
import {PageChildBase} from "../../infra/page-child-base";
import {LoadingController, NavController, NavParams, ViewController} from "ionic-angular";
import {ApiService} from "../../services/api.service";
import {ItemPedido, Pedido} from "../../services/dados";
import {IAction} from "../../services/iaction";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
/**
 * Created by eu on 01/06/2017.
 */


@Component({
    selector: 'page-historico-detalhe',
    templateUrl: 'historico-detalhe.html'
})
export class HistoricoDetalhePage extends PageChildBase {

    private pedido: Pedido;
    private dataSourceTable: Array<ItemPedido> = new Array<ItemPedido>();

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                navParams: NavParams,
                private apiService: ApiService,
                private loadingCtrl: LoadingController,) {
        super(navCtrl, viewCtrl);
        this.pedido = <Pedido> navParams.get('item');

        this.carregarLista();
    }


    carregarLista() {

        let loading = this.loadingCtrl.create({
            content: 'Consultando itens do pedido...'
        });

        this.dataSourceTable = new Array<ItemPedido>();

        let action = <IAction> {

            onCompleted: (itens) => {
                loading.dismiss();
                this.dataSourceTable = itens;
            },
            onError: (erro) => {
                loading.dismiss();
                console.error('erro ao listar pedidos pedidos', erro);
            },
            onFinally: () => {
            }
        };

        loading.present();

        // executa a transação
        let observablePesq = this.apiService.listarPedidoItens(this.pedido.numero);

        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);

        // impede que o comando submit dê um refresh na tela
        return false;


    }


}
