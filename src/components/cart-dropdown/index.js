import React from 'react';

import './styles.scss';
import CustomButton from '../custom-button';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

export default CartDropdown;