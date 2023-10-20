import React from "react";
import { Article } from "../lib/types";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { formatDate } from "../lib/utils";
import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Card className="relative group flex justify-between items-start p-4 w-full gap-6">
      <CardHeader className="p-0 pt-2 flex flex-col h-full">
        <CardTitle className="text-2xl text-center lg:text-start">{article.title}</CardTitle>
        <CardDescription className="flex flex-col w-full">
          <p className="h-16 overflow-hidden">{article.summary}</p>
          <p className="pt-2 text-card-foreground font-semibold">
            {formatDate(article.publishedAt)}
          </p>
          <p className="pt-2 font-medium">
            By:
            <span className="pl-2  text-card-foreground font-semibold">
              {article.author}
            </span>
          </p>
          <div className="flex w-full justify-start items-center pt-2">
            <Badge variant={"secondary"} className="cursor-pointer">
              {article.category}
            </Badge>
          </div>
        </CardDescription>
      </CardHeader>

      <img
        src={article.imageUrl}
        alt="Article Image"
        className="object-cover rounded-lg w-[240px] h-full hidden md:block"
      />

      <Button 
      className="absolute transition opacity-0 group-hover:opacity-100 bottom-5 md:left-1/3 md:px-10 left-[11.5rem] px-6">
        <Link to={`/`}>Keep Reading</Link>
      </Button>
    </Card>
  );
};

export default ArticleCard;
