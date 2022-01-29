import React from "react";
import Product from "./Product";
import Title from "./Title";
import { getProducts } from "../services/product";

export default function ProductList({ match }) {

  const [products, setProducts] = React.useState([]);

  const { category } = match.params;

  React.useEffect(() => {
    (async () => {
      const result = await getProducts(category);
      const res = await result.json();
      const products = res.data.products;
      setProducts(products);
    })();

  }, []);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="Fresh" title={category || 'Items'} />
          <div className="row">
            {products.length ? products.map((product) => {
              return <Product key={product.id} product={product} />;
            }) : null}
          </div>
        </div>
      </div>
    </>
  );
}
