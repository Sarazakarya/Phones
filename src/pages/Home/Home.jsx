import { Card, Container } from "react-bootstrap";
import Cursor from "../../componatnts/Cusrdor/Cursour";
import NavBar from "../../componatnts/Navbar/Navbar";
import ItemProduct from "../../componatnts/ProductCard/ItemProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./../../componatnts/loder/loader";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [isloading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios("http://localhost:3000/products").then((data) => {
      setProduct(data.data);
      setLoading(false);
    });
  }, []);

  if (isloading) {
    return <Loader />;
  }
  return (
    <div className="Home">
      <Container className="mt-5">
        <Cursor />
        <ItemProduct title="latest Product" products={product.slice(0, 10)} />
        <ItemProduct title="offer" products={product.slice(0, 10)} />
      </Container>
    </div>
  );
}
