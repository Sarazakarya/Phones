import React from 'react'
import { Button, Card } from "react-bootstrap";
import './Card.css'
import { Link } from 'react-router-dom';
import AddToCardBtn from '../AddToCardBrn/AddToCardBtn';
import { useRecoilState } from 'recoil';
import { $cartAtom } from '../Store/cartAtom';
export default function CardProduct({ product }) {
    const [cartData] = useRecoilState($cartAtom);
    const isInCard = cartData.find((e) => e.id === product.id)
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={product.thumbnail}
                className="product__card__img"
            />
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className='links'><Link to={`/product/${product.id}`}>{product.title}</Link></Card.Title>
                <div>
                    <Card.Text>${product.price}</Card.Text>
                    <div className="d-flex gap-2 align-items-center">
                        {isInCard ? <span className='fw-bold'>Aready In Card </span> : <AddToCardBtn product={product} />}
                        <Button variant="danger" className="fs-5">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
                            </svg>
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}
