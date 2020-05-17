import React, { useState } from "react";

const RuleManager = (props) => {
  const [ruleName, setName] = useState("");
  const [condtion, setCondition] = useState(null);
  //   const [conditionType, setConditionType] = useState({
  //     isPreCondition: false,
  //     isPostCondtion: false,
  //   });

  const onNameChange = (e) => setName(e.target.value);

  const onConditionChange = (e) => setCondition(e.target.value);

  const data = { ruleName, condtion };
  const delegate = { onNameChange, onConditionChange };
  return props.children(data, delegate);
};

export default RuleManager;
