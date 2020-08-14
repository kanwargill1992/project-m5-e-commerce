export const STATUS = {
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
};

export const ACTIONS = {
  SET_STATE: "set-state",
  SET_STATUS: "set-status",
  ADD_ITEM_TO_CART: "add-item-to-cart",
  REMOVE_ITEM_FROM_CART: "remove-item-from-cart",
  SET_CATEGORY: "set-category",
};

// DISPATCH ACTIONS
export const setState = (newState) => {
  return {
    type: ACTIONS.SET_STATE,
    payload: { newState },
  };
};

export const setStatus = (status) => {
  return {
    type: ACTIONS.SET_STATUS,
    payload: { status },
  };
};

export const addItemToCart = (itemId) => {
  return {
    type: ACTIONS.ADD_ITEM_TO_CART,
    payload: { itemId },
  };
};

export const removeItem = (itemId) => {
  return {
    type: ACTIONS.REMOVE_ITEM_FROM_CART,
    payload: { itemId },
  };
};

export const setCategory = (selectedCategory) => {
  return {
    type: ACTIONS.SET_CATEGORY,
    payload: { category: selectedCategory },
  };
};
