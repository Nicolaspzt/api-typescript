import Produto from "../models/produtos.js";

const produtos: Produto[] = [];
// simulação de BD que inicia com um array vazio

async function getProduto(id: number): Promise<Produto | undefined> {
  return new Promise((resolve, reject) => {
    // SELECT no SQL
    return resolve(produtos.find((p) => p.id === id));
  });
}

async function getAllProdutos(): Promise<Produto[]> {
  return new Promise((resolve, reject) => {
    return resolve(produtos);
  });
}

async function addProduto(produto: Produto): Promise<Produto> {
  return new Promise((resolve, reject) => {
    // cria pelo construtor para o id ser gerado automaticamente
    const novoProduto = new Produto(
      produto.nome,
      produto.preco,
      produto.descricao ?? "",
      produto.promo ?? false
    );
    produtos.push(novoProduto);
    return resolve(novoProduto);
  });
}

async function deleteProduto(id: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const index = produtos.findIndex((p) => p.id === id);
    if (index === -1) return resolve(false);
    produtos.splice(index, 1);
    return resolve(true);
  });
}

async function updateProduto(
  id: number,
  dados: Partial<Produto>
): Promise<Produto | undefined> {
  return new Promise((resolve, reject) => {
    const produto = produtos.find((p) => p.id === id);
    if (!produto) return resolve(undefined);
    // atualiza só os campos enviados, sem mexer no id
    if (dados.nome !== undefined) produto.nome = dados.nome;
    if (dados.preco !== undefined) produto.preco = dados.preco;
    if (dados.descricao !== undefined) produto.descricao = dados.descricao;
    if (dados.promo !== undefined) produto.promo = dados.promo;
    return resolve(produto);
  });
}

export default {
  getProduto,
  getAllProdutos,
  addProduto,
  deleteProduto,
  updateProduto,
};