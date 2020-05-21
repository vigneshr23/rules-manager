import React, { useState } from "react";
import { Add, Edit, Remove } from "../common/Buttons";
import { Link } from "react-router-dom";
import DisplayRules from "./DisplayRules";

const RuleList = ({ rules, ...props }) => {
  const [name, setName] = useState("");
  const { history, match } = props;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      props.delegate.deleteRule(id);
    } else return;
  };
  const handleEdit = (index) => {
    console.log("Edit:", { props, index });
    history.push(`${match.path}/edit/${index}`);
  };

  return (
    <div className="ruleslist">
      {rules.length > 0 ? (
        <div>
          <h3>RuleList</h3>
          <div className="rule">
            <DisplayRules
              rules={rules}
              actions={[
                (index) => (
                  <Remove
                    size="1.5rem"
                    title="Delete Rule"
                    onClick={() => handleDelete(index)}
                    key="act-1"
                  />
                ),
                (index) => (
                  <Edit
                    size="1.5rem"
                    title="Edit Rule"
                    onClick={() => handleEdit(index)}
                    key="act-2"
                  />
                ),
              ]}
            />
          </div>
        </div>
      ) : (
        <div>No Rules Available</div>
      )}
      <div className="rulelist__buttonContainer">
        <Link to={`${match.path}/add`}>
          <div className="btn btn-primary">Add Rule</div>
        </Link>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     rules: state.Rules,
//   };
// };

// export default connect(mapStateToProps)(RuleList);
export default RuleList;
