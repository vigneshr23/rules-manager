import React from "react";
import { Field } from "../common/Field";
import RuleCondition from "../RulesEntity/RuleCondition";

function RuleDescriptor({ rule, delegate, ...props }) {
  const { ruleName, condtion } = rule;
  const { onNameChange, onConditionChange } = delegate;
  return (
    <div className="ruleDescriptor">
      <h5 style={{ textAlign: "center" }}>Define Rule</h5>
      <div>
        <Field
          type="text"
          placeholder="Enter Rule Name"
          label="Rule Name"
          value={ruleName}
          onChange={onNameChange}
        />
        <RuleCondition value={condtion} onChange={onConditionChange} />
      </div>
    </div>
  );
}

export default RuleDescriptor;
