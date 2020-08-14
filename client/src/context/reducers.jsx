import { ACTIONS } from "./actions";

export const shopReducer = (state, action) => {
  const {
    cart,
    categories,
    category,
    companies,
    itemIds,
    items,
    status,
  } = state;

  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_STATE:
      return { ...state, ...payload.newState };

    case ACTIONS.SET_STATUS:
      return { ...state, status: payload.status };

    case ACTIONS.SET_CATEGORY:
      return { ...state, category: payload.category };

    case ACTIONS.SET_CURRENT_USER:
      return { ...state, currentUser: payload.currentUser };

    case ACTIONS.SET_SIGNED_IN:
      return { ...state, signedIn: payload.signedIn };

    case ACTIONS.ADD_ITEM_TO_CART: {
      const itemId = payload.itemId;
      const item = items[itemId];
      cart.push(item);

      return { ...state, cart: cart };
    }

    case ACTIONS.REMOVE_ITEM_FROM_CART: {
      const itemId = payload.itemId;
      const newCart = cart.filter((item) => item.id !== itemId);

      return { ...state, cart: newCart };
    }

    default:
      return state;
  }
};
