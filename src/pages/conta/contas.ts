import {Component} from "@angular/core";
import {NavController, NavParams, ViewController} from "ionic-angular";
import {KEY_TELA_ANTERIOR_LOGIN, LoginPage} from "./login";
import {CadastrarContaPage} from "./cadastrar-conta";
import {createObjectKey} from "../../shared";
import {MinhaContaPage} from "./minha-conta";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {PageChildBase} from "../../infra/page-child-base";

@Component({
    selector: 'page-contas',
    templateUrl: 'contas.html'
})
export class ContasPage extends PageChildBase {

    private telaVoltar: any;
    private isExibirVoltar: boolean;

    constructor(navCtrl: NavController, viewCtrl: ViewController, public navParams: NavParams, private pedido: PedidoViewData) {

        super(navCtrl, viewCtrl)
        this.telaVoltar = this.navParams.get(KEY_TELA_ANTERIOR_LOGIN);
        this.isExibirVoltar = !!this.telaVoltar;
    }

    childAfterViewInit() {

        if (!!this.pedido.cliente) {
            this.navCtrl.push(MinhaContaPage, createObjectKey(KEY_TELA_ANTERIOR_LOGIN, this.telaVoltar));
        }

    }

    irParaLogin() {

        this.navCtrl.push(LoginPage, createObjectKey(KEY_TELA_ANTERIOR_LOGIN, this.telaVoltar));
    }

    irParaCadastro() {

        this.navCtrl.push(CadastrarContaPage, createObjectKey(KEY_TELA_ANTERIOR_LOGIN, this.telaVoltar));

    }

}
