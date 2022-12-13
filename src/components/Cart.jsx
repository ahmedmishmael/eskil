import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import CartLogo from "./assets/cart.png";

const Cart = (props) => {
  const shoppingCart = props.shoppingCart;
  const increment = props.increment;
  const decrement = props.decrement;
  const remove = props.remove;
  const total = props.total;
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  useEffect(() => {
    shoppingCart.length === 0 ? setIsCartEmpty(true) : setIsCartEmpty(false);
  }, [shoppingCart]);

  return (
    <Container>
      <div className="navigation mb-5">
        <Link to="/">Home</Link> / Shopping Cart
      </div>
      <h2 className="text-center mb-5">SHOPPING CART</h2>
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>COUNT</th>
              <th>SUBTOTAL</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.url}
                    alt={product.name}
                    width="60px"
                    height="60px"
                  />
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <div style={{ border: "1px solid black" }}>
                    <AiOutlineMinus
                      onClick={() => {
                        decrement(product);
                      }}
                      style={{ color: "black", cursor: "pointer" }}
                    />
                    {product.count}

                    <AiOutlinePlus
                      onClick={() => {
                        increment(product);
                      }}
                      style={{ color: "black", cursor: "pointer" }}
                    />
                  </div>
                </td>
                <td>${(product.price * product.count).toFixed(2)}</td>
                <td>
                  <MdDelete
                    onClick={() => {
                      remove(product);
                    }}
                    style={{ fontSize: "x-large", cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {isCartEmpty && (
          <div className="d-flex justify-content-center">
            <img src={CartLogo} alt="Empty Cart Logo" />
          </div>
        )}
      </Container>
      <div className="d-flex justify-content-between mt-5">
        <div>
          <h5>CART TOTAL: ${total()}</h5>
        </div>
        <Link to="/checkout">
          <button
            style={{ backgroundColor: "black", color: "white" }}
            className="py-2 px-3"
          >
            PROCEED TO CHECKOUT
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Cart;
