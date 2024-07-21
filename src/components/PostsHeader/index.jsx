import { Link } from "react-router-dom";
import styles from "./PostsHeader.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function PostsHeader() {
  return (
    <header>
      <section className={styles.header__section}>
        <Link to={"/blog"}>
            <FaArrowCircleLeft className={styles.arrow__back}/>
        </Link>
      </section>
    </header>
  );
}
