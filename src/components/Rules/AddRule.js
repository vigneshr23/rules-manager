import React, { useState } from "react";
import ModalContainer from "../common/Modal";
import RuleDescriptor from "./rule-ui";
import RuleManager from "./rule-hoc";

const AddRule = (props) => {
  return (
    <div>
      <h4>AddRule</h4>

      <div>
        Note:{" "}
        <p>
          1. Add entity for a rule. <br /> 2. Add Rules based on entity
        </p>
      </div>

      <ModalContainer
        title="Add Entity"
        display={() => (
          <RuleManager>
            {(data, delegate) => (
              <RuleDescriptor rule={data} delegate={delegate} />
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
