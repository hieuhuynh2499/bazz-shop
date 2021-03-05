import React, { useState } from 'react';
import { HeaderContainer,
    Navbar,UlContainer,
    NavbarMenu,Cart ,Bars
    ,CartShop,CartWishList,AppbarContainer,ToobarContainer} from "./header";
import {
    Link
  } from "react-router-dom";
import { Grid } from '@material-ui/core';
import logo from '../../images/logo.png';
import {FiHeart,FiShoppingCart} from 'react-icons/fi'
import {FaBars} from 'react-icons/fa';
import CartHeader from "../cart/Cart";


import useScrollTrigger from '@material-ui/core/useScrollTrigger';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
  }

const Header:React.FC<Props> = (props) =>{

    const [barsClick,setBarsClick] = useState(false);
    const [cart,setCart] = useState(false);
    const showBars = () =>{
        setBarsClick(!barsClick);
    }
    const showCart = () => {
        setCart(!cart);
    }
   
function ElevationScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
    return (
        <ElevationScroll {...props}>
        <AppbarContainer style={{backgroundColor:"#fff",color:"#000"}}>
          <ToobarContainer style={{display:"block",padding:0}}>
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
                                
                                </CartShop>
                                <Bars onClick={showBars}><FaBars/></Bars>
                                {
                                        <CartHeader display={cart ? "block":"none"} /> 
                                }
                            </Cart>
                        </Grid>
                    </Grid>
            </HeaderContainer>
          </ToobarContainer>
        </AppbarContainer>
      </ElevationScroll>
       
    )
}

export default Header;