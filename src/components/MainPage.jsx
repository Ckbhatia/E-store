import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainProducts } from "../data/mainProducts";
import CaraouselShow from "./CarouselShow";

export default function MainPage() {
  return (
    <>
      <Div className="main-page-main-container wrapper">
        <div className="main-content flex-center">
          <div className="main-banner">
            <CaraouselShow />
          </div>
          <div className="main-products-category">
            {mainProducts &&
              mainProducts.map((product) => {
                return (
                  <Link
                    key={product.id}
                    to={product.category}
                    className="product-one-link"
                  >
                    <div className="product-card-container product-one">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="main-product-cate-img"
                      />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </Div>
    </>
  );
}

const Div = styled.div`
  background-color: white;
  .main-banner {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }

  .main-products-category {
    display: flex;
    justify-content: space-evenly;
    // flex-wrap: wrap;
    margin: 2rem 1rem 1rem 1rem;
  }

  .product-one-link {
    text-decoration: none;
    margin: 0.5rem;
  }

  .product-card-container {
    border: 2px solid #92d13f;
    width: 100%;
    height: 100%;
    .main-product-cate-img {
      width: 100%;
      height: 100%;
    }
  }
`;
