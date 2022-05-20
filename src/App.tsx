import React, { useState } from "react";
import { createContainer } from "unstated-next";
// import Show from "./pages/Show";
import "./App.css";
import InputWS from "./pages/Input";

const useRoom = (initialState = "") => {
  const [input, setValue] = useState(initialState);
  const [roomId, setRoomId] = useState("get id");

  const handleInput = (event: any) => {
    setValue(event.target.value);
  };

  const updateRoomId = (event: any) => {
    event.preventDefault();
    setRoomId(input);
    // setValue("");
  };

  return {
    input,
    roomId,
    handleInput,
    updateRoomId,
  };
};

const FormContainer = createContainer(useRoom);

const FormTest = () => {
  const form = FormContainer.useContainer();

  return (
    <div className="field">
      <p>Hello! {form.roomId}</p>
      <div className="control columns mx-5">
        <div className="column is-8">
          <input
            className="input is-primary"
            placeholder="enter room id, full id"
            type="text"
            value={form.input}
            onChange={form.handleInput}
          />
        </div>
        <div className="column is-2">
          <button className="button is-primary" onClick={form.updateRoomId}>
            Submit
          </button>
        </div>
      </div>

    </div>
  );
};
const ShowRoom = () => {
  return <div className="container">roomId??? where ? how to get</div>;
};
function App() {
  return (
    <div className="App">
      <InputWS />
      <div className="box border-0">
        <FormContainer.Provider>
          <FormTest />
        </FormContainer.Provider>
      </div>
      <ShowRoom />
    </div>
  );
}

export default App;
