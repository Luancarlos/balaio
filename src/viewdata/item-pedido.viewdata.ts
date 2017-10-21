/**
 * Created by eu on 04/05/2017.
 */

export class ItemPedidoViewData {

    constructor() {
        this.quantidade = 0;
        this.preco = 0;
    }

    public quantidade: number;
    public preco: number;
    public imagem: string;

    public itemVendaId: number;
    public tipo: "bebida" | "pizza" | "lanche" | "porção";

    public observacao: string;

    public nome: string;

    public ingredientes: string;

    equals(item: ItemPedidoViewData): boolean {

        if (!item) return false;

        if (item.tipo !== this.tipo) return false;
        if (item.itemVendaId !== this.itemVendaId) return false;
        if (item.nome !== this.nome) return false;
        if (item.observacao !== this.observacao) return false;

        if (item.tipo !== "pizza") return true;

        if (item.ingredientes !== this.ingredientes) return false;

        return true;

    }

}
