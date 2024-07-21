import styles from "./BasicSwiper.module.css";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
{/*import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

cole esses imports no main para evitar importações a cada vez q o componente renderizar"
*/}

import { Swiper, SwiperSlide } from "swiper/react";

export default function BasicSwiper({
  itens,
  clickable,
  navigation,
  keyboard,
  handleToggle,
}) {
  return (
    <Swiper
      pagination={{ clickable: clickable }}
      navigation={navigation}
      keyboard={keyboard}
      className={styles.mainSwiper}
    >
      {itens.map((item) => (
        <SwiperSlide key={item.id} className={styles.swiperSlide}>
          <img src={item.image} alt={item.alt} />
          <IoClose className={styles.close__icon} onClick={handleToggle} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

BasicSwiper.propTypes = {
  itens: PropTypes.array.isRequired,
  clickable: PropTypes.bool.isRequired,
  navigation: PropTypes.bool.isRequired,
  keyboard: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func
};
