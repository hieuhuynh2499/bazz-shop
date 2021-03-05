import React  from "react";
import {CartContainer,CartItem,CartItemImg,CartItemcontent,CartTotal,CartBtn,CartItemContainer} from "./cartsty";

import { useDispatch, useSelector } from "react-redux";
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io";
import { removecartRequest } from "../../actions/removeCart";
interface showCart {
    display:string
}
const CartHeader:React.FC<showCart> = ({display}) =>{
    const listProducts = useSelector((state:any) => state.addtocart.listProducts);
    const dispatch = useDispatch();
    const removeProduct = (id:number) =>{
        dispatch(removecartRequest(id));
     
    } 
    let tempTotal = 0;
    listProducts.map((item:any) => {
        tempTotal += item.price * item.amount;
        return tempTotal;
    });
    return(
        <CartContainer display={display} >
           <h3 style={{margin:"0",fontSize:"14px"}}>your cart</h3>
            <CartItemContainer>
                {
                  listProducts.length > 0 ?  listProducts.map((item:any,index:number) =>(
                        <CartItem key={index}>
                            <CartItemImg>
                                <img src={item.image} alt=""/>
                            </CartItemImg>
                            <CartItemcontent>
                                <h4>{item.name}</h4>
                                <span>${item.price} * {item.amount}</span>
                                <p><span><IoIosArrowDown/></span><span ><IoIosArrowUp/></span></p>
                                <strong onClick={()=>removeProduct(item.id)}>x</strong>
                            </CartItemcontent>
                        </CartItem>
                    )):"nothing here"
                }
            </CartItemContainer>
            <CartTotal>
                <span>total</span>
                <span>{tempTotal}$</span>
            </CartTotal>
            <CartBtn>
                <button className="viewblack">view more</button>
                <button className="viewborder">check out</button>
            </CartBtn>
        </CartContainer>
    )
}

export default CartHeader;