/**
 * Created by eu on 04/05/2017.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Emitente} from "../+emitente/emitente";
import {ServiceBase} from "../shared/infra/service-base";
import "rxjs/add/operator/single";
import {ApiBase} from "./api-base";
import {ItemVenda} from "./item-venda";
import {Http} from "@angular/http";
import {Cliente, Cupom, HorarioAtendimento, ItemPedido, Pedido, Regiao} from "./dados";
import {URL_BASE_API, URL_BASE_IMG} from "../shared";

@Injectable()
export class ApiService extends ApiBase {

    private URL_LST_BEBIDAS: string = "/bebidas";
    private URL_LST_LANCHES: string = "/lanches";
    private URL_LST_PIZZAS: string = "/pizzas";
    private URL_LST_BORDAS: string = "/bordas";
    private URL_LST_TAM_PIZZA: string = "/tamanhos";


    private URL_CLIE_LOGIN: string = "/login";
    private URL_CLIE_CAD: string = "/salvarCliente";
    private URL_CLIE_SENHA: string = "/alterarSenha";
    private URL_CLIE_SUGEST: string = "/inserirSugestaoCliente";
    private URL_CLIE_AVALIA: string = "/avaliacaoCliente";
    private URL_CLIE_LISTA_PED: string = "/cliente/pedidos/";

    private URL_END_REGIOES: string = "/regioes";

    private URL_PEDIDO: string = "/pedido";
    private URL_PEDIDO_ITENS: string = "/pedido/listar-itens/";

    private URL_CUPOM: string = "/cupons/";
    private URL_ATENDIMENTO: string = "/atendimento";

    constructor(http: Http) {
        super(http, URL_BASE_API);
    }

    public listarBebidas(): Observable<ItemVenda[]> {

        let handlerMapItem = (item: any) => {

            return <ItemVenda>{
                id: item.Bebida_ID
                , nome: item.Nome
                , valor: parseFloat(item.Preco)
                , imagem: URL_BASE_IMG + item.url_imagem
                , tipo: "bebida"
            };
        };

        let result = this.get(this.URL_LST_BEBIDAS, handlerMapItem);

        return result;

    }

    public listarRegioes(): Observable<Regiao[]> {

        let handlerMapItem = (item: any) => {

            return <Regiao>{
                regiaoId: item.Regiao_ID
                , cidade: item.Cidade
                , bairro: item.Bairro
                , frete : parseFloat(item.ValorFrete)
            };
        };

        let result = this.get(this.URL_END_REGIOES, handlerMapItem);

        return result;

    }

    public listarPedidoItens(numeroPedido: string): Observable<ItemPedido[]> {

        let handlerMapItem = (item: any) => {

            return <ItemPedido>{
                nome: item.Nome
                , ingredientes: item.Ingredientes
                , quantidade: item.Quantidade
                , tipo: item.Tipo
                , total : parseFloat(item.ValorTotal)
            };
        };

        let result = this.get(this.URL_PEDIDO_ITENS + numeroPedido, handlerMapItem);

        return result;

    }

    public listarPedidosCliente(clienteId: number): Observable<Pedido[]> {

        let handlerMapItem = (item: any) => {

            return <Pedido>{
                data:  new Date(item.DataSolicitadao)
                , numero: item.NumeroPedido
                , total: item.ValorTotalPedido
                , status: item.Status
            };
        };

        let result = this.get(this.URL_CLIE_LISTA_PED + clienteId, handlerMapItem);

        return result;

    }

    public listarPizzas(): Observable<ItemVenda[]> {

        let handlerMapItem = (item: any) => {

            return <ItemVenda>{
                id: item.Pizza_ID
                , nome: item.Nome
                , valor: parseFloat(item.PrecoBase)
                , imagem: URL_BASE_IMG + item.url_imagem
                //, imagem: 'assets/img/pizzas.png' // isso deve ser usado qdo estiver testando no navegador
                , tipoPizza: item.Tipo == 'D' ? 'doce' : 'salgada'
            };
        };

        let result = this.get(this.URL_LST_PIZZAS, handlerMapItem);

        return result;

    }

    public listarLanches(): Observable<ItemVenda[]> {

        let handlerMapItem = (item: any) => {

            return <ItemVenda>{
                id: item.Lanche_ID
                , nome: item.Nome
                , valor: parseFloat(item.Preco)
                , imagem: URL_BASE_IMG + item.url_imagem
                , ingredientes: item.Ingredientes
            };
        };

        let result = this.get(this.URL_LST_LANCHES, handlerMapItem);

        return result;

    }

    public listarBordas(): Observable<ItemVenda[]> {

        let handlerMapItem = (item: any) => {

            return <ItemVenda>{
                id: item.Borda_ID
                , nome: item.Nome
                , valor: parseFloat(item.Preco)
            };
        };

        let result = this.get(this.URL_LST_BORDAS, handlerMapItem);

        return result;

    }

    public listarTamanhosPizza(): Observable<ItemVenda[]> {

        let handlerMapItem = (item: any) => {

            return <ItemVenda>{
                id: item.Tamanho_ID
                , nome: item.Nome
                , ingredientes: item.Descricao
                , valor: parseFloat(item.Valor)
                , limiteSabores: parseInt(item.LimiteSabores)
            };
        };

        let result = this.get(this.URL_LST_TAM_PIZZA, handlerMapItem);

        return result;

    }

    public listarPorcoes(): Observable<ItemVenda[]> {

        let handlerMapItem = (item: any) => {

            return <ItemVenda>{
                id: item.Porcao_ID
                , nome: item.Nome
                , valor: parseFloat(item.Preco)
                , imagem: URL_BASE_IMG + item.url_imagem
                , ingredientes: item.Ingredientes
            };
        };

        let result = this.get(this.URL_LST_LANCHES, handlerMapItem);

        return result;

    }

    public consultarCupom(cupom: string, clienteId: number): Observable<Cupom[]> {

        let handlerMapItem = (item: any) => {

            return <Cupom>{
                cupomId: parseInt(item.cupomId)
                , desconto: parseFloat(item.desconto)
                , isPercentual: (item.isPercentual == "1")
                , codigo : cupom
            };
        };

        cupom = (cupom || '').trim().toUpperCase();
        clienteId = (clienteId || 0);

        let result = this.get(this.URL_CUPOM + cupom + '/' + clienteId , handlerMapItem);

        return result;

    }

    public consultarAtendimento(): Observable<HorarioAtendimento[]> {

        let handlerMapItem = (item: any) => {

            return <HorarioAtendimento>{
                isFechado: (item.IsFechado == '1')
                , horarioInicial: item.HorarioInicial && item.HorarioInicial.substring(0, 5)
                , horarioFinal: item.HorarioFinal && item.HorarioFinal.substring(0, 5)
            };
        };

        let result = this.get(this.URL_ATENDIMENTO, handlerMapItem);

        return result;

    }

    autenticarUsuario(login: string, senha: string): Observable<Cliente[]> {

        let handlerMapItem = (item: any) => {

            return <Cliente>{
                id: item.Cliente_ID
                , nome: item.Nome
                , telefone: item.Telefone
                , login: item.Login
                , endereco: !item.Endereco ? {} : JSON.parse(item.Endereco)
                , nivelSatisfacaoApp: item.NivelSatisfacaoApp
            };
        };

        let result = this.post(this.URL_CLIE_LOGIN, {login: login, senha: senha}, handlerMapItem);

        return result;

    }

    salvarCliente(cliente: Cliente): Observable<Array<{ id: number }>> {

        let handlerMapItem = (item: any) => {

            return {
                id: item.Cliente_ID
            };
        };

        let result = this.post(this.URL_CLIE_CAD, cliente, handlerMapItem);

        return result;

    }

    salvarSenha(clienteId: number, senhaNova: string, senhaAtual: string) {

        let handlerMapItem = (item: any) => {
            return {
                id: item.Cliente_ID
            };
        };

        let result = this.post(this.URL_CLIE_SENHA, {
            clienteId: clienteId,
            senhaNova: senhaNova,
            senhaAtual: senhaAtual
        }, handlerMapItem);

        return result;

    }

    salvarSugestaoCliente(clienteId: number, sugestao: string) {

        let result = this.post(this.URL_CLIE_SUGEST, {clienteId: clienteId, sugestao: sugestao});

        return result;

    }

    salvarAvaliacaoCliente(clienteId: number, nivelSatisfacao: number, sugestao?: string) {

        let result = this.post(this.URL_CLIE_AVALIA, {
            clienteId: clienteId, nivelSatisfacao: nivelSatisfacao,
            sugestao: sugestao
        });

        return result;

    }

    enviarPedido(pedido: any) {

        let handlerMapItem = (item: any) => {
            return {
                numeroPedido: item.Numero
            };
        };

        let result = this.post(this.URL_PEDIDO, pedido, handlerMapItem);

        return result;
    }


}
