export const  removecartRequest = (id:number) => {
    return {
      type: 'REMOVE_CART_REQUEST',
      id:id
    };
  };

  export const  removecartFaild = () => {
    return {
      type: 'REMOVE_CART_FAILED'
    };
  };
  export const removecartSuccess = (carts:any) => {
    return {
      type: 'REMOVE_CART_SUCCESS',
      payload:{
        listProducts:carts
      }
    };
  };
 