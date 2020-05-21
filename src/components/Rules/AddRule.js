import React, { useState } from "react";
import ModalContainer from "../common/Modal";
import RuleDescriptor from "./rule-ui";
import RuleManager from "../Hoc/RuleMangerHoc";

const AddRule = (props) => {
  return (
    <div className="addrule">
      <h5>
        How to create a{" "}
        <span style={{ textDecoration: "underline" }}>Rule</span>
      </h5>

      <div>
        Note:{" "}
        <pre>
          1. Add a rule name <br /> 2. Select a Condition Type from the drop
          down by clicking on <strong>Add Condition</strong> <br /> 3. Add
          condition by clicking on <strong>Entity</strong>
        </pre>
      </div>

      <ModalContainer
        title="Add Rule"
        display={(handleHide) => (
          <RuleManager mode="add">
            {(data, delegate) => (
              <RuleDescriptor
                rule={data}
                delegate={delegate}
                hide={handleHide}
                mode="add"
                {...props}
              />
            )}
          </RuleManager>
        )}
      >
        <button className="btn btn-default">Add Entity</button>
      </ModalContainer>
    </div>
  );
};

export default AddRule;
