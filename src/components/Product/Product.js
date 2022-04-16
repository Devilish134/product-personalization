import styles from './Product.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import Button from '../Button/Button';
import shortid from 'shortid';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(
    props.colors[0]
  );
  const [currentSize, setCurrentSize] = useState(
    props.sizes[0].name
  );

  const prepareColorClassName = (color) => {
    return styles[
      'color' +
        color[0].toUpperCase() +
        color.substr(1).toLowerCase()
    ];
  };

  const getPrice = () => {
    const price = props.sizes.find(
      ({ name }) => name === currentSize
    );
    console.log(price);

    return props.basePrice + price.additionalPrice;
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.name}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>
            {props.title}
          </h2>
          <span className={styles.price}>
            Price: {getPrice()}
          </span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>
              Sizes
            </h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li>
                  <button
                    type='button'
                    className={clsx(
                      currentSize === size.name &&
                        styles.active
                    )}
                    onClick={() =>
                      setCurrentSize(size.name)
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
                    type='button'
                    className={clsx(
                      prepareColorClassName(color),
                      currentColor === color &&
                        styles.active
                    )}
                    onClick={() =>
                      setCurrentColor(color)
                    }
                    key={shortid()}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
