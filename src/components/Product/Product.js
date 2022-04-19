import styles from "./Product.module.scss";
import { useState, useMemo } from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";

const Product = (props) => {
  const [currentColor, setCurrentColor] =
    useState(props.colors[0]);
  const [currentSize, setCurrentSize] =
    useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    const price = props.sizes.find(
      ({ name }) => name === currentSize
    );

    return (
      props.basePrice + price.additionalPrice
    );
  }, [
    props.basePrice,
    currentSize,
    props.sizes,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("===========================");
    console.log("Product summary");
    console.log("===========================");
    console.log("Name: ", props.title);
    console.log("Price: ", getPrice + "$");
    console.log("Size: ", currentSize);
    console.log("Color: ", currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage
        name={props.name}
        color={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>
            {props.title}
          </h2>
          <span className={styles.price}>
            Price: {getPrice}$
          </span>
        </header>
        <ProductForm
          currentColor={currentColor}
          currentSize={currentSize}
          handleSubmit={handleSubmit}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          colors={props.colors}
          sizes={props.sizes}
          key={props.id}
        />
      </div>
    </article>
  );
};

export default Product;
