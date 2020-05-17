import React from "react";

function EditRule(props) {
  return (
    <div>
      <p>Edit {props.match.params.id}</p>
      <button
        className="btn btn-primary"
        onClick={() => props.history.push("/rules")}
      >
        Click me
      </button>
    </div>
  );
}
export default EditRule;
