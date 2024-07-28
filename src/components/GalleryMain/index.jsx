import styles from "./GalleryMain.module.css";
import photos from "../../mocks/galleryPhotos.json";
import EachPhotoCard from "./EachPhotoCard";
import { useState } from "react";
import useFavoriteContext from "../../hooks/useFavoriteContext";

export default function GalleryMain() {
  const { favorites } = useFavoriteContext();
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [filtered, setFiltered] = useState("#8600c6");

  const handleFilter = () => {
    setOnlyFavorites(!onlyFavorites);
    if (!onlyFavorites) setFiltered("#f4b706");
    if (onlyFavorites) setFiltered("#8600c6");
  };

  return (
    <section className={styles.gallery__section}>
      <div className={styles.header__gallery}>
        <h1>Galeria de Fofuras</h1>
        <button
          onClick={handleFilter}
          style={{ backgroundColor: `${filtered}` }}
        >
          Favoritos
        </button>
      </div>
      <div className={styles.photosArea}>
        {!onlyFavorites
          ? photos.map((photo) => <EachPhotoCard key={photo.id} {...photo} />)
          : favorites.map((favorite) => {
              return <EachPhotoCard key={favorite.id} {...favorite} />;
            })}
      </div>
    </section>
  );
}
