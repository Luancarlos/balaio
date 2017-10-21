import {Injectable} from "@angular/core";
/**
 * Created by eu on 09/05/2017.
 */

export class Cliente {
    id: number;
    nome: string;
    telefone: string;
    login: string;
    senha: string;
    endereco: Endereco;
    nivelSatisfacaoApp: number;
}

export class Endereco {


    logradouro: string;
    bairro: string;
    cidade: string;
    cep: string;
    regiaoId: number;
    referencia: string;
    numero: string;
    complemento: string;
    regiao: Regiao;


}

export class Regiao {
    regiaoId: number;
    cidade: string;
    bairro: string;
    frete: number;
}

export class Pedido {
    data: Date;
    numero: string;
    total: number;
    status: string;
}

export class ItemPedido {
    tipo: string;
    nome: string;
    ingredientes: string;
    quantidade: number;
    total: number;
}

export class Cupom
{
    cupomId: number;
    isPercentual: boolean;
    desconto : number;
    codigo: string;
}

@Injectable()
export class HorarioAtendimento
{
    isFechado: boolean;
    horarioInicial: string;
    horarioFinal: string;
}
