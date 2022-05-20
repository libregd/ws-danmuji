import React, { useState } from 'react';
import { createContainer } from "unstated-next";

const useForm = () => {
    const [input, setValue] = useState("");
    const [name, setName] = useState("Barney Stinson");
  
    const handleInput = (event:any) => {
      setValue(event.target.value);
    };
  
    const updateName = (event:any) => {
      event.preventDefault();
      setName(input);
      setValue("");
    };
  
    return {
      input,
      name,
      handleInput,
      updateName,
    };
  };

  const FormContainer = createContainer(useForm);

  const FormTest = () => {
    const form = FormContainer.useContainer();
    return (
      <div>
        <p>Hello! {form.name}</p>
        <div>
          <input
            type="text"
            value={form.input}
            onChange={form.handleInput}
          />
          <button onClick={form.updateName}>Save</button>
        </div>
      </div>
    );
  };
  export default FormTest