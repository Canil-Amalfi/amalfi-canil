import styles from "./EachPhotoCard.module.css";
import { IoExpand } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import PropTypes from "prop-types";
import { useState } from "react";
import useFavoriteContext from "../../../hooks/useFavoriteContext";
import ExpandedPhoto from "../ExpandedPhoto";

export default function EachPhotoCard({ id, src, alt }) {
  const { addFavorite } = useFavoriteContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const [expanded, setExpended] = useState(false);

  return (
    <>
      <figure className={styles.eachPhotoCard}>
        <img src={src} alt={alt} id={id} />
        <figcaption>
          {!isFavorite ? (
            <MdFavoriteBorder
              className={styles.portrait__icon}
              onClick={() => {
                addFavorite({ id, src, alt });
                return setIsFavorite(!isFavorite);
              }}
            />
          ) : (
            <MdOutlineFavorite
              className={styles.portrait__icon}
              onClick={() => {
                addFavorite({ id, src, alt });
                return setIsFavorite(!isFavorite);
              }}
            />
          )}
          <IoExpand
            className={styles.portrait__icon}
            onClick={() => setExpended(true)}
          />
        </figcaption>
      </figure>
      {expanded && <ExpandedPhoto src={src} alt={alt} setExpanded={setExpended}/>}
    </>
  );
}

EachPhotoCard.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
