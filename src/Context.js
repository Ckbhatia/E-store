import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
export class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
};

//Consumer
export const ProductConsumer = ProductContext.Consumer;