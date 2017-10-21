import {Component} from "@angular/core";
import {NavController, ViewController} from "ionic-angular";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {ItemTipoBebidaPage} from "./item-tipo-bebida";
import {ItemTipoLanchePage} from "./item-tipo-lanche";
import {PageChildBase} from "../../infra/page-child-base";
import {ItemTipoPizzaTamanhoPage} from "./item-tipo-pizza-tamanho";
import {ItemTipoPorcaoPage} from "./item-tipo-porcao";

@Component({
    selector: 'page-item-tipos',
    templateUrl: 'item-tipos.html'
})
export class ItemTiposPage extends PageChildBase {

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                private pedidoService: PedidoViewData) {

        super(navCtrl, viewCtrl);

    }

    irParaBebidas() {
        this.navCtrl.push(ItemTipoBebidaPage);
    }

    irParaLanches() {
        this.navCtrl.push(ItemTipoLanchePage);
    }

    irParaPizzas() {
        this.navCtrl.push(ItemTipoPizzaTamanhoPage);
    }

    irParaPorcoes() {
        this.navCtrl.push(ItemTipoPorcaoPage);
    }

}
