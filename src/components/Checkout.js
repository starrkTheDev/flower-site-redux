import { useDispatch } from 'react-redux';
import classes from './Checkout.module.css';
import { cartActions } from '../store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Summary from './Summary';

const Checkout = () => {

    const dispatch = useDispatch();
    const hideCheckoutHandler = () => {
        dispatch(cartActions.checkoutDisabler());
    }
    const showSummaryHandler = (e) => {
        e.preventDefault();
        dispatch(cartActions.summaryHandler());
    }

    const showSummary = useSelector(state => state.showSummary);

    const cart = useSelector((state) => state.cart);
    let totalPrice = 0;

    cart?.map(item =>
        (totalPrice += item.price * item.quantity))

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const nameValue = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameValue = (e) => {
        setLastName(e.target.value);
    }
    const emailValue = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <div className={classes.overlay}></div>
            <form onSubmit={showSummaryHandler} className={classes.form} >
                <div className={classes.data_div}>
                    <div className={classes.input_div}>
                        <label>First Name</label>
                        <input type="text" required value={firstName} onChange={nameValue} className={classes.input} />
                    </div>
                    <div className={classes.input_div}>
                        <label>Last Name</label>
                        <input type="text" required value={lastName} onChange={lastNameValue} className={classes.input} />
                    </div>
                    <div className={classes.input_div}>
                        <label>E-mail</label>
                        <input type="email" required value={email} onChange={emailValue} className={classes.input} />
                    </div>
                    <div className={classes.input_div}>
                        <label>Address</label>
                        <input type="text" required className={classes.input} />
                    </div>
                    <div className={classes.input_div}>
                        <label>Postal Code</label>
                        <input type="text" required className={classes.input} />
                    </div>
                    <div className={classes.input_div}>
                        <label>Phone Number</label>
                        <input type="text" className={classes.input} />
                    </div>
                    <div className={classes.terms_div}>
                        <p>Agreed to terms and conditions</p>
                        <input type="checkbox" required />
                    </div>
                </div>
                <div className={classes.submit_div}>
                    <p>Delivery: </p>
                    <p className={classes.price}>Free</p>
                    <p>Total Price:</p>
                    <p className={classes.price}>{totalPrice}$</p>
                    <div className={classes.buttons}>
                        <button className={classes.backButton}
                            onClick={hideCheckoutHandler}>Back</button>
                        <button className={classes.submitButton}
                            type="submit">Order</button>
                    </div>
                </div>
            </form>
            {showSummary &&
                <Summary
                    name={firstName}
                    lastName={lastName}
                    email={email} />}
        </>
    )
}

export default Checkout;