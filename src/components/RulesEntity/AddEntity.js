import React, { useState, useEffect } from "react";

const textAreaRef = React.createRef();

const AddEntity = ({ name, onSave, hide, ...props }) => {
  const [entity, setEntity] = useState("");

  useEffect(() => {
    const _entityFromProps = props[name] || "";
    setEntity(_entityFromProps);
    textAreaRef.current.focus();
  }, []);

  const handleSave = () => {
    const data = { [name]: entity };
    if (entity.trim()) {
      onSave(data);
      hide();
    } else {
      alert("Condition is required to build the Rule!");
      textAreaRef.current.focus();
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    button: {
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <textarea
        rows="2"
        cols="25"
        placeholder="Ex: customer age > 25"
        value={entity}
        onChange={(e) => setEntity(e.target.value)}
        ref={textAreaRef}
      ></textarea>
      <button
        className="btn btn-primary"
        style={styles.button}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};
export default AddEntity;
