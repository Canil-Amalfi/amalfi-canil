import styles from "./DropMenu.module.css";
import Overlay from "../../components/Overlay";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DropMenu({ toogleMenu }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
  };

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        toogleMenu();
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [closing, toogleMenu]);

  return (
    <Overlay>
      <section className={styles.align__right}>
        <menu
          className={`${styles.dropMenu} ${
            closing ? styles.hide : styles.show
          }`}
        >
          <div className={styles.headerMenu}>
            <h1>MENU</h1>
            <IoClose className={styles.close__icon} onClick={handleClose} />
          </div>
          <div className={styles.navigation}>
            <Link to={"/"}>
              <li className={styles.listItem__menu} onClick={handleClose}>
                HOME
              </li>
            </Link>
            <Link to={"nossos-caes"}>
              <li className={styles.listItem__menu} onClick={handleClose}>
                NOSSOS CÃES
              </li>
            </Link>
            <Link to={"blog"}>
              <li className={styles.listItem__menu} onClick={handleClose}>
                BLOG
              </li>
            </Link>
            <Link to="galeria">
              <li className={styles.listItem__menu} onClick={handleClose}>
                GALERIA
              </li>
            </Link>
          </div>
        </menu>
      </section>
    </Overlay>
  );
}

DropMenu.propTypes = {
  toogleMenu: PropTypes.func.isRequired,
};
