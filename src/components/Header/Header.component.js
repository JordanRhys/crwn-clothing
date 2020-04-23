import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

import { ReactComponent as Logo} from '../../assets/logo.svg';
import './Header.styles.scss';

const Header = ({ currentUser, cartDropdownHidden }) => {

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                cartDropdownHidden ? null : <CartDropdown />
            }
        </div>
    )
};

const mapStateToProps = ({user: { currentUser }, cart: { cartDropdownHidden}}) => ({
    currentUser,
    cartDropdownHidden
})

export default connect(mapStateToProps)(Header);