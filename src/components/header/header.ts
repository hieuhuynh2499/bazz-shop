import { AppBar, Grid, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    min-height:62px;
    background-color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0px 30px;
    position:relative;
`;
export const NavbarMenu = styled(Grid)` 
   @media screen and (max-width:1280px){
        position:absolute;
        top:60px;
        background-color:#fff;
        width:100%;
        left:0px;
        overflow:hidden;
        .show-bars {
            height: auto;
           
        }
        
    }
`;
export const Navbar = styled.nav`
    display:flex;
    justify-content:center;
    transition: height 0.5s ease;
    @media screen and (max-width:1280px){
        justify-content:flex-start;
        width:100%;
        height:0px;
       
    }
`;
export const CartWishList = styled.h3`
    font-size:14px;
   @media screen and (max-width:1280px){
       display:none;
    } 
`;
export const CartShop = styled.h3`
    font-size:14px;
    cursor:pointer;
`;
export const Bars = styled.h3`
    display:none;
    font-size:25px;
    @media screen and (max-width:1280px){
       display:inline;
       margin:10px 0px 0px;
    } 
`;
export const UlContainer = styled.ul`
    list-style-type:none;
    display:flex;
    margin:0px;
    padding:0px;
    li{
        margin-right:20px;
        a{
            text-decoration:none;
            font-size: 15px;
            font-weight: 700;
            line-height: 1.1em;
            text-transform: uppercase;
            color:#000;
        }
    }
    @media screen and (max-width:1280px){
        flex-direction:column;
        padding:0px 30px 30px;
        width:100%;
        li{
            margin-bottom:10px;
            border-bottom:1px solid #000;
            display:block;
            width:100%;
            padding-bottom:10px;
            
        }
    }
`;

export const Cart = styled(Grid)`
    display:flex;
    justify-content:flex-end;
    h3{
        margin-left:10px;
        text-transform: uppercase;
    }
`;

export const AppbarContainer = styled(AppBar)`
    
    .MuiAppBar-colorPrimary{
    background-color:#fff;
    color:#000;
    }
`;

export const ToobarContainer = styled(Toolbar)`
    display:block;
    .MuiToolbar-gutters{
        padding:0;
    }
`;