import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainProducts } from "../data/mainProducts";
import { bannerData, bannerTwoData } from "../data/banner";
import CaraouselShow from "./CarouselShow";

export default function MainPage() {
  return (
    <>
      <Div className="main-page-main-container wrapper">
        <div className="main-content flex-center">
          <div className="main-banner">
            <CaraouselShow bannerData={bannerData} />
          </div>
          <div className="container-fluid">
            <div className="main-products-category row">
              {mainProducts &&
                mainProducts.map((product) => {
                  return (
                    <Link
                      key={product.id}
                      to={product.category}
                      className="product-one-link col-6 col-md-4"
                    >
                      <div className="product-card-container product">
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
          <div className="main-banner">
            <CaraouselShow bannerData={bannerTwoData} />
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
    margin-bottom: 2rem;
  }

  .main-products-category {
    // margin: 2rem 1rem 1rem 1rem;
    margin-bottom: 2rem;
  }

  .product-one-link {
    text-decoration: none;
    margin: 0.5rem 0;
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
