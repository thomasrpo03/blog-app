import { useEffect, useState } from "react";
import axios from "axios";
import { Article } from "../lib/types";
import ArticleCard from "./article-card";
import LoadingSpinner from "./loading-spinner";
import Header from "./header";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Separator } from "./ui/separator";
import AddArticleModal from "./add-article-modal";

const ArticlesSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const url = "http://localhost:4001/api/articles";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (articles.length === 0) {
    return <div>No articles found</div>;
  }

  // ...

  return (
    <section className="relative flex flex-col w-full">
      <div className="flex w-full">
        <div className="flex w-full flex-col gap-4">
        <Header label="Latest Articles" />
        <Separator />
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
             <AddArticleModal />
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">Create a new article</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="pt-6 grid lg:grid-cols-2 grid-cols-1 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};
export default ArticlesSection;
