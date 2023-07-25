import React from "react";

import styles from "./style.module.css";
import Link from "next/link";

const PokemonItem = ({ name, image, weight, isLoading, id }) => {
  return (
    <div className={styles.pokemonItem}>
      <div className="image">
        {!isLoading ? (
          <Link href="/product/[id]" as={`/product/${id}`}>
            <img src={image} height="96" width="96" alt={name} />
          </Link>
        ) : (
          <img
            src="https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000"
            height="96"
            width="96"
            alt="loader"
          />
        )}
      </div>
      <div className="pokemon-detail">
        <h3>
          <Link href="/product/[id]" as={`/product/${id}`}>
            {name}
          </Link>
        </h3>
        <p>
          {!isLoading ? (
            <>
              <strong>Weight: </strong> {weight}
            </>
          ) : (
            <img
              src="https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000"
              height="18.5"
              width="100"
              alt="loader"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default PokemonItem;
