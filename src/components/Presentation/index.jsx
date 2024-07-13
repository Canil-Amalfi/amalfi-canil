import styles from "./Presentation.module.css";

export default function Presentation() {
  return (
    <section className={styles.presentation}>
      <h1>
        Bem vindos a <span className={styles.purple__letter}>AMALFI</span>
      </h1>
      <figure>
        <img src="/images/gallery/baby-dogs.jpg" alt="baby dogs" />
        <figcaption>
          Especializados na criação e venda de cães da raça Beagle, nosso canil
          preza pela saúde e bem-estar dos nossos filhotes. Todos são entregues
          vacinados, desparasitados, treinados para fazer as necessidades no
          local correto, com pedigree e com o kit {'"Meu primeiro Premier"'}
        </figcaption>
        <a href="#"><button className="btn-purple">Fale Conosco</button></a>
      </figure>
      <img src="/images/division-paws.png" alt="animal paws" className="division-paws"/>
    </section>
  );
}
