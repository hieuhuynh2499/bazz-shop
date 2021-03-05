export const addtocartRequest = (id:any) => {
    return {
      type: 'ADD_TO_CART_REQUEST',
      id:id
    };
  };

  export const addtocartSuccess = (action:any) => {
    return {
      type: 'ADD_TO_CART_SUCCESS',
      payload:{
        listProducts:action
      }
    };
  };
  export const addtocartFaild = () => {
    return {
      type: 'ADD_TO_CART_FAILED'
    };
  };