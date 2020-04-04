import React, { useContext } from "react";
import { ProductContext } from "../Context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default function Details() {
  const { detailProduct, addToCart, incrementItem, decrementItem } = useContext(
    ProductContext
  );
  const {
    id,
    company,
    img,
    info,
    price,
    quantity,
    title,
    inCart,
    inStock,
    count,
  } = detailProduct;
  return (
    <>
      <div className="container py-5">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
        <div className="row">
          <div className="detail-card-container">
            <div className="col-10 mx-auto.col-md-6 my-3">
              <img src={img} alt="product" className="img-fluid" />
            </div>
            <div className="col-10 mx-auto.col-md-6 my-3 text-capitlize">
              <h2>{title}</h2>
              <h4 className="text-title text-uppercase">{company}</h4>
              <h4 className="text-quantity">Quantity: {quantity}</h4>
              <h4 className="text-black">
                <strong>
                  price: <span>₹</span>
                  {price}
                </strong>
              </h4>
              <p className="text-muted lead">{info}</p>
              <div className="btn-link-container d-flex justify-evenly align-items-center">
                <Link title="Go to home" to="/">
                  <ButtonContainer cart>Home</ButtonContainer>
                </Link>
                <ButtonWrapper className="btn-container">
                  {inCart ? (
                    <div className="cart-control-btn">
                      <button
                        className="count-btn inc-btn"
                        onClick={() => decrementItem(id)}
                        title="Decrement"
                      >
                        -
                      </button>
                      <Link
                        to="cart"
                        className="text-capitalize mb-0"
                        title="Go to cart"
                      >
                        <button className="to-cart-btn">{count} In Cart</button>
                      </Link>
                      <button
                        className="count-btn dec-btn"
                        onClick={() => incrementItem(id)}
                        title="Increment"
                      >
                        +
                      </button>
                    </div>
                  ) : inStock ? (
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
