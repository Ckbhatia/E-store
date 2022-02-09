import React from "react";
import Product from "./Product";
import Title from "./Title";
import { getProductsByCategory, getProductsByTags } from "../services/product";
import { ProductContext } from "../Context";

export default function ProductList({ match, setProducts }) {
  const { products, cart } = React.useContext(ProductContext);
  const { page } = match.params;

  React.useEffect(() => {
    (async () => {
      let result;
      if (page === 'immunity') {
        result = await getProductsByTags(page);
      } else {
        result = await getProductsByCategory(page);
      }
      const res = await result.json();
      const products = res.data.products;
      // TODO: Replace this with a better approach
      const localProducts = products.map(product => {
        return {...product, inCart: false, count: 0, total: 0 };
      });
      setProducts(localProducts);
    })();

  }, []);

  React.useEffect(() => {
    // Modify values of products which are thee in cart
    if(products.length && cart.length) {
      const localProducts = products.map(product => {
        const cartProduct = cart.find((item) => item.id === product.id);
        if (cartProduct) {
          const { count, total } = cartProduct;
          return {...product, inCart: true, count, total };
        }
        return product;
      });
      setProducts(localProducts);
    }
  }, [cart])

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="Fresh" title={page || 'Items'} />
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
