import img_shop from '../images/shop-img-1.jpg';
import img_shop_1 from '../images/shop-img-2.jpg';
import img_shop_2 from '../images/shop-img-3.jpg';
import img_shop_3 from '../images/shop-img-4.jpg';
import img_shop_4 from '../images/shop-img-5.jpg';
import img_shop_5 from '../images/shop-img-6.jpg';
import img_shop_6 from '../images/shop-img-7.jpg';
import img_shop_7 from '../images/shop-img-8.jpg';

const listProducts = [{
        name: "DENIM",
        price: 90,
        image: img_shop
    },
    {
        name: "BRAVE",
        price: 190,
        image: img_shop_1
    },
    {
        name: "STARS",
        price: 34,
        image: img_shop_2
    },
    {
        name: "SILK",
        price: 74,
        image: img_shop_3
    },
    {
        name: "GAME",
        price: 42,
        image: img_shop_4
    },
    {
        name: "GAME",
        price: 97,
        image: img_shop_5
    },
    {
        name: "MAX",
        price: 56,
        image: img_shop_6
    },
    {
        name: "VEST",
        price: 89,
        image: img_shop_7
    },
]
const intinialState = {
    listProducts: listProducts
}


const cartReducer = (state = intinialState, action) => {

    switch (action.type) {
        case 'CART_SUCCESS':
            return {
                ...state
            };
        case 'CART_FAILED':
            return {
                ...state
            };
        case 'CART_REQUEST':
            return {
                ...state,
                test: "cart cartRequest"
            };
        default:
            return state;
    }
}
export default cartReducer;