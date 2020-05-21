import React from "react";
import { connect } from "react-redux";
import RuleManager from "../Hoc/RuleMangerHoc";
import RuleDescriptor from "./rule-ui";

function EditRule(props) {
  console.log("EditRule for: ", props.rule);
  const { id } = props.match.params;
  const rule = props.rules[id];
  return (
    <div className="editrule">
      <code>{JSON.stringify(rule)}</code>

      <RuleManager mode="edit" {...props}>
        {(data, delegate) => (
          <RuleDescriptor
            rule={data}
            history={props.history}
            delegate={delegate}
            mode="edit"
          />
        )}
      </RuleManager>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    rules: state.Rules,
  };
}
export default connect(mapStateToProps)(EditRule);
