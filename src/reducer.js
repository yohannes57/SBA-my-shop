import React from "react";
export const initialState = {
  cart: 0,
  user: null,
};
export function reducer(state, action) {
  switch (action.type) {
    case "add_to_cart": {
      return {...state,cart:state.cart+1};
    }
    case "remove_from_cart": {
      return "";
    }
    case "add_user": {
      return "";
    }
    case "add_product": {
      return "";
    }
    default: {
      return console.error("sth went off wrong!!");
    }
  }
}
