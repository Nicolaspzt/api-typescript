export default class Produto {
    id: number;
    nome: string;
    preco: number;
    descricao?: string;
    // a ? após a declaração de um atributo quer dizer que ele não será obrigatório
    promo?: boolean;

    private static nextId: number = 1;

    constructor(nome: string, preco: number, descricao: string, promo: boolean){
        this.id = Produto.nextId++;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.promo = promo;
    }
}
