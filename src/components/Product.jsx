import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";
import PropTypes from "prop-types";

export default function Product({ product }) {
  const {
    handleDetail,
    addToCart,
    isInCart,
    removeItem
  } = useContext(ProductContext);
  const { id, name, image, price, inCart, category, quantity } = product;

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5" onClick={() => handleDetail(id)}>
          <Link to={`/details/${id}/${category}`}>
            <img src={image} alt={name} className="card-img-top" />
          </Link>
        </div>
        <div className="card-footer">
          <div className="container-one mr-2">
            <p className="algin-self-center mb0">{name}</p>
          </div>
          <div className="container-two d-flex justify-content-between">
            <p className="algin-self-center mb0">Q: {quantity}</p>
            {true && (
              <h5 className="text-blue font-italic mb-0">
                <span className="mr-1">₹</span>
                {price}
              </h5>
            )}
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
                  to="cart"
                  className="text-capitalize mb-0"
                  title="Go to cart"
                >
                  <button className="to-cart-btn">In Cart</button>
                </Link>
              </div>
            ) : quantity ? (
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
    inCart: PropTypes.bool,
    inStock: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  &:hover {
    .card {
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    }
  }

  .card-footer {
    // min-height: 100px;
    padding: 0.75rem;
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
    font-size: 0.9rem;
    color: #25a641;
    background: transparent;
    border: 1px solid #25a641;
    &:hover {
      background-color: #25a641;
      color: #fff;
    }
  }
  .count-btn {
    font-size: 0.9rem;
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

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--LightGreen);
  }
  .stock-out-text {
    color: #ff3131;
    font-size: 1rem;
  }
`;
