import React from "react";
//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import { Switch, Route } from "react-router-dom";
import Modal from "./components/Modal";
import MainPage from "./components/MainPage";
import Checkout from "./components/Checkout";
import Support from "./components/Support";
import GroceryCheckout from "./components/GroceryCheckout";
import { ProductProvider } from "./Context";

const App = () => {
  const [products, setProducts] = React.useState([]);
 
  return (
    <ProductProvider products={products}>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/groceries" component={GroceryCheckout} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/support" component={Support} />
          <Route path="/details/:id/:category" render={(props) => {
            return <Details {...props} setProducts={setProducts}/>
          }} />
          <Route path="/:page" render={(props) => {
            return <ProductList {...props} setProducts={setProducts} />
          }} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    </ProductProvider>
  );
}

export default App;
