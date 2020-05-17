import React, { useState, Fragment, useEffect, useCallback } from "react";
import { preConditions } from "../../constants/RuleConditions";

const RuleCondition = (props) => {
  const [active, setActive] = useState(false);
  const { onChange, value } = props;
  const handleClick = () => {
    setActive(true);
  };

  const handleConditionChange = (e) => {
    onChange(e);
    setActive(false);
  };

  const displayConditions = () =>
    preConditions.map((c, index) => (
      <option key={index} value={index}>
        {c}
      </option>
    ));

  return (
    <Fragment>
      <span onClick={handleClick}>Add Condition</span>
      {active ? (
        <div>
          <label>Condition Type </label>
          <select value={value || ""} onChange={handleConditionChange}>
            {/* <option value="1">If</option>
            <option value="2">If...and</option>
            <option value="3">If...or</option> */}
            {/* <option value="3">Add Case</option> */}
            <option>--select--</option>
            {displayConditions()}
          </select>
        </div>
      ) : null}

      <div>
        {value !== null && (
          <div>{<ConditionalUserInput condition={preConditions[value]} />}</div>
        )}
      </div>
    </Fragment>
  );
};

export default RuleCondition;

export const ConditionalUserInput = ({ condition }) => {
  const cachedFn = useCallback(() => {
    switch (condition) {
      case preConditions[0]:
        return (
          <div className="precondition">
            IF{" "}
            <span className="precondition__entity" onClick={() => alert()}>
              Entity
            </span>
          </div>
        );
      case preConditions[1]:
        return (
          <div className="precondition">
            IF
            <span className="precondition__entity" onClick={() => alert()}>
              Entity1
            </span>
            AND{" "}
            <span className="precondition__entity" onClick={() => alert()}>
              Entity2
            </span>
          </div>
        );
      case preConditions[2]:
        return (
          <div className="precondition">
            IF
            <span className="precondition__entity" onClick={() => alert()}>
              Entity1
            </span>
            OR{" "}
            <span className="precondition__entity" onClick={() => alert()}>
              Entity2
            </span>
          </div>
        );
      default:
        return null;
    }
  }, [condition]);

  return cachedFn();
};
