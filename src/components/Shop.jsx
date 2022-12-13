import React, { Fragment, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Shop.css";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Shop = (props) => {
  const importedProducts = props.products;
  const toggleWishList = props.toggleWishList;
  const addToCart = props.addToCart;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(importedProducts);
  }, [importedProducts]);

  // Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);
  const itemsPerPage = 21;

  useEffect(() => {
    const calcEndOffset = () => {
      const result = itemOffset + itemsPerPage;
      if (result <= products.length) {
        return result;
      } else {
        return products.length;
      }
    };
    const endOffset = calcEndOffset();
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
    setEndOffset(endOffset);
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const [title, setTitle] = useState("ALL PRODUCTS");

  const filter = (category) => {
    const filteredProducts = importedProducts.filter((product) => {
      if (category === "All products") {
        return products;
      } else if (category === "Best sellers") {
        return product.bestSeller === true;
      } else {
        return product.category === category;
      }
    });
    setTitle(category);
    setItemOffset(0);
    setProducts(filteredProducts);
  };

  return (
    <div id="shop">
      <Container>
        <div className="navigation mb-5">
          <Link to="/">Home</Link> / Shop
        </div>
        <Row>
          <aside className="col-lg-2 d-flex flex-column" id="shop-aside">
            <p className="mb-3" style={{ fontSize: "large" }}>
              CATEGORIES
            </p>
            <Link onClick={() => filter("All products")}>
              <MdOutlineArrowForwardIos /> ALL PRODUCTS
            </Link>
            <Link onClick={() => filter("Best sellers")}>
              <MdOutlineArrowForwardIos /> BEST SELLERS
            </Link>
            <Link onClick={() => filter("Chairs")}>
              <MdOutlineArrowForwardIos /> CHAIRS
            </Link>
            <Link onClick={() => filter("Lamps")}>
              <MdOutlineArrowForwardIos /> LIGHTNING
            </Link>
            <Link onClick={() => filter("Tables")}>
              <MdOutlineArrowForwardIos /> COFFEE TABELS
            </Link>
            <Link onClick={() => filter("Clocks")}>
              <MdOutlineArrowForwardIos /> WOODEN CLOCKS
            </Link>
            <Link onClick={() => filter("Sofas")}>
              <MdOutlineArrowForwardIos /> SOFAS
            </Link>
            <Link onClick={() => filter("Gifts")}>
              <MdOutlineArrowForwardIos /> GIFTS
            </Link>
          </aside>
          <main className="col-lg-10">
            <Row>
              <Col lg={12}>
                <h2>{title.toUpperCase()}</h2>
              </Col>
              <Col lg={12}>
                <p>
                  Showing {itemOffset + 1} - {endOffset} of {products.length}{" "}
                  results
                </p>
              </Col>
              {currentItems.map((product) => (
                <div
                  className="col-lg-4 product-container mb-4"
                  key={product.id}
                >
                  <div className="product-wrapper">
                    <img src={product.url} alt="product" width="100%" />
                    <div className="product-options d-flex">
                      <Link
                        to={`/shop/product-details/${product.category}-${product.id}`}
                        className="product-option"
                        style={{ borderRight: "1px solid silver" }}
                      >
                        <AiFillEye />
                        <p className="ms-1">QUICK VIEW</p>
                      </Link>
                      <div
                        onClick={() => {
                          toggleWishList(product);
                        }}
                        className="product-option"
                      >
                        {product.wished === false ? (
                          <Fragment>
                            <AiOutlineHeart />
                            <p className="ms-1">ADD TO WISHLIST</p>
                          </Fragment>
                        ) : (
                          <Fragment>
                            <AiFillHeart /> <p className="ms-1">WISHLIST</p>
                          </Fragment>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="product-name my-3">
                    <p>{product.name}</p>
                  </div>
                  <div className="price">
                    <p>${product.price}</p>
                    <div className="add-to-cart">
                      {product.inCart === false ? (
                        <div
                          onClick={() => {
                            addToCart(product);
                          }}
                        >
                          ADD TO CART
                        </div>
                      ) : (
                        <Link to="/cart">SHOW IN CART</Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <Col
                lg={12}
                id="pagination"
                className="d-flex justify-content-center"
              >
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                />
              </Col>
            </Row>
          </main>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
