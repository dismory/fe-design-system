import React from "react";

import useTitle from "../hooks/useTitle";

import TextInput from "../components/TextInput";

import "./textInput.css";

function TextInputPage() {
  useTitle("Text Input Component");

  return (
    <div className="container">
      <div className="text-inputs">
        <TextInput
          name="Email"
          label="Email"
          hint="This is a hint text."
          placeholder="name@email.com"
        />
      </div>
    </div>
  );
}

export default TextInputPage;
