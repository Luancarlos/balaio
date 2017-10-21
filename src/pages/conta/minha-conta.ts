import {Component} from "@angular/core";
import {AlertController, NavController, NavParams, ViewController} from "ionic-angular";
import {Cliente} from "../../services/dados";
import {ApiService} from "../../services/api.service";
import {PedidoViewData} from "../../viewdata/pedido.viewdata";
import {CadastrarContaPage} from "./cadastrar-conta";
import {IAction} from "../../services/iaction";
import {AvaliacaoAppPage} from "./avaliacao-app";
import {ContasPage} from "./contas";
import {PageChildBase} from "../../infra/page-child-base";
import {KEY_TELA_ANTERIOR_LOGIN} from "./login";

@Component({
    selector: 'page-minha-conta',
    templateUrl: 'minha-conta.html'
})
export class MinhaContaPage extends PageChildBase {

    private cliente: Cliente

    private sugestao: string;
    private avaliacao: number;
    private telaAnterior: any;

    constructor(navCtrl: NavController,
                viewCtrl: ViewController,
                public navParams: NavParams,
                private apiService: ApiService,
                private pedido: PedidoViewData,
                private alertCtrl: AlertController) {

        super(navCtrl, viewCtrl);
        this.telaAnterior = navParams.get(KEY_TELA_ANTERIOR_LOGIN);
        this.cliente = this.pedido.cliente;
    }

    private irParaCadastro() {
        this.navCtrl.push(CadastrarContaPage);
    }

    private alterarSenha() {
        let prompt = this.alertCtrl.create({
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
                    handler: data => {
                        this.alterarSenhaSalvar(data.senhaAtual, data.senhaNova);
                    }
                }
            ]
        });

        prompt.present();
    }

    private avalidaApp() {
        this.navCtrl.push(AvaliacaoAppPage);
    }

    private enviarSugestao() {
        let prompt = this.alertCtrl.create({
            title: 'Sugestão',
            inputs: [
                {
                    name: 'sugestao',
                    type: 'text',
                    placeholder: 'Sugestão'
                }
            ],
            buttons: [{text: 'Cancelar'},
                {
                    text: 'Salvar',
                    handler: data => {

                        if (!!data.sugestao) {
                            this.enviarSugestaoSalvar(data.sugestao);
                        }
                    }
                }
            ]
        });
        prompt.present();
    }

    private enviarSugestaoSalvar(sugestao: string) {
        this.sugestao = sugestao;

        let action = <IAction> {

            onCompleted: (dados) => {

                let alert = this.alertCtrl.create({
                    title: 'Sugestão enviada!',
                    subTitle: "Agradecemos por sua colaboração.",
                    buttons: [{text: 'Ok',}]
                });

                alert.present();
                this.sugestao = null;
            }
            ,
            onError: (erro) => {

                let alert = this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: "Não foi possível enviar a sugestçao. Por favor, verifique sua conexão com a internet e tente novamente.",
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
        let observablePesq = this.apiService.salvarSugestaoCliente(this.pedido.cliente.id, sugestao);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    }

    private alterarSenhaSalvar(senhaAtual: string, senhaNova: string) {

        let action = <IAction> {

            onCompleted: (dados) => {

                let alert = this.alertCtrl.create({
                    title: 'Informação',
                    subTitle: "Senha alterada com sucesso!",
                    buttons: [{text: 'Ok',}]
                });

                alert.present();

            },
            onError: (erro) => {

                let alert = this.alertCtrl.create({
                    title: 'Atenção!',
                    subTitle: erro.motivo || erro.message,
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
        let observablePesq = this.apiService.salvarSenha(this.pedido.cliente.id, senhaNova, senhaAtual);
        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    }

    private efetuarLogout() {
        this.pedido.cliente = null;
        this.navCtrl.push(ContasPage);
    }

}
