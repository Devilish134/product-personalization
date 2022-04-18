import styles from "./ProductForm.module.scss";
import Button from "../Button/Button";
import clsx from "clsx";
import shortid from "shortid";

const ProductForm = (props) => {
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>
          Sizes
        </h3>
        <ul className={styles.choices}>
          {props.sizes.map((size) => (
            <li>
              <button
                type="button"
                className={clsx(
                  props.currentSize ===
                    size.name && styles.active
                )}
                onClick={() =>
                  props.setCurrentSize(
                    size.name
                  )
                }
              >
                {size.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>
          Colors
        </h3>
        <ul className={styles.choices}>
          {props.colors.map((color) => (
            <li>
              <button
                type="button"
                className={clsx(
                  props.prepareColorClassName(
                    color
                  ),
                  props.currentColor ===
                    color && styles.active
                )}
                onClick={() =>
                  props.setCurrentColor(color)
                }
                key={shortid()}
              />
            </li>
          ))}
        </ul>
      </div>
      <Button
        className={styles.button}
        handleSubmit={props.handleSubmit}
      >
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductForm;
