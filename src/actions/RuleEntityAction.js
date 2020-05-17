export const ADD_ENTITY = "ADD_ENTITY";
export const REMOVE_ENTITY = "REMOVE_ENTITY";

export const addEntity = () => {
  return {
    type: ADD_ENTITY,
    payload: {},
  };
};

export const removeEntity = () => {
  return {
    type: REMOVE_ENTITY,
    payload: {},
  };
};
