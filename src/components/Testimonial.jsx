import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export default function Testimonial({ title, subTitle, review }) {
  return (
    <Div className="testimonials-main-container">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <span>{title}</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <span>{subTitle}</span>
          </Card.Subtitle>
          <Card.Text>{review}</Card.Text>
        </Card.Body>
      </Card>
    </Div>
  );
}

const Div = styled.div`
  .card {
    margin: 1rem 0;
    -webkit-box-shadow: 0px 2px 11px 1px rgba(209, 209, 209, 1);
    -moz-box-shadow: 0px 2px 11px 1px rgba(209, 209, 209, 1);
    box-shadow: 0px 2px 11px 1px rgba(209, 209, 209, 1);
  }
`;
