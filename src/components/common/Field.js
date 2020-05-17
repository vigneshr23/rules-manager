import React from "react";

export function Field(props) {
  const { label, type, value } = props;
  return (
    <fieldset>
      <label>{label} {" "}</label>
      <input type={type} value={value} {...props} />
    </fieldset>
  );
}
