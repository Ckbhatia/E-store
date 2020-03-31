import React, { useContext, useState, useEffect, withRouter } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductContext } from "../Context";

export default function ProductList({ match }) {
  // const [filteredProducts, updateFilteredProducts] = useState(null);
  const { filterProducts, products } = useContext(ProductContext);

  useEffect(() => {
    // FilterProducts by url category
    filterProducts(match.path.substring(1));
  }, []);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="Fresh" title={match.path.substring(1)} />
          <div className="row">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
