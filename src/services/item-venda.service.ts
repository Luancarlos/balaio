/**
 * Created by eu on 04/05/2017.
 */
import {Injectable} from "@angular/core";
import {ItemVenda} from "./item-venda";
import {ItemPedido, Pedido, Regiao} from "./dados";

@Injectable()
export class ItemVendaService {

    private nu: number = 0;

    public lanches: Array<ItemVenda>;

    public pizzas: Array<ItemVenda>;

    public bebidas: Array<ItemVenda>;

    public bordasPizzas: Array<ItemVenda>;

    public porcoes: Array<ItemVenda>;

    public tamamhosPizza: Array<ItemVenda>;

    public bordas: Array<ItemVenda>;

    public regioes: Array<Regiao>;

    public cidades: Array<Regiao>;

    constructor() {

        //this.inicializarMockTamanhoPizza();
        //this.inicializarMockRegiao();

    }


    limparCache() {

        this.lanches = null;
        this.pizzas = null;
        this.bebidas = null;
        this.bordasPizzas = null;
        this.tamamhosPizza = null;
        this.bordas = null;
        this.regioes = null;
        this.cidades = null;
    }

    private inicializarMockTamanhoPizza() {

        this.tamamhosPizza = [];

        this.tamamhosPizza.push(this.criarTamanhoPizza("Média", 50));
        this.tamamhosPizza.push(this.criarTamanhoPizza("Grande", 60));
        this.tamamhosPizza.push(this.criarTamanhoPizza("Gigante", 70));
        this.tamamhosPizza.push(this.criarTamanhoPizza("Família", 90));

    }

    private inicializarMockPizza() {
        this.pizzas = new Array<ItemVenda>();

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
    }

    private inicializarMockRegiao() {
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

        let defaultNao = new Regiao();
        defaultNao.cidade = "Não encontrei...";
        defaultNao.bairro = "Não encontrei...";
        defaultNao.frete = 1;

        this.cidades.push(defaultNao);

    }

    private inicializarMockBordas() {
        this.bordasPizzas = new Array<ItemVenda>();

        this.bordasPizzas.push(this.criarBordaPizza("Sem Borda", null));
        this.bordasPizzas.push(this.criarBordaPizza("Chocolate Preto", 5));
        this.bordasPizzas.push(this.criarBordaPizza("Chocolate Branco", 5));
        this.bordasPizzas.push(this.criarBordaPizza("Catupiry", 5));
        this.bordasPizzas.push(this.criarBordaPizza("Cheddar", 5));
    }

    private inicializarMockLanches() {
        let item: ItemVenda;

        this.lanches = new Array<ItemVenda>();

        item = new ItemVenda();
        item.id = 1;
        item.nome = "HAMBURGUER";
        item.valor = 14.25;
        item.imagem = 'assets/img/hamburguer.png';
        this.lanches.push(item);

        item = new ItemVenda();
        item.id = 2;
        item.nome = "BISCOITOS DE POLVILHO";
        item.imagem = 'assets/img/hamburguer.png';
        item.valor = 11.25;
        this.lanches.push(item);

    }


    private inicializarMockBebidas() {

        let item: ItemVenda;

        this.bebidas = new Array<ItemVenda>();

        item = new ItemVenda();
        item.id = 1;
        item.nome = "SUCO DE MORANGO";
        item.valor = 5.25;
        item.imagem = 'assets/img/suco.jpg';

        this.bebidas.push(item);
    }


    private criarRegiao(cidade: string, bairro: string, valor: number): Regiao {
        let regiao = new Regiao();

        regiao.regiaoId = ++this.nu;
        regiao.cidade = cidade;
        regiao.bairro = bairro;
        regiao.frete = valor;

        return regiao;
    }


    private criarTamanhoPizza(nome: string, valor: number): ItemVenda {
        let item = new ItemVenda();
        item.id = ++this.nu;
        item.nome = nome;
        item.valor = valor;
        item.ingredientes = "XX FATIAS | 00CM | ATÉ N SABORES";
        return item;
    }

    private criarPizza(nome: string, nomePasta: string, valor: number, isDoce?: boolean): ItemVenda {
        let item = new ItemVenda();
        item.id = ++this.nu;
        item.nome = nome;
        item.valor = valor;
        item.imagem = 'assets/img/pizzas/' + nomePasta.toLowerCase() + '.png';
        item.tipo = "pizza";
        item.tipoPizza = isDoce ? "doce" : "salgada";
        return item;
    }

    private criarBordaPizza(nome: string, valor: number): ItemVenda {
        let item = new ItemVenda();
        item.id = ++this.nu;
        item.nome = nome;
        item.valor = valor;
        item.tipo = "pizza";
        return item;
    }

    private criarPedido(data: Date, numero: string, total: number, status: string): Pedido {

        let pedido = new Pedido();

        pedido.numero = numero;
        pedido.total = total;
        pedido.data = data;
        pedido.status = status;

        return pedido;

    }

    private criarPedidoItem(tipo: string,
                            nome: string,
                            ingredientes: string,
                            quantidade: number,
                            total: number): ItemPedido {

        let item = new ItemPedido();

        item.tipo = tipo;
        item.nome = nome;
        item.ingredientes = ingredientes;
        item.quantidade = quantidade;
        item.total = total;

        return item;

    }

}
