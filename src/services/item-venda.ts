/**
 * Created by eu on 04/05/2017.
 */
export class ItemVenda {

    public id: number;
    public nome: string;
    public valor: number;
    public limiteSabores: number;
    public valorPersonalizado: number;
    public ingredientes: string;
    public imagem: string;
    public tipo: "bebida" | "pizza" | "lanche" | "porção";
    public quantidade: number;
    public tipoPizza: "doce" | "salgada";

    constructor() {
        this.quantidade = 0;
    }

}

export class ItemVendaPizza extends ItemVenda {

    public sabores: Array<ItemVenda>;
    private _valor: number = 0;
    private _ingredientes: string;

    public borda: ItemVenda;
    public tamanho: ItemVenda;

    constructor() {
        super();
        this.sabores = new Array<ItemVenda>();
        this.tipo = "pizza";
    }

    public saboresAdd(pizza: ItemVenda) {
        this.sabores.push(pizza);
    }

    public processarNovaPizza() {

        this.quantidade = 1;
        let divisoes = {};

        for (let pizza of this.sabores) {
            // calcula a quantidade de pedaços por pizza
            if (!divisoes[pizza.nome]) {
                divisoes[pizza.nome] = 1;
            } else {
                divisoes[pizza.nome] += 1;
            }
        }

        let quantidadeSabores = Object.keys(divisoes).length;

        this.valor = this.tamanho.valor;
        this.nome = 'PIZZA ' + this.tamanho.nome.toUpperCase();

        if (Object.keys(divisoes).length == 1) {

            this.ingredientes = Object.keys(divisoes)[0];

        } else {

            let ingredientes: Array<string> = [];

            if ((quantidadeSabores % 2) != 0) {
                for (let key in divisoes) {
                    ingredientes.push(`${divisoes[key]}/${quantidadeSabores}->${key}`);
                }
            } else {

                let meia = quantidadeSabores / 2;
                let hasMeia: boolean = false;

                for (let key in divisoes) {
                    if (divisoes[key] == meia) {
                        ingredientes.push(`1/2->${key}`);
                    } else {
                        ingredientes.push(`${divisoes[key]}/${quantidadeSabores}->${key}`);
                    }
                }

            }

            this.id = this.tamanho.id;
            this.ingredientes = ingredientes.join("; ");

        }

    }

    public get valor(): number {

        let valor = this._valor;

        if (!!this.borda) {
            valor += this.borda.valor;
        }

        return valor;
    }

    public set valor(v: number) {
        this._valor = v;
    }

    public set ingredientes(v: string) {
        this._ingredientes = v;
    }

    public get ingredientes(): string {
        if (!this.borda) {
            return this._ingredientes;
        }

        if (!this._ingredientes) {
            return 'BORDA de ' + this.borda.nome;
        } else {
            return this._ingredientes + '; BORDA de ' + this.borda.nome;
        }

    }
}
