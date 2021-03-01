import React, { useState } from 'react';
import { HeaderContainer,
    Navbar,UlContainer,
    NavbarMenu,Cart ,Bars
    ,CartShop,CartWishList} from "./header";
import {
    Link
  } from "react-router-dom";
import { Grid } from '@material-ui/core';
import logo from '../../images/logo_white.png';
import {FiHeart,FiShoppingCart} from 'react-icons/fi'
import {FaBars} from 'react-icons/fa';
import CartHeader from "../cart/Cart";
  

const Header:React.FC = () =>{

    const [barsClick,setBarsClick] = useState(false);
    const [cart,setCart] = useState(false);
    const showBars = () =>{
        setBarsClick(!barsClick);
    }
    const showCart = () => {
        setCart(!cart);
    }
    return (
        <HeaderContainer>
            <Grid container  alignItems="center" justify="space-between">
                <Grid xs={6} sm={6} md={3} lg={3} item>
                    <div>
                        <img src={logo} alt="" height={26}/>
                    </div>
                </Grid>
                <NavbarMenu xs={12} sm={12} md={12} lg={6} item >
                    <Navbar className={barsClick ? "show-bars":"close-bars"}>
                        <UlContainer>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                        </UlContainer>
                    </Navbar>
                </NavbarMenu>
                <Grid xs={6} sm={6} md={3} lg={3} item>
                    <Cart>
                        <CartWishList><FiHeart/> wishist</CartWishList>
                        <CartShop  onClick={showCart}>
                            <FiShoppingCart/> <span>cart(0)</span>
                           {
                               cart && <CartHeader/>
                           }
                        </CartShop>
                        <Bars onClick={showBars}><FaBars/></Bars>
                    </Cart>
                </Grid>
            </Grid>
        </HeaderContainer>
    )
}

export default Header;