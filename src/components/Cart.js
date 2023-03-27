import { useDispatch, useSelector } from 'react-redux';
import classes from './Cart.module.css';
import { cartActions } from '../store';
import CartItem from './CartItem';

const Cart = (props) => {
    const dispatch = useDispatch();
    const hideCartHandler = () => {
        dispatch(cartActions.cartDisabler());
    }
    const showCheckoutHandler = () => {
        dispatch(cartActions.checkoutHandler());
    }

    const cart = useSelector((state) => state.cart)

    let totalPrice = 0;

    return (
        <>
            <div className={classes.overlay}
                onClick={hideCartHandler}></div>
            <div className={classes.cartModal}>
                {cart?.map(item => (
                    (totalPrice += item.price * item.quantity),
                    < CartItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}
                <div className={classes.buttons}>
                    <p>Total price:{totalPrice}$</p>
                    <button onClick={showCheckoutHandler}
                        className={classes.orderButton}>Next</button>
                    <button className={classes.exitButton}
                        onClick={hideCartHandler}>
                        Close
                    </button>
                </div>
            </div>
        </>
    )
};

export default Cart;
