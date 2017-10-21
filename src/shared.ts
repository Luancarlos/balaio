/**
 * Created by eu on 07/05/2017.
 */
export const IMG_BACKGROUND_URL = 'assets/img/borda_pizza_transp.png';

export const URL_BASE_API = "http://www.balaiodelenha.canionti.com.br/api/mobileapi.php/";
export const URL_BASE_IMG = "http://www.balaiodelenha.canionti.com.br/";

var isDebug: boolean = true;

export function logDebug(param?: any, param2?: any) {
    if (!isDebug) return;
    console.log(param, param2);
}

export function createObjectKey(key: any, value: any): any {
    let obj = {};
    obj[key] = value;
    return obj;
}

export function IsEmail(email) {

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}

export function exibirMensagemErro(mensagem: string, erro: any, alertCtrl: any) {
    let motivo = "";

    if (!!erro && (!!erro.motivo || !!erro.message)) {
        motivo = "<br><br>Motivo: " + (erro.motivo || erro.message);
    }

    let alert = alertCtrl.create({
        title: 'Atenção!',
        subTitle: mensagem + motivo,
        buttons: [
            {
                text: 'Ok',
            }]
    });

    alert.present();
}
