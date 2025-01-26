import React from "react";

import styles from "./Textarea.module.css";

interface TextareaProps {
  // Add your props here
}

const Textarea: React.FC<TextareaProps> = () => {
  return <div className={styles.container}>Textarea Component</div>;
};

export default Textarea;
