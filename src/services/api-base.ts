/**
 * Created by eu on 04/05/2017.
 */
/**
 * Created by Gilberto on 10/12/2016.
 */
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/catch";
import {IErroRequisicao} from "./i-erro-requisicao";

export abstract class ApiBase {


    constructor(private http: Http, private urlBase: string) {

    }

    protected getHttp(): Http {
        return this.http;
    }

    private combineUrl(relativeUrl: string): string {

        let path = this.urlBase;

        if (!!path) path = path.replace("\\", "/");

        if (!relativeUrl) return path;

        relativeUrl = relativeUrl.replace("\\", "/");

        if (path.endsWith("/") && relativeUrl.startsWith("/")) {
            path += relativeUrl.substring(1);
        } else if (path.endsWith("/")) {
            path += relativeUrl;
        } else {
            path += "/" + relativeUrl;
        }

        return path;

    }

    get<TItem>(relativeUrl: string, handlerMapItemResult?: (any) => TItem): Observable<TItem[]> {

        let options = this.createRequestOptions();
        let url = this.combineUrl(relativeUrl);

        return this.http.get(url, options)
            .catch(this.tratarErroRequisicao)
            .map(response =>
            {
                let resultJson : any;

                try {
                    resultJson = this.tentarConverterResponseToJson(response)
                } catch (e) {
                    return this.tratarErroRequisicao(response);
                }

                return resultJson;
            })
            .map(itens =>
            {
                return itens.map(item =>
                {
                    return handlerMapItemResult ? handlerMapItemResult(item) : item;
                })
            });

    }

    /**
     * Performs a request with `post` http method.
     */
    post<TItem>(relativeUrl: string, body?: any, handlerMapItemResult?: (any) => TItem): Observable<TItem[]> {

        let options = this.createRequestOptions();

        let url = this.combineUrl(relativeUrl);

        return this.http.post(url, (body ? body : {}), options)
            .catch(this.tratarErroRequisicao)
            .map(response => {

                if (response.status == 204) {
                    return [];
                }

                let resultJson : any;

                try {
                    resultJson = this.tentarConverterResponseToJson(response)
                } catch (e) {
                    return this.tratarErroRequisicao(response);
                }

                return resultJson;
            })
            .map(itens => {
                return itens.map(item => {
                    return handlerMapItemResult ? handlerMapItemResult(item) : item;
                });
            });
    }

    private createRequestOptions(): RequestOptions {
        let header = new Headers();

        header.append("Content-Type", "application/json;charset=utf-8");

        let options = new RequestOptions();
        options.headers = header;

        return options;
    }

    private tentarConverterResponseToJson(response: Response | any)
    {
        let resultJson : any;

        let result = response.text();

        if (!!result) result = result.trim();

        try {
            resultJson = JSON.parse(result);
        } catch (e) {
            throw e;
        }

        return resultJson;
    }

    /**
     * Performs a request with `delete` http method.
     */
    delete(relativeUrl: string, body?: any): Observable<Response> {

        let options = this.createRequestOptions();

        if (body) options.body = body;

        return this.http.delete(this.combineUrl(relativeUrl), options);
    }

    private tratarErroRequisicao(response: Response | any) {

        let error: IErroRequisicao = {
            motivo: "",
            codigo: 0,
            isValidacao: false,
            itensValidacao: []
        };

        if (response.type == 3) {
            error.codigo = 3;
            error.motivo = "O serviço está indisponível ou seu dispositivo perdeu a comunicação com a internet.";

        } else if (response.status == 404) {
            error.codigo = response.status;
            error.motivo = "O endereço web (URL) não foi aceito pelo servidor.";

        } else if (response.status == 500) {
            let obj = this.converterRespostaParaJson(response);
            error.codigo = response.status;
            error.motivo = obj.message;
            error.isValidacao = obj.isValidation;
            error.itensValidacao = obj.itens;
        } else {

            let obj = this.converterRespostaParaJson(response);
            error.codigo = response.status;

            if (!!obj && !!obj['message']) {
                error.motivo = obj.message;
            } else {
                error.motivo = "Erro ao executar o comando no servidor do sistema";
                error.motivo += (response.statusText ? " -> " + response.statusText : "") + ".";
            }
        }

        return Observable.throw(error);

    }


    private converterRespostaParaJson(response: Response | any) : any
    {
        let result : string = response.text();

        if (!!result) result = result.trim();
        let resultJson : any;

        try {
            resultJson = JSON.parse(result);
        } catch (e) {
            resultJson = {
                message: 'Resposta em formato inválido -> ' + result.substring(0,100)
            };
        }

        return resultJson;
    }

    /**
     * Configura os objetos passados no parâmetro com um id gerado automaticamente
     * @param itens
     */
    public setIdApp(itens: Array<any>): Array<any> {

        let date: Date;
        let strNumIni: string;
        let contador: number;
        let keyedArray: Array<any> = [];

        let renovarId = () => {
            contador = 1;
            date = new Date();
            strNumIni = date.getHours() + '' + date.getMinutes();
            strNumIni = strNumIni + date.getSeconds() + date.getMilliseconds();
            strNumIni = strNumIni + (Math.random() * 1000).toFixed();
        }

        renovarId();

        for (let item of itens) {
            if (!item) continue;
            if (contador > 999) renovarId();
            item.idApp = strNumIni + (contador++);
            keyedArray[item.idApp] = item;
        }

        return keyedArray;

    }

}
