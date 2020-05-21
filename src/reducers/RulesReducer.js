import { ADD_RULE, EDIT_RULE, REMOVE_RULE } from "../actions/RulesActions";

const initialState = [
  {
    ruleName: "Monthly Rental Amount",
    entities: { entity1: "age < 23", entity2: "rental amount > 350" },
    condition: "1",
  },
];

const RuleReducer = (state = initialState, action) => {
  let nextState = [...state];

  switch (action.type) {
    case ADD_RULE:
      return [...state, action.payload];

    case EDIT_RULE:
      console.log(action.payload);
      nextState.splice(action.id, 1, action.payload);
      return nextState;

    case REMOVE_RULE:
      nextState.splice(action.id, 1);
      return nextState;

    default:
      return nextState;
  }
};

export default RuleReducer;
