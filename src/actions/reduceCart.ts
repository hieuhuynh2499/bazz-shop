export const reducetocartRequest = (id:any) => {
    return {
      type: 'REDUCE_TO_CART_REQUEST',
      id:id
    };
  };

  export const reducetocartSuccess = (action:any) => {
    return {
      type: 'REDUCE_TO_CART_SUCCESS',
      payload:{
        listProducts:action
      }
    };
  };
  export const reducetocartFaild = () => {
    return {
      type: 'REDUCE_TO_CART_FAILED'
    };
  };