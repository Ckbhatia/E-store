import React, { useContext } from "react";
import { ProductContext } from "../Context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { getProductById, getProductsByCategory } from "../services/product";

export default function Details({ match, setProducts }) {
  const { products, detailProduct, removeItem, addProductDetail, addToCart, isInCart } = useContext(
    ProductContext
  );

  React.useEffect(() => {
    const category = match.params.category;
    const id = match.params.id;
    
    // Fetch only if there's no product detail in the state, id and category exist
    if(!detailProduct && id && category) {
      getProductById(id).then(async (res) => {
        const jsonRes = await res.json();
        const product = jsonRes.data.product;
        addProductDetail(product);
      });

      // Fetch only if there's no products in the state
      if(!products.length) {
        getProductsByCategory(category).then(async (result) => {
          const jsonRes = await result.json();
          const products = jsonRes.data.products;
          // TODO: Replace this with a better approach
          const localProducts = products.map(product => {
            return {...product, inCart: false, count: 0, total: 0 };
          });
          setProducts(localProducts);
        });
      }
    }
  }, [match]);

  if(!detailProduct) {
    return null;
  }

  const {
    id,
    company,
    image,
    description,
    price,
    quantity,
    discount,
    name,
    inCart,
  } = detailProduct;

  return (
    <>
      <div className="container py-5">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{name}</h1>
        </div>
        <div className="row">
          <div className="detail-card-container">
            <div className="col-10 mx-auto.col-md-6 my-3">
              <img src={image} alt="product" className="img-fluid" />
            </div>
            <div className="col-10 mx-auto.col-md-6 my-3 text-capitlize">
              <h2>{name}</h2>
              <h4 className="text-title text-uppercase">{company}</h4>
              <h4 className="text-quantity">Quantity: {quantity}</h4>
              {discount ? 
                <h4 className="text-quantity">Discount: {discount}%</h4>
                : null
              }
              <h4 className="text-black">
                <strong>
                  price: <span>₹</span>
                  {price}
                </strong>
              </h4>
              <p className="text-muted lead">{description}</p>
              <div className="btn-link-container d-flex justify-evenly align-items-center">
                <Link title="Go to home" to="/">
                  <ButtonContainer cart>Home</ButtonContainer>
                </Link>
                <ButtonWrapper className="btn-container">
                  {inCart || isInCart(id) ? (
                    <div className="cart-control-btn">
                       <button
                        className="count-btn"
                        onClick={() => removeItem(id)}
                        title="remove"
                      >
                        <span className="fas fa-trash" />
                      </button>
                      <Link
                        to="/cart"
                        className="text-capitalize mb-0"
                        title="Go to cart"
                      >
                        <button className="to-cart-btn">In Cart</button>
                      </Link>
                    </div>
                  ) : quantity !== 0 ? (
                    <span className="cart-btn-container">
                      <button
                        onClick={() => {
                          addToCart(id);
                        }}
                        className="cart-btn"
                        title="add to cart"
                      >
                        <i className="fas fa-cart-plus" />
                      </button>
                    </span>
                  ) : (
                    <span className="stock-out-text">Out of Stock</span>
                  )}
                </ButtonWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ButtonWrapper = styled.div`
  margin: 1rem 0;
  .cart-btn {
    background-color: transparent;
    border: none;
    color: var(--MainGreen);
    font-size: 1.4rem;
  }

  .to-cart-btn {
    font-size: 1rem;
    color: #25a641;
    background: transparent;
    border: 1px solid #25a641;
    &:hover {
      background-color: #25a641;
      color: #fff;
    }
  }
  .count-btn {
    font-size: 1rem;
    color: #c4c4c4;
    background: transparent;
    // border: 1px solid #c4c4c4;
    border: 1px solid #c4c4c4;
    &:hover {
      color: #6e6e6e;
    }
  }
  .inc-btn {
    border-right: none;
  }
  .dec-btn {
    border-left: none;
  }

  .stock-out-text {
    font-size: 1.2rem;
    color: #ff3131;
  }
`;
