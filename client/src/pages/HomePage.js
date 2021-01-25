import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

import { Container, Col, Row } from "react-bootstrap";

import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

import Banner from "../assets/banner.jpg";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Row className="my-2">
        <img src={Banner} alt="Banner Promoção" />
      </Row>
      <h1>Novidades</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="justify-content-center">
          {products.map((product) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomePage;
