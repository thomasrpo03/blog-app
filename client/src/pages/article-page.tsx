import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../lib/types";
import LoadingSpinner from "../components/loading-spinner";

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
    <section className="flex px-24 py-8 items-start">
      <div className="flex py-12 flex-col items-start gap-6">
        <img src={article.imageUrl} alt="article img" className="flex h-[19rem] w-[110rem] object-cover" />
      </div>
    </section>
  ); 
};

export default ArticlePage;
