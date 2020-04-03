import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { ProductContext } from "../Context";
import OrderModal from "./OrderModal";

const encode = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  });
  return formData;
};

export default function Checkout() {
  const [name, updateName] = useState("");
  const [number, updateNumber] = useState("");
  const [email, updateEmail] = useState("");
  const [address, updateAddress] = useState("");
  const [alternate, updateAlternate] = useState("");
  const [landmark, updateLandmark] = useState("");
  const [isChecked, updateCheck] = useState(true);
  const [isTcChecked, updateTcChecked] = useState(true);
  const [orderId, updateOrderId] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [hasError, updateError] = useState(false);

  const { cart, cartSubTotal, delivery, cartTotal, clearCart } = useContext(
    ProductContext
  );

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData.userInfo) {
      const {
        name,
        email,
        number,
        address,
        landmark,
        alternate
      } = userData.userInfo;
      // update the the user address/form
      updateName(name);
      updateEmail(email);
      updateNumber(number);
      updateAddress(address);
      updateAlternate(alternate);
      updateLandmark(landmark);
    }
  }, []);

  const generateId =
    Date.now() +
    Math.random()
      .toString(36)
      .substring(2, 15);

  const handleSubmit = async (e) => {
    if (isChecked) {
      // Save user info / address to localStorage to retain
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userCart: cart,
          cartTotal: cartTotal,
          cartSubTotal: cartSubTotal,
          delivery: delivery,
          userInfo: { name, email, number, landmark, address, alternate }
        })
      );
    }

    try {
      // Generate order Id
      await updateOrderId(generateId);

      const res = await fetch("/", {
        method: "POST",
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "order",
          orderId,
          name,
          number,
          email,
          alternate,
          address,
          landmark,
          order: JSON.stringify({ cart, delivery, cartSubTotal, cartTotal })
        })
      });
      if (res.status === 200) {
        // e.preventDefault();
        await setModalShow(true);
        clearCart();
      }
    } catch (error) {
      e.preventDefault();
      updateError(true);
      setTimeout(() => updateError(false), 2000);
    }
  };

  return (
    <div className="checkout-main-container">
      <Header className="checkout-header wrapper">
        <h3 className="checkout-heading">Delivery Address</h3>
      </Header>
      <OrderModal
        cartdetails={[cart, delivery, cartSubTotal, cartTotal, orderId]}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="form-main-container">
        <Div className="main-container wrapper">
          <div className="msg-txt-container">
            {/* Show message on condition */}
            {hasError && <span className="failed-msg">Please try again.</span>}
          </div>
          <div className="form-main-container">
            <div className="form-container flex-center">
              <form
                className="form"
                onSubmit={handleSubmit}
                method="POST"
                name="order"
                data-netlify="true"
                // action="/order/success"
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
                  type="number"
                  name="alternate"
                  className="input"
                  placeholder="Alternate Phone ( optional )"
                  value={alternate}
                  onChange={(e) => updateAlternate(e.target.value)}
                />
                <Form.Check
                  custom
                  checked={isChecked}
                  onChange={() => updateCheck((isChecked) => !isChecked)}
                  type="checkbox"
                  label={`Save this Address`}
                />
                <Form.Check
                  custom
                  checked={isTcChecked}
                  onChange={() =>
                    updateTcChecked((isTcChecked) => !isTcChecked)
                  }
                  type="checkbox"
                  label={
                    <>
                      Agree with <Link to="/support">T&C</Link>
                    </>
                  }
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

const Header = styled.div`
  margin-top: 2rem;
  .checkout-heading {
    font-size: 1.6rem;
    color: var(--MainDark);
    text-transform: uppercase;
  }
`;

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
