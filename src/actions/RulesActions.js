import { AddRuleAPI, EditRuleAPI, DeleteRuleAPI } from "../API/Rule"

export const ADD_RULE = "ADD_RULE";
export const REMOVE_RULE = "REMOVE_RULE";
export const EDIT_RULE = "EDIT_RULE";

export const addRule = (rule) => async (dispatch) => {
  console.log({ rule, AddRuleAPI, dispatch })
  const data = await AddRuleAPI(rule);
  if (data) {
    alert("Rule Created!")
  }
  dispatch({
    type: ADD_RULE,
    payload: rule,
  });
};

export const removeRule = (id) => async dispatch => {
  const data = await DeleteRuleAPI(id);
  if (data) {
    alert("Rule Deleted!")
  }
  await dispatch({
    type: REMOVE_RULE,
    id
  });
};

export const editRule = (id, rule, callback) => async (dispatch) => {
  const data = await EditRuleAPI(rule);
  if (data) {
    alert("Rule Updated!")
  }
  await dispatch({
    type: EDIT_RULE,
    payload: rule,
    id
  });
};
