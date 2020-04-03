import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import support from "../data/support";

export default function Support() {
  return (
    <ContainerWrapper>
      <Container fluid="md">
        <Row>
          <Col className="support-col col-one mt-4">
            <h2 className="support-heading">Support</h2>
          </Col>
        </Row>
        <Row>
          <Col className="support-col mt-4 mb-4">
            <h3 className="support-sub-heading">Contact</h3>
            <p>
              <MdCall /> {support.contact.phone}{" "}
            </p>
            <p>
              {support.contact.alternatePhone
                ? `<MdCall /> ${support.contact.alternatePhone} {" "}`
                : ""}
            </p>
            <p>
              <FaWhatsapp /> {support.contact.whatsapp}{" "}
            </p>
            <p>
              <MdEmail /> {support.contact.email}
            </p>
            <p>Please feel free to contact for feedback purpose also.</p>
          </Col>
        </Row>
        <Row>
          <Col className="support-col mt-4 mb-4">
            <h4 className="support-sub-heading mt-4 mb-4">
              All Terms and Conditions applied
            </h4>
            <h3 className="support-sub-heading">Payment</h3>
            <h4 className="support-sub-heading">
              How do I pay for a BLT store purchase?
            </h4>
            <p className="support-paragraph">
              BLT store offers you multiple payment methods. Whatever your
              online mode of payment, you can rest assured that BLT store's
              trusted payment gateway partners use secure encryption technology
              to keep your transaction details confidential at all times.
            </p>
            <p className="support-paragraph">
              You may use UPI, Internet Banking, Gift Card, Pay On Delivery and
              Cash on Delivery ( Only available during normal days) to make your
              purchase.
            </p>
            <h4 className="support-sub-heading">
              Are there any hidden charges (Octroi or Sales Tax) when I make a
              purchase on BLT store?
            </h4>
            <p className="support-paragraph">
              There are NO hidden charges when you make a purchase on BLT store.
              The prices listed for all the items are final and all-inclusive.
              The price you see on the product page is exactly what you pay. BLT
              store might charge if your listed product price incremented
              suddenly.
            </p>
            <p className="support-paragraph">
              Delivery charges may be extra depending on the seller policy.
              Please check individual seller for the same.
            </p>
            <h4 className="support-sub-heading">What is Pay on Delivery?</h4>
            <p className="support-paragraph">
              You have to pay when you receive your product. You can pay through
              UPI and other digital payment methods.
            </p>
            <p className="support-paragraph">
              Cash might be accepted in case there's no other option available.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="support-col mt-4 mb-4">
            <h3 className="support-sub-heading">Shipping</h3>

            <h4 className="support-sub-heading">
              How will I get informed about my order?
            </h4>
            <p className="support-paragraph">
              You will get informed via one of these option.
            </p>

            <p className="support-paragraph">
              You may get a sms on given phone.
            </p>

            <p className="support-paragraph">
              You may get a confirmation email on given email address.
            </p>

            <p className="support-paragraph">
              You may get a whatsapp notification.
            </p>
            <p className="support-paragraph">
              Incase if you don't get any confirmation notifcation via these
              methods. You can contact us on given platform and methods.
            </p>

            <h4 className="support-sub-heading">
              Why don't you ship outside Balotra city?
            </h4>
            <p className="support-paragraph">
              As of now, we are not able to deliver outside the Balotra city.
            </p>
            <h4 className="support-sub-heading">
              What are the delivery charges?
            </h4>
            <p className="support-paragraph">
              Delivery charge varies on cart value.
            </p>
            <p className="support-paragraph">
              You will be charged Rs 30 on cart value of Rs 0 to Rs 50.
            </p>
            <p className="support-paragraph">
              You will be charged Rs 25 on cart value of Rs 51 to Rs 70.
            </p>
            <p className="support-paragraph">
              You will be charged Rs 20 on cart value of Rs 71 to Rs 100.
            </p>
            <p className="support-paragraph">
              You will be charged Rs 15 on cart value of Rs 101 to Rs120.
            </p>
            <p className="support-paragraph">
              You will be charged Rs 10 on cart value of Rs 121 and Above.
            </p>
            <p className="support-paragraph">
              We might change shipping charge without any prior notice.
            </p>

            <h4 className="support-sub-heading">
              What is the estimated delivery time?
            </h4>
            <p className="support-paragraph">
              Sellers generally procure and ship the items within the time
              specified on the product page. Business days exclude public
              holidays and Sundays.
            </p>
            <p className="support-paragraph">
              Estimated delivery time depends on the following factors:
            </p>
            <p className="support-paragraph">The Seller offering the product</p>
            <p className="support-paragraph">
              Product's availability with the Seller
            </p>
            <p className="support-paragraph">
              The destination to which you want the order shipped to and
              location of the Seller.
            </p>

            <h4 className="support-sub-heading">
              I need to return an item, how do I arrange for a pick-up?
            </h4>
            <p className="support-paragraph">
              Returns are easy. Contact Us to initiate a return. You will
              receive a call explaining the process, once you have initiated a
              return.
            </p>
            <p className="support-paragraph">
              Note: We only accept return in case product has defect or damage.
            </p>

            <h4 className="support-sub-heading">How do I cancel my order?</h4>
            <p className="support-paragraph">
              Order cancellation might not be available in initial days of our
              service. So, please think and order.
            </p>
          </Col>
        </Row>
      </Container>
    </ContainerWrapper>
  );
}

const ContainerWrapper = styled.div`
  color: #000;
`;
