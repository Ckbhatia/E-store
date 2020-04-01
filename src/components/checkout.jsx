import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../Context";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function checkout() {
  const [name, updateName] = useState("");
  const [number, updateNumber] = useState("");
  const [email, updateEmail] = useState("");
  const [address, updateAddress] = useState("");
  const [alternateNumber, updateAlternateNumber] = useState("");
  const [landmark, updateLandmark] = useState("");
  const [isSuccess, updateSuccess] = useState(false);
  const [hasError, updateError] = useState(false);

  const { cart, cartSubTotal, cartTax, cartTotoal, clearCart } = useContext(
    ProductContext
  );

  const orderId =
    Date.now() +
    Math.random()
      .toString(36)
      .substring(2, 15);

  const handleSubmit = async (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "order", cartTotoal })
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className="checkout-main-container">
      <div className="form-main-container">
        <Div className="main-container wrapper">
          <div className="msg-txt-container">
            {/* Show message on condition */}
            {isSuccess && (
              <span className="success-msg">
                Order placed. OrderID: {orderId}
              </span>
            )}
            {hasError && (
              <span className="failed-msg">
                Please add items to your cart or don't refresh your page
              </span>
            )}
          </div>
          <div className="form-main-container">
            <div className="form-container flex-center">
              <form
                className="form"
                onSubmit={handleSubmit}
                method="post"
                name="order"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="order" />
                <label>
                  Name
                  <input
                    required
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                    minLength="4"
                    value={name}
                    onChange={(e) => updateName(e.target.value)}
                  />
                </label>
                <label>
                  Mobile
                  <input
                    required
                    type="number"
                    name="username"
                    className="input"
                    placeholder="10-digit mobile number"
                    minLength="10"
                    value={number}
                    onChange={(e) => updateNumber(e.target.value)}
                  />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    minLength="12"
                    value={email}
                    onChange={(e) => updateEmail(e.target.value)}
                  />
                </label>
                <textarea
                  type="textarea"
                  name="address"
                  className="input"
                  placeholder="Address ( area and street )"
                  value={address}
                  required
                  onChange={(e) => updateAddress(e.target.value)}
                ></textarea>
                <input
                  type="text"
                  name="landmark"
                  className="input"
                  placeholder="Landmark ( optional )"
                  value={landmark}
                  onChange={(e) => updateLandmark(e.target.value)}
                />
                <input
                  type="text"
                  name="alternative number"
                  className="input"
                  placeholder="Alternate Phone ( optional )"
                  value={alternateNumber}
                  onChange={(e) => updateAlternateNumber(e.target.value)}
                />
                <input
                  className="submit-btn text-uppercase"
                  type="submit"
                  value="Order and Deliver here"
                />
              </form>
            </div>
          </div>
        </Div>
      </div>
    </div>
  );
}

const Div = styled.div`
  background-color: #fcfcfc;
  width: 100%;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(230, 230, 230, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(230, 230, 230, 1);
  box-shadow: 0px 0px 2px 1px rgba(230, 230, 230, 1);
  .form-main-container {
    margin: 2.2rem 0;
  }

  // Message container
  .msg-txt-container {
    position: relative;
    top: 20px;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .success-msg {
    font-size: 1.2rem;
    color: #fff;
    padding: 1.2rem 0;
    width: 100%;
    background-color: #38c942;
  }

  .failed-msg {
    font-size: 1.2rem;
    color: #fff;
    padding: 1.2rem 0;
    width: 100%;
    background-color: #e62412;
  }

  .failed-msg {
    font-size: 1.2rem;
    color: #fff;
    padding: 1.2rem 0;
    width: 100%;
    background-color: #ff1f35;
  }

  // Form
  .form {
    width: 100%;
  }
  .form-container {
    margin-left: 1.2rem;
    margin-right: 1.2rem;
    height: 100%;
    .input {
      font-size: 1.2rem;
      color: #5a5a5a;
      width: 100%;
      height: 100%;
      padding: 0.6rem 0.8rem;
      margin: 0.4rem 0;
      border: 1px solid rgb(211, 209, 209);
      border-radius: 5px;
      &::placeholder {
        color: rgb(156, 154, 154);
        font-size: 1.18rem;
      }
    }
    .submit-btn {
      background-color: #40b9ff;
      color: #ffffff;
      border: none;
      padding: 0.8rem 1.8rem;
      border-radius: 5px;
      margin-top: 0.6rem;
      margin-bottom: 0.6rem;
      cursor: pointer;
      &:hover {
        background-color: #4fbfff;
      }
    }
  }

  .select-input {
    background-color: rgb(255, 255, 255);
  }
  .note-text {
    display: inline-block;
    color: crimson;
    font-size: 1rem;
    word-spacing: 0.1rem;
    line-height: 1.5;
    margin: 1rem 0;
  }

  label {
    font-size: 1.3rem;
    color: #1f1f1f;
  }
`;
