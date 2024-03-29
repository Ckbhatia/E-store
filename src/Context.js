import React, { Component } from "react";
import { detailProduct } from "./data";
import products from "./data/products";

export const ProductContext = React.createContext();

//Provider
export class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: null,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    delivery: 0,
    cartTotal: 0,
    userInfo: null,
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      // update the cart
      this.setState({
        cart: userData.userCart,
        cartTotal: userData.cartTotal,
        cartSubTotal: userData.cartSubTotal,
        delivery: userData.delivery,
        userInfo: userData.userInfo,
      });
    } else {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          cart: this.state.cart,
          cartTotal: this.state.cartTotal,
          cartSubTotal: this.state.cartSubTotal,
          delivery: this.state.delivery,
          userInfo: this.state.userInfo,
        })
      );
    }
    this.setProducts();
  }

  static getDerivedStateFromProps(props, state) {
    // TODO: This method is deprecated and should be replace and also replace all these workarounds
    return {...state, products: props.products};
  }

  setProducts = () => {
    // let tempProducts = [...products];
    // let arr = products;
    // console.log(arr, "arr");
    // let tempCategories = [];

    // for (let k = 0; k < mainProducts.length; k++) {
    //   tempCategories = tempCategories.concat(mainProducts[k].title);
    // }

    // tempCategories.forEach((category) => {
    //   products[category].forEach((item) => {
    //     const singleItem = { ...item };
    //     tempProducts = [...tempProducts, singleItem];
    //   });
    // });

    this.setState(() => {
      return { products: products };
    });
  };

  filterProducts = async (category) => {
    let tempProducts = [];
    // tempProducts = products[category];
    tempProducts = products.filter((product) => product.category === category);

    // Retain products inCart status and count values throughout the page refresh
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.userCart) {
      tempProducts.forEach((item) => {
        userData.userCart.forEach((product) => {
          if (item.id === product.id) {
            item.inCart = product.inCart;
            item.count = product.count;
            this.setState(() => {
              return { products: tempProducts };
            });
          }
        });
      });
    }

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addProductDetail = (product) => {
    this.setState(() => {
      return {...this.state, detailProduct: product };
    });
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      },
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userCart: [...this.state.cart, product],
          userInfo: this.state.userInfo,
        })
      )
    );
  };

  isInCart = (id) => {
    return this.state.cart.find((item) => item.id === id); 
  }

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  incrementItem = (id) => {
    let tempCart = [...this.state.cart];
    //Find selected products
    const selectedProduct = tempCart.find((item) => item.id === id);
    //Access index for product
    const index = tempCart.indexOf(selectedProduct);
    //Access product
    const product = tempCart[index];
    //Increment product quantity by one
    product.count = product.count + 1;
    //Update total of product based on increment
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrementItem = (id) => {
    let tempCart = [...this.state.cart];
    //Find selected products
    const selectedProduct = tempCart.find((item) => item.id === id);
    //Access index for product
    const index = tempCart.indexOf(selectedProduct);
    //Access product
    const product = tempCart[index];
    //decrement product quantity by one
    product.count = product.count - 1;

    //Update total of product based on decrement
    if (product.total > 0) {
      product.total = product.total - product.price;
    }
    //TO remove product if it's less than 1
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = (id) => {
    //Assing products to tempProducts
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    //Filter cart for products
    tempCart = tempCart.filter((item) => item.id !== id);
    //Access index of particular product
    const index = tempProducts.indexOf(this.getItem(id));
    //Access removed product
    let removedProduct = tempProducts[index];
    //Set values back to initial for removed product
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        //Update totals
        this.addTotals();
      }
    );
  };

  resetProducts = () => {
    const tempProducts = this.state.products.map((product) => {
      if (product.inCart) {
        product.inCart = false;
        product.count = 0;
        return product;
      }
      return product;
    });

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [], cartSubTotal: 0, cartTotal: 0, delivery: 0 };
      },
      () => {
        this.resetProducts();
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userCart: this.state.cart,
            cartTotal: this.state.cartTotal,
            cartSubTotal: this.state.cartSubTotal,
            delivery: this.state.delivery,
            userInfo: this.state.userInfo,
          })
        );
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    // Make changes according to the data
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    // Delivery charge
    let deliveryCharge = 15;
    // const tempTax = subTotal * 0.1;
    // const deliveryCharge = parseFloat(tempTax.toFixed(2));
    const total = subTotal + deliveryCharge;

    this.setState(
      () => {
        return {
          cartSubTotal: subTotal,
          delivery: deliveryCharge,
          cartTotal: total,
        };
      },
      () => {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userCart: this.state.cart,
            cartTotal: this.state.cartTotal,
            cartSubTotal: this.state.cartSubTotal,
            delivery: this.state.delivery,
            userInfo: this.state.userInfo,
          })
        );
      }
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addProductDetail: this.addProductDetail,
          addToCart: this.addToCart,
          isInCart: this.isInCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          incrementItem: this.incrementItem,
          decrementItem: this.decrementItem,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          filterProducts: this.filterProducts,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer
export const ProductConsumer = ProductContext.Consumer;
