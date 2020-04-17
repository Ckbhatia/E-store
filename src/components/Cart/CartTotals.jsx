import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
  const { cartSubTotal, delivery, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto-col-sm-8 text-capitalize text-right">
            {/* <Link to="/"> */}
            <button
              className="btn btn-outline-danger text-uppercase mb-3"
              type="button"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
            {/* </Link> */}
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>₹ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Delivery :</span>
              <strong>₹ {delivery}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>₹ {cartTotal}</strong>
            </h5>
            {/* <PayPalButton
              total={cartTotal}
              clearTotal={clearCart}
              history={history}
            /> */}
            <ButtonWrapper className="checkout-btn-container mt-3">
              <Link className="checkout-link" to="/checkout">
                {cartTotal >= 150 ? (
                  <button className="checkout-btn">
                    Proceed to checkout / आगे बढ़ें
                  </button>
                ) : (
                  <button className="checkout-btn btn-disabled" disabled>
                    Proceed to checkout / आगे बढ़ें
                  </button>
                )}
              </Link>
            </ButtonWrapper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const ButtonWrapper = styled.div`
  .checkout-btn {
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
    color: #4a4a4a;
    background-color: #2cd852;
    border: 1px solid #2cd852;
    border-radius: 4px;
    &:hover {
      background-color: #2cc64e;
    }
  }

  .btn-disabled {
    cursor: not-allowed;
  }
`;
