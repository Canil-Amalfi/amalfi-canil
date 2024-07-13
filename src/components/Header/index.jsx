import styles from "./Header.module.css";
import { IoMdMenu } from "react-icons/io";
import PropTypes from 'prop-types';

export default function Header({toogleMenu}) {
  return (
    <header>
      <section className={styles.header__section}>
        <div className={styles.flex__menu}>
          <h1>
            <img src="/images/logo-amalfi-horizontal.png" alt="" />
          </h1>
          <IoMdMenu className={styles.hamburguer__icon} onClick={toogleMenu}/>
        </div>
      </section>
      <div className={styles.header__extension}>
        <ul>
          <li>Amor</li>
          <li>Alegria</li>
          <li>Comprometimento</li>
          <li>Qualidade</li>
        </ul>
        <span className="division-gray-bar"></span>
      </div>
    </header>
  );
}

Header.propTypes = {
  toogleMenu: PropTypes.func.isRequired
}
