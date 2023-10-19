import React from "react";
import { Article } from "../lib/types";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div>
      {article.title}
    </div>
  );
};

export default ArticleCard;
