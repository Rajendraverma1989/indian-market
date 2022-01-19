import { createSelector } from 'reselect';

/**
 * input Selector
 * @param {*} state take whole state of the project
 * @returns cart reducer (selected only required reducer)
 */

const selectCart = state => state.cart;

/**
 * reselect function
 * take cart item as an array
 */

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
    );

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

// count cart items quantity
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
            0
         )
); 

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity * cartItem.price,
            0
         )
)