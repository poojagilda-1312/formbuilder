import { useState } from "react";
import Input from "../components/Input";

const options = [
  { label: "Text", type: "text" },
  { label: "Number", type: "number" },
  { label: "Email", type: "email" },
  { label: "Password", type: "password" },
  { label: "Date", type: "date" },
];

const editType = Object.freeze({
  label: "label",
  placeholder: "placeholder",
});

export default function CreateForm() {
  const [formElements, setFormElements] = useState([]);
  const [currentInputEdit, setCurrentInputEdit] = useState(null);

  const removeFormElementHandler = (id) => {
    const filteredElements = formElements.filter(
      (element) => element.id !== id
    );
    setFormElements(filteredElements);
  };

  const addInputHandler = (option) => {
    const buttonId = Date.now(); // 49792749234
    const newInput = {
      id: buttonId,
      type: option.type,
      label: option.label,
      placeholder: option.label,
    };

    setFormElements((prev) => [...prev, newInput]);
  };

  const onChangeHandler = (e, type) => {
    if (!currentInputEdit) return;

    const updatedElements = formElements.map((element) => {
      if (element.id === currentInputEdit.id) {
        //input
        const updatedElement = {
          ...element,
          [type]: e.target.value,
        };

        setCurrentInputEdit(updatedElement);

        return updatedElement;
      }
      return element;
    });

    setFormElements(updatedElements);
  };

  const onCreateForm = () => {
    if (formElements.length === 0) return;
    console.log(formElements);
  };

  return (
    <div className="create-form-container">
      <div className="container">
        <div>
          <h1>Form Builder</h1>
          <div className="options">
            {options.map((option, i) => (
              <button
                onClick={() => addInputHandler(option)}
                style={{ margin: 5 }}
                key={i}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="form-builder-container">
            {formElements.length === 0 && (
              <div style={{ gridColumn: "span 2" }}> Form Empty...</div>
            )}

            {formElements.map((element, i) => (
              <Input
                key={i}
                inputType={element}
                setCurrentInputEdit={setCurrentInputEdit}
                removeElement={removeFormElementHandler}
              />
            ))}
          </div>
          <button className="btn-action create" onClick={onCreateForm}>
            Create Form
          </button>
          <button
            className="btn-action del"
            onClick={() => setFormElements([])}
          >
            Clear Form
          </button>
        </div>

        <div>
          <h1>Form Editor</h1>
          <div>
            <div className="form-editor-input">
              <label>Title/Label</label>
              <input
                type="text"
                placeholder="title"
                value={currentInputEdit?.label || ""}
                onChange={(e) => onChangeHandler(e, editType.label)}
              />
            </div>
            <div className="form-editor-input">
              <label>Placeholder</label>
              <input
                type="text"
                placeholder="placeholder"
                value={currentInputEdit?.placeholder || ""}
                onChange={(e) => onChangeHandler(e, editType.placeholder)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
