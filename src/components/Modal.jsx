import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';
import { ButtonContainer } from './Button';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {/* Get values from productConsumer
                // Destructing values
                // Render it on condition
                 */}
                {(value)=> {
                const {modalOpen, closeModal} = value;
                const { img, title, price} = value.modalProduct;
                if(!modalOpen) {
                    return null;
                }
                else {
                    return (
                    //ModalContainer
                    //Render when product in cart
                    <ModalContainer>
                        <div className="conainer">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitlize p-5">
                                    <h5>Item added to the cart</h5>
                                    <img className="img-fluid" src={img} alt="product" />
                                    <h5>{title}</h5>
                                    <h5 className="muted">Price: ₹ {price}</h5>
                                    <Link to="/">
                                        <ButtonContainer cart onClick={()=> // cart for temp
                                            value.closeModal()} >
                                            continue shopping
                                        </ButtonContainer>
                                    </Link>
                                    <Link to="/cart">
                                    <ButtonContainer cart onClick={()=> 
                                        value.closeModal()} >
                                        go to cart
                                    </ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ ModalContainer>
                );
            }
        }}
            </ProductConsumer>
        );
    };
};

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--MainWhite);
    }
`;