import styles from "./DropMenu.module.css";
import Overlay from "../../components/Overlay";
import { IoClose } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

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
      <menu className={`${styles.dropMenu} ${closing ? styles.hide : styles.show}`}>
        <div className={styles.headerMenu}>
          <h1>MENU</h1>
          <IoClose className={styles.close__icon} onClick={handleClose}/>
        </div>
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
        <div className={styles.socials__menu}>
          <a href="">
            <FaInstagram className={styles.socials__iconMenu} />
          </a>
          <a href="">
            <FaWhatsapp className={styles.socials__iconMenu} />
          </a>
        </div>
      </menu>
    </Overlay>
  );
}

DropMenu.propTypes = {
  toogleMenu: PropTypes.func.isRequired
}
