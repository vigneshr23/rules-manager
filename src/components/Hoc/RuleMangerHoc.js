import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addRule, editRule, removeRule } from "../../actions/RulesActions";

const RuleManager = ({ match, mode = "add", ...props }) => {
  const id = match && match.params.id;

  const [ruleName, setName] = useState("");
  const [condition, setCondition] = useState(null);
  const [entities, setEntities] = useState({});

  const onNameChange = (e) => setName(e.target.value);

  const onConditionChange = (e) => {
    setCondition(e.target.value);
    setEntities({});
  };

  const onEntitiyChange = (entity) => setEntities({ ...entities, ...entity });

  const saveRule = (callback) => {
    const rule = { ruleName, condition, entities };
    if (mode === "add") {
      props.actions.addRule(rule);
    } else {
      props.actions.editRule(id, rule);
      callback();
    }
  };

  // useEffect(() => {
  //   setEntities({});
  // }, [condition]);

  useEffect(() => {
    const rule = (props.rules && props.rules[id]) || null;
    if (rule) {
      setName(rule.ruleName);
      setCondition(rule.condition);
      setEntities({ ...rule.entities });
      console.log(rule.entities);
    }
  }, [id]);

  const data = { ruleName, condition, entities };
  const delegate = {
    onNameChange,
    onConditionChange,
    onEntitiyChange,
    saveRule,
  };
  return props.children(data, delegate);
};

function mapStateToProps(state) {
  return {
    rules: state.Rules,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addRule, editRule, removeRule }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RuleManager);
