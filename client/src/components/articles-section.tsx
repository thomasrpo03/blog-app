import { useEffect, useState } from "react";
import axios from "axios";
import { Article } from "../lib/types";
import ArticleCard from "./article-card";

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
    return <div>Loading...</div>;
  }

  if (articles.length === 0) {
    return <div>No articles found</div>;
  }

  // ...

  return (
    <section>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
};
export default ArticlesSection;
