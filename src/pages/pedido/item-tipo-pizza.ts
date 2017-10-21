import {AfterContentInit, Component, ViewChild} from "@angular/core";
import {
    AlertController,
    LoadingController,
    NavController,
    NavParams,
    PopoverController,
    ViewController
} from "ionic-angular";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {ItemVenda, ItemVendaPizza} from "../../services/item-venda";
import {IAction} from "../../services/iaction";
import {ItemVendaService} from "../../services/item-venda.service";
import {ApiService} from "../../services/api.service";
import {ItemTipoPizzaBordaPage} from "./item-tipo-pizza-borda";
import {UIGerenciadorPizza} from "./ui-gerenciador-pizza";
import {exibirMensagemErro, IMG_BACKGROUND_URL, logDebug} from "../../shared";
import {PageChildBase} from "../../infra/page-child-base";
import {ItemTipoPizzaTamanhoPage} from "./item-tipo-pizza-tamanho";

@Component({
    selector: 'page-item-tipo-pizza',
    templateUrl: 'item-tipo-pizza.html'
})
export class ItemTipoPizzaPage extends PageChildBase {


    @ViewChild('canvasPizza')
    private canvas: any;

    private readonly MAX_SABORES_PIZZA: number = 6;


    private _divisoes: number;

    private tamanhoPizza: ItemVenda;

    private pizzasSalgadas: Array<ItemVenda> = new Array<ItemVenda>();
    private pizzasDoces: Array<ItemVenda> = new Array<ItemVenda>();

    private isTipoPizzaSalgada: boolean = true;
    private gerenciadorPizza: UIGerenciadorPizza;

    private saboresSelecionados: any;
    private saboresPosicoesLivres: Array<number> = [];
    private pizzaSelecaoAnterior: ItemVendaPizza;

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                public navParams: NavParams,
                private pedidoService: PedidoViewData,
                private apiService: ApiService,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController,
                private popover: PopoverController,
                private vendaService: ItemVendaService) {

        super(navCtrl, viewCtrl);
        this.pizzaSelecaoAnterior = <ItemVendaPizza> navParams.get('item');
        this.tamanhoPizza = <ItemVenda> navParams.get('tamanhoPizza');
        this.saboresSelecionados = {};
        this.carregarLista();

    }

    private getPizzas() {

        if (!!this.isTipoPizzaSalgada)  return this.pizzasSalgadas;

        return this.pizzasDoces;

    }

    protected childAfterViewInit() {

        if (!this.tamanhoPizza) {
            this.navCtrl.push(ItemTipoPizzaTamanhoPage);
        }

        let canvas = this.canvas.nativeElement;

        this.gerenciadorPizza = new UIGerenciadorPizza(canvas, "#9f6c4d"
            , IMG_BACKGROUND_URL, false);

        if (!this.pizzaSelecaoAnterior) {
            this.divisoes = 1;
        } else {
            let sabores = this.pizzaSelecaoAnterior.sabores;
            this.divisoes = sabores.length + 1;
            sabores.forEach(a => this.addSabor(a));
        }

    }

    private onClickPizza(e) {

        logDebug('canvas - left, top', [this.canvas.offsetLeft, this.canvas.offsetTop]);

        let coord = {
            clientX: e.clientX,
            clientY: e.clientY,
            layerX: e.layerX,
            layerY: e.layerY,
            movementX: e.movementX,
            movementY: e.movementY,
            offsetX: e.offsetX,
            offsetY: e.offsetY,
            pageX: e.pageX,
            pageY: e.pageY,
            screenX: e.screenX,
            screenY: e.screenY,
            x: e.x,
            y: e.y,
        };

        logDebug('mouse click', coord);

        let x = e.layerX;
        let y = e.layerY;
        let pedaco: number = this.gerenciadorPizza.getImagemNaPosicao(x, y);

        if (pedaco >= 1) {
            this.removerSabor(pedaco);
        }
    }

    private get divisoes(): number {
        return this._divisoes;
    }

    private set divisoes(valor: number) {

        this.gerenciadorPizza.setNumPartes(valor);

        if (valor > 1) {
            this.gerenciadorPizza.desenharPosicoes();
        } else {
            this.gerenciadorPizza.limparArea();
            this.gerenciadorPizza.desenharPosicoes(true);
        }

        this.saboresSelecionados = {};
        this.gerarPosicoesLivresSabores(valor);
        this._divisoes = valor;

    }

    private gerarPosicoesLivresSabores(quantidade: number) {
        this.saboresPosicoesLivres = [];

        for (let i = 1; i <= quantidade; i++) {
            this.saboresPosicoesLivres.splice(i - 1, 0, i);
        }
    }

    private opcaoTipoPizza(tipoPizza: "doce" | "salgada") {

        this.isTipoPizzaSalgada = tipoPizza == "salgada";

    }

    carregarLista() {

        let loading = this.loadingCtrl.create({
            content: 'Consultando sabores disponíveis...'
        });

        this.pizzasSalgadas = new Array<ItemVenda>();
        this.pizzasDoces = new Array<ItemVenda>();

        let action = <IAction> {

            onCompleted: (itens) => {

                loading.dismiss();

                this.pizzasDoces = itens.filter(a => a.tipoPizza == "doce");
                this.pizzasSalgadas = itens.filter(a => a.tipoPizza == "salgada");
                this.vendaService.pizzas = itens;

            },
            onError: (erro) => {

                loading.dismiss();
                exibirMensagemErro('Não foi possível carregar a lista de pizzas.', erro, this.alertCtrl);
                this.navCtrl.pop();

            },
            onFinally: () => {
            }
        };


        if (!this.vendaService.pizzas || this.vendaService.pizzas.length == 0) {

            loading.present();

            // executa a transação
            let observablePesq = this.apiService.listarPizzas();
            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);

        } else {

            this.pizzasDoces = this.vendaService.pizzas.filter(a => a.tipoPizza == "doce");
            this.pizzasSalgadas = this.vendaService.pizzas.filter(a => a.tipoPizza == "salgada");

        }

        // impede que o comando submit dê um refresh na tela
        return false;

    }

    addSabor(item: ItemVenda, event?) {

        let posicao: number;

        if (this.saboresPosicoesLivres.length == 0) {
            posicao = this.divisoes;
        } else {
            posicao = this.saboresPosicoesLivres[0];
            this.saboresPosicoesLivres.splice(0, 1);
        }

        this.saboresSelecionados[posicao] = item;

        this.gerenciadorPizza.desenharImagem(item.imagem, posicao);

        if (!!event) {
            let pop = this.popover.create(PopoverPizzaSaborAdicionado);

            pop.present({ev: event});
        }


    }


    removerSabor(numParte: number) {

        if (!this.saboresSelecionados[numParte]) {
            return;
        }

        this.gerenciadorPizza.removerImagem(numParte);

        delete this.saboresSelecionados[numParte];

        this.saboresPosicoesLivres.splice(numParte - 1, 0, numParte);

    }

    isPizzaCompleta(): boolean {
        return this.saboresPosicoesLivres.length == 0 && this.divisoes > 0;
    }

    irParaBorda() {

        let pizza: ItemVendaPizza = new ItemVendaPizza();

        try
        {
            pizza.imagem = this.canvas.nativeElement.toDataURL("image/png");
        } catch (e)
        {
            console.error(e);
            exibirMensagemErro('Não foi possível codificar a imagem da pizza para exibí-la em outra página.', e, this.alertCtrl);
        }

        pizza.tamanho = this.tamanhoPizza;

        for (let key in this.saboresSelecionados) {
            pizza.saboresAdd(this.saboresSelecionados[key]);
        }

        pizza.processarNovaPizza();

        this.navCtrl.push(ItemTipoPizzaBordaPage, {
            item: pizza
        });

    }

}

@Component({
    template: `<span (click)="close()">sabor adicionado</span>`
})
export class PopoverPizzaSaborAdicionado implements AfterContentInit {

    constructor(public viewCtrl: ViewController) {
    }

    close() {
        this.viewCtrl.dismiss();
    }

    ngAfterContentInit() {
        setTimeout(() => this.close(), 500);
    }
}
