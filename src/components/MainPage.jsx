import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainProducts } from "../data/mainProducts";
import { bannerData, bannerTwoData } from "../data/banner";
import CaraouselShow from "./CarouselShow";
import Testimonial from "./Testimonial";
import support from "../data/support";
import testimonial from "../data/testimonial";

export default function MainPage() {
  return (
    <>
      <Div className="main-page-main-container wrapper">
        <div className="main-content flex-center">
          <div className="main-banner">
            <CaraouselShow bannerData={bannerData} />
          </div>
          <div className="message-container text-center">
            <p className="message-text">{support.message.text}</p>
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
          <section className="testimonial-section">
            <div className="header-container">
              <h3 className="testimonial-heading">Recommended by</h3>
            </div>
            <div className="testmonial-container">
              {testimonial.reviews.map((user) => {
                return (
                  <Testimonial
                    key={user.id}
                    title={user.title}
                    subTitle={user.subTitle}
                    review={user.review}
                  />
                );
              })}
            </div>
          </section>
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

  .message-container {
    width: 100%;
    margin: 4rem 0;
    background-color: #fcffc9;
    .message-text {
      color: #989898;
      font-size: 1rem;
    }
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
  .header-container {
    margin: 0 1rem;
  }
  .testmonial-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: space-evenly;
    flex-wrap: wrap;
  }
  .testimonial-heading {
    font-size: 1.55rem;
  }
`;
