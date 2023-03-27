import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState =
    { showCart: false, showCheckout: false, showSummary: false, cart: [] };

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartHandler(state) {
            state.showCart = true;
        },
        cartDisabler(state) {
            state.showCart = false;
        },
        checkoutHandler(state) {
            state.showCheckout = true;
            state.showCart = false;
        },
        checkoutDisabler(state) {
            state.showCheckout = false;
            state.showCart = true;
        },
        summaryHandler(state) {
            state.showSummary = true;
        },
        addToCart(state, action) {
            const itemInCart = state.cart.find(
                (item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.id === action.payload);
            item.quantity++
        },
        decrementQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.id === action.payload)
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        removeItem(state, action) {
            const removeItem = state.cart.filter(
                (item) => item.id !== action.payload);
            state.cart = removeItem;
        }
    }
});

const store = configureStore({
    reducer: slice.reducer
});

export default store;

export const cartActions = slice.actions;
