// Responsável por receber as requisições HTTP
import { Request, Response, NextFunction } from "express";
import produtoRepository from "../repositories/produtoRepository.js";
import Produto from "../models/produtos.js";

async function getProduto(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(req.params.id as string);
  const produto = await produtoRepository.getProduto(id);
  if (produto) res.json(produto);
  else res.sendStatus(404);
}

async function getAllProdutos(req: Request, res: Response, next: NextFunction) {
  const produtos = await produtoRepository.getAllProdutos();
  res.json(produtos);
}

async function postProduto(req: Request, res: Response, next: NextFunction) {
  const produto = req.body as Produto;
  const resultado = await produtoRepository.addProduto(produto);
  res.status(201).json(resultado);
}

async function deleteProduto(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(req.params.id as string);
  const resultado = await produtoRepository.deleteProduto(id);
  resultado ? res.sendStatus(204) : res.sendStatus(404);
}

async function updateProduto(req: Request, res: Response, next: NextFunction) {
  const id = parseInt(req.params.id as string);
  const dadosProduto = req.body as Produto;
  const resultado = await produtoRepository.updateProduto(id, dadosProduto);
  res.json(resultado);
}

export default {
  getAllProdutos,
  getProduto,
  postProduto,
  deleteProduto,
  updateProduto,
};
