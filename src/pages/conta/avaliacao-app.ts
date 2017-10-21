import {Component} from "@angular/core";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {IAction} from "../../services/iaction";
import {ApiService} from "../../services/api.service";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {ClienteInfo} from "../../services/cliente-info";
import {MinhaContaPage} from "./minha-conta";
import {logDebug} from "../../shared";

export const KEY_TELA_ANTERIOR_LOGIN = 'telaAnteriorLogin';

@Component({
    selector: 'page-avaliacao-app',
    templateUrl: 'avaliacao-app.html'
})
export class AvaliacaoAppPage {

    private opcaoSelecionada: number;
    private sugestao: string;
    private avaliacao: number = null;

    constructor(private navCtrl: NavController
        , private navParams: NavParams
        , private apiService: ApiService
        , private alertCtrl: AlertController
        , private pedido: PedidoViewData) {

        this.avaliacao = this.pedido.cliente.nivelSatisfacaoApp
    }

    private avaliar(avaliacao: number) {

        if (this.avaliacao == avaliacao) {
            this.avaliacao = null;
        } else {
            this.avaliacao = avaliacao;
        }

        logDebug(this.avaliacao, avaliacao);

    }

    private enviarAvaliacao() {

        if (!this.avaliacao) {

            let alert = this.alertCtrl.create({
                title: 'Atenção',
                subTitle: "Por favor, selecionar uma avaliação.",
                buttons: [{
                    text: 'Ok'
                }]
            });

            alert.present();

            return;
        }

        let action = <IAction> {

            onCompleted: (dados) => {

                this.pedido.cliente.nivelSatisfacaoApp = this.avaliacao;

                let alert = this.alertCtrl.create({
                    title: 'Avaliação enviada',
                    subTitle: "Agradecemos sua participação!",
                    buttons: [{
                        text: 'Ok',
                        handler: (a) => {
                            this.voltarParaTelaAnterior();
                        }
                    }]
                });

                alert.present();

            },
            onError: (erro) => {

                let alert = this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: "Não foi possível enviar a avaliação. Por favor, tente novamente agora ou mais tarde",
                    buttons: [
                        {
                            text: 'Ok',
                        }]
                });

                alert.present();


            },
            onFinally: () => {
            }
        };

        // executa a transação
        let observablePesq = this.apiService.salvarAvaliacaoCliente(this.pedido.cliente.id, this.avaliacao, this.sugestao);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    }

    voltarParaTelaAnterior(): void {
        this.navCtrl.push(MinhaContaPage);
    }


}
