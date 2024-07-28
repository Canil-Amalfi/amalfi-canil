import Overlay from "../../Overlay";
import styles from "./ExpandedPhoto.module.css";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

export default function ExpandedPhoto({src, alt, setExpanded}) {
    return (
        <Overlay>
            <section className={styles.centralizer__section}>
                <figure className={styles.expandedPhoto}>
                    <figcaption>
                        <button onClick={() => setExpanded(false)}><IoClose className={styles.close__icon}/></button>
                    </figcaption>
                    <img src={src} alt={alt} />
                </figure>
            </section>
        </Overlay>
    )
}

ExpandedPhoto.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    setExpanded: PropTypes.func.isRequired
}