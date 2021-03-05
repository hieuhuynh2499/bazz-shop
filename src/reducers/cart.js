const listProducts = []

const intinialState = {
    listProducts: listProducts
}


const cartReducer = (state = intinialState, action) => {

    switch (action.type) {
        case 'CART_SUCCESS':
            return {
                ...state,
                listProducts: action.payload.listProducts
            };
        case 'CART_FAILED':
            return {
                ...state
            };
        case 'CART_REQUEST':
            return {
                ...state,
            };
        default:
            return state;
    }
}
export default cartReducer;