import {Component} from "@angular/core";
import {AlertController, LoadingController, NavController, ViewController} from "ionic-angular";
import {ItemTipoPizzaPage} from "./item-tipo-pizza";
import {ItemVenda} from "../../services/item-venda";
import {IAction} from "../../services/iaction";
import {ItemVendaService} from "../../services/item-venda.service";
import {ApiService} from "../../services/api.service";
import {PageChildBase} from "../../infra/page-child-base";
import {exibirMensagemErro} from "../../shared";

@Component({
    selector: 'page-item-tipo-pizza-tamanho',
    templateUrl: 'item-tipo-pizza-tamanho.html'
})
export class ItemTipoPizzaTamanhoPage extends PageChildBase {

    private dataSourceTable: ItemVenda[];

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                private apiService: ApiService,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
                private vendaService: ItemVendaService) {

        super(navCtrl, viewCtrl);

        this.carregarLista();

    }

    carregarLista() {

        let loading = this.loadingCtrl.create({
            content: 'Consultando tamanhos de pizzas disponíveis...'
        });

        this.dataSourceTable = new Array<ItemVenda>();

        let action = <IAction> {

            onCompleted: (itens) => {
                loading.dismiss();
                this.dataSourceTable = itens;
                this.vendaService.tamamhosPizza = itens;
            },
            onError: (erro) => {
                loading.dismiss();
                console.log(erro);
                exibirMensagemErro('Não foi possível carregar a lista de tamanhos de pizza.', erro, this.alertCtrl);
                this.navCtrl.pop();
            },
            onFinally: () => {
            }
        };

        if (!this.vendaService.tamamhosPizza || this.vendaService.tamamhosPizza.length == 0) {

            loading.present();

            // executa a transação
            let observablePesq = this.apiService.listarTamanhosPizza();

            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);

        } else {

            this.dataSourceTable = this.vendaService.tamamhosPizza;

        }

        // impede que o comando submit dê um refresh na tela
        return false;

    }


    private selecionarTamanho(tamanho: ItemVenda) {

        this.navCtrl.push(ItemTipoPizzaPage, {
            tamanhoPizza: tamanho
        });
    }


}
