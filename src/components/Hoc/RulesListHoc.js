import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { removeRule } from "../../actions/RulesActions";

const RulesData = ({ match, mode = "add", ...props }) => {
  const [ruleName, setName] = useState("");
  const [condition, setCondition] = useState(null);
  const [entities, setEntities] = useState({});

  const deleteRule = (id, callback) => {
    props.actions.removeRule(id);
  };

  const data = props.rules;
  const delegate = { deleteRule };

  if (data instanceof Array) {
    return props.children(data, delegate);
  } else
    return (
      <div>
        Something went wrong! <p>Please, Reload the page</p>
      </div>
    );
};

function mapStateToProps(state) {
  return {
    rules: state.Rules,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ removeRule }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RulesData);
