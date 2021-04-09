const listProducts = []

const intinialState = {
    listProducts: listProducts
}


const addtocartReducer = (state = intinialState, action) => {

    switch (action.type) {
        case 'ADD_TO_CART_SUCCESS':
            console.log(state);
            const newList = [...state.listProducts];
            const indexproduct = newList.findIndex(item => item.id === action.payload.listProducts.id);
            if (indexproduct === -1) {
                newList.push(action.payload.listProducts);
            } else {
                return {
                    ...state,
                    listProducts: newList.map((item, index) => index === indexproduct ?
                        {
                            id: action.payload.listProducts.id,
                            name: action.payload.listProducts.name,
                            image: action.payload.listProducts.image,
                            price: action.payload.listProducts.price,
                            amount: item.amount + 1
                        } :
                        item)
                };
            }
            return {
                ...state,
                listProducts: newList
            };
        case 'ADD_TO_CART_FAILED':
            return {
                ...state
            };
        case 'ADD_TO_CART_REQUEST':
            return {
                ...state,
            };
        case "REMOVE_CART_SUCCESS":
            const newList1 = state.listProducts.filter((item) => item.id !== action.payload.listProducts.id);
            return {
                ...state,
                listProducts: newList1
            }
        case "REDUCE_TO_CART_SUCCESS" :
            const newList2 = [...state.listProducts];
            const indexproduct2 = newList2.findIndex(item => item.id === action.payload.listProducts.id);
            if (indexproduct2 === -1) {
                newList2.push(action.payload.listProducts);
            } else {
                return {
                    ...state,
                    listProducts: newList2.map((item, index) => index === indexproduct2 ?
                        {
                            id: action.payload.listProducts.id,
                            name: action.payload.listProducts.name,
                            image: action.payload.listProducts.image,
                            price: action.payload.listProducts.price,
                            amount: item.amount - 1 > 1 ? item.amount - 1 : 1
                        } :
                        item)
                };
            }
            return {
                ...state,
                listProducts: newList2
            };
        default:
            return state;
    }
}
export default addtocartReducer;