import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';
import { connect} from 'react-redux';

import CartIcon from '../cart-icon';
import CartDDropdown from '../cart-dropdown';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import './styles.scss';

const Header = (props) => (
    <div className="header">
    <Link className="logo-container" to="/">
     <Logo className="logo" />
    </Link>
    <div className="options">
        <Link className="option" to='/shop'> SHOP </Link>
        <Link className="option" to='/shop'> CONTACT </Link>
        { props.currentUser ? 
        <div className="option" onClick={ ()=> auth.signOut()}>
        SIGN OUT</div>
        :
       <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon />
    </div>
    {
        props.hidden? null :  <CartDDropdown />
    }
    </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden

})
export default connect(mapStateToProps)(Header);