import { Router } from "express";
import {
  createArticle,
  deactivateArticle,
  getArticleById,
  getArticles,
  updateArticle,
} from "../controllers/article.controller";

const router = Router();

router.get("/articles", getArticles);
router.get("/articles/:id", getArticleById);
router.post("/articles", createArticle);
router.put("/articles/:id", updateArticle);
router.delete("/articles/:id", deactivateArticle);

export default router;
