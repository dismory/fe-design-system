import React from "react";

import useTitle from "../hooks/useTitle";

import Textarea from "../components/Textarea";

import styles from "./textarea.module.css";

function TextareaPage() {
  useTitle("Textarea Component");

  return (
    <div className={styles.container}>
      <div className={styles["textarea-container"]}>
        <Textarea maxLength={500} errorMessage="This is an error message" />
      </div>
    </div>
  );
}

export default TextareaPage;
