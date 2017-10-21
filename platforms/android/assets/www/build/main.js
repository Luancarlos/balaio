webpackJsonp([0],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTipoPizzaTamanhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_tipo_pizza__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_venda_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__infra_page_child_base__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ItemTipoPizzaTamanhoPage = (function (_super) {
    __extends(ItemTipoPizzaTamanhoPage, _super);
    function ItemTipoPizzaTamanhoPage(navCtrl, viewCtrl, apiService, loadingCtrl, alertCtrl, vendaService) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.apiService = apiService;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.vendaService = vendaService;
        _this.carregarLista();
        return _this;
    }
    ItemTipoPizzaTamanhoPage.prototype.carregarLista = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando tamanhos de pizzas disponíveis...'
        });
        this.dataSourceTable = new Array();
        var action = {
            onCompleted: function (itens) {
                loading.dismiss();
                _this.dataSourceTable = itens;
                _this.vendaService.tamamhosPizza = itens;
            },
            onError: function (erro) {
                loading.dismiss();
                console.log(erro);
                Object(__WEBPACK_IMPORTED_MODULE_6__shared__["f" /* exibirMensagemErro */])('Não foi possível carregar a lista de tamanhos de pizza.', erro, _this.alertCtrl);
                _this.navCtrl.pop();
            },
            onFinally: function () {
            }
        };
        if (!this.vendaService.tamamhosPizza || this.vendaService.tamamhosPizza.length == 0) {
            loading.present();
            // executa a transação
            var observablePesq = this.apiService.listarTamanhosPizza();
            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        }
        else {
            this.dataSourceTable = this.vendaService.tamamhosPizza;
        }
        // impede que o comando submit dê um refresh na tela
        return false;
    };
    ItemTipoPizzaTamanhoPage.prototype.selecionarTamanho = function (tamanho) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_tipo_pizza__["a" /* ItemTipoPizzaPage */], {
            tamanhoPizza: tamanho
        });
    };
    return ItemTipoPizzaTamanhoPage;
}(__WEBPACK_IMPORTED_MODULE_5__infra_page_child_base__["a" /* PageChildBase */]));
ItemTipoPizzaTamanhoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-tipo-pizza-tamanho',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-pizza-tamanho.html"*/'<ion-header>\n    <ion-navbar color="vermelho">\n        <ion-title>PIZZAS</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="divisao">SELECIONE UM TAMANHO</div>\n    <ul class="lista" style="margin-top: 20px;">\n        <li *ngFor="let b of dataSourceTable" style="text-align: inherit;" (click)="selecionarTamanho(b)">\n            <a >\n                <div style="margin-left: auto;\n                        margin-right: auto;\n                        width: -moz-fit-content;\n                        width: -webkit-fit-content;\n                        width: fit-content;\n                        min-width: 150px;\n">\n                    <div>\n                        <span>{{b.nome}}</span>\n                        <span class="bordas_preco" style="float: right; margin-left: 20px;margin-top: 6px;">R$ {{b.valor}}</span>\n                    </div>\n                    <div>\n                        <span style="font-size: 15px;color: #a8a8a8;">{{b.ingredientes}}</span>\n                    </div>\n                </div>\n            </a>\n        </li>\n    </ul>\n\n</ion-content>\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-pizza-tamanho.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__services_item_venda_service__["a" /* ItemVendaService */]])
], ItemTipoPizzaTamanhoPage);

//# sourceMappingURL=item-tipo-pizza-tamanho.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTipoPizzaPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopoverPizzaSaborAdicionado; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_venda__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_venda_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_tipo_pizza_borda__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_gerenciador_pizza__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__infra_page_child_base__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__item_tipo_pizza_tamanho__ = __webpack_require__(141);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ItemTipoPizzaPage = (function (_super) {
    __extends(ItemTipoPizzaPage, _super);
    function ItemTipoPizzaPage(navCtrl, viewCtrl, navParams, pedidoService, apiService, loadingCtrl, alertCtrl, popover, vendaService) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.navParams = navParams;
        _this.pedidoService = pedidoService;
        _this.apiService = apiService;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.popover = popover;
        _this.vendaService = vendaService;
        _this.MAX_SABORES_PIZZA = 6;
        _this.pizzasSalgadas = new Array();
        _this.pizzasDoces = new Array();
        _this.isTipoPizzaSalgada = true;
        _this.saboresPosicoesLivres = [];
        _this.pizzaSelecaoAnterior = navParams.get('item');
        _this.tamanhoPizza = navParams.get('tamanhoPizza');
        _this.saboresSelecionados = {};
        _this.carregarLista();
        return _this;
    }
    ItemTipoPizzaPage.prototype.getPizzas = function () {
        if (!!this.isTipoPizzaSalgada)
            return this.pizzasSalgadas;
        return this.pizzasDoces;
    };
    ItemTipoPizzaPage.prototype.childAfterViewInit = function () {
        var _this = this;
        if (!this.tamanhoPizza) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__item_tipo_pizza_tamanho__["a" /* ItemTipoPizzaTamanhoPage */]);
        }
        var canvas = this.canvas.nativeElement;
        this.gerenciadorPizza = new __WEBPACK_IMPORTED_MODULE_7__ui_gerenciador_pizza__["a" /* UIGerenciadorPizza */](canvas, "#9f6c4d", __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* IMG_BACKGROUND_URL */], false);
        if (!this.pizzaSelecaoAnterior) {
            this.divisoes = 1;
        }
        else {
            var sabores = this.pizzaSelecaoAnterior.sabores;
            this.divisoes = sabores.length + 1;
            sabores.forEach(function (a) { return _this.addSabor(a); });
        }
    };
    ItemTipoPizzaPage.prototype.onClickPizza = function (e) {
        Object(__WEBPACK_IMPORTED_MODULE_8__shared__["g" /* logDebug */])('canvas - left, top', [this.canvas.offsetLeft, this.canvas.offsetTop]);
        var coord = {
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
        Object(__WEBPACK_IMPORTED_MODULE_8__shared__["g" /* logDebug */])('mouse click', coord);
        var x = e.layerX;
        var y = e.layerY;
        var pedaco = this.gerenciadorPizza.getImagemNaPosicao(x, y);
        if (pedaco >= 1) {
            this.removerSabor(pedaco);
        }
    };
    Object.defineProperty(ItemTipoPizzaPage.prototype, "divisoes", {
        get: function () {
            return this._divisoes;
        },
        set: function (valor) {
            this.gerenciadorPizza.setNumPartes(valor);
            if (valor > 1) {
                this.gerenciadorPizza.desenharPosicoes();
            }
            else {
                this.gerenciadorPizza.limparArea();
                this.gerenciadorPizza.desenharPosicoes(true);
            }
            this.saboresSelecionados = {};
            this.gerarPosicoesLivresSabores(valor);
            this._divisoes = valor;
        },
        enumerable: true,
        configurable: true
    });
    ItemTipoPizzaPage.prototype.gerarPosicoesLivresSabores = function (quantidade) {
        this.saboresPosicoesLivres = [];
        for (var i = 1; i <= quantidade; i++) {
            this.saboresPosicoesLivres.splice(i - 1, 0, i);
        }
    };
    ItemTipoPizzaPage.prototype.opcaoTipoPizza = function (tipoPizza) {
        this.isTipoPizzaSalgada = tipoPizza == "salgada";
    };
    ItemTipoPizzaPage.prototype.carregarLista = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando sabores disponíveis...'
        });
        this.pizzasSalgadas = new Array();
        this.pizzasDoces = new Array();
        var action = {
            onCompleted: function (itens) {
                loading.dismiss();
                _this.pizzasDoces = itens.filter(function (a) { return a.tipoPizza == "doce"; });
                _this.pizzasSalgadas = itens.filter(function (a) { return a.tipoPizza == "salgada"; });
                _this.vendaService.pizzas = itens;
            },
            onError: function (erro) {
                loading.dismiss();
                Object(__WEBPACK_IMPORTED_MODULE_8__shared__["f" /* exibirMensagemErro */])('Não foi possível carregar a lista de pizzas.', erro, _this.alertCtrl);
                _this.navCtrl.pop();
            },
            onFinally: function () {
            }
        };
        if (!this.vendaService.pizzas || this.vendaService.pizzas.length == 0) {
            loading.present();
            // executa a transação
            var observablePesq = this.apiService.listarPizzas();
            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        }
        else {
            this.pizzasDoces = this.vendaService.pizzas.filter(function (a) { return a.tipoPizza == "doce"; });
            this.pizzasSalgadas = this.vendaService.pizzas.filter(function (a) { return a.tipoPizza == "salgada"; });
        }
        // impede que o comando submit dê um refresh na tela
        return false;
    };
    ItemTipoPizzaPage.prototype.addSabor = function (item, event) {
        var posicao;
        if (this.saboresPosicoesLivres.length == 0) {
            posicao = this.divisoes;
        }
        else {
            posicao = this.saboresPosicoesLivres[0];
            this.saboresPosicoesLivres.splice(0, 1);
        }
        this.saboresSelecionados[posicao] = item;
        this.gerenciadorPizza.desenharImagem(item.imagem, posicao);
        if (!!event) {
            var pop = this.popover.create(PopoverPizzaSaborAdicionado);
            pop.present({ ev: event });
        }
    };
    ItemTipoPizzaPage.prototype.removerSabor = function (numParte) {
        if (!this.saboresSelecionados[numParte]) {
            return;
        }
        this.gerenciadorPizza.removerImagem(numParte);
        delete this.saboresSelecionados[numParte];
        this.saboresPosicoesLivres.splice(numParte - 1, 0, numParte);
    };
    ItemTipoPizzaPage.prototype.isPizzaCompleta = function () {
        return this.saboresPosicoesLivres.length == 0 && this.divisoes > 0;
    };
    ItemTipoPizzaPage.prototype.irParaBorda = function () {
        var pizza = new __WEBPACK_IMPORTED_MODULE_3__services_item_venda__["b" /* ItemVendaPizza */]();
        try {
            pizza.imagem = this.canvas.nativeElement.toDataURL("image/png");
        }
        catch (e) {
            console.error(e);
            Object(__WEBPACK_IMPORTED_MODULE_8__shared__["f" /* exibirMensagemErro */])('Não foi possível codificar a imagem da pizza para exibí-la em outra página.', e, this.alertCtrl);
        }
        pizza.tamanho = this.tamanhoPizza;
        for (var key in this.saboresSelecionados) {
            pizza.saboresAdd(this.saboresSelecionados[key]);
        }
        pizza.processarNovaPizza();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__item_tipo_pizza_borda__["a" /* ItemTipoPizzaBordaPage */], {
            item: pizza
        });
    };
    return ItemTipoPizzaPage;
}(__WEBPACK_IMPORTED_MODULE_9__infra_page_child_base__["a" /* PageChildBase */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('canvasPizza'),
    __metadata("design:type", Object)
], ItemTipoPizzaPage.prototype, "canvas", void 0);
ItemTipoPizzaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-tipo-pizza',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-pizza.html"*/'<ion-header>\n    <ion-navbar color="vermelho">\n        <ion-title>MONTAR PIZZA</ion-title>\n    </ion-navbar>\n</ion-header>\n<br>\n<ion-content>\n\n    <div class="result_pizza">\n\n        <canvas (click)="onClickPizza($event)"\n                style="width: 60%; margin-left: auto; margin-right: auto; display: block; vertical-align: middle"\n                #canvasPizza>\n\n        </canvas>\n\n        <div style="text-align: center; margin-top: 5px; color: #a8a8a8;">\n            <span>Para excluir um sabor, toque nele.</span>\n        </div>\n\n    </div>\n\n    <!-- tamanho quantos sabores -->\n    <div class="divisoes">\n        <ion-range min="1" [max]="tamanhoPizza.limiteSabores" step="1" snaps="true" color="secondary"\n                   [(ngModel)]="divisoes"></ion-range>\n    </div>\n\n    <div class="tipo_pizza">\n        <div class="row">\n            <div class="col col-md-6" [ngClass]="{\'ativado\': isTipoPizzaSalgada}" (click)="opcaoTipoPizza(\'salgada\')">\n                <p class="ativado">SALGADAS</p>\n            </div>\n            <div class="col col-md-6" id="doces" [ngClass]="{\'ativado\': !isTipoPizzaSalgada}"\n                 (click)="opcaoTipoPizza(\'doce\')">\n                <p>DOCES</p>\n            </div>\n        </div>\n    </div>\n\n    <div style="background: #dd3f14;padding-left: 10px; padding-right: 10px;">\n\n        <div style="text-align: center; margin-bottom: 5px;color: white;padding-top: 10px;">\n            <span>Para montar sua pizza, toque em um sabor.</span>\n        </div>\n\n        <div class="lista_pizzas">\n\n            <div *ngFor="let p of getPizzas()" style="display: inline-block; margin-right: 10px;">\n                <div class="item-pizza"\n                     (click)="addSabor(p, $event)"\n                     [ngStyle]="{\'background-image\': \'url(\' + p.imagem + \')\'}"\n                >\n                </div>\n                <div style="text-align: center">\n                    <span style="color: #fff;">{{p.nome}}</span>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</ion-content>\n\n<ion-footer>\n    <footer>\n        <a *ngIf="isPizzaCompleta(); else elseBlock" (click)="irParaBorda()">Proximo</a>\n        <ng-template #elseBlock><a disabled="disabled">Próximo</a></ng-template>\n    </footer>\n</ion-footer>\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-pizza.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_4__services_item_venda_service__["a" /* ItemVendaService */]])
], ItemTipoPizzaPage);

var PopoverPizzaSaborAdicionado = (function () {
    function PopoverPizzaSaborAdicionado(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    PopoverPizzaSaborAdicionado.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPizzaSaborAdicionado.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () { return _this.close(); }, 500);
    };
    return PopoverPizzaSaborAdicionado;
}());
PopoverPizzaSaborAdicionado = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "<span (click)=\"close()\">sabor adicionado</span>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], PopoverPizzaSaborAdicionado);

//# sourceMappingURL=item-tipo-pizza.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoPagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conta_contas__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conta_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__infra_page_child_base__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PedidoPagamentoPage = PedidoPagamentoPage_1 = (function (_super) {
    __extends(PedidoPagamentoPage, _super);
    function PedidoPagamentoPage(navCtrl, viewCtrl, pedido, apiService, loadingCtrl, alertCtrl) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.pedido = pedido;
        _this.apiService = apiService;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        return _this;
    }
    PedidoPagamentoPage.prototype.pedidoOpcaoPagamento = function (tipoEntrega) {
        this.pedido.isTipoPagamentoDinheiro = (tipoEntrega == "dinheiro");
    };
    PedidoPagamentoPage.prototype.incluirCupomDesconto = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Incluir cupom de desconto',
            inputs: [
                {
                    name: 'cupom',
                    placeholder: 'cupom',
                    value: this.cupomDesconto
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.validarCupomDesconto(data.cupom);
                    }
                }
            ]
        });
        alert.present();
    };
    PedidoPagamentoPage.prototype.validarCupomDesconto = function (cupom) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Validando cupom...'
        });
        var action = {
            onCompleted: function (itens) {
                loading.dismiss();
                _this.cupomDesconto = cupom;
                _this.pedido.adicionarCupomDesconto(itens[0]);
            },
            onError: function (erro) {
                loading.dismiss();
                console.log(erro);
                Object(__WEBPACK_IMPORTED_MODULE_7__shared__["f" /* exibirMensagemErro */])('Não foi possível usar o cupom.', erro, _this.alertCtrl);
            },
            onFinally: function () {
            }
        };
        loading.present();
        // executa a transação
        var observablePesq = this.apiService.consultarCupom(cupom, this.pedido.cliente.id);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    };
    PedidoPagamentoPage.prototype.textoBotaoFinalizar = function () {
        var tipoAcao = this.tipoAcaoFinalizar();
        switch (tipoAcao) {
            case "login":
                return "Efetuar Login";
            default:
                return "Finalizar";
        }
    };
    PedidoPagamentoPage.prototype.tipoAcaoFinalizar = function () {
        if (!this.pedido.cliente) {
            return "login";
        }
        return "finalizarPedido";
    };
    PedidoPagamentoPage.prototype.finalizarPedido = function () {
        var _this = this;
        if (!!this.isProcessando)
            return;
        var tipoAcao = this.tipoAcaoFinalizar();
        if (tipoAcao == "login") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__conta_contas__["a" /* ContasPage */], Object(__WEBPACK_IMPORTED_MODULE_7__shared__["e" /* createObjectKey */])(__WEBPACK_IMPORTED_MODULE_6__conta_login__["a" /* KEY_TELA_ANTERIOR_LOGIN */], PedidoPagamentoPage_1));
            return;
        }
        this.isProcessando = true;
        this.pedido.finalizarPedido(this.navCtrl, this.alertCtrl, __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], this.apiService, function () { return _this.isProcessando = false; });
    };
    return PedidoPagamentoPage;
}(__WEBPACK_IMPORTED_MODULE_8__infra_page_child_base__["a" /* PageChildBase */]));
PedidoPagamentoPage = PedidoPagamentoPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pedido-pagamento',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/pedido-pagamento.html"*/'<ion-header>\n\n    <ion-navbar color="vermelho">\n\n        <ion-title>PAGAMENTO</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n    <div class="row" id="form_paga">\n\n        <div class="col col-md-6" [ngClass]="{\'ativado\': pedido.isTipoPagamentoDinheiro}"\n\n             (click)="pedidoOpcaoPagamento(\'dinheiro\')">\n\n            <p>DINHEIRO (ENTREGA)</p>\n\n        </div>\n\n        <div class="col col-md-6" [ngClass]="{\'ativado\': !pedido.isTipoPagamentoDinheiro}"\n\n             (click)="pedidoOpcaoPagamento(\'cartao\')">\n\n            <p>CARTÃO CREDITO/DÉBITO (ENTREGA)</p>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="campo_verde">\n\n        <button class="flat" (click)="incluirCupomDesconto()"><i class="fa fa-plus"></i></button>\n\n        <p>INSERIR CUPON DE DESCONTO</p>\n\n    </div>\n\n\n\n    <div class="row" id="info_precos">\n\n        <div class="col col-md-6" id="info_titulos">\n\n            <p>PEDIDO</p>\n\n            <p>TAXA DE ENTREGA</p>\n\n            <p *ngIf="pedido.desconto > 0">DESCONTO</p>\n\n            <p><strong>TOTAL</strong></p>\n\n        </div>\n\n        <div class="col col-md-6" id="info_result">\n\n            <p>R$ {{pedido.valorTotal}}</p>\n\n            <p>R$ {{pedido.taxaEntrega}}</p>\n\n            <p *ngIf="pedido.desconto > 0">R$ {{pedido.desconto}}</p>\n\n            <p><strong>R$ {{pedido.valorTotalLiquido}}</strong></p>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <footer>\n\n        <a *ngIf="pedido.valorTotal > 0; else elseBlock" (click)="finalizarPedido()">{{textoBotaoFinalizar()}}</a>\n\n        <ng-template #elseBlock><a disabled="disabled">{{textoBotaoFinalizar()}}</a></ng-template>\n\n    </footer>\n\n</ion-footer>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/pedido-pagamento.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PedidoPagamentoPage);

var PedidoPagamentoPage_1;
//# sourceMappingURL=pedido-pagamento.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarContaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dados__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__minha_conta__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_item_venda_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__infra_page_child_base__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CadastrarContaPage = (function (_super) {
    __extends(CadastrarContaPage, _super);
    function CadastrarContaPage(navCtrl, viewCtrl, navParams, apiService, pedido, loadingCtrl, vendaService, alertCtrl) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.navParams = navParams;
        _this.apiService = apiService;
        _this.pedido = pedido;
        _this.loadingCtrl = loadingCtrl;
        _this.vendaService = vendaService;
        _this.alertCtrl = alertCtrl;
        _this.telaAnterior = _this.navParams.get(__WEBPACK_IMPORTED_MODULE_5__login__["a" /* KEY_TELA_ANTERIOR_LOGIN */]);
        _this.cliente = new __WEBPACK_IMPORTED_MODULE_2__services_dados__["a" /* Cliente */]();
        _this.endereco = new __WEBPACK_IMPORTED_MODULE_2__services_dados__["b" /* Endereco */]();
        var regiao = new __WEBPACK_IMPORTED_MODULE_2__services_dados__["f" /* Regiao */]();
        regiao.cidade = "Outra Cidade";
        regiao.bairro = "Outro Bairro";
        regiao.regiaoId = -999;
        _this.regiaoDefault = regiao;
        if (!!_this.pedido.cliente) {
            var clieo = _this.pedido.cliente;
            var clied = _this.cliente;
            // copia os dados do cliente para edição
            clied.id = clieo.id;
            clied.nome = clieo.nome;
            clied.telefone = clieo.telefone;
            clied.login = clieo.login;
            if (!!clieo.endereco) {
                var end = clieo.endereco;
                _this.endereco.logradouro = end.logradouro;
                _this.endereco.cep = end.cep;
                _this.endereco.numero = end.numero;
                _this.endereco.complemento = end.complemento;
                _this.endereco.regiao = end.regiao;
            }
        }
        return _this;
    }
    CadastrarContaPage.prototype.childAfterViewInit = function () {
        var _this = this;
        this.carregarRegioes(function () {
            if (!_this.endereco.regiao)
                return;
            var regiaoEnde = _this.endereco.regiao;
            for (var _i = 0, _a = _this.cidades; _i < _a.length; _i++) {
                var regiao = _a[_i];
                if (regiao.cidade == regiaoEnde.cidade) {
                    _this.cidadeSelecionada = regiao;
                    break;
                }
                else if (regiao.regiaoId == -999 && regiaoEnde.regiaoId == -999) {
                    _this.cidadeSelecionada = regiao;
                    _this.nomeCidade = regiaoEnde.cidade;
                    break;
                }
            }
            for (var _b = 0, _c = _this.bairros; _b < _c.length; _b++) {
                var regiao = _c[_b];
                if (regiao.bairro == regiaoEnde.bairro) {
                    _this.bairroSelecionado = regiao;
                    break;
                }
                else if (regiao.regiaoId == -999 && regiaoEnde.regiaoId == -999) {
                    _this.bairroSelecionado = regiao;
                    _this.nomeBairro = regiaoEnde.bairro;
                    break;
                }
            }
        });
    };
    Object.defineProperty(CadastrarContaPage.prototype, "cidadeSelecionada", {
        get: function () {
            return this._cidadeSelecionada;
        },
        set: function (regiao) {
            this._cidadeSelecionada = regiao;
            this.bairroSelecionado = null;
            this.bairros = new Array();
            this.bairros = this.regioes.filter(function (a) { return a.cidade == regiao.cidade; });
            this.bairros.push(this.regiaoDefault);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadastrarContaPage.prototype, "bairroSelecionado", {
        get: function () {
            return this._bairroSelecionado;
        },
        set: function (regiao) {
            this._bairroSelecionado = regiao;
        },
        enumerable: true,
        configurable: true
    });
    CadastrarContaPage.prototype.carregarRegioes = function (callBackAfterLoad) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando regiões disponíveis...'
        });
        this.regioes = new Array();
        this.bairros = new Array();
        this.cidades = new Array();
        var action = {
            onCompleted: function (itens) {
                loading.dismiss();
                _this.regioes = itens;
                _this.cidades = [];
                var keys = {};
                // inclui somente cidades diferentes (distinct)
                for (var _i = 0, itens_1 = itens; _i < itens_1.length; _i++) {
                    var regiao = itens_1[_i];
                    if (!keys[regiao.cidade]) {
                        _this.cidades.push(regiao);
                        keys[regiao.cidade] = true;
                    }
                }
                keys = null;
                _this.vendaService.regioes = itens;
                _this.cidades.push(_this.regiaoDefault);
                _this.vendaService.cidades = _this.cidades;
                if (!!callBackAfterLoad)
                    callBackAfterLoad();
            },
            onError: function (erro) {
                loading.dismiss();
                Object(__WEBPACK_IMPORTED_MODULE_7__shared__["f" /* exibirMensagemErro */])('Não foi possível consultar a lista de regiões.', erro, _this.alertCtrl);
                return false;
            },
            onFinally: function () {
            }
        };
        if (!this.vendaService.cidades || this.vendaService.cidades.length == 0) {
            loading.present();
            // executa a transação
            var observablePesq = this.apiService.listarRegioes();
            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        }
        else {
            this.regioes = this.vendaService.regioes;
            this.cidades = this.vendaService.cidades;
            if (!!callBackAfterLoad)
                callBackAfterLoad();
        }
        // impede que o comando submit dê um refresh na tela
        return false;
    };
    CadastrarContaPage.prototype.validarPreenchimento = function () {
        var clie = this.cliente;
        if (!clie.login || !clie.nome || !clie.telefone || (!clie.senha && !clie.id)) {
            var alert_1 = this.alertCtrl.create({
                title: 'Atenção!',
                subTitle: "Os campos Nome, Telefone, E-mail e Senha são obrigatórios.",
                buttons: [
                    {
                        text: 'Ok',
                    }
                ]
            });
            alert_1.present();
            return false;
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_7__shared__["b" /* IsEmail */])(clie.login) == false) {
            var alert_2 = this.alertCtrl.create({
                title: 'Atenção!',
                subTitle: "Por favor, informe um e-mail válido.",
                buttons: [
                    {
                        text: 'Ok',
                    }
                ]
            });
            alert_2.present();
            return false;
        }
        return true;
    };
    CadastrarContaPage.prototype.salvar = function () {
        var _this = this;
        if (!this.validarPreenchimento())
            return;
        var loading = this.loadingCtrl.create({
            content: 'Salvando dados cadastrais...'
        });
        var action = {
            onCompleted: function (dados) {
                loading.dismiss();
                var isNovo = true;
                if (!!_this.cliente.id) {
                    isNovo = false;
                }
                else if (dados.length == 0) {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Atenção!',
                        subTitle: "Seu cadastro não foi salvo. Por favor, tente novamente.",
                        buttons: [{ text: 'Ok', }]
                    });
                    alert_3.present();
                    return;
                }
                else {
                    _this.cliente.id = dados[0].id;
                }
                _this.pedido.cliente = _this.cliente;
                if (isNovo == true) {
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Parabéns!',
                        subTitle: "Cadastro realizado com sucesso.",
                        buttons: [{
                                text: 'Ok',
                                handler: function (data) {
                                    _this.voltarParaTelaAnterior();
                                }
                            }]
                    });
                    alert_4.present();
                }
                else {
                    var alert_5 = _this.alertCtrl.create({
                        title: 'Parabéns!',
                        subTitle: "Alterações salvas com sucesso.",
                        buttons: [{
                                text: 'Ok',
                                handler: function (data) {
                                    _this.voltarParaTelaAnterior();
                                }
                            }]
                    });
                    alert_5.present();
                }
            },
            onError: function (erro) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: "Não foi possível realizar a operação. " + erro.motivo,
                    buttons: [
                        {
                            text: 'Ok',
                        }
                    ]
                });
                alert.present();
            },
            onFinally: function () {
            }
        };
        var regiao = new __WEBPACK_IMPORTED_MODULE_2__services_dados__["f" /* Regiao */]();
        if (!this.bairroSelecionado) {
            regiao = null;
        }
        else {
            regiao.regiaoId = this.bairroSelecionado.regiaoId;
            regiao.cidade = this.bairroSelecionado.cidade;
            regiao.bairro = this.bairroSelecionado.bairro;
            if (this.cidadeSelecionada.regiaoId == -999) {
                regiao.cidade = this.nomeCidade;
            }
            if (this.bairroSelecionado.regiaoId == -999) {
                regiao.bairro = this.nomeBairro;
            }
        }
        this.cliente.endereco = this.endereco;
        this.cliente.endereco.regiao = regiao;
        loading.present();
        // executa a transação
        var observablePesq = this.apiService.salvarCliente(this.cliente);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    };
    CadastrarContaPage.prototype.voltarParaTelaAnterior = function () {
        if (!this.telaAnterior) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__minha_conta__["a" /* MinhaContaPage */]);
        }
        else {
            this.navCtrl.setRoot(this.telaAnterior);
        }
    };
    return CadastrarContaPage;
}(__WEBPACK_IMPORTED_MODULE_9__infra_page_child_base__["a" /* PageChildBase */]));
CadastrarContaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cadastrar-conta',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/conta/cadastrar-conta.html"*/'<ion-header>\n\n    <ion-navbar color="vermelho">\n\n        <ion-title>MINHA CONTA</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <form #form="ngForm" (ngSubmit)="salvar()">\n\n\n\n        <ion-list>\n\n            <div class="divisao">\n\n                Identificação\n\n            </div>\n\n            <ion-item>\n\n                <ion-label>Nome</ion-label>\n\n                <ion-input type="text" [(ngModel)]="cliente.nome" name="nome"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Telefone</ion-label>\n\n                <ion-input type="tel" [(ngModel)]="cliente.telefone" name="telefone"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>E-mail</ion-label>\n\n                <ion-input type="text" [(ngModel)]="cliente.login" name="login"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item *ngIf="!cliente.id">\n\n                <ion-label>Senha</ion-label>\n\n                <ion-input type="password" [(ngModel)]="cliente.senha" name="senha"></ion-input>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n        <ion-list>\n\n            <div class="divisao">\n\n                Região\n\n            </div>\n\n\n\n            <ion-item>\n\n                <ion-label left>Cidade *</ion-label>\n\n                <ion-select [(ngModel)]="cidadeSelecionada" name="cidadeSelecionada"\n\n                            interface="popover">\n\n                    <ion-option *ngFor="let item of cidades" [value]="item">\n\n                        {{ item.cidade }}\n\n                    </ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item *ngIf="cidadeSelecionada?.regiaoId == -999">\n\n                <ion-label>Nome da Cidade</ion-label>\n\n                <ion-input type="text" [(ngModel)]="nomeCidade" name="cidadeOutra"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n\n\n                <ion-label>Bairro *</ion-label>\n\n                <ion-select [(ngModel)]="bairroSelecionado" name="bairroSelecionado"\n\n                            [disabled]=" !bairros || bairros.length == 0"\n\n                            interface="popover"\n\n                >\n\n                    <ion-option *ngFor="let item of bairros" [value]="item">\n\n                        {{ item.bairro }}\n\n                    </ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item *ngIf="bairroSelecionado?.regiaoId == -999">\n\n                <ion-label>Nome do Bairro</ion-label>\n\n                <ion-input type="text" [(ngModel)]="nomeBairro" name="bairroOutro"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n        <ion-list>\n\n            <div class="divisao">\n\n                Endereço\n\n            </div>\n\n            <ion-item>\n\n                <ion-label>Cep</ion-label>\n\n                <ion-input type="text" [(ngModel)]="endereco.cep" name="cep"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Logradouro</ion-label>\n\n                <ion-input type="text" [(ngModel)]="endereco.logradouro" name="logradouro"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Número</ion-label>\n\n                <ion-input type="text" [(ngModel)]="endereco.numero" name="numero"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Complemento</ion-label>\n\n                <ion-input type="text" [(ngModel)]="endereco.complemento" name="complemento"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n    </form>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <footer>\n\n        <a (click)="form.ngSubmit.emit()">Cadastrar</a>\n\n    </footer>\n\n</ion-footer>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/conta/cadastrar-conta.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_3__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_8__services_item_venda_service__["a" /* ItemVendaService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CadastrarContaPage);

//# sourceMappingURL=cadastrar-conta.js.map

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoViewData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_venda_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Created by eu on 04/05/2017.
 */
var PedidoViewData = (function () {
    function PedidoViewData(vendaService) {
        this.vendaService = vendaService;
        this.hasItens = false;
        this.valorTotal = 0;
        this.isTipoPagamentoDinheiro = true;
        this.valorTotalLiquido = 0;
        this.desconto = 0;
        this._taxaEntrega = 0;
        this.cupomDescontoPercentual = 0;
        this.cupomDescontoValor = 0;
        this.itens = new Array();
        this.isReceberPedidoCasa = false;
        this.eventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](false);
    }
    Object.defineProperty(PedidoViewData.prototype, "cliente", {
        get: function () {
            return this._cliente;
        },
        set: function (cliente) {
            this._cliente = cliente;
            if (!!cliente) {
                window.localStorage.setItem('cliente', JSON.stringify(cliente));
            }
            else {
                window.localStorage.removeItem('cliente');
            }
            this.eventEmitter.emit(cliente);
        },
        enumerable: true,
        configurable: true
    });
    PedidoViewData.prototype.onClienteChange = function (subscriber) {
        this.eventEmitter.subscribe(subscriber);
    };
    Object.defineProperty(PedidoViewData.prototype, "taxaEntrega", {
        get: function () {
            return this._taxaEntrega;
        },
        set: function (v) {
            this._taxaEntrega = v;
            this.calcularPedido();
        },
        enumerable: true,
        configurable: true
    });
    PedidoViewData.prototype.find = function (item) {
        for (var index = 0; index < this.itens.length; index++) {
            var i = this.itens[index];
            if (i.tipo == item.tipo && i.itemVendaId == item.itemVendaId) {
                return [index, i];
            }
        }
        return null;
    };
    PedidoViewData.prototype.addItem = function (item) {
        var itemPed = this.find(item);
        if (!!itemPed && itemPed[1].equals(item)) {
            itemPed[1].quantidade += item.quantidade;
        }
        else {
            this.itens.push(item);
        }
        this.calcularPedido();
    };
    PedidoViewData.prototype.removerItem = function (item) {
        var itemPed = this.find(item);
        if (!itemPed)
            return;
        this.itens.splice(itemPed[0], 1);
        this.calcularPedido();
    };
    PedidoViewData.prototype.adicionarCupomDesconto = function (cupom) {
        this.cupomDesconto = cupom.codigo;
        this.cupomDescontoPercentual = cupom.isPercentual ? cupom.desconto / 100 : 0;
        this.cupomDescontoValor = cupom.isPercentual ? 0 : cupom.desconto;
        this.calcularPedido();
    };
    PedidoViewData.prototype.calcularPedido = function () {
        this.hasItens = this.itens.length > 0;
        var total = 0;
        for (var _i = 0, _a = this.itens; _i < _a.length; _i++) {
            var i = _a[_i];
            total += i.quantidade * i.preco;
        }
        this.valorTotal = this.arredondarValor(total);
        this.desconto = (this.valorTotal * this.cupomDescontoPercentual) + this.cupomDescontoValor;
        this.desconto = this.arredondarValor(this.desconto);
        this.valorTotalLiquido = this.valorTotal - this.desconto + this.taxaEntrega;
    };
    PedidoViewData.prototype.arredondarValor = function (valor) {
        return Math.round(valor * 100) / 100;
    };
    PedidoViewData.prototype.novo = function () {
        this.itens = new Array();
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
    };
    PedidoViewData.prototype.finalizarPedido = function (navCtrl, alertCtrl, paginaAposSucesso, apiService, callBackOnFinally) {
        var _this = this;
        var pedido = {
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
        var itensPedido = [];
        for (var _i = 0, _a = this.itens; _i < _a.length; _i++) {
            var i = _a[_i];
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
        var action = {
            onCompleted: function (itens) {
                var alert = alertCtrl.create({
                    title: 'Pendido enviado com sucesso!',
                    subTitle: "\n                                    <div style=\"text-align: -webkit-auto;\">\n                                        <br>N\u00FAmero:<br><strong>" + itens[0].numeroPedido + "</strong>\n                                        <br><br>Anote-o para refer\u00EAncia.\n                                     ",
                    buttons: [
                        {
                            text: 'Ok, anotei!',
                            handler: function (data) {
                                _this.novo();
                                navCtrl.push(paginaAposSucesso);
                            }
                        }
                    ]
                });
                alert.present();
            },
            onError: function (erro) {
                console.log(erro);
                Object(__WEBPACK_IMPORTED_MODULE_1__shared__["f" /* exibirMensagemErro */])('Não foi possível enviar o pedido.', erro, alertCtrl);
            },
            onFinally: function () {
                if (!!callBackOnFinally)
                    callBackOnFinally();
            }
        };
        // executa a transação
        var observablePesq = apiService.enviarPedido(pedido);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    };
    return PedidoViewData;
}());
PedidoViewData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_item_venda_service__["a" /* ItemVendaService */]])
], PedidoViewData);

//# sourceMappingURL=pedido.viewdata.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IMG_BACKGROUND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return URL_BASE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return URL_BASE_IMG; });
/* harmony export (immutable) */ __webpack_exports__["g"] = logDebug;
/* harmony export (immutable) */ __webpack_exports__["e"] = createObjectKey;
/* harmony export (immutable) */ __webpack_exports__["b"] = IsEmail;
/* harmony export (immutable) */ __webpack_exports__["f"] = exibirMensagemErro;
/**
 * Created by eu on 07/05/2017.
 */
/**
 * Created by eu on 07/05/2017.
 */ var IMG_BACKGROUND_URL = 'assets/img/borda_pizza_transp.png';
var URL_BASE_API = "http://www.balaiodelenha.canionti.com.br/api/mobileapi.php/";
var URL_BASE_IMG = "http://www.balaiodelenha.canionti.com.br/";
var isDebug = true;
function logDebug(param, param2) {
    if (!isDebug)
        return;
    console.log(param, param2);
}
function createObjectKey(key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
}
function IsEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function exibirMensagemErro(mensagem, erro, alertCtrl) {
    var motivo = "";
    if (!!erro && (!!erro.motivo || !!erro.message)) {
        motivo = "<br><br>Motivo: " + (erro.motivo || erro.message);
    }
    var alert = alertCtrl.create({
        title: 'Atenção!',
        subTitle: mensagem + motivo,
        buttons: [
            {
                text: 'Ok',
            }
        ]
    });
    alert.present();
}
//# sourceMappingURL=shared.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_single__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_single___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_single__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_base__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by eu on 04/05/2017.
 */





var ApiService = (function (_super) {
    __extends(ApiService, _super);
    function ApiService(http) {
        var _this = _super.call(this, http, __WEBPACK_IMPORTED_MODULE_4__shared__["c" /* URL_BASE_API */]) || this;
        _this.URL_LST_BEBIDAS = "/bebidas";
        _this.URL_LST_LANCHES = "/lanches";
        _this.URL_LST_PIZZAS = "/pizzas";
        _this.URL_LST_BORDAS = "/bordas";
        _this.URL_LST_TAM_PIZZA = "/tamanhos";
        _this.URL_CLIE_LOGIN = "/login";
        _this.URL_CLIE_CAD = "/salvarCliente";
        _this.URL_CLIE_SENHA = "/alterarSenha";
        _this.URL_CLIE_SUGEST = "/inserirSugestaoCliente";
        _this.URL_CLIE_AVALIA = "/avaliacaoCliente";
        _this.URL_CLIE_LISTA_PED = "/cliente/pedidos/";
        _this.URL_END_REGIOES = "/regioes";
        _this.URL_PEDIDO = "/pedido";
        _this.URL_PEDIDO_ITENS = "/pedido/listar-itens/";
        _this.URL_CUPOM = "/cupons/";
        _this.URL_ATENDIMENTO = "/atendimento";
        return _this;
    }
    ApiService.prototype.listarBebidas = function () {
        var handlerMapItem = function (item) {
            return {
                id: item.Bebida_ID,
                nome: item.Nome,
                valor: parseFloat(item.Preco),
                imagem: __WEBPACK_IMPORTED_MODULE_4__shared__["d" /* URL_BASE_IMG */] + item.url_imagem,
                tipo: "bebida"
            };
        };
        var result = this.get(this.URL_LST_BEBIDAS, handlerMapItem);
        return result;
    };
    ApiService.prototype.listarRegioes = function () {
        var handlerMapItem = function (item) {
            return {
                regiaoId: item.Regiao_ID,
                cidade: item.Cidade,
                bairro: item.Bairro,
                frete: parseFloat(item.ValorFrete)
            };
        };
        var result = this.get(this.URL_END_REGIOES, handlerMapItem);
        return result;
    };
    ApiService.prototype.listarPedidoItens = function (numeroPedido) {
        var handlerMapItem = function (item) {
            return {
                nome: item.Nome,
                ingredientes: item.Ingredientes,
                quantidade: item.Quantidade,
                tipo: item.Tipo,
                total: parseFloat(item.ValorTotal)
            };
        };
        var result = this.get(this.URL_PEDIDO_ITENS + numeroPedido, handlerMapItem);
        return result;
    };
    ApiService.prototype.listarPedidosCliente = function (clienteId) {
        var handlerMapItem = function (item) {
            return {
                data: new Date(item.DataSolicitadao),
                numero: item.NumeroPedido,
                total: item.ValorTotalPedido,
                status: item.Status
            };
        };
        var result = this.get(this.URL_CLIE_LISTA_PED + clienteId, handlerMapItem);
        return result;
    };
    ApiService.prototype.listarPizzas = function () {
        var handlerMapItem = function (item) {
            return {
                id: item.Pizza_ID,
                nome: item.Nome,
                valor: parseFloat(item.PrecoBase),
                imagem: __WEBPACK_IMPORTED_MODULE_4__shared__["d" /* URL_BASE_IMG */] + item.url_imagem
                //, imagem: 'assets/img/pizzas.png' // isso deve ser usado qdo estiver testando no navegador
                ,
                tipoPizza: item.Tipo == 'D' ? 'doce' : 'salgada'
            };
        };
        var result = this.get(this.URL_LST_PIZZAS, handlerMapItem);
        return result;
    };
    ApiService.prototype.listarLanches = function () {
        var handlerMapItem = function (item) {
            return {
                id: item.Lanche_ID,
                nome: item.Nome,
                valor: parseFloat(item.Preco),
                imagem: __WEBPACK_IMPORTED_MODULE_4__shared__["d" /* URL_BASE_IMG */] + item.url_imagem,
                ingredientes: item.Ingredientes
            };
        };
        var result = this.get(this.URL_LST_LANCHES, handlerMapItem);
        return result;
    };
    ApiService.prototype.listarBordas = function () {
        var handlerMapItem = function (item) {
            return {
                id: item.Borda_ID,
                nome: item.Nome,
                valor: parseFloat(item.Preco)
            };
        };
        var result = this.get(this.URL_LST_BORDAS, handlerMapItem);
        return result;
    };
    ApiService.prototype.listarTamanhosPizza = function () {
        var handlerMapItem = function (item) {
            return {
                id: item.Tamanho_ID,
                nome: item.Nome,
                ingredientes: item.Descricao,
                valor: parseFloat(item.Valor),
                limiteSabores: parseInt(item.LimiteSabores)
            };
        };
        var result = this.get(this.URL_LST_TAM_PIZZA, handlerMapItem);
        return result;
    };
    ApiService.prototype.listarPorcoes = function () {
        var handlerMapItem = function (item) {
            return {
                id: item.Porcao_ID,
                nome: item.Nome,
                valor: parseFloat(item.Preco),
                imagem: __WEBPACK_IMPORTED_MODULE_4__shared__["d" /* URL_BASE_IMG */] + item.url_imagem,
                ingredientes: item.Ingredientes
            };
        };
        var result = this.get(this.URL_LST_LANCHES, handlerMapItem);
        return result;
    };
    ApiService.prototype.consultarCupom = function (cupom, clienteId) {
        var handlerMapItem = function (item) {
            return {
                cupomId: parseInt(item.cupomId),
                desconto: parseFloat(item.desconto),
                isPercentual: (item.isPercentual == "1"),
                codigo: cupom
            };
        };
        cupom = (cupom || '').trim().toUpperCase();
        clienteId = (clienteId || 0);
        var result = this.get(this.URL_CUPOM + cupom + '/' + clienteId, handlerMapItem);
        return result;
    };
    ApiService.prototype.consultarAtendimento = function () {
        var handlerMapItem = function (item) {
            return {
                isFechado: (item.IsFechado == '1'),
                horarioInicial: item.HorarioInicial && item.HorarioInicial.substring(0, 5),
                horarioFinal: item.HorarioFinal && item.HorarioFinal.substring(0, 5)
            };
        };
        var result = this.get(this.URL_ATENDIMENTO, handlerMapItem);
        return result;
    };
    ApiService.prototype.autenticarUsuario = function (login, senha) {
        var handlerMapItem = function (item) {
            return {
                id: item.Cliente_ID,
                nome: item.Nome,
                telefone: item.Telefone,
                login: item.Login,
                endereco: !item.Endereco ? {} : JSON.parse(item.Endereco),
                nivelSatisfacaoApp: item.NivelSatisfacaoApp
            };
        };
        var result = this.post(this.URL_CLIE_LOGIN, { login: login, senha: senha }, handlerMapItem);
        return result;
    };
    ApiService.prototype.salvarCliente = function (cliente) {
        var handlerMapItem = function (item) {
            return {
                id: item.Cliente_ID
            };
        };
        var result = this.post(this.URL_CLIE_CAD, cliente, handlerMapItem);
        return result;
    };
    ApiService.prototype.salvarSenha = function (clienteId, senhaNova, senhaAtual) {
        var handlerMapItem = function (item) {
            return {
                id: item.Cliente_ID
            };
        };
        var result = this.post(this.URL_CLIE_SENHA, {
            clienteId: clienteId,
            senhaNova: senhaNova,
            senhaAtual: senhaAtual
        }, handlerMapItem);
        return result;
    };
    ApiService.prototype.salvarSugestaoCliente = function (clienteId, sugestao) {
        var result = this.post(this.URL_CLIE_SUGEST, { clienteId: clienteId, sugestao: sugestao });
        return result;
    };
    ApiService.prototype.salvarAvaliacaoCliente = function (clienteId, nivelSatisfacao, sugestao) {
        var result = this.post(this.URL_CLIE_AVALIA, {
            clienteId: clienteId, nivelSatisfacao: nivelSatisfacao,
            sugestao: sugestao
        });
        return result;
    };
    ApiService.prototype.enviarPedido = function (pedido) {
        var handlerMapItem = function (item) {
            return {
                numeroPedido: item.Numero
            };
        };
        var result = this.post(this.URL_PEDIDO, pedido, handlerMapItem);
        return result;
    };
    return ApiService;
}(__WEBPACK_IMPORTED_MODULE_2__api_base__["a" /* ApiBase */]));
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], ApiService);

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageChildBase; });
/**
 * Created by eu on 28/05/2017.
 */
var PageChildBase = (function () {
    function PageChildBase(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    PageChildBase.prototype.ngAfterViewInit = function () {
        if (!!this.viewCtrl) {
            this.viewCtrl.setBackButtonText("");
        }
        this.childAfterViewInit();
    };
    PageChildBase.prototype.childAfterViewInit = function () {
    };
    return PageChildBase;
}());

//# sourceMappingURL=page-child-base.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SobrePage = (function () {
    function SobrePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SobrePage;
}());
SobrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sobre',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/sobre/sobre.html"*/'<ion-header>\n\n    <ion-toolbar color="vermelho">\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>SOBRE</ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n    <p class="centro" style="margin-top: 10px">Forneira climatizada de pizzas variadas, tradicionais especias e\n\n        doces</p>\n\n    <img src="assets/img/sobre/img1.jpg" class="img_sobre">\n\n    <img src="assets/img/sobre/img2.jpg" class="img_sobre">\n\n    <img src="assets/img/sobre/img3.jpg" class="img_sobre">\n\n    <img src="assets/img/sobre/img4.jpg" class="img_sobre">\n\n    <img src="assets/img/sobre/img5.jpg" class="img_sobre">\n\n    <img src="assets/img/sobre/img6.jpg" class="img_sobre">\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/sobre/sobre.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SobrePage);

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemVenda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ItemVendaPizza; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Created by eu on 04/05/2017.
 */
var ItemVenda = (function () {
    function ItemVenda() {
        this.quantidade = 0;
    }
    return ItemVenda;
}());

var ItemVendaPizza = (function (_super) {
    __extends(ItemVendaPizza, _super);
    function ItemVendaPizza() {
        var _this = _super.call(this) || this;
        _this._valor = 0;
        _this.sabores = new Array();
        _this.tipo = "pizza";
        return _this;
    }
    ItemVendaPizza.prototype.saboresAdd = function (pizza) {
        this.sabores.push(pizza);
    };
    ItemVendaPizza.prototype.processarNovaPizza = function () {
        this.quantidade = 1;
        var divisoes = {};
        for (var _i = 0, _a = this.sabores; _i < _a.length; _i++) {
            var pizza = _a[_i];
            // calcula a quantidade de pedaços por pizza
            if (!divisoes[pizza.nome]) {
                divisoes[pizza.nome] = 1;
            }
            else {
                divisoes[pizza.nome] += 1;
            }
        }
        var quantidadeSabores = Object.keys(divisoes).length;
        this.valor = this.tamanho.valor;
        this.nome = 'PIZZA ' + this.tamanho.nome.toUpperCase();
        if (Object.keys(divisoes).length == 1) {
            this.ingredientes = Object.keys(divisoes)[0];
        }
        else {
            var ingredientes = [];
            if ((quantidadeSabores % 2) != 0) {
                for (var key in divisoes) {
                    ingredientes.push(divisoes[key] + "/" + quantidadeSabores + "->" + key);
                }
            }
            else {
                var meia = quantidadeSabores / 2;
                var hasMeia = false;
                for (var key in divisoes) {
                    if (divisoes[key] == meia) {
                        ingredientes.push("1/2->" + key);
                    }
                    else {
                        ingredientes.push(divisoes[key] + "/" + quantidadeSabores + "->" + key);
                    }
                }
            }
            this.id = this.tamanho.id;
            this.ingredientes = ingredientes.join("; ");
        }
    };
    Object.defineProperty(ItemVendaPizza.prototype, "valor", {
        get: function () {
            var valor = this._valor;
            if (!!this.borda) {
                valor += this.borda.valor;
            }
            return valor;
        },
        set: function (v) {
            this._valor = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemVendaPizza.prototype, "ingredientes", {
        get: function () {
            if (!this.borda) {
                return this._ingredientes;
            }
            if (!this._ingredientes) {
                return 'BORDA de ' + this.borda.nome;
            }
            else {
                return this._ingredientes + '; BORDA de ' + this.borda.nome;
            }
        },
        set: function (v) {
            this._ingredientes = v;
        },
        enumerable: true,
        configurable: true
    });
    return ItemVendaPizza;
}(ItemVenda));

//# sourceMappingURL=item-venda.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTiposPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_tipo_bebida__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_tipo_lanche__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__infra_page_child_base__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_tipo_pizza_tamanho__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__item_tipo_porcao__ = __webpack_require__(274);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemTiposPage = (function (_super) {
    __extends(ItemTiposPage, _super);
    function ItemTiposPage(navCtrl, viewCtrl, pedidoService) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.pedidoService = pedidoService;
        return _this;
    }
    ItemTiposPage.prototype.irParaBebidas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_tipo_bebida__["a" /* ItemTipoBebidaPage */]);
    };
    ItemTiposPage.prototype.irParaLanches = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__item_tipo_lanche__["a" /* ItemTipoLanchePage */]);
    };
    ItemTiposPage.prototype.irParaPizzas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__item_tipo_pizza_tamanho__["a" /* ItemTipoPizzaTamanhoPage */]);
    };
    ItemTiposPage.prototype.irParaPorcoes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__item_tipo_porcao__["a" /* ItemTipoPorcaoPage */]);
    };
    return ItemTiposPage;
}(__WEBPACK_IMPORTED_MODULE_5__infra_page_child_base__["a" /* PageChildBase */]));
ItemTiposPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-tipos',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipos.html"*/'<ion-header>\n\n\n    <ion-navbar color="vermelho">\n        <ion-title>MENU</ion-title>\n    </ion-navbar>\n\n</ion-header>\n<ion-content>\n\n    <ul class="lista">\n\n        <li>\n            <a (click)="irParaPizzas()">\n                <h3>PIZZAS</h3>\n                <img src="assets/img/pizzas.png" width="120px">\n            </a>\n        </li>\n\n        <li>\n            <a (click)="irParaLanches()">\n                <h3>LANCHES</h3>\n                <img src="assets/img/hamb.png" width="120px">\n            </a>\n        </li>\n\n        <li>\n            <a (click)="irParaPorcoes()">\n                <h3>PORÇÕES</h3>\n                <img src="assets/img/porcao.png" width="120px">\n            </a>\n        </li>\n\n        <li>\n            <a (click)="irParaBebidas()">\n                <h3>BEBIDAS</h3>\n                <img src="assets/img/drink.png" width="120px">\n            </a>\n        </li>\n    </ul>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__["a" /* PedidoViewData */]])
], ItemTiposPage);

//# sourceMappingURL=item-tipos.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTipoBebidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_venda_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_add_quant__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__infra_page_child_base__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemTipoBebidaPage = (function (_super) {
    __extends(ItemTipoBebidaPage, _super);
    function ItemTipoBebidaPage(navCtrl, viewCtrl, navParams, pedidoService, apiService, loadingCtrl, alertCtrl, vendaService) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.navParams = navParams;
        _this.pedidoService = pedidoService;
        _this.apiService = apiService;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.vendaService = vendaService;
        _this.dataSourceTable = new Array();
        _this.carregarLista();
        return _this;
    }
    ItemTipoBebidaPage.prototype.carregarLista = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando bebidas disponíveis...'
        });
        this.dataSourceTable = new Array();
        var action = {
            onCompleted: function (itens) {
                loading.dismiss();
                _this.dataSourceTable = itens;
                _this.vendaService.bebidas = itens;
            },
            onError: function (erro) {
                loading.dismiss();
                console.error('erro api bebidas', erro);
                Object(__WEBPACK_IMPORTED_MODULE_7__shared__["f" /* exibirMensagemErro */])('Não foi possível carregar a lista de bebidas.', erro, _this.alertCtrl);
                _this.navCtrl.pop();
            },
            onFinally: function () {
            }
        };
        if (!this.vendaService.bebidas || this.vendaService.bebidas.length == 0) {
            loading.present();
            // executa a transação
            var observablePesq = this.apiService.listarBebidas();
            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        }
        else {
            this.dataSourceTable = this.vendaService.bebidas;
        }
        // impede que o comando submit dê um refresh na tela
        return false;
    };
    ItemTipoBebidaPage.prototype.venderItem = function (item) {
        item.tipo = "bebida";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__item_add_quant__["a" /* ItemAddQuantPage */], {
            item: item
        });
    };
    return ItemTipoBebidaPage;
}(__WEBPACK_IMPORTED_MODULE_6__infra_page_child_base__["a" /* PageChildBase */]));
ItemTipoBebidaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-tipo-bebida',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-bebida.html"*/'<ion-header>\n\n    <ion-navbar color="vermelho">\n\n        <ion-title>BEBIDAS</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <br/>\n\n    <ul class="media-list" id="lista_bebidas">\n\n\n\n        <li class="media" *ngFor="let item of dataSourceTable" (click)="venderItem(item)">\n\n            <div class="media-left">\n\n                <a href="#">\n\n                    <img class="media-object" src="{{item.imagem}}"></a>\n\n            </div>\n\n            <div class="media-body">\n\n                <h4 class="media-heading">\n\n                    <strong>{{item.nome}}</strong>\n\n                </h4>\n\n                <p class="descricao">500ML</p>\n\n                <p class="lanche_preco">R$ {{item.valor}}</p>\n\n            </div>\n\n        </li>\n\n\n\n    </ul>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-bebida.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_item_venda_service__["a" /* ItemVendaService */]])
], ItemTipoBebidaPage);

//# sourceMappingURL=item-tipo-bebida.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTipoLanchePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_venda_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_add_quant__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__infra_page_child_base__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemTipoLanchePage = (function (_super) {
    __extends(ItemTipoLanchePage, _super);
    function ItemTipoLanchePage(navCtrl, viewCtrl, pedidoService, apiService, loadingCtrl, alertCtrl, vendaService) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.pedidoService = pedidoService;
        _this.apiService = apiService;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.vendaService = vendaService;
        _this.dataSourceTable = new Array();
        _this.carregarLista();
        return _this;
    }
    ItemTipoLanchePage.prototype.carregarLista = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando lanches disponíveis...'
        });
        this.dataSourceTable = new Array();
        var action = {
            onCompleted: function (itens) {
                loading.dismiss();
                _this.dataSourceTable = itens;
                _this.vendaService.lanches = itens;
            },
            onError: function (erro) {
                loading.dismiss();
                console.log(erro);
                Object(__WEBPACK_IMPORTED_MODULE_7__shared__["f" /* exibirMensagemErro */])('Não foi possível carregar a lista de lanches.', erro, _this.alertCtrl);
                _this.navCtrl.pop();
            },
            onFinally: function () {
            }
        };
        if (!this.vendaService.lanches || this.vendaService.lanches.length == 0) {
            loading.present();
            // executa a transação
            var observablePesq = this.apiService.listarLanches();
            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        }
        else {
            this.dataSourceTable = this.vendaService.lanches;
        }
        // impede que o comando submit dê um refresh na tela
        return false;
    };
    ItemTipoLanchePage.prototype.venderItem = function (item) {
        item.tipo = "lanche";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__item_add_quant__["a" /* ItemAddQuantPage */], {
            item: item
        });
    };
    return ItemTipoLanchePage;
}(__WEBPACK_IMPORTED_MODULE_6__infra_page_child_base__["a" /* PageChildBase */]));
ItemTipoLanchePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-tipo-lanche',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-lanche.html"*/'<ion-header>\n\n    <ion-navbar color="vermelho">\n\n        <ion-title>LANCHES</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n    <ion-content>\n\n        <br/>\n\n        <ul class="media-list">\n\n\n\n            <li class="media" *ngFor="let item of dataSourceTable" (click)="venderItem(item)">\n\n                <div class="media-left">\n\n                    <a href="#">\n\n                        <img class="media-object" src="{{item.imagem}}">\n\n                    </a>\n\n                </div>\n\n                <div class="media-body">\n\n                    <h4 class="media-heading">\n\n                        <strong>{{item.nome}}</strong>\n\n                    </h4>\n\n                    <p class="descricao">{{item.ingredientes}}</p>\n\n                    <p class="lanche_preco">R$ {{item.valor}}</p></div>\n\n            </li>\n\n\n\n        </ul>\n\n\n\n    </ion-content>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-lanche.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_item_venda_service__["a" /* ItemVendaService */]])
], ItemTipoLanchePage);

//# sourceMappingURL=item-tipo-lanche.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTipoPizzaBordaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_tipo_pizza__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_venda_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_add_quant__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__infra_page_child_base__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ItemTipoPizzaBordaPage = (function (_super) {
    __extends(ItemTipoPizzaBordaPage, _super);
    function ItemTipoPizzaBordaPage(navCtrl, viewCtrl, navParams, pedidoService, apiService, loadingCtrl, alertCtrl, vendaService) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.pedidoService = pedidoService;
        _this.apiService = apiService;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.vendaService = vendaService;
        // If we navigated to this page, we will have an item available as a nav param
        _this.pizza = navParams.get('item');
        _this.carregarLista();
        return _this;
    }
    ItemTipoPizzaBordaPage.prototype.childAfterViewInit = function () {
        if (!this.pizza) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_tipo_pizza__["a" /* ItemTipoPizzaPage */]);
        }
    };
    ItemTipoPizzaBordaPage.prototype.carregarLista = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando bordas de pizzas disponíveis...'
        });
        this.dataSourceTable = new Array();
        var action = {
            onCompleted: function (itens) {
                loading.dismiss();
                _this.dataSourceTable = itens;
                _this.vendaService.bordasPizzas = itens;
            },
            onError: function (erro) {
                loading.dismiss();
                console.log(erro);
                Object(__WEBPACK_IMPORTED_MODULE_8__shared__["f" /* exibirMensagemErro */])('Não foi possível carregar a lista de bordas.', erro, _this.alertCtrl);
                _this.navCtrl.pop();
            },
            onFinally: function () {
            }
        };
        if (!this.vendaService.bordas || this.vendaService.bordas.length == 0) {
            loading.present();
            // executa a transação
            var observablePesq = this.apiService.listarBordas();
            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        }
        else {
            this.dataSourceTable = this.vendaService.bordasPizzas;
        }
        // impede que o comando submit dê um refresh na tela
        return false;
    };
    ItemTipoPizzaBordaPage.prototype.selecionarBorda = function (borda) {
        if (!!borda.valor) {
            this.pizza.borda = borda;
        }
        else {
            this.pizza.borda = null;
        }
        this.venderItem(this.pizza);
    };
    ItemTipoPizzaBordaPage.prototype.venderItem = function (item) {
        item.tipo = "pizza";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__item_add_quant__["a" /* ItemAddQuantPage */], {
            item: item
        });
    };
    return ItemTipoPizzaBordaPage;
}(__WEBPACK_IMPORTED_MODULE_7__infra_page_child_base__["a" /* PageChildBase */]));
ItemTipoPizzaBordaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-tipo-pizza-borda',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-pizza-borda.html"*/'<ion-header>\n    <ion-navbar color="vermelho">\n        <ion-title>OPCIONAIS</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n\n    <div class="divisao">\n        BORDAS\n    </div>\n    <ul class="lista">\n\n        <li *ngFor="let b of dataSourceTable" (click)="selecionarBorda(b)"><a >{{b.nome}}</a>\n            <span *ngIf="!!b.valor" class="bordas_preco">R$ {{b.valor}}</span>\n        </li>\n\n    </ul>\n\n</ion-content>\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-pizza-borda.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_item_venda_service__["a" /* ItemVendaService */]])
], ItemTipoPizzaBordaPage);

//# sourceMappingURL=item-tipo-pizza-borda.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemTipoPorcaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_item_venda_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_add_quant__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__infra_page_child_base__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ItemTipoPorcaoPage = (function (_super) {
    __extends(ItemTipoPorcaoPage, _super);
    function ItemTipoPorcaoPage(navCtrl, viewCtrl, pedidoService, apiService, loadingCtrl, alertCtrl, vendaService) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.pedidoService = pedidoService;
        _this.apiService = apiService;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.vendaService = vendaService;
        _this.dataSourceTable = new Array();
        _this.carregarLista();
        return _this;
    }
    ItemTipoPorcaoPage.prototype.carregarLista = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando porções disponíveis...'
        });
        this.dataSourceTable = new Array();
        var action = {
            onCompleted: function (itens) {
                loading.dismiss();
                _this.dataSourceTable = itens;
                _this.vendaService.porcoes = itens;
            },
            onError: function (erro) {
                loading.dismiss();
                console.log(erro);
                Object(__WEBPACK_IMPORTED_MODULE_7__shared__["f" /* exibirMensagemErro */])('Não foi possível carregar a lista de porções.', erro, _this.alertCtrl);
                _this.navCtrl.pop();
            },
            onFinally: function () {
            }
        };
        if (!this.vendaService.lanches || this.vendaService.lanches.length == 0) {
            loading.present();
            // executa a transação
            var observablePesq = this.apiService.listarPorcoes();
            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        }
        else {
            this.dataSourceTable = this.vendaService.lanches;
        }
        // impede que o comando submit dê um refresh na tela
        return false;
    };
    ItemTipoPorcaoPage.prototype.venderItem = function (item) {
        item.tipo = "porção";
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__item_add_quant__["a" /* ItemAddQuantPage */], {
            item: item
        });
    };
    return ItemTipoPorcaoPage;
}(__WEBPACK_IMPORTED_MODULE_6__infra_page_child_base__["a" /* PageChildBase */]));
ItemTipoPorcaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-tipo-porcao',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-porcao.html"*/'<ion-header>\n    <ion-navbar color="vermelho">\n        <ion-title>PORÇÕES</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n\n    <ion-content>\n        <br/>\n        <ul class="media-list">\n\n            <li class="media" *ngFor="let item of dataSourceTable" (click)="venderItem(item)">\n                <div class="media-left">\n                    <a href="#">\n                        <img class="media-object" src="{{item.imagem}}">\n                    </a>\n                </div>\n                <div class="media-body">\n                    <h4 class="media-heading">\n                        <strong>{{item.nome}}</strong>\n                    </h4>\n                    <p class="descricao">{{item.ingredientes}}</p>\n                    <p class="lanche_preco">R$ {{item.valor}}</p></div>\n            </li>\n\n        </ul>\n\n    </ion-content>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-tipo-porcao.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__services_item_venda_service__["a" /* ItemVendaService */]])
], ItemTipoPorcaoPage);

//# sourceMappingURL=item-tipo-porcao.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KEY_TELA_ANTERIOR_LOGIN */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacaoAppPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minha_conta__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KEY_TELA_ANTERIOR_LOGIN = 'telaAnteriorLogin';
var AvaliacaoAppPage = (function () {
    function AvaliacaoAppPage(navCtrl, navParams, apiService, alertCtrl, pedido) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiService = apiService;
        this.alertCtrl = alertCtrl;
        this.pedido = pedido;
        this.avaliacao = null;
        this.avaliacao = this.pedido.cliente.nivelSatisfacaoApp;
    }
    AvaliacaoAppPage.prototype.avaliar = function (avaliacao) {
        if (this.avaliacao == avaliacao) {
            this.avaliacao = null;
        }
        else {
            this.avaliacao = avaliacao;
        }
        Object(__WEBPACK_IMPORTED_MODULE_5__shared__["g" /* logDebug */])(this.avaliacao, avaliacao);
    };
    AvaliacaoAppPage.prototype.enviarAvaliacao = function () {
        var _this = this;
        if (!this.avaliacao) {
            var alert_1 = this.alertCtrl.create({
                title: 'Atenção',
                subTitle: "Por favor, selecionar uma avaliação.",
                buttons: [{
                        text: 'Ok'
                    }]
            });
            alert_1.present();
            return;
        }
        var action = {
            onCompleted: function (dados) {
                _this.pedido.cliente.nivelSatisfacaoApp = _this.avaliacao;
                var alert = _this.alertCtrl.create({
                    title: 'Avaliação enviada',
                    subTitle: "Agradecemos sua participação!",
                    buttons: [{
                            text: 'Ok',
                            handler: function (a) {
                                _this.voltarParaTelaAnterior();
                            }
                        }]
                });
                alert.present();
            },
            onError: function (erro) {
                var alert = _this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: "Não foi possível enviar a avaliação. Por favor, tente novamente agora ou mais tarde",
                    buttons: [
                        {
                            text: 'Ok',
                        }
                    ]
                });
                alert.present();
            },
            onFinally: function () {
            }
        };
        // executa a transação
        var observablePesq = this.apiService.salvarAvaliacaoCliente(this.pedido.cliente.id, this.avaliacao, this.sugestao);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    };
    AvaliacaoAppPage.prototype.voltarParaTelaAnterior = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__minha_conta__["a" /* MinhaContaPage */]);
    };
    return AvaliacaoAppPage;
}());
AvaliacaoAppPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-avaliacao-app',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/conta/avaliacao-app.html"*/'<ion-header>\n\n    <ion-navbar color="vermelho">\n\n        <ion-title>AVALIAÇÃO</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="cadastro">\n\n\n\n        <p id="txt_cadastro" style="margin-left: 5px; margin-right: 5px;">\n\n            Avalie nosso App e aproveite para dar alguma sugestão!\n\n        </p>\n\n\n\n\n\n        <div style="width:80%;text-align: center;margin-left: auto;margin-right: auto;">\n\n            <style>\n\n                ion-icon {\n\n                    font-size: 40px;\n\n                    margin-right: 10px;\n\n                }\n\n\n\n                .icon-ativo {\n\n                    color: blue;\n\n                }\n\n\n\n            </style>\n\n\n\n            <ion-icon (click)="avaliar(1)" name="star-outline" [ngClass]="{\'icon-ativo\': avaliacao == 1}"></ion-icon>\n\n            <ion-icon (click)="avaliar(2)" name="star-half" [ngClass]="{\'icon-ativo\': avaliacao == 2}"></ion-icon>\n\n            <ion-icon (click)="avaliar(3)" name="star" [ngClass]="{\'icon-ativo\': avaliacao == 3}"></ion-icon>\n\n\n\n        </div>\n\n\n\n        <ion-list>\n\n            <ion-item-divider></ion-item-divider>\n\n            <ion-item>\n\n                <ion-label>Sugestão</ion-label>\n\n\n\n                <ion-textarea [(ngModel)]="sugestao" name="sugestao"></ion-textarea>\n\n\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n    <footer>\n\n        <a *ngIf="!!avaliacao; else elseBlock" (click)="enviarAvaliacao()">Enviar</a>\n\n        <ng-template #elseBlock><a disabled="disabled">Enviar</a></ng-template>\n\n    </footer>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/conta/avaliacao-app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__viewdata_pedido_viewdata__["a" /* PedidoViewData */]])
], AvaliacaoAppPage);

//# sourceMappingURL=avaliacao-app.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoEnderecoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dados__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__infra_page_child_base__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_item_venda_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pedido_pagamento__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__(17);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PedidoEnderecoPage = (function (_super) {
    __extends(PedidoEnderecoPage, _super);
    function PedidoEnderecoPage(navCtrl, viewCtrl, pedido, alertCtrl, vendaService, loadingCtrl, apiService) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.pedido = pedido;
        _this.alertCtrl = alertCtrl;
        _this.vendaService = vendaService;
        _this.loadingCtrl = loadingCtrl;
        _this.apiService = apiService;
        var regiao = new __WEBPACK_IMPORTED_MODULE_3__services_dados__["f" /* Regiao */]();
        regiao.cidade = "Não encontrei...";
        regiao.bairro = "Não encontrei...";
        _this.regiaoDefault = regiao;
        _this.cliente = new __WEBPACK_IMPORTED_MODULE_3__services_dados__["a" /* Cliente */]();
        _this.endereco = new __WEBPACK_IMPORTED_MODULE_3__services_dados__["b" /* Endereco */]();
        var clieo = _this.pedido.cliente;
        var clied = _this.cliente;
        // copia os dados do cliente para edição
        clied.nome = clieo.nome;
        clied.telefone = clieo.telefone;
        if (!!clieo.endereco) {
            var end = clieo.endereco;
            _this.endereco.logradouro = end.logradouro;
            _this.endereco.numero = end.numero;
            _this.endereco.complemento = end.complemento;
            var regiao_1 = new __WEBPACK_IMPORTED_MODULE_3__services_dados__["f" /* Regiao */]();
            if (!!end.regiao) {
                regiao_1.bairro = end.regiao.bairro;
                regiao_1.cidade = end.regiao.cidade;
                regiao_1.regiaoId = end.regiao.regiaoId;
            }
            _this.endereco.regiao = regiao_1;
        }
        return _this;
    }
    PedidoEnderecoPage.prototype.childAfterViewInit = function () {
        var _this = this;
        this.carregarRegioes(function () {
            if (!_this.endereco.regiao)
                return;
            var regiaoEnde = _this.endereco.regiao;
            for (var _i = 0, _a = _this.cidades; _i < _a.length; _i++) {
                var regiao = _a[_i];
                if (regiao.cidade == regiaoEnde.cidade) {
                    _this.cidadeSelecionada = regiao;
                    break;
                }
            }
            for (var _b = 0, _c = _this.bairros; _b < _c.length; _b++) {
                var regiao = _c[_b];
                if (regiao.bairro == regiaoEnde.bairro) {
                    _this.bairroSelecionado = regiao;
                    break;
                }
            }
        });
    };
    PedidoEnderecoPage.prototype.validarPreenchimento = function (isModoSilencioso) {
        var clie = this.cliente;
        var end = this.endereco;
        if (!this._cidadeSelecionada || this._cidadeSelecionada.regiaoId < 1)
            return false;
        if (!this._bairroSelecionado || this._bairroSelecionado.regiaoId < 1)
            return false;
        if (!clie.nome || !clie.telefone || !end.logradouro || !end.numero) {
            if (!isModoSilencioso) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: "Todos os campos são obrigatórios.",
                    buttons: [
                        {
                            text: 'Ok',
                        }
                    ]
                });
                alert_1.present();
            }
            return false;
        }
        return true;
    };
    Object.defineProperty(PedidoEnderecoPage.prototype, "cidadeSelecionada", {
        get: function () {
            return this._cidadeSelecionada;
        },
        set: function (regiao) {
            this._cidadeSelecionada = regiao;
            this.bairroSelecionado = null;
            if (!regiao.regiaoId) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Desculpe! :(',
                    subTitle: "Ainda não atendemos à sua região. Escolha outro lugar ou retorne para a tela anterior e marque 'Retirar' para buscar seu pedido no local.",
                    buttons: [
                        {
                            text: 'Ok',
                        }
                    ]
                });
                alert_2.present();
                return;
            }
            this.bairros = new Array();
            this.bairros = this.regioes.filter(function (a) { return a.cidade == regiao.cidade; });
            this.bairros.push(this.regiaoDefault);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PedidoEnderecoPage.prototype, "bairroSelecionado", {
        get: function () {
            return this._bairroSelecionado;
        },
        set: function (regiao) {
            if (!!regiao && !regiao.regiaoId) {
                var alert_3 = this.alertCtrl.create({
                    title: 'Desculpe! :(',
                    subTitle: "Ainda não atendemos à sua região. Escolha outro lugar ou retorne para a tela anterior e marque 'Retirar' para buscar seu pedido no local.",
                    buttons: [
                        {
                            text: 'Ok',
                        }
                    ]
                });
                alert_3.present();
                return;
            }
            this._bairroSelecionado = regiao;
        },
        enumerable: true,
        configurable: true
    });
    PedidoEnderecoPage.prototype.carregarRegioes = function (callBackAfterLoad) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando regiões disponíveis...'
        });
        this.regioes = new Array();
        this.bairros = new Array();
        this.cidades = new Array();
        var action = {
            onCompleted: function (itens) {
                loading.dismiss();
                _this.regioes = itens;
                _this.cidades = [];
                var keys = {};
                // inclui somente cidades diferentes (distinct)
                for (var _i = 0, itens_1 = itens; _i < itens_1.length; _i++) {
                    var regiao = itens_1[_i];
                    if (!keys[regiao.cidade]) {
                        _this.cidades.push(regiao);
                        keys[regiao.cidade] = true;
                    }
                }
                keys = null;
                _this.cidades.push(_this.regiaoDefault);
                _this.vendaService.regioes = itens;
                _this.vendaService.cidades = _this.cidades;
                if (!!callBackAfterLoad)
                    callBackAfterLoad();
            },
            onError: function (erro) {
                loading.dismiss();
                Object(__WEBPACK_IMPORTED_MODULE_8__shared__["f" /* exibirMensagemErro */])('Não foi possível consultar a lista de regiões. Por favor, tente novamente', erro, _this.alertCtrl);
                _this.navCtrl.pop();
                return false;
            },
            onFinally: function () {
            }
        };
        if (!this.vendaService.cidades || this.vendaService.cidades.length == 0) {
            loading.present();
            // executa a transação
            var observablePesq = this.apiService.listarRegioes();
            observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        }
        else {
            this.regioes = this.vendaService.regioes;
            this.cidades = this.vendaService.cidades;
            if (!!callBackAfterLoad)
                callBackAfterLoad();
        }
        // impede que o comando submit dê um refresh na tela
        return false;
    };
    PedidoEnderecoPage.prototype.irParaProximaEtapa = function () {
        if (!this.validarPreenchimento())
            return;
        this.pedido.clienteEntrega = this.cliente;
        this.pedido.enderecoEntrega = this.endereco;
        this.pedido.enderecoEntrega.regiao = this._bairroSelecionado;
        this.pedido.taxaEntrega = this._bairroSelecionado.frete;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pedido_pagamento__["a" /* PedidoPagamentoPage */]);
    };
    return PedidoEnderecoPage;
}(__WEBPACK_IMPORTED_MODULE_5__infra_page_child_base__["a" /* PageChildBase */]));
PedidoEnderecoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'pedido-endereco',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/pedido-endereco.html"*/'<ion-header>\n\n    <ion-navbar color="vermelho">\n\n        <ion-title>ENDEREÇO ENTREGA</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="cadastro">\n\n\n\n        <p id="txt_cadastro" style="margin-left: 5px; margin-right: 5px;">\n\n            Confirme os dados que serão utilizados para entrega do pedido. Caso seja necessário,\n\n            você também poderá editá-los.\n\n        </p>\n\n\n\n    </div>\n\n\n\n    <form>\n\n\n\n        <ion-list>\n\n            <div class="divisao">\n\n                Região\n\n            </div>\n\n\n\n            <ion-item>\n\n                <ion-label left>Cidade *</ion-label>\n\n                <ion-select [(ngModel)]="cidadeSelecionada" name="cidadeSelecionada"\n\n                            interface="popover"\n\n                >\n\n                    <ion-option *ngFor="let item of cidades" [value]="item">\n\n                        {{ item.cidade }}\n\n                    </ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n\n\n                <ion-label>Bairro *</ion-label>\n\n                <ion-select [(ngModel)]="bairroSelecionado" name="bairroSelecionado"\n\n                            [disabled]=" !bairros || bairros.length == 0"\n\n                            interface="popover"\n\n                >\n\n                    <ion-option *ngFor="let item of bairros" [value]="item">\n\n                        {{ item.bairro }}\n\n                    </ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n\n        <ion-list>\n\n            <div class="divisao">\n\n                Identificação\n\n            </div>\n\n            <ion-item>\n\n                <ion-label>Nome *</ion-label>\n\n                <ion-input type="text" [(ngModel)]="cliente.nome" name="nome"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Telefone *</ion-label>\n\n                <ion-input type="tel" [(ngModel)]="cliente.telefone" name="telefone"></ion-input>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n\n        <ion-list>\n\n\n\n            <div class="divisao">\n\n                Endereço\n\n            </div>\n\n\n\n            <ion-item>\n\n                <ion-label>Logradouro *</ion-label>\n\n                <ion-input type="text" [(ngModel)]="endereco.logradouro" name="logradouro"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Número *</ion-label>\n\n                <ion-input type="text" [(ngModel)]="endereco.numero" name="numero"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Complemento</ion-label>\n\n                <ion-input type="text" [(ngModel)]="endereco.complemento" name="complemento"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Referência</ion-label>\n\n                <ion-input type="text" [(ngModel)]="endereco.referencia" name="referencia"></ion-input>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n\n    </form>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <footer>\n\n        <a *ngIf="!validarPreenchimento(true); else pagamentoAtivo" disabled="disabled">Pagamento</a>\n\n        <ng-template #pagamentoAtivo><a (click)="irParaProximaEtapa()">Pagamento</a></ng-template>\n\n    </footer>\n\n</ion-footer>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/pedido-endereco.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__services_item_venda_service__["a" /* ItemVendaService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]])
], PedidoEnderecoPage);

//# sourceMappingURL=pedido-endereco.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dados__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_item_venda_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__historico_detalhe__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pedido_pedido__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Created by eu on 01/06/2017.
 */
var HistoricoPage = (function () {
    function HistoricoPage(navCtrl, viewCtrl, navParams, pedidoService, apiService, loadingCtrl, alertCtrl, horarioAtendimento, vendaService) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.pedidoService = pedidoService;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.horarioAtendimento = horarioAtendimento;
        this.vendaService = vendaService;
        this.dataSourceTable = new Array();
        this.carregarLista();
    }
    HistoricoPage.prototype.carregarLista = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando histórico de pedidos disponíveis...'
        });
        this.dataSourceTable = new Array();
        var action = {
            onCompleted: function (itens) {
                _this.dataSourceTable = itens;
                _this.canExibirVazio = true;
            },
            onError: function (erro) {
                Object(__WEBPACK_IMPORTED_MODULE_7__shared__["f" /* exibirMensagemErro */])("Não foi possível listar o histórico de pedidos.", erro, _this.alertCtrl);
                console.error('erro ao listar pedidos pedidos', erro);
            },
            onFinally: function () {
                loading.dismiss();
                _this.canExibirVazio = true;
            }
        };
        loading.present();
        // executa a transação
        var observablePesq = this.apiService.listarPedidosCliente(this.pedidoService.cliente.id);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        // impede que o comando submit dê um refresh na tela
        return false;
    };
    HistoricoPage.prototype.isStatusFinalizado = function (status) {
        if (!status)
            return false;
        status = status.trim().toUpperCase();
        return status === 'FINALIZADO' || status === 'ENTREGUE' ||
            status === 'FINALIZADA' || status === 'CANCELADA' ||
            status === 'CANCELADO' || status === 'CONCLUIDO' ||
            status === 'CONCLUIDA' || status === 'CONCLUÍDO' ||
            status === 'CONCLUÍDA';
    };
    HistoricoPage.prototype.irParaDetalhe = function (pedido) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__historico_detalhe__["a" /* HistoricoDetalhePage */], {
            item: pedido
        });
    };
    HistoricoPage.prototype.irParaPedido = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pedido_pedido__["a" /* PedidoPage */]);
    };
    return HistoricoPage;
}());
HistoricoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historico',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/historico/historico.html"*/'<ion-header>\n    <ion-toolbar color="vermelho">\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>HISTÓRICO</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class="divisao">\n        PEDIDOS\n    </div>\n\n    <div class="naoExiste" *ngIf="canExibirVazio && (!dataSourceTable || dataSourceTable.length == 0)">\n        <h2>Você não possui pedidos registrados</h2>\n        <img src="assets/img/unhappy.png">\n    </div>\n\n\n    <ion-list inset *ngIf="!!dataSourceTable && dataSourceTable.length > 0 ">\n        <button ion-item *ngFor="let p of dataSourceTable" style="text-align: left; padding-left: 0px;"\n                (click)="irParaDetalhe(p)"\n        >\n            <div class="row">\n                <span class="col col-md-12 pull-left lista-pedido-numero">{{p.numero}}</span>\n            </div>\n            <div class="row">\n                <span class="col col-md-6 lista-pedido-status-pendente" [ngClass]="{finalizado: isStatusFinalizado(p.status)}">{{p.status}}</span>\n                <span class="col col-md-6 lista-pedido-total">R$ {{p.total}}</span>\n                <!--<span class="col col-md-6 pull-right lista-pedido-data">{{p.data | date: \'dd/MM/yyyy\'}}</span>-->\n            </div>\n        </button>\n    </ion-list>\n\n</ion-content>\n<ion-footer>\n    <footer>\n        <a *ngIf="horarioAtendimento.isFechado" disabled="disabled">Loja Fechada</a>\n        <a *ngIf="!horarioAtendimento.isFechado" (click)="irParaPedido()">Iniciar Pedido</a>\n    </footer>\n</ion-footer>\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/historico/historico.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__services_dados__["c" /* HorarioAtendimento */],
        __WEBPACK_IMPORTED_MODULE_5__services_item_venda_service__["a" /* ItemVendaService */]])
], HistoricoPage);

//# sourceMappingURL=historico.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoDetalhePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__infra_page_child_base__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Created by eu on 01/06/2017.
 */
var HistoricoDetalhePage = (function (_super) {
    __extends(HistoricoDetalhePage, _super);
    function HistoricoDetalhePage(navCtrl, viewCtrl, navParams, apiService, loadingCtrl) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.apiService = apiService;
        _this.loadingCtrl = loadingCtrl;
        _this.dataSourceTable = new Array();
        _this.pedido = navParams.get('item');
        _this.carregarLista();
        return _this;
    }
    HistoricoDetalhePage.prototype.carregarLista = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando itens do pedido...'
        });
        this.dataSourceTable = new Array();
        var action = {
            onCompleted: function (itens) {
                loading.dismiss();
                _this.dataSourceTable = itens;
            },
            onError: function (erro) {
                loading.dismiss();
                console.error('erro ao listar pedidos pedidos', erro);
            },
            onFinally: function () {
            }
        };
        loading.present();
        // executa a transação
        var observablePesq = this.apiService.listarPedidoItens(this.pedido.numero);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
        // impede que o comando submit dê um refresh na tela
        return false;
    };
    return HistoricoDetalhePage;
}(__WEBPACK_IMPORTED_MODULE_1__infra_page_child_base__["a" /* PageChildBase */]));
HistoricoDetalhePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-historico-detalhe',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/historico/historico-detalhe.html"*/'<ion-header>\n\n    <ion-navbar color="vermelho">\n\n        <ion-title>ITENS</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="divisao">\n\n        PEDIDO {{pedido.numero}}\n\n    </div>\n\n    <ion-list>\n\n        <ion-item *ngFor="let i of dataSourceTable" style="text-align: left; padding-left: 0px;">\n\n            <div class="row">\n\n                <span class="col col-md-12 pull-left lista-pedido-numero">{{i.nome}}</span>\n\n            </div>\n\n            <div class="row" *ngIf="!!i.ingredientes">\n\n                <span class="col col-md-12 pull-left" style="font-size: 14px;color: #a8a8a8;">{{i.ingredientes}}</span>\n\n            </div>\n\n            <div class="row">\n\n                <span class="col col-md-6 lista-pedido-status-pendente" style="color: black">Quant.: {{i.quantidade}}</span>\n\n                <span class="col col-md-6 lista-pedido-total">R$ {{i.total}}</span>\n\n            </div>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/historico/historico-detalhe.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
], HistoricoDetalhePage);

//# sourceMappingURL=historico-detalhe.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(284);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_conta_contas__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pedido_pedido__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sobre_sobre__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pedido_item_tipos__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pedido_item_tipo_bebida__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pedido_item_tipo_lanche__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pedido_item_tipo_pizza__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_item_venda_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pedido_item_add_quant__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pedido_pedido_pagamento__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_pedido_item_tipo_pizza_borda__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_conta_minha_conta__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_conta_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_conta_cadastrar_conta__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_conta_avaliacao_app__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_pedido_pedido_endereco__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_pedido_item_tipo_pizza_tamanho__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_historico_historico_detalhe__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_historico_historico__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_pedido_item_tipo_porcao__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_dados__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_conta_contas__["a" /* ContasPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pedido_pedido__["a" /* PedidoPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_sobre_sobre__["a" /* SobrePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_pedido_item_tipos__["a" /* ItemTiposPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pedido_item_tipo_bebida__["a" /* ItemTipoBebidaPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_pedido_item_tipo_lanche__["a" /* ItemTipoLanchePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_pedido_item_tipo_pizza__["a" /* ItemTipoPizzaPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_pedido_item_add_quant__["a" /* ItemAddQuantPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pedido_item_tipo_pizza_tamanho__["a" /* ItemTipoPizzaTamanhoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_pedido_pedido_pagamento__["a" /* PedidoPagamentoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_pedido_item_tipo_pizza_borda__["a" /* ItemTipoPizzaBordaPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_conta_minha_conta__["a" /* MinhaContaPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_conta_login__["b" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_conta_cadastrar_conta__["a" /* CadastrarContaPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_conta_avaliacao_app__["a" /* AvaliacaoAppPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_pedido_pedido_endereco__["a" /* PedidoEnderecoPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_historico_historico__["a" /* HistoricoPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_historico_historico_detalhe__["a" /* HistoricoDetalhePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_pedido_item_tipo_pizza__["b" /* PopoverPizzaSaborAdicionado */],
            __WEBPACK_IMPORTED_MODULE_30__pages_pedido_item_tipo_porcao__["a" /* ItemTipoPorcaoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_23__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MainPage */], {}, {
                links: []
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_conta_contas__["a" /* ContasPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pedido_pedido__["a" /* PedidoPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_sobre_sobre__["a" /* SobrePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_pedido_item_tipos__["a" /* ItemTiposPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pedido_item_tipo_bebida__["a" /* ItemTipoBebidaPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_pedido_item_tipo_lanche__["a" /* ItemTipoLanchePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_pedido_item_tipo_pizza__["a" /* ItemTipoPizzaPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_pedido_item_tipo_pizza_tamanho__["a" /* ItemTipoPizzaTamanhoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_pedido_item_add_quant__["a" /* ItemAddQuantPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_pedido_pedido_pagamento__["a" /* PedidoPagamentoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_pedido_item_tipo_pizza_borda__["a" /* ItemTipoPizzaBordaPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_conta_minha_conta__["a" /* MinhaContaPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_conta_login__["b" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_conta_cadastrar_conta__["a" /* CadastrarContaPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_conta_avaliacao_app__["a" /* AvaliacaoAppPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_pedido_pedido_endereco__["a" /* PedidoEnderecoPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_historico_historico__["a" /* HistoricoPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_historico_historico_detalhe__["a" /* HistoricoDetalhePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_pedido_item_tipo_pizza__["b" /* PopoverPizzaSaborAdicionado */],
            __WEBPACK_IMPORTED_MODULE_30__pages_pedido_item_tipo_porcao__["a" /* ItemTipoPorcaoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__viewdata_pedido_viewdata__["a" /* PedidoViewData */], __WEBPACK_IMPORTED_MODULE_16__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_17__services_item_venda_service__["a" /* ItemVendaService */], __WEBPACK_IMPORTED_MODULE_31__services_dados__["c" /* HorarioAtendimento */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemVendaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_venda__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dados__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by eu on 04/05/2017.
 */



var ItemVendaService = (function () {
    function ItemVendaService() {
        //this.inicializarMockTamanhoPizza();
        //this.inicializarMockRegiao();
        this.nu = 0;
    }
    ItemVendaService.prototype.limparCache = function () {
        this.lanches = null;
        this.pizzas = null;
        this.bebidas = null;
        this.bordasPizzas = null;
        this.tamamhosPizza = null;
        this.bordas = null;
        this.regioes = null;
        this.cidades = null;
    };
    ItemVendaService.prototype.inicializarMockTamanhoPizza = function () {
        this.tamamhosPizza = [];
        this.tamamhosPizza.push(this.criarTamanhoPizza("Média", 50));
        this.tamamhosPizza.push(this.criarTamanhoPizza("Grande", 60));
        this.tamamhosPizza.push(this.criarTamanhoPizza("Gigante", 70));
        this.tamamhosPizza.push(this.criarTamanhoPizza("Família", 90));
    };
    ItemVendaService.prototype.inicializarMockPizza = function () {
        this.pizzas = new Array();
        this.pizzas.push(this.criarPizza("Atum", "atum", 33));
        this.pizzas.push(this.criarPizza("Bacon", "bacon", 43));
        this.pizzas.push(this.criarPizza("Baiana", "baiana", 30));
        this.pizzas.push(this.criarPizza("Calabresa", "calabresa", 20));
        this.pizzas.push(this.criarPizza("Camarão", "camarao", 50));
        this.pizzas.push(this.criarPizza("Coração", "coracao", 45));
        this.pizzas.push(this.criarPizza("Frango Catupiry", "frango-catupiry", 45));
        this.pizzas.push(this.criarPizza("Chocolate", "atum", 30, true));
        this.pizzas.push(this.criarPizza("Doce de Leite", "bacon", 25, true));
        this.pizzas.push(this.criarPizza("Banana", "baiana", 20, true));
        this.pizzas.push(this.criarPizza("Goiabada", "calabresa", 15, true));
    };
    ItemVendaService.prototype.inicializarMockRegiao = function () {
        this.regioes = [];
        this.cidades = [];
        this.regioes.push(this.criarRegiao("Chapecó", "Santa Paulina", 0));
        this.regioes.push(this.criarRegiao("Chapecó", "Industrial", 10));
        this.regioes.push(this.criarRegiao("Chapecó", "Bela Vista", 1));
        this.regioes.push(this.criarRegiao("Brusque", "São Luís", 4));
        this.regioes.push(this.criarRegiao("Blumenau", "Garcia", 20));
        this.cidades.push(this.criarRegiao("Chapecó", "Santa Paulina", 0));
        this.cidades.push(this.criarRegiao("Brusque", "São Luís", 4));
        this.cidades.push(this.criarRegiao("Blumenau", "Garcia", 20));
        var defaultNao = new __WEBPACK_IMPORTED_MODULE_2__dados__["f" /* Regiao */]();
        defaultNao.cidade = "Não encontrei...";
        defaultNao.bairro = "Não encontrei...";
        defaultNao.frete = 1;
        this.cidades.push(defaultNao);
    };
    ItemVendaService.prototype.inicializarMockBordas = function () {
        this.bordasPizzas = new Array();
        this.bordasPizzas.push(this.criarBordaPizza("Sem Borda", null));
        this.bordasPizzas.push(this.criarBordaPizza("Chocolate Preto", 5));
        this.bordasPizzas.push(this.criarBordaPizza("Chocolate Branco", 5));
        this.bordasPizzas.push(this.criarBordaPizza("Catupiry", 5));
        this.bordasPizzas.push(this.criarBordaPizza("Cheddar", 5));
    };
    ItemVendaService.prototype.inicializarMockLanches = function () {
        var item;
        this.lanches = new Array();
        item = new __WEBPACK_IMPORTED_MODULE_1__item_venda__["a" /* ItemVenda */]();
        item.id = 1;
        item.nome = "HAMBURGUER";
        item.valor = 14.25;
        item.imagem = 'assets/img/hamburguer.png';
        this.lanches.push(item);
        item = new __WEBPACK_IMPORTED_MODULE_1__item_venda__["a" /* ItemVenda */]();
        item.id = 2;
        item.nome = "BISCOITOS DE POLVILHO";
        item.imagem = 'assets/img/hamburguer.png';
        item.valor = 11.25;
        this.lanches.push(item);
    };
    ItemVendaService.prototype.inicializarMockBebidas = function () {
        var item;
        this.bebidas = new Array();
        item = new __WEBPACK_IMPORTED_MODULE_1__item_venda__["a" /* ItemVenda */]();
        item.id = 1;
        item.nome = "SUCO DE MORANGO";
        item.valor = 5.25;
        item.imagem = 'assets/img/suco.jpg';
        this.bebidas.push(item);
    };
    ItemVendaService.prototype.criarRegiao = function (cidade, bairro, valor) {
        var regiao = new __WEBPACK_IMPORTED_MODULE_2__dados__["f" /* Regiao */]();
        regiao.regiaoId = ++this.nu;
        regiao.cidade = cidade;
        regiao.bairro = bairro;
        regiao.frete = valor;
        return regiao;
    };
    ItemVendaService.prototype.criarTamanhoPizza = function (nome, valor) {
        var item = new __WEBPACK_IMPORTED_MODULE_1__item_venda__["a" /* ItemVenda */]();
        item.id = ++this.nu;
        item.nome = nome;
        item.valor = valor;
        item.ingredientes = "XX FATIAS | 00CM | ATÉ N SABORES";
        return item;
    };
    ItemVendaService.prototype.criarPizza = function (nome, nomePasta, valor, isDoce) {
        var item = new __WEBPACK_IMPORTED_MODULE_1__item_venda__["a" /* ItemVenda */]();
        item.id = ++this.nu;
        item.nome = nome;
        item.valor = valor;
        item.imagem = 'assets/img/pizzas/' + nomePasta.toLowerCase() + '.png';
        item.tipo = "pizza";
        item.tipoPizza = isDoce ? "doce" : "salgada";
        return item;
    };
    ItemVendaService.prototype.criarBordaPizza = function (nome, valor) {
        var item = new __WEBPACK_IMPORTED_MODULE_1__item_venda__["a" /* ItemVenda */]();
        item.id = ++this.nu;
        item.nome = nome;
        item.valor = valor;
        item.tipo = "pizza";
        return item;
    };
    ItemVendaService.prototype.criarPedido = function (data, numero, total, status) {
        var pedido = new __WEBPACK_IMPORTED_MODULE_2__dados__["e" /* Pedido */]();
        pedido.numero = numero;
        pedido.total = total;
        pedido.data = data;
        pedido.status = status;
        return pedido;
    };
    ItemVendaService.prototype.criarPedidoItem = function (tipo, nome, ingredientes, quantidade, total) {
        var item = new __WEBPACK_IMPORTED_MODULE_2__dados__["d" /* ItemPedido */]();
        item.tipo = tipo;
        item.nome = nome;
        item.ingredientes = ingredientes;
        item.quantidade = quantidade;
        item.total = total;
        return item;
    };
    return ItemVendaService;
}());
ItemVendaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ItemVendaService);

//# sourceMappingURL=item-venda.service.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sobre_sobre__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pedido_pedido__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_conta_contas__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_historico_historico__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MainPage = (function () {
    function MainPage(platform, statusBar, splashScreen, pedido) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.pedido = pedido;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        // @Output()
        this.activeTitle = "Home";
        this.initializeApp();
        // used for an example of ngFor and navigation
        pedido.onClienteChange(function (cliente) {
            _this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
                { title: 'Meu Pedido', component: __WEBPACK_IMPORTED_MODULE_5__pages_pedido_pedido__["a" /* PedidoPage */] },
                { title: 'Minha Conta', component: __WEBPACK_IMPORTED_MODULE_6__pages_conta_contas__["a" /* ContasPage */] },
                { title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_4__pages_sobre_sobre__["a" /* SobrePage */] }
            ];
            if (!!cliente) {
                _this.pages.splice(2, 0, { title: 'Histórico', component: __WEBPACK_IMPORTED_MODULE_9__pages_historico_historico__["a" /* HistoricoPage */] });
            }
        });
        var cliente = window.localStorage.getItem('cliente');
        if (!cliente) {
            this.pedido.cliente = null;
        }
        else {
            this.pedido.cliente = JSON.parse(cliente);
        }
    }
    MainPage.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MainPage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activeTitle = page.title;
    };
    return MainPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MainPage.prototype, "nav", void 0);
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/app/app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n\n\n    </ion-header>\n\n\n\n    <style>\n\n        .menuAtivo {\n\n            color: black;\n\n        }\n\n    </style>\n\n    <ion-content>\n\n        <div class="sidenav" style="width: 100%">\n\n            <div class="painel">\n\n                <img src="assets/img/logo_Balaio_de_Lenha.png" alt="">\n\n            </div>\n\n            <a menuClose *ngFor="let p of pages" (click)="openPage(p)"\n\n               [ngClass]="{\'menuAtivo\': activeTitle == p.title }"\n\n            >\n\n                {{p.title}}\n\n            </a>\n\n        </div>\n\n\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_8__viewdata_pedido_viewdata__["a" /* PedidoViewData */]])
], MainPage);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/**
 * Created by eu on 04/05/2017.
 */
/**
 * Created by Gilberto on 10/12/2016.
 */



var ApiBase = (function () {
    function ApiBase(http, urlBase) {
        this.http = http;
        this.urlBase = urlBase;
    }
    ApiBase.prototype.getHttp = function () {
        return this.http;
    };
    ApiBase.prototype.combineUrl = function (relativeUrl) {
        var path = this.urlBase;
        if (!!path)
            path = path.replace("\\", "/");
        if (!relativeUrl)
            return path;
        relativeUrl = relativeUrl.replace("\\", "/");
        if (path.endsWith("/") && relativeUrl.startsWith("/")) {
            path += relativeUrl.substring(1);
        }
        else if (path.endsWith("/")) {
            path += relativeUrl;
        }
        else {
            path += "/" + relativeUrl;
        }
        return path;
    };
    ApiBase.prototype.get = function (relativeUrl, handlerMapItemResult) {
        var _this = this;
        var options = this.createRequestOptions();
        var url = this.combineUrl(relativeUrl);
        return this.http.get(url, options)
            .catch(this.tratarErroRequisicao)
            .map(function (response) {
            var resultJson;
            try {
                resultJson = _this.tentarConverterResponseToJson(response);
            }
            catch (e) {
                return _this.tratarErroRequisicao(response);
            }
            return resultJson;
        })
            .map(function (itens) {
            return itens.map(function (item) {
                return handlerMapItemResult ? handlerMapItemResult(item) : item;
            });
        });
    };
    /**
     * Performs a request with `post` http method.
     */
    ApiBase.prototype.post = function (relativeUrl, body, handlerMapItemResult) {
        var _this = this;
        var options = this.createRequestOptions();
        var url = this.combineUrl(relativeUrl);
        return this.http.post(url, (body ? body : {}), options)
            .catch(this.tratarErroRequisicao)
            .map(function (response) {
            if (response.status == 204) {
                return [];
            }
            var resultJson;
            try {
                resultJson = _this.tentarConverterResponseToJson(response);
            }
            catch (e) {
                return _this.tratarErroRequisicao(response);
            }
            return resultJson;
        })
            .map(function (itens) {
            return itens.map(function (item) {
                return handlerMapItemResult ? handlerMapItemResult(item) : item;
            });
        });
    };
    ApiBase.prototype.createRequestOptions = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/json;charset=utf-8");
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]();
        options.headers = header;
        return options;
    };
    ApiBase.prototype.tentarConverterResponseToJson = function (response) {
        var resultJson;
        var result = response.text();
        if (!!result)
            result = result.trim();
        try {
            resultJson = JSON.parse(result);
        }
        catch (e) {
            throw e;
        }
        return resultJson;
    };
    /**
     * Performs a request with `delete` http method.
     */
    ApiBase.prototype.delete = function (relativeUrl, body) {
        var options = this.createRequestOptions();
        if (body)
            options.body = body;
        return this.http.delete(this.combineUrl(relativeUrl), options);
    };
    ApiBase.prototype.tratarErroRequisicao = function (response) {
        var error = {
            motivo: "",
            codigo: 0,
            isValidacao: false,
            itensValidacao: []
        };
        if (response.type == 3) {
            error.codigo = 3;
            error.motivo = "O serviço está indisponível ou seu dispositivo perdeu a comunicação com a internet.";
        }
        else if (response.status == 404) {
            error.codigo = response.status;
            error.motivo = "O endereço web (URL) não foi aceito pelo servidor.";
        }
        else if (response.status == 500) {
            var obj = this.converterRespostaParaJson(response);
            error.codigo = response.status;
            error.motivo = obj.message;
            error.isValidacao = obj.isValidation;
            error.itensValidacao = obj.itens;
        }
        else {
            var obj = this.converterRespostaParaJson(response);
            error.codigo = response.status;
            if (!!obj && !!obj['message']) {
                error.motivo = obj.message;
            }
            else {
                error.motivo = "Erro ao executar o comando no servidor do sistema";
                error.motivo += (response.statusText ? " -> " + response.statusText : "") + ".";
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error);
    };
    ApiBase.prototype.converterRespostaParaJson = function (response) {
        var result = response.text();
        if (!!result)
            result = result.trim();
        var resultJson;
        try {
            resultJson = JSON.parse(result);
        }
        catch (e) {
            resultJson = {
                message: 'Resposta em formato inválido -> ' + result.substring(0, 100)
            };
        }
        return resultJson;
    };
    /**
     * Configura os objetos passados no parâmetro com um id gerado automaticamente
     * @param itens
     */
    ApiBase.prototype.setIdApp = function (itens) {
        var date;
        var strNumIni;
        var contador;
        var keyedArray = [];
        var renovarId = function () {
            contador = 1;
            date = new Date();
            strNumIni = date.getHours() + '' + date.getMinutes();
            strNumIni = strNumIni + date.getSeconds() + date.getMilliseconds();
            strNumIni = strNumIni + (Math.random() * 1000).toFixed();
        };
        renovarId();
        for (var _i = 0, itens_1 = itens; _i < itens_1.length; _i++) {
            var item = itens_1[_i];
            if (!item)
                continue;
            if (contador > 999)
                renovarId();
            item.idApp = strNumIni + (contador++);
            keyedArray[item.idApp] = item;
        }
        return keyedArray;
    };
    return ApiBase;
}());

//# sourceMappingURL=api-base.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Endereco; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Regiao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Pedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ItemPedido; });
/* unused harmony export Cupom */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HorarioAtendimento; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Created by eu on 09/05/2017.
 */
var Cliente = (function () {
    function Cliente() {
    }
    return Cliente;
}());

var Endereco = (function () {
    function Endereco() {
    }
    return Endereco;
}());

var Regiao = (function () {
    function Regiao() {
    }
    return Regiao;
}());

var Pedido = (function () {
    function Pedido() {
    }
    return Pedido;
}());

var ItemPedido = (function () {
    function ItemPedido() {
    }
    return ItemPedido;
}());

var Cupom = (function () {
    function Cupom() {
    }
    return Cupom;
}());

var HorarioAtendimento = (function () {
    function HorarioAtendimento() {
    }
    return HorarioAtendimento;
}());
HorarioAtendimento = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], HorarioAtendimento);

//# sourceMappingURL=dados.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KEY_TELA_ANTERIOR_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__minha_conta__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__infra_page_child_base__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var KEY_TELA_ANTERIOR_LOGIN = 'telaAnteriorLogin';
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, viewCtrl, navParams, apiService, alertCtrl, loadingCtrl, pedido) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.navParams = navParams;
        _this.apiService = apiService;
        _this.alertCtrl = alertCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.pedido = pedido;
        _this.loginInfo = {};
        _this.telaAnterior = navParams.get(KEY_TELA_ANTERIOR_LOGIN);
        return _this;
    }
    LoginPage.prototype.autenticar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Efeguando login...'
        });
        var msgValicadao = null;
        var p = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* EmailValidator */]();
        if (!this.loginInfo.login) {
            msgValicadao = "Por favor, informe seu e-mail de acesso.";
        }
        else if (!Object(__WEBPACK_IMPORTED_MODULE_6__shared__["b" /* IsEmail */])(this.loginInfo.login)) {
            msgValicadao = "Por favor, informe um e-mail válido.";
        }
        else if (!this.loginInfo.senha) {
            msgValicadao = "Por favor, informe sua senha de acesso.";
        }
        if (!!msgValicadao) {
            var alert_1 = this.alertCtrl.create({
                title: 'Atenção!',
                subTitle: msgValicadao,
                buttons: [
                    {
                        text: 'Ok',
                    }
                ]
            });
            alert_1.present();
            return;
        }
        var action = {
            onCompleted: function (dados) {
                loading.dismiss();
                if (dados.length == 0) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Atenção!',
                        subTitle: "Usuário/senha inválido.",
                        buttons: [{ text: 'Ok', }]
                    });
                    alert_2.present();
                    return;
                }
                _this.pedido.cliente = dados[0];
                _this.voltarParaTelaAnterior();
            },
            onError: function (erro) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: "Não foi possível efetuar o login. Por favor, tente novamente agora ou mais tarde",
                    buttons: [
                        {
                            text: 'Ok',
                        }
                    ]
                });
                alert.present();
            },
            onFinally: function () {
            }
        };
        loading.present();
        // executa a transação
        var observablePesq = this.apiService.autenticarUsuario(this.loginInfo.login, this.loginInfo.senha);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    };
    LoginPage.prototype.voltarParaTelaAnterior = function () {
        if (!this.telaAnterior) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__minha_conta__["a" /* MinhaContaPage */]);
        }
        else {
            this.navCtrl.setRoot(this.telaAnterior);
        }
    };
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_7__infra_page_child_base__["a" /* PageChildBase */]));
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/conta/login.html"*/'<ion-header>\n\n    <ion-navbar color="vermelho">\n\n        <ion-title>LOGIN</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div style="text-align: center">\n\n        <img src="assets/img/logo-wide.png" style="max-width: 70%;">\n\n    </div>\n\n    <form #form="ngForm" (ngSubmit)="autenticar()">\n\n\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-label>E-mail</ion-label>\n\n                <ion-input type="email" [(ngModel)]="loginInfo.login" name="login"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Senha</ion-label>\n\n                <ion-input type="password" [(ngModel)]="loginInfo.senha" name="senha"></ion-input>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n\n    </form>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n\n\n    <footer>\n\n\n\n        <a *ngIf="!!loginInfo.login && !!loginInfo.senha; else elseBlock" (click)="form.ngSubmit.emit()">Acessar</a>\n\n        <ng-template #elseBlock><a disabled="disabled">Acessar</a></ng-template>\n\n    </footer>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/conta/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__viewdata_pedido_viewdata__["a" /* PedidoViewData */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_tipos__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedido_pagamento__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pedido_endereco__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__conta_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__conta_contas__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_dados__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PedidoPage = PedidoPage_1 = (function () {
    function PedidoPage(navCtrl, navParams, pedido, horarioAtendimento, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pedido = pedido;
        this.horarioAtendimento = horarioAtendimento;
        this.alertCtrl = alertCtrl;
    }
    PedidoPage.prototype.ngAfterContentInit = function () {
        this.verificarAtendimento();
    };
    PedidoPage.prototype.verificarAtendimento = function () {
        var _this = this;
        if (this.horarioAtendimento.isFechado) {
            var alert_1 = this.alertCtrl.create({
                title: 'Desculpe :(',
                message: "N\u00E3o estamos atendendo no momento.",
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel',
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    PedidoPage.prototype.pedidoOpcaoEntrega = function (tipoEntrega) {
        this.pedido.isReceberPedidoCasa = (tipoEntrega == "receber");
    };
    PedidoPage.prototype.irParaAdicionarItem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_tipos__["a" /* ItemTiposPage */]);
    };
    PedidoPage.prototype.removerItem = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atenção',
            message: "Voc\u00EA confirma a exclus\u00E3o do item '" + item.nome + "'?",
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.pedido.removerItem(item);
                    }
                }
            ]
        });
        alert.present();
    };
    PedidoPage.prototype.textoBotaoEtapa = function () {
        var tipoAcao = this.tipoAcaoProximaEtapa();
        switch (tipoAcao) {
            case "endereco":
                return "Local de Entrega";
            case "login":
                return "Efetuar Login";
            default:
                return "Pagamento";
        }
    };
    PedidoPage.prototype.tipoAcaoProximaEtapa = function () {
        if (!this.pedido.cliente) {
            return "login";
        }
        if (this.pedido.isReceberPedidoCasa) {
            return "endereco";
        }
        else {
            return "pagamento";
        }
    };
    PedidoPage.prototype.irParaProximaEtapa = function () {
        var tipoAcao = this.tipoAcaoProximaEtapa();
        if (tipoAcao == "login") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__conta_contas__["a" /* ContasPage */], Object(__WEBPACK_IMPORTED_MODULE_6__shared__["e" /* createObjectKey */])(__WEBPACK_IMPORTED_MODULE_7__conta_login__["a" /* KEY_TELA_ANTERIOR_LOGIN */], PedidoPage_1));
            return;
        }
        if (tipoAcao == "endereco") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pedido_endereco__["a" /* PedidoEnderecoPage */]);
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pedido_pagamento__["a" /* PedidoPagamentoPage */]);
    };
    PedidoPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(PedidoPage_1, {
            item: item
        });
    };
    return PedidoPage;
}());
PedidoPage = PedidoPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pedido',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/pedido.html"*/'<ion-header>\n\n    <ion-toolbar color="vermelho">\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>MEU PEDIDO</ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n    <div class="naoExiste" *ngIf="!pedido.hasItens">\n\n        <h2>Pedido Vazio</h2>\n\n        <img src="assets/img/unhappy.png">\n\n\n\n        <div class="campo_verde">\n\n            <a (click)="irParaAdicionarItem()">\n\n                <button class="flat"><i class="fa fa-plus"></i></button>\n\n            </a>\n\n            <p>ADICIONAR ITENS</p>\n\n        </div>\n\n    </div>\n\n    <div *ngIf="!!pedido.hasItens">\n\n        <br/>\n\n        <ul class="media-list" id="lista_meupedido">\n\n            <li class="media" *ngFor="let item of pedido.itens">\n\n                <div class="media-left">\n\n                    <a href="#">\n\n                        <img class="media-object" src="{{item.imagem}}">\n\n                        <i class="fa fa-trash remover_item" style="margin-top: 5px;" (click)="removerItem(item)"></i>\n\n                    </a>\n\n                </div>\n\n                <div class="media-body"><h4 class="media-heading">\n\n                    <strong>{{item.nome}}</strong></h4>\n\n                    <p class="descricao">{{item.ingredientes}}</p>\n\n                    <span class="lanche_preco">R$ {{item.preco * item.quantidade}}</span>\n\n                    <span class="txt_qtd pull-right">{{item.quantidade}}</span></div>\n\n            </li>\n\n        </ul>\n\n\n\n\n\n        <div class="adicionarItens">\n\n            <a (click)="irParaAdicionarItem()">\n\n                <button class="flat"><i class="fa fa-plus"></i></button>\n\n            </a>\n\n            <p>ADICIONAR MAIS ITENS</p>\n\n        </div>\n\n\n\n        <div class="row">\n\n            <div class="col col-md-6" [ngClass]="{\'ativado\': !pedido.isReceberPedidoCasa}"\n\n                 (click)="pedidoOpcaoEntrega(\'retirar\')">\n\n                <span>RETIRAR PEDIDO</span>\n\n            </div>\n\n            <div class="col col-md-6" [ngClass]="{\'ativado\': pedido.isReceberPedidoCasa}"\n\n                 (click)="pedidoOpcaoEntrega(\'receber\')">\n\n                <span>RECEBER EM CASA</span>\n\n            </div>\n\n        </div>\n\n        <div class="row">\n\n            <div class="col col-md-12">\n\n                <p style="text-align: center" id="meuPedido_total">\n\n                    <strong id="total">TOTAL R$ {{pedido.valorTotal}}</strong>\n\n                </p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <footer>\n\n        <a *ngIf="pedido.valorTotal > 0; else elseBlock" (click)="irParaProximaEtapa()">{{textoBotaoEtapa()}}</a>\n\n        <ng-template #elseBlock><a disabled="disabled">{{textoBotaoEtapa()}}</a></ng-template>\n\n    </footer>\n\n</ion-footer>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/pedido.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_9__services_dados__["c" /* HorarioAtendimento */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PedidoPage);

var PedidoPage_1;
//# sourceMappingURL=pedido.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPedidoViewData; });
/**
 * Created by eu on 04/05/2017.
 */
var ItemPedidoViewData = (function () {
    function ItemPedidoViewData() {
        this.quantidade = 0;
        this.preco = 0;
    }
    ItemPedidoViewData.prototype.equals = function (item) {
        if (!item)
            return false;
        if (item.tipo !== this.tipo)
            return false;
        if (item.itemVendaId !== this.itemVendaId)
            return false;
        if (item.nome !== this.nome)
            return false;
        if (item.observacao !== this.observacao)
            return false;
        if (item.tipo !== "pizza")
            return true;
        if (item.ingredientes !== this.ingredientes)
            return false;
        return true;
    };
    return ItemPedidoViewData;
}());

//# sourceMappingURL=item-pedido.viewdata.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIGerenciadorPizza; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__(17);

var UIGerenciadorPizza = (function () {
    function UIGerenciadorPizza(canvas, corLinha, urlBackgroundImage, isMostrarAreaToque) {
        this.canvas = canvas;
        this.corLinha = corLinha;
        this.urlBackgroundImage = urlBackgroundImage;
        this.isMostrarAreaToque = isMostrarAreaToque;
        this.context = this.canvas.getContext('2d');
        var canvasWidth = parseInt(window.getComputedStyle(canvas, null).getPropertyValue('width'));
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasWidth;
        this.limparArea();
        this.xCentro = canvasWidth / 2;
        this.yCentro = this.xCentro;
        this.raioCircunferencia = this.xCentro * 0.9;
        this.imagens = {};
    }
    UIGerenciadorPizza.prototype.setNumPartes = function (valor) {
        this.numPartes = valor;
        this.tamanhoParte = 360 / valor;
        this.anguloPorPedaco = 2 * Math.PI / valor;
        this.imagens = {};
    };
    UIGerenciadorPizza.prototype.getNumPartes = function () {
        return this.numPartes;
    };
    UIGerenciadorPizza.prototype.limparArea = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    UIGerenciadorPizza.prototype.desenharPosicoes = function (isNaoDesenhaLinhas) {
        this.limparArea();
        for (var parte = 1; parte <= this.numPartes; parte++) {
            this.desenharParte(parte, null, false, isNaoDesenhaLinhas);
        }
        this.desenharCapa();
    };
    UIGerenciadorPizza.prototype.desenharImagem = function (urlImagem, parte) {
        var _this = this;
        var promise = this.desenharImagemInternal(urlImagem, parte, true);
        promise.then(function () { return _this.desenharCapa(); });
        promise.start();
    };
    UIGerenciadorPizza.prototype.desenharImagemInternal = function (urlImagem, parte, isCreatePromiseImage) {
        if (!this.imagens[parte])
            this.imagens[parte] = {};
        this.imagens[parte].url = urlImagem;
        var result = this.desenharParte(parte, this.imagens[parte], isCreatePromiseImage);
        this.desenharParte(parte, this.imagens[parte]);
        return result;
    };
    UIGerenciadorPizza.prototype.desenharCapa = function () {
        var _this = this;
        if (!this.urlBackgroundImage)
            return;
        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.onload = function () {
            _this.context.drawImage(img, 0, 0, _this.canvas.width, _this.canvas.height);
            _this.context.restore();
        };
        img.src = this.urlBackgroundImage;
    };
    UIGerenciadorPizza.prototype.removerImagem = function (parteNum) {
        delete this.imagens[parteNum];
        this.desenharPosicoes();
        for (var parte in this.imagens) {
            this.desenharParte(parseInt(parte), this.imagens[parte]);
        }
        this.desenharCapa();
    };
    UIGerenciadorPizza.prototype.desenharParte = function (numParte, imagemInfo, isCreatePromiseImage, isNaoDesenhaLinhas) {
        var promise = null;
        if (!imagemInfo) {
            this.desenharParteAux(null, numParte, null, isNaoDesenhaLinhas);
        }
        else {
            if (!isCreatePromiseImage) {
                this.createImageLoadPromise(numParte, imagemInfo).start();
            }
            else {
                promise = this.createImageLoadPromise(numParte, imagemInfo);
            }
        }
        return promise;
    };
    UIGerenciadorPizza.prototype.createImageLoadPromise = function (numParte, imagemInfo) {
        var _this = this;
        var afterComplete = function () {
        };
        var objImg = new Image();
        objImg.onload = function () {
            _this.desenharParteAux(objImg, numParte, imagemInfo);
            afterComplete();
        };
        return {
            then: function (callBackAction) {
                afterComplete = callBackAction;
            },
            start: function () {
                objImg.src = imagemInfo.url;
            }
        };
    };
    UIGerenciadorPizza.prototype.desenharParteAux = function (img, numParte, imagemInfo, isNaoDesenhaLinhas) {
        var multiplicador = numParte - 1;
        var anguloInicial = multiplicador * this.anguloPorPedaco;
        var anguloFinal = (multiplicador + 1) * this.anguloPorPedaco;
        this.context.save(); // sava o estado atual do canvas mantendo as imagens anteriores
        // desenha a linha
        this.context.beginPath();
        this.context.moveTo(this.xCentro, this.yCentro);
        this.context.arc(this.xCentro, this.yCentro, this.raioCircunferencia, anguloInicial, anguloFinal, false);
        this.context.closePath();
        this.context.lineWidth = this.raioCircunferencia;
        this.context.lineWidth = 2;
        this.context.strokeStyle = this.corLinha;
        if (!img) {
            if (!isNaoDesenhaLinhas)
                this.context.stroke();
            this.context.restore();
            return;
        }
        this.context.clip();
        this.context.drawImage(img, 0, 0, this.xCentro * 2 * .90, this.yCentro * 2 * .90);
        if (!imagemInfo)
            return;
        if (this.numPartes == 1) {
            // a circunferência possuir apenas uma parte, armazena os pontos iniciais e finais
            // do quadrado que contem a imagem
            imagemInfo.pontos = [[this.xCentro - this.raioCircunferencia, this.yCentro - this.raioCircunferencia],
                [this.xCentro + this.raioCircunferencia, this.yCentro + this.raioCircunferencia]
            ];
        }
        else if (this.numPartes == 2) {
            if (numParte == 1) {
                imagemInfo.pontos = [[this.xCentro - this.raioCircunferencia, this.yCentro + 5],
                    [this.xCentro + this.raioCircunferencia, this.yCentro + this.raioCircunferencia]
                ];
            }
            else {
                imagemInfo.pontos = [[this.xCentro - this.raioCircunferencia, this.yCentro - this.raioCircunferencia],
                    [this.xCentro + this.raioCircunferencia, this.yCentro - 1]
                ];
            }
        }
        else {
            // configura os pontos x e y para futuro cálculo da área
            var x1 = this.xCentro;
            var y1 = this.yCentro;
            var x2 = this.xCentro + this.raioCircunferencia * Math.cos(anguloInicial);
            var y2 = this.yCentro + this.raioCircunferencia * Math.sin(anguloInicial);
            var x3 = this.xCentro + this.raioCircunferencia * Math.cos(anguloFinal);
            var y3 = this.yCentro + this.raioCircunferencia * Math.sin(anguloFinal);
            if (this.numPartes == 3) {
                var reducao = (20 * Math.PI) / 180;
                x2 = this.xCentro + this.raioCircunferencia * Math.cos(anguloInicial);
                y2 = this.yCentro + this.raioCircunferencia * Math.sin(anguloInicial);
                x3 = this.xCentro + this.raioCircunferencia * Math.cos(anguloFinal - (reducao));
                y3 = this.yCentro + this.raioCircunferencia * Math.sin(anguloFinal - (reducao));
            }
            imagemInfo.pontos = [[x1, y1], [x2, y2], [x3, y3]];
        }
        if (!isNaoDesenhaLinhas)
            this.context.stroke();
        if (this.isMostrarAreaToque == true) {
            if (!!imagemInfo && !!imagemInfo.pontos && imagemInfo.pontos.length > 0) {
                this.context.lineWidth = 5;
                this.context.strokeStyle = 'red';
                this.context.beginPath();
                var dbgPontos = imagemInfo.pontos;
                for (var dbgI = 0; dbgI < dbgPontos.length; dbgI++) {
                    if (dbgPontos.length == 2) {
                        if (dbgI == 0) {
                            this.context.moveTo(dbgPontos[dbgI][0], dbgPontos[dbgI][1]);
                        }
                        else {
                            this.context.lineTo(dbgPontos[dbgI][0], dbgPontos[dbgI][1]);
                        }
                    }
                    else {
                        if (dbgI == 0) {
                            this.context.moveTo(dbgPontos[dbgI][0], dbgPontos[dbgI][1]);
                        }
                        else if (Array.isArray(dbgPontos[dbgI][0]) == false) {
                            this.context.lineTo(dbgPontos[dbgI][0], dbgPontos[dbgI][1]);
                        }
                        else {
                            this.context.closePath();
                            this.context.stroke();
                            this.context.beginPath();
                            for (var dbgI2 = 0; dbgI2 < dbgPontos[dbgI].length; dbgI2++) {
                                if (dbgI2 == 0) {
                                    this.context.moveTo(dbgPontos[dbgI][dbgI2][0], dbgPontos[dbgI][dbgI2][1]);
                                }
                                else {
                                    this.context.lineTo(dbgPontos[dbgI][dbgI2][0], dbgPontos[dbgI][dbgI2][1]);
                                }
                            }
                        }
                    }
                }
                this.context.closePath();
                this.context.stroke();
            }
        }
        this.context.restore();
    };
    UIGerenciadorPizza.prototype.isInside = function (x1, y1, x2, y2, x3, y3, x, y) {
        Object(__WEBPACK_IMPORTED_MODULE_0__shared__["g" /* logDebug */])('pizzas', [x1, y1, x2, y2, x3, y3, x, y]);
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.lineTo(x3, y3);
        this.context.closePath();
        if (this.isMostrarAreaToque) {
            this.context.strokeStyle = "yellow";
            this.context.lineWidth = 4;
            this.context.stroke();
        }
        return this.context.isPointInPath(x, y);
    };
    UIGerenciadorPizza.prototype.isInsideQ = function (x1, y1, x2, y2, x, y) {
        // x -= this.canvas.offsetLeft;
        //
        //    y -= this.canvas.offsetTop;
        var ctx = this.context;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x1 + x2, y1);
        ctx.lineTo(x1 + x2, y1 + y2);
        ctx.lineTo(x1, y1 + y2);
        ctx.closePath();
        if (this.isMostrarAreaToque) {
            ctx.strokeStyle = "yellow";
            ctx.lineWidth = 4;
            ctx.stroke();
        }
        return this.context.isPointInPath(x, y);
    };
    UIGerenciadorPizza.prototype.getImagemNaPosicao = function (x, y) {
        var result = false;
        for (var parte in this.imagens) {
            var imagemInfo = this.imagens[parte];
            if (!imagemInfo || !imagemInfo.pontos)
                continue;
            var p = imagemInfo.pontos;
            if (p.length > 2) {
                // passa os parâmetros x1, y1, x2, y2, x3, y3
                result = this.isInside(p[0][0], p[0][1], p[1][0], p[1][1], p[2][0], p[2][1], x, y);
            }
            else {
                result = this.isInsideQ(p[0][0], p[0][1], p[1][0], p[1][1], x, y);
            }
            if (result == true)
                return parseInt(parte);
        }
        return -1;
    };
    UIGerenciadorPizza.prototype.removerImagemNaPosicao = function (x, y) {
        var imagemPosicao = this.getImagemNaPosicao(x, y);
        if (imagemPosicao < 1)
            return false;
        this.removerImagem(imagemPosicao);
        return true;
    };
    UIGerenciadorPizza.prototype.desenharVariasImagens = function (imagensEposicoes) {
        var firstPromise = null;
        var lastPromise = null;
        for (var i = 0; i < imagensEposicoes.length; i++) {
            // encadeia todas as chamadas
            if (firstPromise == null) {
                firstPromise = this.desenharImagemInternal(imagensEposicoes[i].urlImagem, imagensEposicoes[i].numParte, true);
                lastPromise = firstPromise;
            }
            else {
                var promise = this.desenharImagemInternal(imagensEposicoes[i].urlImagem, imagensEposicoes[i].numParte, true);
                lastPromise.then(promise.start);
                lastPromise = promise;
            }
        }
        if (firstPromise != null) {
            lastPromise.then(this.desenharCapa);
            firstPromise.start();
        }
    };
    return UIGerenciadorPizza;
}());

//# sourceMappingURL=ui-gerenciador-pizza.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemAddQuantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewdata_item_pedido_viewdata__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pedido__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__infra_page_child_base__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by eu on 04/05/2017.
 */






var ItemAddQuantPage = (function (_super) {
    __extends(ItemAddQuantPage, _super);
    function ItemAddQuantPage(navCtrl, viewCtrl, navParams, pedido, alertCtrl) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.navParams = navParams;
        _this.pedido = pedido;
        _this.alertCtrl = alertCtrl;
        // If we navigated to this page, we will have an item available as a nav param
        _this.item = navParams.get('item');
        if (!_this.item)
            return _this;
        _this.quantidade = 1;
        _this.valorTotal = _this.item.valor;
        _this.calcularTotal();
        return _this;
    }
    ItemAddQuantPage.prototype.childAfterViewInit = function () {
        if (!this.item) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pedido__["a" /* PedidoPage */]);
        }
    };
    ItemAddQuantPage.prototype.adicionar = function () {
        this.quantidade++;
        this.calcularTotal();
    };
    ItemAddQuantPage.prototype.remover = function () {
        this.quantidade--;
        if (this.quantidade < 0) {
            this.quantidade = 0;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pedido__["a" /* PedidoPage */]);
            return;
        }
        this.calcularTotal();
    };
    ItemAddQuantPage.prototype.calcularTotal = function () {
        this.valorTotal = this.quantidade * this.item.valor;
    };
    ItemAddQuantPage.prototype.incluirItemNoPedido = function () {
        var itemPed = new __WEBPACK_IMPORTED_MODULE_3__viewdata_item_pedido_viewdata__["a" /* ItemPedidoViewData */]();
        itemPed.nome = this.item.nome;
        itemPed.ingredientes = this.item.ingredientes;
        itemPed.imagem = this.item.imagem;
        itemPed.preco = this.item.valor;
        itemPed.quantidade = this.quantidade;
        itemPed.tipo = this.item.tipo;
        itemPed.itemVendaId = this.item.id;
        itemPed.observacao = this.observacao;
        this.pedido.addItem(itemPed);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pedido__["a" /* PedidoPage */]);
    };
    ItemAddQuantPage.prototype.incluirObservacoes = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.observacao = data.observacao;
                    }
                }
            ]
        });
        alert.present();
    };
    return ItemAddQuantPage;
}(__WEBPACK_IMPORTED_MODULE_5__infra_page_child_base__["a" /* PageChildBase */]));
ItemAddQuantPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-add-quant',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-add-quant.html"*/'<ion-header>\n\n    <ion-navbar color="vermelho">\n\n        <ion-title>ADICIONAR ITEM</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n    <div class="divisao">\n\n        <p>SEU PEDIDO ATUAL</p>\n\n    </div>\n\n    <br/>\n\n    <ul class="media-list" id="lista_addItem">\n\n        <li class="media" data-id="3">\n\n            <div class="media-left">\n\n                <a href="#"><img class="media-object" src="{{item.imagem}}"></a>\n\n            </div>\n\n            <div class="media-body">\n\n                <h4 class="media-heading"><strong>{{item.nome}}</strong></h4>\n\n                <p class="descricao">{{item.ingredientes}}</p>\n\n                <span class="lanche_preco">R$ {{item.valor}}</span>\n\n                <div class="incrementador pull-right">\n\n                    <a href="#" (click)="adicionar()"><i class="fa fa-plus-circle add"></i></a>\n\n                    <span class="txt_valor">{{quantidade}}</span>\n\n                    <a href="#" (click)="remover()"><i class="fa fa-minus-circle rm"></i></a>\n\n                </div>\n\n            </div>\n\n        </li>\n\n\n\n    </ul>\n\n\n\n    <div class="adicionarItens">\n\n        <button class="flat" id="abrir_popup" (click)="incluirObservacoes()"><i class="fa fa-plus"></i></button>\n\n        <p>ADICIONAR OBSERVAÇÕES<br/><span>(opcional)</span></p>\n\n\n\n    </div>\n\n\n\n    <div id="infor_preco">\n\n        <p>Unidade <strong id="preco">R$: {{item.valor}}</strong></p>\n\n        <p id="txt_total" style="color:green"><strong id="total">R$: {{valorTotal}}</strong></p>\n\n    </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <footer>\n\n        <a *ngIf="quantidade > 0; else elseBlock" (click)="incluirItemNoPedido()">ADICIONAR</a>\n\n        <ng-template #elseBlock><a disabled="disabled">ADICIONAR</a></ng-template>\n\n    </footer>\n\n</ion-footer>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/pedido/item-add-quant.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ItemAddQuantPage);

//# sourceMappingURL=item-add-quant.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrar_conta__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__minha_conta__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__infra_page_child_base__ = __webpack_require__(23);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContasPage = (function (_super) {
    __extends(ContasPage, _super);
    function ContasPage(navCtrl, viewCtrl, navParams, pedido) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.navParams = navParams;
        _this.pedido = pedido;
        _this.telaVoltar = _this.navParams.get(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* KEY_TELA_ANTERIOR_LOGIN */]);
        _this.isExibirVoltar = !!_this.telaVoltar;
        return _this;
    }
    ContasPage.prototype.childAfterViewInit = function () {
        if (!!this.pedido.cliente) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__minha_conta__["a" /* MinhaContaPage */], Object(__WEBPACK_IMPORTED_MODULE_4__shared__["e" /* createObjectKey */])(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* KEY_TELA_ANTERIOR_LOGIN */], this.telaVoltar));
        }
    };
    ContasPage.prototype.irParaLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login__["b" /* LoginPage */], Object(__WEBPACK_IMPORTED_MODULE_4__shared__["e" /* createObjectKey */])(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* KEY_TELA_ANTERIOR_LOGIN */], this.telaVoltar));
    };
    ContasPage.prototype.irParaCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_conta__["a" /* CadastrarContaPage */], Object(__WEBPACK_IMPORTED_MODULE_4__shared__["e" /* createObjectKey */])(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* KEY_TELA_ANTERIOR_LOGIN */], this.telaVoltar));
    };
    return ContasPage;
}(__WEBPACK_IMPORTED_MODULE_7__infra_page_child_base__["a" /* PageChildBase */]));
ContasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contas',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/conta/contas.html"*/'<ion-header>\n\n    <ion-toolbar color="vermelho" *ngIf="!isExibirVoltar; else elseBlockTipoBarra">\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>MINHA CONTA</ion-title>\n\n    </ion-toolbar>\n\n    <ng-template #elseBlockTipoBarra>\n\n        <ion-navbar color="vermelho">\n\n            <ion-title>MINHA CONTA</ion-title>\n\n        </ion-navbar>\n\n    </ng-template>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n    <div class="cadastro">\n\n        <p id="txt_cadastro" style="margin-left: 5px; margin-right: 5px;">Para processeguir, por favor, faça login ou\n\n            cadastre-se é rapidinho</p>\n\n\n\n        <!--<div class="facebook">-->\n\n        <!--<p>ENTRAR COM O FACEBOOK</p>-->\n\n        <!--<button class="flat" id="btn_facebook"><i class="fa fa-plus"></i></button>-->\n\n        <!--</div>-->\n\n\n\n        <div class="entrar">\n\n            <p>ENTRAR</p>\n\n            <button class="flat" id="btn_entrar" (click)="irParaLogin()"><i class="fa fa-plus"></i></button>\n\n        </div>\n\n\n\n        <div class="cadastrar">\n\n            <p>CADASTRAR</p>\n\n            <button class="flat" id="btn_cadastrar" (click)="irParaCadastro()"><i class="fa fa-plus"></i></button>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/conta/contas.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__viewdata_pedido_viewdata__["a" /* PedidoViewData */]])
], ContasPage);

//# sourceMappingURL=contas.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaContaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewdata_pedido_viewdata__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastrar_conta__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__avaliacao_app__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contas__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__infra_page_child_base__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login__ = __webpack_require__(50);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MinhaContaPage = (function (_super) {
    __extends(MinhaContaPage, _super);
    function MinhaContaPage(navCtrl, viewCtrl, navParams, apiService, pedido, alertCtrl) {
        var _this = _super.call(this, navCtrl, viewCtrl) || this;
        _this.navParams = navParams;
        _this.apiService = apiService;
        _this.pedido = pedido;
        _this.alertCtrl = alertCtrl;
        _this.telaAnterior = navParams.get(__WEBPACK_IMPORTED_MODULE_8__login__["a" /* KEY_TELA_ANTERIOR_LOGIN */]);
        _this.cliente = _this.pedido.cliente;
        return _this;
    }
    MinhaContaPage.prototype.irParaCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastrar_conta__["a" /* CadastrarContaPage */]);
    };
    MinhaContaPage.prototype.alterarSenha = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Alterar senha',
            message: "Informe sua senha atual e a nova senha.",
            inputs: [
                {
                    name: 'senhaAtual',
                    type: 'password',
                    placeholder: 'Senha atual'
                },
                {
                    name: 'senhaNova',
                    type: 'password',
                    placeholder: 'Nova senha',
                }
            ],
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        _this.alterarSenhaSalvar(data.senhaAtual, data.senhaNova);
                    }
                }
            ]
        });
        prompt.present();
    };
    MinhaContaPage.prototype.avalidaApp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__avaliacao_app__["a" /* AvaliacaoAppPage */]);
    };
    MinhaContaPage.prototype.enviarSugestao = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Sugestão',
            inputs: [
                {
                    name: 'sugestao',
                    type: 'text',
                    placeholder: 'Sugestão'
                }
            ],
            buttons: [{ text: 'Cancelar' },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        if (!!data.sugestao) {
                            _this.enviarSugestaoSalvar(data.sugestao);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    MinhaContaPage.prototype.enviarSugestaoSalvar = function (sugestao) {
        var _this = this;
        this.sugestao = sugestao;
        var action = {
            onCompleted: function (dados) {
                var alert = _this.alertCtrl.create({
                    title: 'Sugestão enviada!',
                    subTitle: "Agradecemos por sua colaboração.",
                    buttons: [{ text: 'Ok', }]
                });
                alert.present();
                _this.sugestao = null;
            },
            onError: function (erro) {
                var alert = _this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: "Não foi possível enviar a sugestçao. Por favor, verifique sua conexão com a internet e tente novamente.",
                    buttons: [
                        {
                            text: 'Ok',
                        }
                    ]
                });
                alert.present();
            },
            onFinally: function () {
            }
        };
        // executa a transação
        var observablePesq = this.apiService.salvarSugestaoCliente(this.pedido.cliente.id, sugestao);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    };
    MinhaContaPage.prototype.alterarSenhaSalvar = function (senhaAtual, senhaNova) {
        var _this = this;
        var action = {
            onCompleted: function (dados) {
                var alert = _this.alertCtrl.create({
                    title: 'Informação',
                    subTitle: "Senha alterada com sucesso!",
                    buttons: [{ text: 'Ok', }]
                });
                alert.present();
            },
            onError: function (erro) {
                var alert = _this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: erro.motivo || erro.message,
                    buttons: [
                        {
                            text: 'Ok',
                        }
                    ]
                });
                alert.present();
            },
            onFinally: function () {
            }
        };
        // executa a transação
        var observablePesq = this.apiService.salvarSenha(this.pedido.cliente.id, senhaNova, senhaAtual);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    };
    MinhaContaPage.prototype.efetuarLogout = function () {
        this.pedido.cliente = null;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__contas__["a" /* ContasPage */]);
    };
    return MinhaContaPage;
}(__WEBPACK_IMPORTED_MODULE_7__infra_page_child_base__["a" /* PageChildBase */]));
MinhaContaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-minha-conta',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/conta/minha-conta.html"*/'<ion-header>\n\n\n\n    <ion-toolbar color="vermelho" *ngIf="!telaAnterior; else elseBlockTipoBarra">\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>MINHA CONTA</ion-title>\n\n    </ion-toolbar>\n\n    <ng-template #elseBlockTipoBarra>\n\n        <ion-navbar color="vermelho">\n\n            <ion-title>MINHA CONTA</ion-title>\n\n        </ion-navbar>\n\n    </ng-template>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="divisao">\n\n        Dados\n\n    </div>\n\n    <ul class="lista">\n\n        <li><a (click)="irParaCadastro()">{{cliente.nome}}</a></li>\n\n        <li><a (click)="irParaCadastro()">{{cliente.login}}</a></li>\n\n        <li><a (click)="irParaCadastro()">{{cliente.telefone}}</a></li>\n\n    </ul>\n\n\n\n    <div class="divisao">\n\n        Opções\n\n    </div>\n\n\n\n    <ul class="lista">\n\n        <li><a (click)="alterarSenha()">Alterar Senha</a></li>\n\n        <li><a (click)="irParaCadastro()">Meu Endereço</a></li>\n\n        <li><a (click)="avalidaApp()">Avaliar App</a></li>\n\n        <li><a (click)="enviarSugestao()">Enviar Sugestões</a></li>\n\n    </ul>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <footer>\n\n        <a (click)="efetuarLogout()">Sair</a>\n\n    </footer>\n\n</ion-footer>\n\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/conta/minha-conta.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_3__viewdata_pedido_viewdata__["a" /* PedidoViewData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MinhaContaPage);

//# sourceMappingURL=minha-conta.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pedido_pedido__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dados__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, apiService, loadingCtrl, horarioAtendimento, alertCtrl) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.loadingCtrl = loadingCtrl;
        this.horarioAtendimento = horarioAtendimento;
        this.alertCtrl = alertCtrl;
        this.horarioAtendimento.isFechado = true;
    }
    HomePage.prototype.ngAfterContentInit = function () {
        this.consultarHorarioAtendimento();
    };
    HomePage.prototype.irParaPedido = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pedido_pedido__["a" /* PedidoPage */]);
    };
    HomePage.prototype.consultarHorarioAtendimento = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Consultando horário de atendimento...'
        });
        var action = {
            onCompleted: function (itens) {
                _this.horarioAtendimento.isFechado = itens[0].isFechado;
                _this.horarioAtendimento.horarioInicial = itens[0].horarioInicial;
                _this.horarioAtendimento.horarioFinal = itens[0].horarioFinal;
                loading.dismiss();
            },
            onError: function (erro) {
                loading.dismiss();
                console.log(erro);
                Object(__WEBPACK_IMPORTED_MODULE_3__shared__["f" /* exibirMensagemErro */])('Não foi possível consultar o horário de atendimento.', erro, _this.alertCtrl);
                _this.horarioAtendimento = new __WEBPACK_IMPORTED_MODULE_5__services_dados__["c" /* HorarioAtendimento */]();
                _this.horarioAtendimento.isFechado = true;
            },
            onFinally: function () {
            }
        };
        loading.present();
        // executa a transação
        var observablePesq = this.apiService.consultarAtendimento();
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-toolbar color="vermelho">\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>BALAIO DE LENHA</ion-title>\n    </ion-toolbar>\n    <!--<header class="centro vermelho">-->\n    <!--<i class="fa fa-bars pull-left" aria-hidden="true" menuToggle></i>-->\n    <!--<h1 class="titulo">-->\n    <!--BALAIO DE LENHA-->\n    <!--</h1>-->\n    <!--</header>-->\n    <!--<ion-navbar>-->\n    <!--</ion-navbar>-->\n</ion-header>\n<ion-content>\n\n    <div class="painel">\n        <img src="assets/img/home.png" id="img_principal">\n    </div>\n\n    <p class="centro">Forneira climatizada de pizzas variadas tradicionais, especiais e doces</p>\n\n    <!-- acoordion -->\n    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">\n        <div class="panel panel-default">\n            <div class="panel-heading" role="tab" id="headingOne">\n                <h4 class="panel-title">\n                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"\n                       aria-expanded="true" aria-controls="collapseOne">\n                        <i class="fa fa-clock-o"></i>\n                        Atendimento\n\n                        <i class="fa fa-caret-down pull-right"></i>\n                        <div class="pull-right" style="text-align: right;">\n                            <span *ngIf="horarioAtendimento.isFechado" class="pull-right" class="status-offline">OFFLINE</span>\n                            <span *ngIf="!horarioAtendimento.isFechado" class="pull-right" class="status-online">ONLINE</span>\n\n                        </div>\n\n                    </a>\n                </h4>\n            </div>\n            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">\n                <div class="panel-body">\n                    <p class="centro" *ngIf="!horarioAtendimento.isFechado">ATENDIMENTO HOJE</p>\n                    <p class="centro" *ngIf="horarioAtendimento.isFechado">NÃO ESTAMOS ATENDENDO</p>\n                    <p class="centro" *ngIf="!horarioAtendimento.isFechado" >{{horarioAtendimento.horarioInicial }} ÀS {{horarioAtendimento.horarioFinal}}</p>\n                </div>\n            </div>\n        </div>\n        <div class="panel panel-default">\n            <div class="panel-heading" role="tab" id="headingTwo">\n                <h4 class="panel-title">\n                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"\n                       href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\n                        <i class="fa fa-map-marker"></i>\n                        Endereço\n                        <i class="fa fa-caret-down pull-right"></i>\n\n                    </a>\n                    <!--<span class="pull-right" id="mapa">MAPA</span>-->\n                </h4>\n            </div>\n            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">\n                <div class="panel-body">\n                    <p class="centro">RUA MATO GROSSO</p>\n                    <p class="centro">JARDIM ITÁLIA CHAPECÓ | SC RUA MATO GROSSO</p>\n                </div>\n\n            </div>\n        </div>\n        <div class="panel panel-default">\n            <div class="panel-heading" role="tab" id="headingThree">\n                <h4 class="panel-title">\n                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"\n                       href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">\n                        <i class="fa fa-credit-card"></i>\n                        Formas de Pagamento\n                        <i class="fa fa-caret-down pull-right"></i>\n                    </a>\n                </h4>\n            </div>\n            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">\n                <div class="panel-body">\n                    <div class="painel">\n                        <img src="assets/img/formas-pagamento.png" alt="">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n<ion-footer>\n    <footer>\n        <a *ngIf="horarioAtendimento.isFechado" disabled="disabled">Loja Fechada</a>\n        <a *ngIf="!horarioAtendimento.isFechado" (click)="irParaPedido()">Iniciar Pedido</a>\n    </footer>\n</ion-footer>\n'/*ion-inline-end:"/home/luan/Documentos/projetos/projetosMobile/balaio/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__services_dados__["c" /* HorarioAtendimento */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[279]);
//# sourceMappingURL=main.js.map