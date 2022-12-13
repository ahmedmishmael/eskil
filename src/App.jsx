import { React, Fragment, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("/eskil/db/data.json").then((res) => {
      const products = res.data.filter((data) => {
        return data.category !== `projects`;
      });
      setProducts(products);
      const projects = res.data.filter((data) => {
        return data.category === `projects`;
      });
      setProjects(projects);
    });
  }, []);
  const [wishList, setWishList] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const toggleWishList = (product) => {
    product.wished = !product.wished;
    setWishList(
      products.filter((product) => {
        return product.wished === true;
      })
    );
  };
  const addToCart = (product) => {
    product.inCart = true;
    ++product.count;
    setShoppingCart(
      products.filter((product) => {
        return product.inCart === true;
      })
    );
  };
  const increment = (product) => {
    ++product.count;
    setShoppingCart(
      products.filter((product) => {
        return product.inCart === true;
      })
    );
  };
  const decrement = (product) => {
    product.count > 1 && --product.count;
    setShoppingCart(
      products.filter((product) => {
        return product.inCart === true;
      })
    );
  };
  const remove = (product) => {
    product.inCart = false;
    product.count = 0;
    setShoppingCart(
      products.filter((product) => {
        return product.inCart === true;
      })
    );
  };

  const total = () => {
    const res = shoppingCart
      .map((product) => {
        return product.price * product.count;
      })
      .reduce((total, num) => {
        return total + num;
      }, 0);
    return res.toFixed(2);
  };

  return (
    <Fragment>
      <Header />
      <NavBar
        wishlist={wishList}
        shoppingCart={shoppingCart}
        total={total}
        remove={remove}
      />
      <Main
        products={products}
        projects={projects}
        toggleWishList={toggleWishList}
        wishlist={wishList}
        addToCart={addToCart}
        shoppingCart={shoppingCart}
        increment={increment}
        decrement={decrement}
        remove={remove}
        total={total}
      />
      <Footer />
    </Fragment>
  );
};

export default App;
