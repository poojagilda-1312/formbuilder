import { memo } from "react";

const Input = ({ inputType, removeElement, setCurrentInputEdit }) => {
  const { id, type, label, placeholder } = inputType;

  const handleEdit = () => {
    setCurrentInputEdit(inputType);
  };

  const handleRemove = () => {
    removeElement(id);
  };
  return (
    <div className="form-input">
      <div style={{ marginBottom: 5 }}>
        <label style={{ fontSize: 14 }}>{label}</label>
        <label className="type-label">{type}</label>
      </div>
      <div style={{ display: "flex", gap: 4 }}>
        <input type={type} placeholder={placeholder} disabled />

        <button className="btn-action edit" onClick={handleEdit}>
          edit
        </button>
        <button className="btn-action del" onClick={handleRemove}>
          delete
        </button>
      </div>
    </div>
  );
};

export default memo(Input);
