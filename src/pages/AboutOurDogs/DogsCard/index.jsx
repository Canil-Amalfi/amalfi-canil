import styles from "./DogsCard.module.css";
import { IoPawSharp } from "react-icons/io5";
import { TbGenderBigender } from "react-icons/tb";
import { IoIosColorPalette } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";

export default function DogsCard({ name, gender, breed, color, birthday, image, alt }) {
  return (
    <section className={styles.DogsCard__section}>
      <img src={image} alt={alt} />
      <h2>{name}</h2>
      <ul className={styles.dogsFeatures}>
        <li>
          <IoPawSharp className={styles.card__icon} />
          <span>{breed}</span>
        </li>
        <li>
          <TbGenderBigender className={styles.card__icon} />
          <span>{gender}</span>
        </li>
        <li>
          <IoIosColorPalette className={styles.card__icon} />
          <span>{color}</span>
        </li>
        <li>
          <FaCalendarAlt className={styles.card__icon} />
          <span className="number">{birthday}</span>
        </li>
      </ul>
      <button>
        Ver Fotos
      </button>
    </section>
  );
}

DogsCard.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
