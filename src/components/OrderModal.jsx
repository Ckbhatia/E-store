import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import support from "../data/support";

export default function OrderModal(props) {
  const [productsSize, updateProductsSize] = useState(null);
  const [totalPrice, updateTotalPrice] = useState(null);

  const orderId = props.cartdetails[4];

  useEffect(() => {
    updateProductsSize(props.cartdetails[0].length);
    updateTotalPrice(props.cartdetails[3]);
  }, []);

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
            {productsSize === 1
              ? `${productsSize} item:`
              : `${productsSize} items:`}{" "}
            ₹{totalPrice}
          </h4>
          <p>Payment Mode: UPI ( DIGITAL )</p>
          <p>Delivery Type: Standard</p>
          <p>Estimated delivery: next day morning ( 9:00 AM to 12:00 PM)</p>
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
