import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from '../../Context';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if(cart.lenght > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="My" title="cart" />
                                    <CartColumns />
                                </React.Fragment>
                            );
                        }
                        else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}