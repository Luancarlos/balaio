/**
 * Created by eu on 04/05/2017.
 */
import {Component} from "@angular/core";
import {AlertController, NavController, NavParams, ViewController} from "ionic-angular";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {ItemVenda} from "../../services/item-venda";
import {ItemPedidoViewData} from "../../viewdata/item-pedido.viewdata";
import {PedidoPage} from "./pedido";
import {PageChildBase} from "../../infra/page-child-base";

@Component({
    selector: 'page-item-add-quant',
    templateUrl: 'item-add-quant.html'
})
export class ItemAddQuantPage extends PageChildBase {


    private quantidade: number;
    private valorTotal: number;
    private item: ItemVenda;
    private observacao: string;

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                public navParams: NavParams,
                private pedido: PedidoViewData,
                private alertCtrl: AlertController) {

        super(navCtrl, viewCtrl);

        // If we navigated to this page, we will have an item available as a nav param
        this.item = <ItemVenda> navParams.get('item');

        if (!this.item) return;
        this.quantidade = 1;
        this.valorTotal = this.item.valor;
        this.calcularTotal();

    }

    protected childAfterViewInit() {

        if (!this.item) {
            this.navCtrl.push(PedidoPage);
        }

    }

    private adicionar(): void {
        this.quantidade++;
        this.calcularTotal();
    }

    private remover(): void {
        this.quantidade--;

        if (this.quantidade < 0) {
            this.quantidade = 0;
            this.navCtrl.push(PedidoPage);
            return;
        }

        this.calcularTotal();
    }

    private calcularTotal(): void {
        this.valorTotal = this.quantidade * this.item.valor;
    }

    private incluirItemNoPedido(): void {

        let itemPed = new ItemPedidoViewData();

        itemPed.nome = this.item.nome;
        itemPed.ingredientes = this.item.ingredientes;
        itemPed.imagem = this.item.imagem;
        itemPed.preco = this.item.valor;
        itemPed.quantidade = this.quantidade;
        itemPed.tipo = this.item.tipo;
        itemPed.itemVendaId = this.item.id;
        itemPed.observacao = this.observacao
        this.pedido.addItem(itemPed);

        this.navCtrl.push(PedidoPage);

    }

    private incluirObservacoes(): void {
        let alert = this.alertCtrl.create({

            title: 'Observação',
            inputs: [
                {
                    name: 'observacao',
                    placeholder: 'Observação',
                    value: this.observacao
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
                        this.observacao = data.observacao;
                    }
                }
            ]
        });

        alert.present();
    }


}
