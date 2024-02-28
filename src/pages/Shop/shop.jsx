
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from './../../componatnts/Card/Card';
import { useEffect, useState } from "react";
import axios from "axios";
import ProductFilter from "../../componatnts/ProductFilter/ProductFilter";
import Loader from './../../componatnts/loder/loader';

export default function Shop() {
  const[product, setProduct] =useState([]);
  const[isloading,setloading] =useState(false)
  const[queryFilter, setFilterQuery]=useState('')
  useEffect(()=>{
      axios('http://localhost:3000/products?' + queryFilter).then(data =>{
          setProduct(data.data)
      })
  },[queryFilter])
    
  return (
    <Container className="my-5">
      <ProductFilter setFilterQuery={setFilterQuery}/>
      {isloading ? <Loader/> :
       <Row className="gy-4">
       {product.map((product) => {
         return (
           <Col sm={6} md={4} lg={3} key={`products-shop-${product.id}`}>
             <CardProduct product={product} />
           </Col>
         );
       })}
     </Row>}
     
    </Container>
  );
}
