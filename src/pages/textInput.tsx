import React from "react";
import { RiMailLine } from "react-icons/ri";

import useTitle from "../hooks/useTitle";

import TextInput from "../components/TextInput";

import "./textInput.css";

function TextInputPage() {
  useTitle("Text Input Component");

  return (
    <div className="container">
      <div className="text-inputs">
        {/* Placeholder (Unfilled) */}
        <TextInput
          name="Email"
          label="Email"
          hint="This is a hint text."
          placeholder="name@email.com"
        />
        {/* With leading icon */}
        <TextInput
          name="Email"
          label="Email"
          hint="This is a hint text."
          placeholder="name@email.com"
          leadingIcon={RiMailLine}
        />
        {/* Disabled */}
        <TextInput
          name="Email"
          label="Email"
          hint="This is a hint text."
          placeholder="name@email.com"
          disabled={true}
        />
        {/* Filled with Error */}
        <TextInput
          value="name@email.com"
          name="Email"
          label="Email"
          placeholder="name@email.com"
          error="This is an error message."
        />
      </div>
    </div>
  );
}

export default TextInputPage;
