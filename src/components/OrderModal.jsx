import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import support from "../data/support";

export default function OrderModal(props) {
  const cart = props.cartdetails[0];
  const orderId = props.cartdetails[4];
  const cartTotal = props.cartdetails[3];

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order placed
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Order ID: {orderId}</h4>
          <h4>
            Total payable amount for{" "}
            {cart && cart.length === 1
              ? `${cart && cart.length} item:`
              : `${cart && cart.length} items:`}{" "}
            ₹{cartTotal}
          </h4>
          <p>Payment Mode: UPI ( DIGITAL )</p>
          <p>Estimated delivery: next day morning</p>
          <span>Support : </span>
          <span>
            <MdCall /> {support.contact.phone}{" "}
          </span>
          <span>
            <FaWhatsapp /> {support.contact.whatsapp}{" "}
          </span>
          <span>
            <MdEmail /> {support.contact.email}
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
