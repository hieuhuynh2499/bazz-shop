import React  from "react";
import {CartContainer,CloseX,CartItem,CartItemImg,CartItemcontent,CartTotal,CartBtn,CartItemContainer, CartContaienerBtn} from "./cartsty";
import { addtocartRequest } from "../../actions/addtocart";
import { useDispatch, useSelector } from "react-redux";
import {IoIosArrowDown,IoIosArrowUp,IoMdClose} from "react-icons/io";
import { removecartRequest } from "../../actions/removeCart";
import { reducetocartRequest } from "../../actions/reduceCart";
interface showCart {
    showCart : boolean,
    showCartFc () : void;
}
const CartHeader:React.FC<showCart> = ({showCart,showCartFc}) =>{
   
    const listProducts = useSelector((state:any) => state.addtocart.listProducts);
    const dispatch = useDispatch();
    const removeProduct = (id:number) =>{
        dispatch(removecartRequest(id));
    } 
    const addToCart = (id:any) =>{
        dispatch(addtocartRequest(id));
    }
    const reduceToCart = (id:any) =>{
        dispatch(reducetocartRequest(id));
    }
    let tempTotal = 0;
    listProducts.map((item:any) => {
        tempTotal += item.price * item.amount;
        return tempTotal;
    });
    return(
        <CartContainer className={showCart?"Close":""}>
            <CloseX>
                <IoMdClose onClick={showCartFc} />
            </CloseX>
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
                                <p>
                                    <span onClick={()=>reduceToCart(item.id)}><IoIosArrowDown/></span>
                                    <span onClick={()=>addToCart(item.id)}><IoIosArrowUp/></span></p>
                                <strong onClick={()=>removeProduct(item.id)}>x</strong>
                            </CartItemcontent>
                        </CartItem>
                    )):"No products in the cart."
                }
            </CartItemContainer>
            <CartContaienerBtn>
                <CartTotal>
                    <span>total</span>
                    <span>{tempTotal}$</span>
                </CartTotal>
                <CartBtn>
                    <button className="viewblack">view more</button>
                    <button className="viewborder">check out</button>
                </CartBtn>
            </CartContaienerBtn>
        </CartContainer>
    )
}

export default CartHeader;