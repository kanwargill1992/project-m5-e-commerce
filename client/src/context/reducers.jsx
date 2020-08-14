import { ACTIONS } from "./actions";

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_STATE:
      return { ...state, ...action.payload.newState };

    case ACTIONS.SET_STATUS:
      return { ...state, status: action.payload.status };

    case ACTIONS.ADD_ITEM_TO_CART:
      const itemId = action.payload.itemId;
      const item = state.items.find((item) => item.id === itemId);
      state.cart.push(item);
      return { ...state, cart: state.cart };
    case ACTIONS.REMOVE_ITEM_FROM_CART:
      const newState = { ...state };
      delete new action.payload.itemId();
      return newState;

    case ACTIONS.SET_CATEGORY:
      return { ...state, category: action.payload.category };

    default:
      return state;
  }
};
