import styles from "./Footer.module.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer>
      <section className={styles.footer__section}>
        <span className="division-gray-bar"></span>
        <div className={styles.flex__footer}>
          <ul className={styles.contacts__footer}>
            <h2>CONTATOS</h2>
            <li className={styles.listItem__contacts}>
              <FaPhoneAlt className={styles.footer__icons}/>
              <span className="number">{"(21) 98712-0899"}</span>
            </li>
            <li className={styles.listItem__contacts}>
              <FaWhatsapp className={styles.footer__icons}/>
              <span className="number">{"(21) 98712-0899"}</span>
            </li>
            <li className={styles.listItem__contacts}>
              <IoMailOutline className={styles.footer__icons}/>
              {"canilamalfi@outlook.com"}
            </li>
          </ul>
          <ul className={styles.menu__footer}>
            <h2>MENU</h2>
            <a href="#">
              <li className={styles.listItem__menu}>HOME</li>
            </a>
            <a href="#">
              <li className={styles.listItem__menu}>BLOG</li>
            </a>
            <a href="#">
              <li className={styles.listItem__menu}>NOSSOS CÃES</li>
            </a>
            <a href="#">
              <li className={styles.listItem__menu}>GALERIA</li>
            </a>
          </ul>
        </div>
      </section>
    </footer>
  );
}
