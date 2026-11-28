// Responsável por definir os endpoints da API e direcionar as requisições
import express from "express";
import produtoController from "../controllers/produtoController.js";

const router = express.Router();

router.get("/:id", produtoController.getProduto);
router.get("/", produtoController.getAllProdutos);
router.post("/", produtoController.postProduto);
router.delete("/:id", produtoController.deleteProduto);
router.patch("/:id", produtoController.updateProduto);

export default router;