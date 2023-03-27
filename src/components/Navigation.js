import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import { cartActions } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const Navigation = () => {

    const dispatch = useDispatch();
    const showCartHandler = () => {
        dispatch(cartActions.cartHandler());
    }

    const cart = useSelector((state => state.cart))

    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.getTotalQuantity
        })
        return total
    }

    return (
        <header className={classes.header}>
            <div >
                <NavLink className={classes.link} to='/'>Home</NavLink>
                <NavLink className={classes.link} to='/products'>Flowers</NavLink>
                <NavLink className={classes.link} to='/bio'>About</NavLink>
                <NavLink className={classes.link} to='/services'>Services</NavLink>
            </div>
            <button onClick={showCartHandler} className={classes.cart}>{getTotalQuantity() || "Cart"}</button>
        </header >
    )
};

export default Navigation;