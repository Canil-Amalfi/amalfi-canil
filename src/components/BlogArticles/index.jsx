import ArticleCard from "./ArticleCard";
import styles from "./BlogArticles.module.css";
import articles from "../../mocks/articles.json";

export default function BlogArticles() {
  return (
    <section className={styles.blogArticles__section}>
      <h1>
        Blog <span className="purple__letter">Amalfi</span>
      </h1>
      <span className={styles.blog__caption}>
        Noticias sobre os doguinhos mais fofos do mundo você encontra aqui!
      </span>
      <div className={styles.flex__articles__div}>
        {articles.map((article, index) => (
          <ArticleCard 
            key={index}
            titleCard={article.titleCard}
            teaserText={article.teaserText}
            imageCard={article.imageCard}
            alt={article.alt}
            id={article.id}
          />
        ))}
      </div>
    </section>
  );
}
