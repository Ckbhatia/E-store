import React, { useContext } from "react";
import { ProductConsumer, ProductContext } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default function Details() {
  const { detailProduct, addToCart } = useContext(ProductContext);
  const {
    id,
    company,
    img,
    info,
    price,
    quantity,
    title,
    inCart
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
              <div>
                <Link to="/">
                  <ButtonContainer cart>Home</ButtonContainer>
                </Link>
                <ButtonContainer
                  cart
                  disabled={inCart ? true : false}
                  onClick={() => {
                    addToCart(id);
                  }}
                >
                  {inCart ? (
                    "inCart"
                  ) : (
                    <span className="cart-btn-container" title="add to cart">
                      <i className="fas fa-cart-plus" />
                    </span>
                  )}
                </ButtonContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
