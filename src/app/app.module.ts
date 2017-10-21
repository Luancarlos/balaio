import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";

import {MainPage} from "./app.component";


import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {HomePage} from "../pages/home/home";
import {ContasPage} from "../pages/conta/contas";
import {PedidoPage} from "../pages/pedido/pedido";
import {SobrePage} from "../pages/sobre/sobre";
import {PedidoViewData} from "../viewdata/pedido.viewdata";
import {ItemTiposPage} from "../pages/pedido/item-tipos";
import {ItemTipoBebidaPage} from "../pages/pedido/item-tipo-bebida";
import {ItemTipoLanchePage} from "../pages/pedido/item-tipo-lanche";
import {ItemTipoPizzaPage, PopoverPizzaSaborAdicionado} from "../pages/pedido/item-tipo-pizza";
import {HttpModule} from "@angular/http";
import {ApiService} from "../services/api.service";
import {ItemVendaService} from "../services/item-venda.service";
import {ItemAddQuantPage} from "../pages/pedido/item-add-quant";
import {PedidoPagamentoPage} from "../pages/pedido/pedido-pagamento";
import {ItemTipoPizzaBordaPage} from "../pages/pedido/item-tipo-pizza-borda";
import {MinhaContaPage} from "../pages/conta/minha-conta";
import {LoginPage} from "../pages/conta/login";
import {FormsModule} from "@angular/forms";
import {CadastrarContaPage} from "../pages/conta/cadastrar-conta";
import {AvaliacaoAppPage} from "../pages/conta/avaliacao-app";
import {PedidoEnderecoPage} from "../pages/pedido/pedido-endereco";
import {ItemTipoPizzaTamanhoPage} from "../pages/pedido/item-tipo-pizza-tamanho";
import {HistoricoDetalhePage} from "../pages/historico/historico-detalhe";
import {HistoricoPage} from "../pages/historico/historico";
import {ItemTipoPorcaoPage} from "../pages/pedido/item-tipo-porcao";
import {HorarioAtendimento} from "../services/dados";

@NgModule({
    declarations: [
        MainPage,
        HomePage,
        ContasPage,
        PedidoPage,
        SobrePage,
        ItemTiposPage,
        ItemTipoBebidaPage,
        ItemTipoLanchePage,
        ItemTipoPizzaPage,
        ItemAddQuantPage,
        ItemTipoPizzaTamanhoPage,
        PedidoPagamentoPage,
        ItemTipoPizzaBordaPage,
        MinhaContaPage,
        LoginPage,
        CadastrarContaPage,
        AvaliacaoAppPage,
        PedidoEnderecoPage,
        HistoricoPage,
        HistoricoDetalhePage,
        PopoverPizzaSaborAdicionado,
        ItemTipoPorcaoPage
    ],
    imports: [
        BrowserModule, HttpModule, FormsModule,
        IonicModule.forRoot(MainPage),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MainPage,
        HomePage,
        ContasPage,
        PedidoPage,
        SobrePage,
        ItemTiposPage,
        ItemTipoBebidaPage,
        ItemTipoLanchePage,
        ItemTipoPizzaPage,
        ItemTipoPizzaTamanhoPage,
        ItemAddQuantPage,
        PedidoPagamentoPage,
        ItemTipoPizzaBordaPage,
        MinhaContaPage,
        LoginPage,
        CadastrarContaPage,
        AvaliacaoAppPage,
        PedidoEnderecoPage,
        HistoricoPage,
        HistoricoDetalhePage,
        PopoverPizzaSaborAdicionado,
        ItemTipoPorcaoPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        PedidoViewData, ApiService, ItemVendaService,HorarioAtendimento,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
