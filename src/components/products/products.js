import ProductsCard from './products.styled'
import { Button } from '../buttons/buttons';

const ProductsList = (props) => {
    const prodsList = props.item;
    return (

        <ProductsCard>
            <img src={prodsList.image} alt={prodsList.id} />
            <h2>
                {prodsList.title.length > 20 ? `${prodsList.title.slice(0, 25)}...` : prodsList.title}
            </h2>
            <h5>
                {prodsList.category}
            </h5>
            <p>
                {`${prodsList.description.slice(0, 150)}...`}
            </p>
            <h4>
                Rating: {prodsList.rating.rate} / {prodsList.rating.count}
            </h4>
            <h1>
                $ {prodsList.price}
                <Button href={"/product/" + prodsList.id}>
                    VIEW DETAILS
                </Button>
            </h1>

        </ProductsCard>


    )
}

export default ProductsList

