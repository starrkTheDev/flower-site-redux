import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../store";

const CartItem = (props) => {

    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch(cartActions.incrementQuantity(id));
    }
    const decrementHandler = () => {
        dispatch(cartActions.decrementQuantity(id));
    }

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeItem(id));
    }

    const { id, name, price, quantity, image } = props;

    const totalPrice = price * quantity;

    return (
        <li key={id} >
            <div className={classes.info}>
                <img src={image} alt="item" />
                <div className={classes.description}>
                    <p>{name}</p>
                    <p>{price}$</p>
                    <p>{quantity}{quantity === 1 ? "pc" : "pcs"}</p>
                </div>
                <div className={classes.buttons}>
                    <button onClick={incrementHandler}>+</button>
                    {quantity > 1 && <button onClick={decrementHandler}>-</button>}
                </div>
                <div className={classes.remove}>
                    <button onClick={removeFromCartHandler}>X</button>
                </div>
                <div className={classes.total}>
                    <p>{totalPrice}$</p>
                </div>
            </div>
        </li>
    )
}

export default CartItem;