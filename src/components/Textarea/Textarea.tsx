import React, { useState, useId } from "react";
import styles from "./Textarea.module.css";
import clsx from "clsx";

interface TextareaProps {
  title?: string;
  placeholder?: string;
  maxLength?: number;
  errorMessage?: string;
  disabled?: boolean;
  text?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  title = "Description",
  placeholder = "Write your message",
  maxLength,
  errorMessage,
  disabled,
  text,
}) => {
  const id = useId();
  const [length, setLength] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const length = value.length;
    setLength(length);
  };

  return (
    <div className={styles.textarea}>
      <div className={styles["textarea__section-header"]}>
        <label htmlFor={id}>{title}</label>
      </div>
      <div className={styles["textarea__section-body"]}>
        <textarea
          id={id}
          className={clsx(styles.textarea__input, {
            [styles["textarea__input_error"]]: !!errorMessage,
          })}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
          value={text}
        ></textarea>
      </div>
      <div className={styles["textarea__section-footer"]}>
        {errorMessage && (
          <span className={styles["textarea__error-message"]}>
            {errorMessage}
          </span>
        )}
        {maxLength && (
          <span
            className={clsx(styles["textarea__word-count"], {
              [styles["textarea__word-count_error"]]: length > maxLength,
            })}
          >
            {length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default Textarea;
