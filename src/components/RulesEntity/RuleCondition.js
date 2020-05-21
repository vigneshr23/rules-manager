import React, { useState, Fragment, useEffect, useCallback } from "react";
import { preConditions } from "../../constants/RuleConditions";
import ModalContainer from "../common/Modal";
import AddEntity from "./AddEntity";

const RuleCondition = (props) => {
  const [active, setActive] = useState(false);
  const { onConditionChange, onEntitiyChange, entities, condition } = props;
  const [onEntityChange, setEntity] = useState({});

  const handleEntityChange = (data) => {
    onEntitiyChange(data);
  };

  const handleClick = () => {
    setActive(true);
  };

  const handleConditionChange = (e) => {
    onConditionChange(e);
    setActive(false);
  };

  const displayConditions = () =>
    preConditions.map((c, index) => (
      <option key={index} value={index}>
        {c}
      </option>
    ));

  const style = {
    margin: "1rem 0",
    cursor: "pointer",
  };

  return (
    <Fragment>
      <div style={style} onClick={handleClick}>
        Add Condition
      </div>
      {active ? (
        <div className="field">
          <label>Condition Type </label>
          <select value={condition || ""} onChange={handleConditionChange}>
            <option>--select--</option>
            {displayConditions()}
          </select>
        </div>
      ) : null}

      {condition !== null && (
        <div>
          {
            <ConditionalUserInput
              handleEntityChange={handleEntityChange}
              condition={preConditions[condition]}
              entities={entities}
            />
          }
        </div>
      )}
    </Fragment>
  );
};

export default RuleCondition;

export const ConditionalUserInput = ({
  condition,
  handleEntityChange,
  entities,
}) => {
  const cachedFn = useCallback(() => {
    switch (condition) {
      case preConditions[0]:
        return (
          <div className="precondition">
            IF{" "}
            <ModalButton
              name="entity1"
              onSave={handleEntityChange}
              {...entities}
            />
          </div>
        );
      case preConditions[1]:
        return (
          <div className="precondition">
            IF
            <ModalButton
              name="entity1"
              onSave={handleEntityChange}
              {...entities}
            />
            AND{" "}
            <ModalButton
              name="entity2"
              onSave={handleEntityChange}
              {...entities}
            />
          </div>
        );
      case preConditions[2]:
        return (
          <div className="precondition">
            IF
            <ModalButton
              name="entity1"
              onSave={handleEntityChange}
              {...entities}
            />
            OR{" "}
            <ModalButton
              name="entity2"
              onSave={handleEntityChange}
              {...entities}
            />
          </div>
        );
      default:
        return null;
    }
  }, [condition, entities]);

  return cachedFn();
};

const ModalButton = (props) => {
  const renderButtonLabel = () => {
    const { name } = props;
    return !!props[name] ? props[name] : "Entity";
  };
  return (
    <ModalContainer
      title={`Add condition for ${props.name}`}
      display={(handleHide) => <AddEntity {...props} hide={handleHide} />}
    >
      <span className="precondition__entity">{renderButtonLabel()}</span>
    </ModalContainer>
  );
};
