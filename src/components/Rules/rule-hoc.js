import React, { useState } from "react";

const RuleManager = (props) => {
  const [ruleName, setName] = useState("");
  const [condition, setCondition] = useState(null);
  const [entities, setEntities] = useState({});
  //   const [conditionType, setConditionType] = useState({
  //     isPreCondition: false,
  //     isPostcondition: false,
  //   });

  const onNameChange = (e) => setName(e.target.value);

  const onConditionChange = (e) => setCondition(e.target.value);

  const onEntitiyChange = (entity) => setEntities({ ...entities, ...entity });

  const saveRule = () => {
    const rule = { ruleName, condition, entities };
    console.log({ ruleName, condition, entities });
  };

  const data = { ruleName, condition, entities };
  const delegate = {
    onNameChange,
    onConditionChange,
    onEntitiyChange,
    saveRule,
  };
  return props.children(data, delegate);
};

export default RuleManager;
