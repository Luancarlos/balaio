import {AfterContentInit, Component} from "@angular/core";
import {AlertController, LoadingController, NavController} from "ionic-angular";
import {PedidoPage} from "../pedido/pedido";
import {IAction} from "../../services/iaction";
import {exibirMensagemErro} from "../../shared";
import {ApiService} from "../../services/api.service";
import {HorarioAtendimento} from "../../services/dados";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements AfterContentInit {


    constructor(public navCtrl: NavController,
                private apiService: ApiService,
                private loadingCtrl: LoadingController,
                private horarioAtendimento: HorarioAtendimento,
                private alertCtrl: AlertController
    ) {

        this.horarioAtendimento.isFechado = true;

    }

    ngAfterContentInit()
    {
        this.consultarHorarioAtendimento();
    }

    private irParaPedido(): void {
        this.navCtrl.push(PedidoPage);
    }

    private consultarHorarioAtendimento()
    {
        let loading = this.loadingCtrl.create({
            content: 'Consultando horário de atendimento...'
        });


        let action = <IAction> {

            onCompleted: (itens) => {

                this.horarioAtendimento.isFechado = itens[0].isFechado;
                this.horarioAtendimento.horarioInicial = itens[0].horarioInicial;
                this.horarioAtendimento.horarioFinal = itens[0].horarioFinal;

                loading.dismiss();

            },
            onError: (erro) => {
                loading.dismiss();
                console.log(erro);
                exibirMensagemErro('Não foi possível consultar o horário de atendimento.', erro, this.alertCtrl);
                this.horarioAtendimento = new HorarioAtendimento();
                this.horarioAtendimento.isFechado = true;
            },
            onFinally: () => {
            }
        };

        loading.present();

        // executa a transação
        let observablePesq = this.apiService.consultarAtendimento();

        observablePesq.finally(action.onFinally).subscribe(action.onCompleted, action.onError);
    }
}
