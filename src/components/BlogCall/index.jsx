import styles from "./BlogCall.module.css";

export default function BlogCall() {
  return (
    <section className={styles.blogCall__section}>
      <img
        src="/images/division-paws.png"
        alt="animal paws"
        className="division-paws"
      />
      <h1>Mais Sobre Nós</h1>
      <figure>
        <img src="/images/gallery/blog-image.jpg" alt="baby dogs" />
        <figcaption>
          Acesse nosso Blog para ler sobre artigos diversos com assuntos
          voltados a Amalfi e aos Beagles.
        </figcaption>
        <a href="#">
          <button className="btn-purple">Acessar Blog</button>
        </a>
      </figure>
      <img src="/images/division-paws.png" alt="animal paws" className="division-paws"/>
    </section>
  );
}
