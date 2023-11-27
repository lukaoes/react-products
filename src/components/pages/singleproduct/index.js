import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Advert, Div } from './singleproduct.styled'

const SingleProduct = (param) => {
    const number = useParams();
    const [oneProduct, getOneProduct] = useState({});
    param = number.id;

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${param}`).then((response) => {
            getOneProduct(response.data)
        })
    }, [])

    return (

        <Advert>
            <div>
                <img src={oneProduct.image} alt={oneProduct.title} />
            </div>
            <Div>
                <div>
                    <h1>{oneProduct.title}</h1>
                    <h5>{oneProduct.category}</h5>
                    <p>{oneProduct.description}</p>
                    <h2>Price - $ {oneProduct.price}</h2>
                </div>
            </Div>
        </Advert>
    )
}

export default SingleProduct