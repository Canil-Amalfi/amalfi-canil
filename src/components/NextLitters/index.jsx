import styles from "./NextLitters.module.css";
import { IoPawSharp } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function NextLitters() {
  return (
    <section className={styles.nextLitters}>
      <h1>Próximas Ninhadas</h1>
      <div className={styles.card__nextLitters}>
        <div className={styles.dogs}>
          <div className={styles.bidu}>
            <img src="/images/gallery/bidu-lingua.png" alt="Beagle Bidu" />
            <h3>Bidu</h3>
          </div>
          <div className={styles.poly}>
            <img src="/images/gallery/poly-lingua-2.png" alt="Beagle Poly" />
            <h3>Poly</h3>
          </div>
        </div>
        <footer>
          <h3>
            <IoPawSharp className={styles.paws__icon}/> Beagle
          </h3>
          <span><strong>Previsão:</strong> Acompanhe no Instagram</span>
          <a href="#waitingList">
            <button className="btn-purple">Lista de Espera</button>
          </a>
          <Link to={"nossos-caes"}>
            <button className="btn-gold">Sobre os Cães</button>
          </Link>
        </footer>
        <div className={styles.socials__card}>
            <a href="https://www.instagram.com/beaglebiduepoly/" target="blank">
                <FaInstagram className={styles.socials__iconCard}/>
            </a>
            <a href="https://contate.me/canilamalfi" target="blank">
                <FaWhatsapp className={styles.socials__iconCard}/>
            </a>
        </div>
      </div>
      <img src="/images/division-paws.png" alt="animal paws" className="division-paws"/>
    </section>
  );
}
