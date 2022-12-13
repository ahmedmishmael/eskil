import React from "react";
import { Container, Table } from "react-bootstrap";
import "./css/Wishlist.css";
import { FaCartPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

const Wishlist = (props) => {
  const wishlist = props.wishlist;
  const toggleWishList = props.toggleWishList;
  const addToCart = props.addToCart;
  const [isWishlistEmpty, setIsWishlistEmpty] = useState(false);
  useEffect(() => {
    wishlist.length === 0
      ? setIsWishlistEmpty(true)
      : setIsWishlistEmpty(false);
  }, [wishlist]);

  return (
    <div id="wishlist" className="py-5">
      <Container>
        <h2 className="mb-5 text-center">WISHLIST</h2>
        <Table responsive id="wishlist-table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>NAME</th>
              <th>UNIT PRICE</th>
              <th>STOCK STATUS</th>
              <th>ADD TO CART</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product) => (
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
                <td>{product.price}</td>
                <td>IN STOCK</td>
                <td>
                  <FaCartPlus
                    style={{ fontSize: "x-large", cursor: "pointer" }}
                    onClick={() => addToCart(product)}
                  />
                </td>
                <td>
                  <MdDelete
                    style={{ fontSize: "x-large", cursor: "pointer" }}
                    onClick={() => {
                      toggleWishList(product);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {isWishlistEmpty === true && (
          <p
            className="text-center pb-3"
            style={{ borderBottom: "1px solid silver" }}
          >
            No products added to the wishlist
          </p>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
