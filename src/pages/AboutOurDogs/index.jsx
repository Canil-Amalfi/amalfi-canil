import styles from "./AboutOurDogs.module.css";
import dogs from "../../mocks/dogs.json";
import DogsCard from "./DogsCard";
import NextLitters from "../../components/NextLitters";

export default function AboutOurDogs() {
  return (
    <>
      <section className={styles.aboutOurDogs}>
        <h1>Nossos Cães</h1>
        <div className={styles.flex__cardDogs__div}>
          {dogs.map((dog, index) => (
            <DogsCard key={index} {...dog} />
          ))}
        </div>
      </section>
      <img src="/images/division-paws.png" alt="animal paws" className="division-paws"/>
      <NextLitters/>
    </>
  );
}
