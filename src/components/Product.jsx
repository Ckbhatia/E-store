import React, { Component, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";
import PropTypes from "prop-types";

export default function Product({ product }) {
  const { handleDetail, addToCart, openModal } = useContext(ProductContext);
  const { id, title, img, price, inCart, quantity } = product;

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5" onClick={() => handleDetail(id)}>
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top" />
          </Link>
        </div>
        <div className="card-footer">
          <div className="container-one mr-2">
            <p className="algin-self-center mb0">{title}</p>
          </div>
          <div className="container-two d-flex justify-content-between">
            <p className="algin-self-center mb0">{quantity}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">₹</span>
              {price}
            </h5>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                addToCart(id); //Add product to cart
                // value.openModal(id);//Open modal when product get in cart
              }}
            >
              {inCart ? (
                <Link
                  to="cart"
                  className="text-capitalize mb-0"
                  title="Go to cart"
                >
                  <button className="to-cart-btn">In Cart</button>
                </Link>
              ) : (
                <span className="cart-btn-container" title="add to cart">
                  <i className="fas fa-cart-plus" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </ProductWrapper>
  );
}

Product.propType = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  &:hover {
    .card {
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
  }

  .card-footer {
    // min-height: 100px;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.3s linear;
    // width: 8rem;
    // height: 6rem;
    width: 100%;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

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
    border-radius: 2px;
    &:hover {
      background-color: #25a641;
      color: #fff;
    }
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--LightGreen);
  }
`;
