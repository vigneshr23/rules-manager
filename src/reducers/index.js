import { combineReducers } from "redux";
import RuleEntityReducer from "./RuleEntityReducer";
import RulesReducer from "./RulesReducer";

export const reducers = combineReducers({
  RuleEntity: RuleEntityReducer,
  Rules: RulesReducer,
});
