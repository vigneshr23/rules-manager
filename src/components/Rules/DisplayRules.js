import React, { Fragment } from "react";
import { preConditions } from "../../constants/RuleConditions";
import { Remove, Edit } from "../common/Buttons";

function DisplayRules({ rules, ...props }) {
  const getRuleConditions = (entities) => {
    let entity = [];
    for (let key in entities) {
      entity.push(<span key={key}>{entities[key]}</span>);
    }
    return entity;
  };

  const getActions = (id) => {
    return props.actions.map((el) => el(id));
  };

  const getRows = () => {
    return rules.map((rule, index) => (
      <tr key={index}>
        <th scope="row">{index}</th>
        <td>{rule.ruleName}</td>
        <td>{preConditions[rule.condition]}</td>
        <td className="entities">{getRuleConditions(rule.entities)}</td>
        <td>{getActions(index)}</td>
      </tr>
    ));
  };
  return (
    <Fragment>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Rule Name</th>
            <th scope="col">Type</th>
            <th scope="col">Rule Condition</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{getRows()}</tbody>
      </table>
    </Fragment>
  );
}
export default DisplayRules;
