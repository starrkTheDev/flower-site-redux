import classes from './Product.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store';

const Product = (props) => {
    const { id, name, price, image } = props;

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            id, name, price, image
        }))
    }

    return (
        <li key={id} className={classes.item}>
            <img className={classes.image} src={image} alt={name} />
            <div className={classes.description}>
                <p>{name}</p>
                <p>{price}$</p>
            </div>
            <div className={classes.button}>
                <button
                    onClick={addToCartHandler}
                    className={classes.addCart}>
                    Add to cart
                </button>
            </div>
        </li>
    )

}

export default Product;