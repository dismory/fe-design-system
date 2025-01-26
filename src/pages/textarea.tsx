import React from "react";

import useTitle from "../hooks/useTitle";

import Textarea from "../components/Textarea";

import "./textarea.css";

function TextareaPage() {
  useTitle("Textarea Component");

  return (
    <div className="container">
      <Textarea />
    </div>
  );
}

export default TextareaPage;
