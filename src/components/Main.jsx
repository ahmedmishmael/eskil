import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Shop from "./Shop";
import Contact from "./Contact";
import FAQs from "./FAQs.jsx";
import Account from "./Account";
import Signup from "./Signup";
import Wishlist from "./Wishlist";
import Productdetails from "./Productdetails";
import Checkout from "./Checkout";
import Cart from "./Cart";

const Main = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/portfolio"
        element={<Portfolio projects={props.projects} />}
      />
      <Route
        path="/shop/"
        element={
          <Shop
            products={props.products}
            toggleWishList={props.toggleWishList}
            addToCart={props.addToCart}
          />
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/cart"
        element={
          <Cart
            shoppingCart={props.shoppingCart}
            increment={props.increment}
            decrement={props.decrement}
            remove={props.remove}
            total={props.total}
          />
        }
      />
      <Route
        path="/shop/product-details/:id"
        element={<Productdetails products={props.products} />}
      />

      <Route path="/FAQs/*" element={<FAQs />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/signup" element={<Signup />} />
      <Route
        path="/wishlist"
        element={
          <Wishlist
            wishlist={props.wishlist}
            toggleWishList={props.toggleWishList}
            addToCart={props.addToCart}
          />
        }
      />
      <Route
        path="/checkout"
        element={
          <Checkout shoppingCart={props.shoppingCart} total={props.total} />
        }
      />
    </Routes>
  );
};

export default Main;
