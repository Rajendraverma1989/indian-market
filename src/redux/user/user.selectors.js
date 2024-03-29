import { createSelector } from 'reselect';


const selectUser = state => state.user;

//const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(
    [selectUser],
    user=>user.currentUser
);

//above and bellow both are same

// export const selectCurrentUser = createSelector(
//     selectUser,
//     selectCart,
//     (user, cart)=>user.currentUser
// );