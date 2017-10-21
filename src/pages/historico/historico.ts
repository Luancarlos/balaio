import {Component} from "@angular/core";
import {HorarioAtendimento, Pedido} from "../../services/dados";
import {AlertController, LoadingController, NavController, NavParams, ViewController} from "ionic-angular";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {ApiService} from "../../services/api.service";
import {ItemVendaService} from "../../services/item-venda.service";
import {IAction} from "../../services/iaction";
import {HistoricoDetalhePage} from "./historico-detalhe";
import {exibirMensagemErro} from "../../shared";
import {PedidoPage} from "../pedido/pedido";
/**
 * Created by eu on 01/06/2017.
 */

@Component({
    selector: 'page-historico',
    templateUrl: 'historico.html'
})
export class HistoricoPage {

    private dataSourceTable: Array<Pedido> = new Array<Pedido>();
    private canExibirVazio: boolean;

    constructor(private navCtrl: NavController,
                private viewCtrl: ViewController,
                public navParams: NavParams,
                private pedidoService: PedidoViewData,
                private apiService: ApiService,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
                private horarioAtendimento: HorarioAtendimento,
                private vendaService: ItemVendaService) {

        this.carregarLista();

    }

    carregarLista() {

        let loading = this.loadingCtrl.create({
            content: 'Consultando histórico de pedidos disponíveis...'
        });

        this.dataSourceTable = new Array<Pedido>();

        let action = <IAction> {

            onCompleted: (itens) => {
                this.dataSourceTable = itens;
                this.canExibirVazio = true;
            },
            onError: (erro) => {

                exibirMensagemErro("Não foi possível listar o histórico de pedidos.", erro, this.alertCtrl);
                console.error('erro ao listar pedidos pedidos', erro);
            },
            onFinally: () => {

                loading.dismiss();
                this.canExibirVazio = true;
            }
        };

        loading.present();

        // executa a transação
        let observablePesq = this.apiService.listarPedidosCliente(this.pedidoService.cliente.id);

        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);

        // impede que o comando submit dê um refresh na tela
        return false;


    }

    private isStatusFinalizado(status: string): boolean
    {
        if (!status) return false;

        status = status.trim().toUpperCase();

        return status === 'FINALIZADO' || status === 'ENTREGUE' ||
               status === 'FINALIZADA' || status === 'CANCELADA' ||
               status === 'CANCELADO' || status === 'CONCLUIDO' ||
               status === 'CONCLUIDA' || status === 'CONCLUÍDO' ||
               status === 'CONCLUÍDA';

    }

    irParaDetalhe(pedido: Pedido) {
        this.navCtrl.push(HistoricoDetalhePage, {
            item: pedido
        });
    }

    private irParaPedido(): void {
        this.navCtrl.push(PedidoPage);
    }
}
