import React from "react";
import {ProductItem} from "./productsty";
import {FaHeart} from "react-icons/fa";

 export interface productItem {
    name:string,
    price:number,
    image:any
}

interface productInterface {
    product:productItem
}
const Product:React.FC<productInterface> = ({product={}}) => {
    const {name,price,image} = product;
    return(
        <ProductItem>
            <div className="product-img">
                <img src={image} alt="" />
                <button>Quick Look <span><FaHeart/></span></button>
            </div>
            <div className="product-content">
                <div className="product-content-title">
                    <h4>{name} {price}.00$</h4>
                    <p>
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