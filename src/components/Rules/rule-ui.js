import React, { useState, useCallback, useEffect } from "react";
import { Field } from "../common/Field";
import RuleCondition from "../RulesEntity/RuleCondition";

function RuleDescriptor({ rule, delegate, mode = "add", ...props }) {
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
        return;
      }
      return true;
    } else if (!rule.condition) {
      alert("Rule condition is required");
      return;
    }
    return true;
  };

  const handleSave = () => {
    const { history } = props;
    if (validateRule()) {
      if (mode === "add") {
        saveRule();
        props.hide();
      } else {
        saveRule(() => history.push("/rules"));
      }
    }
  };

  const handleCancel = () => {
    const { history } = props;
    if (mode === "add") {
      props.hide();
    } else {
      history && history.goBack();
    }
  };

  return (
    <div className="ruleDescriptor">
      <h5 style={{ textAlign: "center" }}>
        {mode === "add" ? "Define Rule" : "Edit Rule"}
      </h5>
      <div className="ruleDescriptor--flex">
        <Field
          type="text"
          placeholder="Enter Rule Name"
          label="Rule Name *"
          value={ruleName}
          onChange={onNameChange}
        />
        <RuleCondition {...rule} {...delegate} />

        <div className="ruleDescriptor__buttonContianer">
          <button
            style={{ marginRight: "1rem" }}
            className="btn btn-primary"
            onClick={handleSave}
          >
            {mode === "add" ? "Save" : "Update"}
          </button>
          <button className="btn btn-danger" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default RuleDescriptor;
