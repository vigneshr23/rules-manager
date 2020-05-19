import React from "react";

export function Field(props) {
  const { label, type, value } = props;
  return (
    <fieldset className="field">
      <label>{label}</label>
      <input type={type} value={value} {...props} />
    </fieldset>
  );
}
