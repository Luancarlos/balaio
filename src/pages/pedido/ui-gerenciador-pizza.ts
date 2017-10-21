import {logDebug} from "../../shared";
/**
 * Created by Gilberto Alexandre on 05/05/2017.
 */

export interface IImageLoadPromise {
    start: () => void
    then: (callback: () => void) => void
}
export interface IParamDesenharMultiplas {
    urlImagem: string,
    numParte: number
}

export class UIGerenciadorPizza {

    private context: any;
    private xCentro: number;
    private yCentro: number;
    private imagens: any;
    private tamanhoParte: number;
    private anguloPorPedaco: number;
    private raioCircunferencia: number;
    private numPartes: number;

    constructor(private canvas: any,
                private corLinha: string,
                private urlBackgroundImage: string,
                private isMostrarAreaToque: boolean) {

        this.context = this.canvas.getContext('2d');

        let canvasWidth = parseInt(window.getComputedStyle(canvas, null).getPropertyValue('width'));
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasWidth;

        this.limparArea();

        this.xCentro = canvasWidth / 2;
        this.yCentro = this.xCentro;
        this.raioCircunferencia = this.xCentro * 0.9;

        this.imagens = {};

    }


    public setNumPartes(valor: number) {

        this.numPartes = valor;
        this.tamanhoParte = 360 / valor;
        this.anguloPorPedaco = 2 * Math.PI / valor;
        this.imagens = {};
    }


    public getNumPartes(): number {
        return this.numPartes;
    }

    public limparArea() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }

    public desenharPosicoes(isNaoDesenhaLinhas?: boolean): void {

        this.limparArea();

        for (let parte = 1; parte <= this.numPartes; parte++) {
            this.desenharParte(parte, null, false, isNaoDesenhaLinhas);
        }

        this.desenharCapa();

    }

    public desenharImagem(urlImagem: string, parte: number): void {


        let promise = this.desenharImagemInternal(urlImagem, parte, true);

        promise.then(() => this.desenharCapa());

        promise.start();

    }

    public desenharImagemInternal(urlImagem: string, parte: number, isCreatePromiseImage?: boolean): IImageLoadPromise {

        if (!this.imagens[parte]) this.imagens[parte] = {};

        this.imagens[parte].url = urlImagem;

        let result = this.desenharParte(parte, this.imagens[parte], isCreatePromiseImage);


        this.desenharParte(parte, this.imagens[parte]);

        return result;
    }


    public desenharCapa(): void {

        if (!this.urlBackgroundImage) return;

        let img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');

        img.onload = () => {
            this.context.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.context.restore();
        };

        img.src = this.urlBackgroundImage;

    }

    public removerImagem(parteNum: number): void {

        delete this.imagens[parteNum];

        this.desenharPosicoes();

        for (let parte in this.imagens) {
            this.desenharParte(parseInt(parte), this.imagens[parte]);
        }

        this.desenharCapa();

    }

    private desenharParte(numParte: number, imagemInfo,
                          isCreatePromiseImage?: boolean,
                          isNaoDesenhaLinhas?: boolean): IImageLoadPromise {

        let promise: IImageLoadPromise = null;

        if (!imagemInfo) {

            this.desenharParteAux(null, numParte, null, isNaoDesenhaLinhas);
        } else {

            if (!isCreatePromiseImage) {
                this.createImageLoadPromise(numParte, imagemInfo).start();
            } else {
                promise = this.createImageLoadPromise(numParte, imagemInfo);
            }
        }

        return promise;

    }

    private createImageLoadPromise(numParte: number, imagemInfo): IImageLoadPromise {
        let afterComplete = () => {
        };

        let objImg = new Image();

        objImg.onload = () => {
            this.desenharParteAux(objImg, numParte, imagemInfo);
            afterComplete();
        };

        return {

            then: function (callBackAction) {
                afterComplete = callBackAction;
            },
            start: function () {
                objImg.src = imagemInfo.url;
            }

        }

    }

    private desenharParteAux(img, numParte: number, imagemInfo, isNaoDesenhaLinhas?: boolean): void {

        let multiplicador = numParte - 1;

        let anguloInicial = multiplicador * this.anguloPorPedaco;
        let anguloFinal = (multiplicador + 1) * this.anguloPorPedaco;

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
            if (!isNaoDesenhaLinhas) this.context.stroke();
            this.context.restore();
            return;
        }

        this.context.clip();
        this.context.drawImage(img, 0, 0, this.xCentro * 2 * .90, this.yCentro * 2 * .90);

        if (!imagemInfo) return;

        if (this.numPartes == 1) {
            // a circunferência possuir apenas uma parte, armazena os pontos iniciais e finais
            // do quadrado que contem a imagem
            imagemInfo.pontos = [[this.xCentro - this.raioCircunferencia, this.yCentro - this.raioCircunferencia],
                [this.xCentro + this.raioCircunferencia, this.yCentro + this.raioCircunferencia]
            ];

        } else if (this.numPartes == 2) {
            if (numParte == 1) // parte de baixo
            {
                imagemInfo.pontos = [[this.xCentro - this.raioCircunferencia, this.yCentro + 5],
                    [this.xCentro + this.raioCircunferencia, this.yCentro + this.raioCircunferencia]
                ];
            } else {
                imagemInfo.pontos = [[this.xCentro - this.raioCircunferencia, this.yCentro - this.raioCircunferencia],
                    [this.xCentro + this.raioCircunferencia, this.yCentro - 1]
                ];

            }
        } else {

            // configura os pontos x e y para futuro cálculo da área
            let x1 = this.xCentro;
            let y1 = this.yCentro;

            let x2 = this.xCentro + this.raioCircunferencia * Math.cos(anguloInicial);
            let y2 = this.yCentro + this.raioCircunferencia * Math.sin(anguloInicial);

            let x3 = this.xCentro + this.raioCircunferencia * Math.cos(anguloFinal);
            let y3 = this.yCentro + this.raioCircunferencia * Math.sin(anguloFinal);

            if (this.numPartes == 3) {

                let reducao = (20 * Math.PI) / 180;

                x2 = this.xCentro + this.raioCircunferencia * Math.cos(anguloInicial);
                y2 = this.yCentro + this.raioCircunferencia * Math.sin(anguloInicial);

                x3 = this.xCentro + this.raioCircunferencia * Math.cos(anguloFinal - (reducao));
                y3 = this.yCentro + this.raioCircunferencia * Math.sin(anguloFinal - (reducao));

            }

            imagemInfo.pontos = [[x1, y1], [x2, y2], [x3, y3]];

        }

        if (!isNaoDesenhaLinhas) this.context.stroke();

        if (this.isMostrarAreaToque == true) {

            if (!!imagemInfo && !!imagemInfo.pontos && imagemInfo.pontos.length > 0) {

                this.context.lineWidth = 5;
                this.context.strokeStyle = 'red';
                this.context.beginPath();

                let dbgPontos = imagemInfo.pontos;

                for (let dbgI = 0; dbgI < dbgPontos.length; dbgI++) {

                    if (dbgPontos.length == 2) {
                        if (dbgI == 0) {
                            this.context.moveTo(dbgPontos[dbgI][0], dbgPontos[dbgI][1]);
                        } else {
                            this.context.lineTo(dbgPontos[dbgI][0], dbgPontos[dbgI][1]);
                        }

                    } else {

                        if (dbgI == 0) {
                            this.context.moveTo(dbgPontos[dbgI][0], dbgPontos[dbgI][1]);
                        } else if (Array.isArray(dbgPontos[dbgI][0]) == false) {
                            this.context.lineTo(dbgPontos[dbgI][0], dbgPontos[dbgI][1]);
                        }
                        else {

                            this.context.closePath();
                            this.context.stroke();
                            this.context.beginPath();

                            for (let dbgI2 = 0; dbgI2 < dbgPontos[dbgI].length; dbgI2++) {
                                if (dbgI2 == 0) {
                                    this.context.moveTo(dbgPontos[dbgI][dbgI2][0], dbgPontos[dbgI][dbgI2][1]);
                                } else {
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

    }

    private isInside(x1, y1, x2, y2, x3, y3, x, y): boolean {

        logDebug('pizzas', [x1, y1, x2, y2, x3, y3, x, y]);

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
    }


    private isInsideQ(x1, y1, x2, y2, x, y): boolean {

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
    }

    public getImagemNaPosicao(x: number, y: number): number {

        let result = false;

        for (let parte in this.imagens) {

            let imagemInfo = this.imagens[parte];

            if (!imagemInfo || !imagemInfo.pontos) continue;

            let p = imagemInfo.pontos;

            if (p.length > 2) {

                // passa os parâmetros x1, y1, x2, y2, x3, y3
                result = this.isInside(p[0][0], p[0][1], p[1][0], p[1][1], p[2][0], p[2][1], x, y);

            } else {


                result = this.isInsideQ(p[0][0], p[0][1], p[1][0], p[1][1], x, y);

            }

            if (result == true) return parseInt(parte);

        }

        return -1;

    }

    public removerImagemNaPosicao(x: number, y: number): boolean {

        let imagemPosicao = this.getImagemNaPosicao(x, y);

        if (imagemPosicao < 1) return false;

        this.removerImagem(imagemPosicao);

        return true;

    }

    public  desenharVariasImagens(imagensEposicoes: Array<IParamDesenharMultiplas>): void {

        let firstPromise: IImageLoadPromise = null;
        let lastPromise: IImageLoadPromise = null;

        for (let i = 0; i < imagensEposicoes.length; i++) {

            // encadeia todas as chamadas
            if (firstPromise == null) {
                firstPromise = this.desenharImagemInternal(imagensEposicoes[i].urlImagem, imagensEposicoes[i].numParte, true);
                lastPromise = firstPromise;
            } else {
                let promise = this.desenharImagemInternal(imagensEposicoes[i].urlImagem, imagensEposicoes[i].numParte, true);
                lastPromise.then(promise.start);
                lastPromise = promise;
            }

        }

        if (firstPromise != null) {
            lastPromise.then(this.desenharCapa);
            firstPromise.start();
        }


    }

}
