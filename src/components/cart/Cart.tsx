import React  from "react";
import {CartContainer,CartItem,CartItemImg,CartItemcontent,CartTotal,CartBtn,CartItemContainer} from "./cartsty";
import img_shop_119 from '../../images/shop-img-119.jpg';

const CartHeader:React.FC = () =>{
    return(
        <CartContainer>
            your cart
            <CartItemContainer>
                <CartItem>
                   <CartItemImg>
                       <img src={img_shop_119} alt=""/>
                   </CartItemImg>
                   <CartItemcontent>
                       <h4>stars</h4>
                       <span>$39</span>
                       <strong>x</strong>
                   </CartItemcontent>
                </CartItem>
                <CartItem>
                   <CartItemImg>
                       <img src={img_shop_119} alt=""/>
                   </CartItemImg>
                   <CartItemcontent>
                       <h4>stars</h4>
                       <span>$39</span>
                       <strong>x</strong>
                   </CartItemcontent>
                </CartItem>
                <CartItem>
                   <CartItemImg>
                       <img src={img_shop_119} alt=""/>
                   </CartItemImg>
                   <CartItemcontent>
                       <h4>stars</h4>
                       <span>$39</span>
                       <strong>x</strong>
                   </CartItemcontent>
                </CartItem>
                <CartItem>
                   <CartItemImg>
                       <img src={img_shop_119} alt=""/>
                   </CartItemImg>
                   <CartItemcontent>
                       <h4>stars</h4>
                       <span>$39</span>
                       <strong>x</strong>
                   </CartItemcontent>
                </CartItem>
                <CartItem>
                   <CartItemImg>
                       <img src={img_shop_119} alt=""/>
                   </CartItemImg>
                   <CartItemcontent>
                       <h4>stars</h4>
                       <span>$39</span>
                       <strong>x</strong>
                   </CartItemcontent>
                </CartItem>
            </CartItemContainer>
            <CartTotal>
                <span>total</span>
                <span>551$</span>
            </CartTotal>
            <CartBtn>
                <button className="viewblack">view more</button>
                <button className="viewborder">check out</button>
            </CartBtn>
        </CartContainer>
    )
}

export default CartHeader;