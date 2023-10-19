import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function getArticles(
  _req: Request,
  res: Response
): Promise<Response> {
  try {
    const articles = await prisma.article.findMany({
      where: {
        active: true,
      },
      select: {
        id: true,
        title: true,
        content: false,
        summary: true,
        publishedAt: true,
        author: true,
        imageUrl: true,
        category: true,
        active: false,
      },
    });
    return res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error getting articles", error });
  }
}

export async function getArticleById(
  req: Request,
  res: Response
): Promise<Response> {
  const articleId = Number(req.params.id);

  try {
    const article = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        summary: true,
        publishedAt: true,
        author: true,
        imageUrl: true,
        category: true,
        active: false,
      },
    });

    return res.status(200).json(article);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error getting article", error });
  }
}

export async function createArticle(
  req: Request,
  res: Response
): Promise<Response> {
  const articleData = req.body;

  try {
    const createdArticle = await prisma.article.create({
      data: articleData,
    });

    return res.status(201).json(createdArticle);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating article", error });
  }
}

export async function updateArticle(
  req: Request,
  res: Response
): Promise<Response> {
  const articleId = Number(req.params.id);
  const articleData = req.body;

  try {
    const updatedArticle = await prisma.article.update({
      where: {
        id: articleId,
      },
      data: articleData,
    });

    return res.status(200).json(updatedArticle);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating article", error });
  }
}

export async function deactivateArticle(
  req: Request,
  res: Response
): Promise<Response> {
  const articleId = Number(req.params.id);

  try {
    await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        active: false,
      },
    });

    return res.status(204).json();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error deactivating article", error });
  }
}
