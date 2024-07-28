import styles from "./AboutOurDogs.module.css";
import DogsCard from "./DogsCard";
import dogs from "../../mocks/dogs.json";
import fotos_Bidu from "../../mocks/biduPhotos.json";
import fotos_Poly from "../../mocks/polyPhotos.json";

export default function AboutOurDogs() {
    return (
        <section className={styles.aboutOurDogs__section}>
        <h1>Nossos Cães</h1>
        <div className={styles.flex__cardDogs__div}>
          {dogs.map((dog, index) => {
            const handlePhotos = index === 0 ? fotos_Bidu : fotos_Poly 
            return <DogsCard 
            key={index} 
            {...dog} 
            photos={handlePhotos}
            />
          })}
        </div>
      </section>
    )
}