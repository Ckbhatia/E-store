import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';


export default class Product extends Component {
    render() {
        const {id, title, img, price,inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
                        
                        <Link to='/details'>
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true: false}
                            onClick={() => {console.log('Added to the cart')}}>
                            
                            {inCart ? (
                            <p className="text-capitalize mb-0" disabled>
                                {" "} In cart
                            </p> ) : (
                            <i className="fas fa-cart-plus" />
                            )}
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                    <p className="algin-self-center mb0">
                    {title}</p>
                     <h5 className="text-blue font-italic mb-0">
                     <span className="mr-1">₹</span>
                     {price}
                     </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper = styled.div`
    .cart{
        border-color: transparent;
        transition: all 1s linear;
    }
    .cart-footer{
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
        }
        .card-footer {
            background-color: rgba(247, 247, 247);
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 0.3s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background-color: var(--LightGreen);
        border: none;
        color: var(--MainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 0.3s linear;
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }
    .cart-btn:hover {
        color: var(--MainWhite);
        background-color: var(--MainGreen);
    }
    `;