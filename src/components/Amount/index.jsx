import styles from "./Amount.module.css";
import { IoAddCircle, IoRemoveCircleSharp } from "react-icons/io5";
import PropTypes from "prop-types";

export default function Amount({ value, handleAmount }) {
  return (
    <>
      <h3>Quantidade</h3>
      <div className={`${styles.amount} number`}>
        <IoRemoveCircleSharp
          className={styles.amount__Icon}
          onClick={() => {
            if (value <= 1) return;
            handleAmount((prev) => prev - 1);
          }}
        />
        <input
          type="number"
          value={value}
          className={styles.amount__input}
          readOnly={true}
        />
        <IoAddCircle
          className={styles.amount__Icon}
          onClick={() => handleAmount((prev) => prev + 1)}
        />
      </div>
    </>
  );
}

Amount.propTypes = {
  value: PropTypes.number.isRequired,
  handleAmount: PropTypes.func.isRequired,
};
