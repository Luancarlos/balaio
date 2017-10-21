import {Component} from "@angular/core";
import {AlertController, LoadingController, NavController, NavParams, ViewController} from "ionic-angular";
import {IAction} from "../../services/iaction";
import {ApiService} from "../../services/api.service";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {Cliente} from "../../services/dados";
import {MinhaContaPage} from "./minha-conta";
import {EmailValidator} from "@angular/forms";
import {IsEmail} from "../../shared";
import {PageChildBase} from "../../infra/page-child-base";

export const KEY_TELA_ANTERIOR_LOGIN = 'telaAnteriorLogin';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage extends PageChildBase {

    private loginInfo: any = {};

    private telaAnterior: any;

    constructor(navCtrl: NavController
        , viewCtrl: ViewController
        , private navParams: NavParams
        , private apiService: ApiService
        , private alertCtrl: AlertController
        , private loadingCtrl: LoadingController
        , private pedido: PedidoViewData) {

        super(navCtrl, viewCtrl);
        this.telaAnterior = navParams.get(KEY_TELA_ANTERIOR_LOGIN);

    }

    autenticar() {

        let loading = this.loadingCtrl.create({
            content: 'Efeguando login...'
        });

        let msgValicadao = null;

        var p = new EmailValidator();

        if (!this.loginInfo.login) {
            msgValicadao = "Por favor, informe seu e-mail de acesso.";
        } else if (!IsEmail(this.loginInfo.login)) {
            msgValicadao = "Por favor, informe um e-mail válido.";
        }
        else if (!this.loginInfo.senha) {
            msgValicadao = "Por favor, informe sua senha de acesso.";
        }

        if (!!msgValicadao) {

            let alert = this.alertCtrl.create({
                title: 'Atenção!',
                subTitle: msgValicadao,
                buttons: [
                    {
                        text: 'Ok',
                    }]
            });

            alert.present();

            return;
        }

        let action = <IAction> {

            onCompleted: (dados) => {

                loading.dismiss();
                if (dados.length == 0) {

                    let alert = this.alertCtrl.create({
                        title: 'Atenção!',
                        subTitle: "Usuário/senha inválido.",
                        buttons: [{text: 'Ok',}]
                    });

                    alert.present();
                    return;
                }

                this.pedido.cliente = <Cliente> dados[0];
                this.voltarParaTelaAnterior();

            },
            onError: (erro) => {

                loading.dismiss();
                let alert = this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: "Não foi possível efetuar o login. Por favor, tente novamente agora ou mais tarde",
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

        loading.present();
        // executa a transação
        let observablePesq = this.apiService.autenticarUsuario(this.loginInfo.login, this.loginInfo.senha);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);


    }

    voltarParaTelaAnterior(): void {

        if (!this.telaAnterior) {
            this.navCtrl.setRoot(MinhaContaPage);
        } else {
            this.navCtrl.setRoot(this.telaAnterior);
        }

    }


}
