import { ADD_RULE, EDIT_RULE, REMOVE_RULE } from "../actions/RulesActions";

const initialState = [
  {
    name: "Monthly Rental Amount",
    field1: "monthlyRentalAmount",
    value1: 1000,
    condition1: "gt",
  },
];

const RuleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RULE:
    case EDIT_RULE:
    case REMOVE_RULE:
      return;
    default:
      return state;
  }
};

export default RuleReducer;
