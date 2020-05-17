import { ADD_ENTITY, REMOVE_ENTITY } from "../actions/RuleEntityAction";

const initialState = [];

const RuleEntityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTITY:
    case REMOVE_ENTITY:
      return;
    default:
      return state;
  }
};

export default RuleEntityReducer;
