import { Link } from 'react-router-dom';
import styles from './GalleryCall.module.css';

export default function GalleryCall() {
    return (
        <section className={styles.gallery__section}>
            <h1>Seção de Fofuras</h1>
            <div className={styles.gallery__images}>
                <img src="/images/gallery/filhotes-poly-bidu-2.jpg" alt="A dog eating hot dog" />
                <img src="/images/gallery/filhotes-poly-bidu-1.jpg" alt="Two dogs" />
                <img src="/images/gallery/filhote-castelo.jpg" alt="A dog with castle background" />
                <img src="/images/gallery/3filhotes-bidu-poly.jpg" alt="Three dogs" />               
            </div>
            <Link to={'galeria'}><button>Acessar Galeria</button></Link>
        </section>
    )
}