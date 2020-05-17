import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ModalContainer from "../common/Modal";
import { Add, Edit } from "../common/Buttons";
import { Link } from "react-router-dom";

const RuleList = ({ rules, ...props }) => {
  const [name, setName] = useState("");
  const { history, match } = props;

  const handleAdd = (e) => {
    console.log(`Add clicked`);
  };
  const handleEdit = (index) => {
    console.log("Edit:", { props, index });
    history.push(`${match.path}/edit/${index}`);
  };

  if (rules instanceof Array && rules.length > 0) {
    return (
      <div>
        <h3>RuleList</h3>
        <div className="rule">
          {rules.map((rule, index) => (
            <div className="rule__content" key={index}>
              <div>
                <code>{JSON.stringify(rule)}</code>
              </div>
              <Link to={`${match.path}/add`}>
                <Add size="1.5rem" onClick={handleAdd} />
              </Link>
              <Edit size="1.5rem" onClick={() => handleEdit(index)} />
            </div>
          ))}
        </div>
        {/* <ModalContainer
        title="Custom Portal"
        display={() => (
          <PortalContent handleChange={handleChange} name={name} />
        )}
      >
        <button>Open Portal</button>
      </ModalContainer> */}
      </div>
    );
  }
  return <div>Loading...</div>;
};

const PortalContent = ({ handleChange, name }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="enter name"
        onChange={handleChange}
        value={name}
      ></input>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    rules: state.Rules,
  };
};

export default connect(mapStateToProps)(RuleList);
