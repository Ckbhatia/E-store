import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, company, img, info, price, title, inCart} = 
                    value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        <div className="row">
                            <div className="col-10 mx-auto.col-md-6 my-3">
                                    <img src={img} alt="product" className="img-fluid"/>
                            </div>
                            <div className="col-10 mx-auto.col-md-6 my-3 text-capitlize">
                                <h2>{title}</h2>
                                <h4 className="text-title text-uppercase">
                                {company}
                                </h4>
                                <h4 className="text-black">
                                    <strong>price: <span>₹</span>{price}
                                    </strong>
                                </h4>
                                <p className="text-muted lead">
                                {info}
                                </p>
                                <div>
                                    <Link to='/'>
                                    <ButtonContainer cart>back to home</ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                    cart
                                    disabled={inCart?true:false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                    {inCart? "inCart": "add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                    }}
            </ProductConsumer>
        );
    }
}