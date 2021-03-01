export const cartRequest = () => {
    return {
      type: 'CART_REQUEST'
    };
  };

  export const cartSuccess = () => {
    return {
      type: 'CART_SUCCESS',
      payload:{
        listProducts:[]
      }
    };
  };
  export const cartFaild = () => {
    return {
      type: 'CART_FAILED'
    };
  };