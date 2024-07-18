import React from "react";
export function reducer(stete, action) {
  switch (action.type) {
    case "add_to_cart": {
      return stete + 1;
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
