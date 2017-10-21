import {Component, ViewChild} from "@angular/core";
import {Nav, Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import {SobrePage} from "../pages/sobre/sobre";
import {ListPage} from "../pages/list/list";
import {PedidoPage} from "../pages/pedido/pedido";
import {ContasPage} from "../pages/conta/contas";
import {HomePage} from "../pages/home/home";
import {PedidoViewData} from "../viewdata/pedido.viewdata";
import {Cliente} from "../services/dados";
import {HistoricoPage} from "../pages/historico/historico";

@Component({
    templateUrl: 'app.html'
})
export class MainPage {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    // @Output()
    activeTitle: string = "Home";

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar
        , public splashScreen: SplashScreen
        , private pedido: PedidoViewData) {

        this.initializeApp();

        // used for an example of ngFor and navigation

        pedido.onClienteChange(cliente => {
            this.pages = [
                {title: 'Home', component: HomePage},
                {title: 'Meu Pedido', component: PedidoPage},
                {title: 'Minha Conta', component: ContasPage},
                {title: 'Sobre', component: SobrePage}
            ];

            if (!!cliente) {
                this.pages.splice(2, 0, {title: 'Histórico', component: HistoricoPage});
            }

        });

        let cliente = window.localStorage.getItem('cliente');

        if (!cliente) {
            this.pedido.cliente = null;
        } else {
            this.pedido.cliente = <Cliente> JSON.parse(cliente);
        }

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activeTitle = page.title;
    }
}
