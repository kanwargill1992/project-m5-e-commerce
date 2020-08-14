export const STATUS = {
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
};

export const ACTIONS = {
  SET_STATE: "set-state",
  SET_STATUS: "set-status",
  SET_CATEGORY: "set-category",
  SET_CURRENT_USER: "set-current-user",
  SET_SIGNED_IN: "set-signed-in",
  ADD_ITEM_TO_CART: "add-item-to-cart",
  REMOVE_ITEM_FROM_CART: "remove-item-from-cart",
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

export const setCategory = (category) => {
  return {
    type: ACTIONS.SET_CATEGORY,
    payload: { category },
  };
};

export const setCurrentUser = (currentUser) => {
  return {
    type: ACTIONS.SET_CURRENT_USER,
    payload: { currentUser },
  };
};

export const setSignedIn = (signedIn) => {
  return {
    type: ACTIONS.SET_SIGNED_IN,
    payload: { signedIn },
  };
};

export const addItemToCart = (itemId) => {
  return {
    type: ACTIONS.ADD_ITEM_TO_CART,
    payload: { itemId },
  };
};

export const removeItemFromCart = (itemId) => {
  return {
    type: ACTIONS.REMOVE_ITEM_FROM_CART,
    payload: { itemId },
  };
};
