import {EventEmitter, Injectable} from "@angular/core";
import {ItemPedidoViewData} from "./item-pedido.viewdata";
import {Cliente, Cupom, Endereco} from "../services/dados";
import {AlertController, NavController} from "ionic-angular";
import {ApiService} from "../services/api.service";
import {IAction} from "../services/iaction";
import {exibirMensagemErro} from "../shared";
import {ItemVendaService} from "../services/item-venda.service";


/**
 * Created by eu on 04/05/2017.
 */

@Injectable()
export class PedidoViewData {

    private eventEmitter: EventEmitter<Cliente>;
    public hasItens: boolean = false;

    public valorTotal: number = 0;
    public isTipoPagamentoDinheiro: boolean = true;
    public valorTotalLiquido: number = 0;
    public desconto: number = 0;
    private _taxaEntrega: number = 0;
    public isReceberPedidoCasa: boolean;
    public itens: Array<ItemPedidoViewData>;
    private _cliente: Cliente;

    public clienteEntrega: Cliente;
    public enderecoEntrega: Endereco;

    private cupomDescontoPercentual: number = 0;
    private cupomDescontoValor: number = 0;
    private cupomDesconto: string;

    public get cliente(): Cliente {
        return this._cliente;
    }

    public set cliente(cliente: Cliente) {

        this._cliente = cliente;

        if (!!cliente) {
            window.localStorage.setItem('cliente', JSON.stringify(cliente));
        } else {
            window.localStorage.removeItem('cliente');
        }

        this.eventEmitter.emit(cliente);

    }

    public onClienteChange(subscriber: (cliente: Cliente) => void): void {
        this.eventEmitter.subscribe(subscriber);
    }

    public set taxaEntrega(v: number) {
        this._taxaEntrega = v;
        this.calcularPedido();
    }

    public get taxaEntrega(): number {
        return this._taxaEntrega;
    }

    constructor(private vendaService: ItemVendaService) {
        this.itens = new Array<ItemPedidoViewData>();
        this.isReceberPedidoCasa = false;
        this.eventEmitter = new EventEmitter<Cliente>(false);
    }

    private find(item: ItemPedidoViewData): [number, ItemPedidoViewData] {

        for (let index = 0; index < this.itens.length; index++) {
            let i = this.itens[index];

            if (i.tipo == item.tipo && i.itemVendaId == item.itemVendaId) {
                return [index, i];
            }
        }

        return null;
    }

    public addItem(item: ItemPedidoViewData) {

        let itemPed: [number, ItemPedidoViewData] = this.find(item);

        if (!!itemPed && itemPed[1].equals(item)) {
            itemPed[1].quantidade += item.quantidade;
        } else {
            this.itens.push(item);
        }

        this.calcularPedido();

    }

    public removerItem(item: ItemPedidoViewData): void {
        let itemPed = this.find(item);

        if (!itemPed) return;

        this.itens.splice(itemPed[0], 1);

        this.calcularPedido();

    }

    public adicionarCupomDesconto(cupom: Cupom) {
        this.cupomDesconto = cupom.codigo;
        this.cupomDescontoPercentual = cupom.isPercentual ? cupom.desconto/100 : 0 ;
        this.cupomDescontoValor = cupom.isPercentual ? 0 : cupom.desconto;
        this.calcularPedido();
    }

    private calcularPedido(): void {

        this.hasItens = this.itens.length > 0;

        let total: number = 0;

        for (let i of this.itens) {
            total += i.quantidade * i.preco;
        }

        this.valorTotal = this.arredondarValor(total);

        this.desconto = (this.valorTotal * this.cupomDescontoPercentual) + this.cupomDescontoValor;
        this.desconto = this.arredondarValor(this.desconto);

        this.valorTotalLiquido = this.valorTotal - this.desconto + this.taxaEntrega;

    }

    private arredondarValor(valor: number): number {
        return Math.round(valor * 100) / 100;
    }

    novo() {

        this.itens = new Array<ItemPedidoViewData>();
        this.isTipoPagamentoDinheiro = true;
        this.taxaEntrega = 0;
        this.isReceberPedidoCasa = false;
        this.cupomDesconto = null;
        this.cupomDescontoValor = 0;
        this.cupomDescontoPercentual = 0;
        this.valorTotal = 0;
        this.valorTotalLiquido = 0;
        this.desconto = 0;
        this.clienteEntrega = null;

        if (!!this.vendaService) {
            this.vendaService.limparCache();
        }

    }

    finalizarPedido(navCtrl: NavController,
                    alertCtrl: AlertController,
                    paginaAposSucesso: any,
                    apiService: ApiService,
                    callBackOnFinally?: () => {}) {


        let pedido = {

            clienteId: this.cliente.id,
            clienteEntrega: this.clienteEntrega,
            enderecoEntrega: this.isReceberPedidoCasa ? this.enderecoEntrega : null,
            isTipoPagamentoDinheiro: this.isTipoPagamentoDinheiro,
            taxaEntrega: this.taxaEntrega,
            isReceberPedidoCasa: this.isReceberPedidoCasa,
            cupomDesconto: this.cupomDesconto,
            valorTotal: this.valorTotal,
            valorTotalLiquido: this.valorTotal,
            desconto: this.desconto,
            itens: []
        };

        let itensPedido: Array<any> = [];

        for (let i of this.itens) {
            var item = {
                codigo: i.itemVendaId,
                nome: i.nome,
                tipo: i.tipo,
                quantidade: i.quantidade,
                ingredientes: i.tipo == "pizza" ? i.ingredientes : null,
                preco: i.preco,
                observacoes: i.observacao
            };

            itensPedido.push(item);
        }

        pedido.itens = itensPedido;

        let action = <IAction> {

            onCompleted: (itens) => {


                let alert = alertCtrl.create({
                    title: 'Pendido enviado com sucesso!',
                    subTitle: `
                                    <div style="text-align: -webkit-auto;">
                                        <br>Número:<br><strong>${itens[0].numeroPedido}</strong>
                                        <br><br>Anote-o para referência.
                                     `,
                    buttons: [
                        {
                            text: 'Ok, anotei!',
                            handler: data => {
                                this.novo();
                                navCtrl.push(paginaAposSucesso);
                            }
                        }]
                });

                alert.present();

            },
            onError: (erro) => {
                console.log(erro);
                exibirMensagemErro('Não foi possível enviar o pedido.', erro, alertCtrl);
            },
            onFinally: () => {

                if (!!callBackOnFinally) callBackOnFinally();
            }
        };

        // executa a transação
        let observablePesq = apiService.enviarPedido(pedido);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);

    }


}
