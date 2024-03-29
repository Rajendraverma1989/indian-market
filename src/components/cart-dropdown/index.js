import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';
import CustomButton from '../custom-button';
import CartItem from '../cart-item';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?(
                cartItems.map(cartItem =>(
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                ):
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>    
            <CustomButton onClick={()=> {
                history.push('/checkout')
                dispatch(toggleCartHidden());
                }}>GO TO CHECKOUT</CustomButton>        
    </div>
);
const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));