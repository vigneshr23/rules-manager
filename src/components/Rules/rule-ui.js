import React, { useState, useCallback, useEffect } from "react";
import { Field } from "../common/Field";
import RuleCondition from "../RulesEntity/RuleCondition";

function RuleDescriptor({ rule, delegate, ...props }) {
  const { ruleName } = rule;

  const { onNameChange, saveRule } = delegate;

  const validateRule = () => {
    const entities = rule.entities && Object.getOwnPropertyNames(rule.entities);
    if (!ruleName) {
      alert("Rule Name is Required");
      return;
    }
    if (rule.condition !== null && entities) {
      if (rule.condition > 0 && entities.length < 2) {
        alert("All rule conditions are Required");
        return;
      } else if (entities.length < 1) {
        alert("Rule condition is required");
        console.log(rule.condition, entities);
        return;
      }
      return true;
    } else if (!rule.condition) {
      alert("Rule condition is required");
      return;
    }
    return true;
  };

  const clickHandle = () => {
    if (validateRule()) {
      saveRule();
    }
  };

  return (
    <div className="ruleDescriptor">
      <h5 style={{ textAlign: "center" }}>Define Rule</h5>
      <div>
        <Field
          type="text"
          placeholder="Enter Rule Name"
          label="Rule Name *"
          value={ruleName}
          onChange={onNameChange}
        />
        <RuleCondition {...rule} {...delegate} />

        <button className="btn btn-primary" onClick={clickHandle}>
          Save
        </button>
      </div>
    </div>
  );
}

export default RuleDescriptor;
