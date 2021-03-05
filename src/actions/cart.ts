export const cartRequest = () => {
    return {
      type: 'CART_REQUEST'
    };
  };

  export const cartSuccess = (action:any) => {
    return {
      type: 'CART_SUCCESS',
      payload:{
        listProducts:action
      }
    };
  };
  export const cartFaild = () => {
    return {
      type: 'CART_FAILED'
    };
  };