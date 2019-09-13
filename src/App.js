import React from "react";
import "./App.css";
import ButtonExamples from "./ButtonExamples";
import SliderExamples from "./SliderExamples";
import TextFieldExamples from "./TextFieldExamples";
import RadioButtonExamples from "./RadioButtonExamples";
import CheckBoxExamples from "./CheckboxExamples";

function App() {
  return (
    <div>
      <ButtonExamples />
      <br />
      <SliderExamples />
      <br />
      <TextFieldExamples />
      <br />
      <RadioButtonExamples />
      <br />
      <CheckBoxExamples />
      <br />
    </div>
  );
}

export default App;
