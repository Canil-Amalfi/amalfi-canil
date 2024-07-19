import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.css";
import PropTypes from 'prop-types';

export default function ArticleCard({ titleCard, teaserText, imageCard, alt, id }) {
  return (
    <div className={styles.article__card}>
      <img src={imageCard} alt={alt} />
      <div className={styles.article__card__texts}>
        <h3>{titleCard}</h3>
        <p>
          {teaserText}
        </p>
        <Link to={`/blog/blogPosts/${id}`}><button>Ver Mais</button></Link>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
    titleCard: PropTypes.string.isRequired,
    teaserText: PropTypes.string.isRequired,
    imageCard: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}
