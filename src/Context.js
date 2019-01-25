import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
export class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotoal: 0,
        cartTax: 0,
        cartTotoal: 0
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item };
            tempProducts = [...tempProducts, singleItem]
        });
        this.setState(() => {
            return { products: tempProducts}
        });
    };
    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };
    
    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {detailProduct: product};
        });
    };

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=> {
            return {products: tempProducts, cart: [...this.state.cart,
                product]};
        }); 
    };
    openModal = id =>{
        const product = this.getItem(id);
        this.setState(()=> {
            return {modalProduct: product, modalOpen: true};
        })
    }
    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    }

    incrementItem = id => {
        console.log('Item increased');
    };
    
    decrementItem = id => {
        console.log('Item decreased');
    };

    removeItem = id => {
        console.log('Item removed');
    };

    clearCart = () => {
        console.log('Item cleared items');
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                incrementItem: this.incrementItem,
                decrementItem: this.decrementItem,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
};

//Consumer
export const ProductConsumer = ProductContext.Consumer;