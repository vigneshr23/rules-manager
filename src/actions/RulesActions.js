export const ADD_RULE = "ADD_RULE";
export const REMOVE_RULE = "REMOVE_RULE";
export const EDIT_RULE = "EDIT_RULE";

export const addRule = () => {
  return {
    type: ADD_RULE,
    payload: {},
  };
};

export const removeRule = () => {
  return {
    type: REMOVE_RULE,
    payload: {},
  };
};

export const editRule = () => {
  return {
    type: EDIT_RULE,
    payload: {},
  };
};
