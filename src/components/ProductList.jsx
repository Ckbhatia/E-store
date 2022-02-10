import React from "react";
import Product from "./Product";
import Title from "./Title";
import { getProductsByCategory, getProductsByTags } from "../services/product";
import { ProductContext } from "../Context";
import Loader from "../containers/Loader";
import { STATUS } from "../constants";
import Error from "../containers/Error";

export default function ProductList({ match, setProducts }) {
  const { products, cart } = React.useContext(ProductContext);
  const { page } = match.params;
  const [status, setStatus] = React.useState(STATUS.IDLE)

  React.useEffect(() => {
    (async () => {
      let result;
      setStatus(STATUS.PENDING);
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
      setStatus(STATUS.RESOLVED);
    })();

  }, []);

  React.useEffect(() => {
    // Modify values of products which are there in cart
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


  if(status === STATUS.IDLE || status === STATUS.PENDING) {
    return (
      <Loader margin='200px 0 0 0' color='#25a641' />
    )
  } else if (status === STATUS.REJECTED) {
    return <Error />
  }

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

