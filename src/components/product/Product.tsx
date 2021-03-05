import React from "react";
import {ProductItem} from "./productsty";
import {FaHeart} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocartRequest } from "../../actions/addtocart";
import img from "../../images/shop-img-2.jpg";

 export interface productItem {
    name:string,
    price:number,
    image:any,
    id:number
}

interface productInterface {
    product:productItem
}
const Product:React.FC<productInterface> = ({product={}}) => {
     const dispatch = useDispatch();
    const {name,price,image,id} = product;
    const addToCart = (id:any) =>{
        dispatch(addtocartRequest(id));
        
    }
 
    return(
        <ProductItem>
            <div className="product-img">
                <img src={image} alt="" />
                <button>Quick Look <span><FaHeart/></span></button>
            </div>
            <div className="product-content">
                <div className="product-content-title">
                    <h4>{name} {price}.00$</h4>
                    <p onClick={()=> addToCart(id)}>
                        <span>add to cart</span>
                    </p>
                </div>
                <div className="product-content-bottom">
                    <p>Casual</p>
                </div>
            </div>
        </ProductItem>
    )
}

export default Product;