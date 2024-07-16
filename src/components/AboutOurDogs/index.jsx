import styles from "./AboutOurDogs.module.css";
import dogs from "../../mocks/dogs.json";
import DogsCard from "./DogsCard";

export default function AboutOurDogs() {
    return (
        <section className={styles.aboutOurDogs__section}>
        <h1>Nossos Cães</h1>
        <div className={styles.flex__cardDogs__div}>
          {dogs.map((dog, index) => (
            <DogsCard key={index} {...dog} />
          ))}
        </div>
      </section>
    )
}