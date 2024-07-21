import React from "react";
export const initialState = {
  user: "Guest",
  cart: [],
};
export function reducer(state, action) {
  switch (action.type) {
    // this is for add product to cart
    case "add_to_cart": {
      return { ...state, cart: [...state.cart, action.cart] };
    }
    case "remove_from_cart": {
      return "not done yet";
    }
    // this is for login and signup
    case "add_user": {
      return { ...state, user: action.user };
    }
    case "add_product": {
      return "not done yet";
    }
    default: {
      return console.error("sth went off wrong!!");
    }
  }
}
