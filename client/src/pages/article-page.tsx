import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Article } from "../lib/types";
import LoadingSpinner from "../components/loading-spinner";
import { formatDate } from "../lib/utils";
import { Button } from "../components/ui/button";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ArticlePage = () => {
  const { articleId } = useParams(); // Obten el ID del artículo de la URL
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    // Realiza una solicitud fetch para cargar el artículo completo usando el ID
    fetch(`http://localhost:4001/api/articles/${articleId}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data); // Almacena el artículo en el estado
      })
      .catch((error) => {
        console.error("Error al cargar el artículo:", error);
      });
  }, [articleId]);

  if (!article) {
    return <LoadingSpinner />;
  }

  return (
    <section className="relative flex lg:px-20 md:px-10 px-6 lg:py-8 items-start">
      <div className="flex py-12 flex-col items-start gap-6 w-full">
        <img
          src={article.imageUrl}
          alt="article img"
          className="flex h-[19rem] w-[110rem] object-cover rounded-2xl"
        />
        <div className="flex flex-col w-full">
          <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold pt-4 self-center text-center">
            {article.title}
          </h2>
          <p className="text-center pt-3 text-muted-foreground text-base">
            {article.summary}
          </p>
        </div>
        <div className="flex flex-col w-full gap-1 text-xl">
          <p className="font-normal">
            By: <span className="font-semibold">{article.author}</span>
          </p>
          <p className="font-light italic">{formatDate(article.publishedAt)}</p>
        </div>
        <div className="flex flex-col items-start flex-1">
          <p className="md:text-2xl text-xl font-light md:font-medium">
            {article.content}
          </p>
        </div>
        <Button className="absolute bottom-8 right-8 transition">
          <Link
            to={"/"}
            className="flex flex-row gap-2 items-center justify-center"
          >
            <AiOutlineArrowLeft /> Back
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ArticlePage;
