import React, { useState, useId } from "react";
import clsx from "clsx";

import { RiQuestionLine } from "react-icons/ri";

import styles from "./TextInput.module.css";

interface TextInputProps {
  name: string;
  value?: string;

  label: string;

  onChange?: (text: string) => void;

  leadingIcon?: React.ComponentType<{ className: string }>;
  placeholder?: string;
  hint?: string;
  error?: string;
  help?: string;
  helpOnError?: string;

  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  value = "",
  name,
  onChange,
  leadingIcon: LeadingIcon,
  label,
  placeholder,
  hint,
  error,
  help = "Tooltip when hovering on help icon",
  disabled = false,
}) => {
  const [text, setText] = useState<string>(value);
  const id = useId();

  const needsPaddingBottom = !hint && !error;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange ? onChange(event.target.value) : setText(event.target.value);
  }

  return (
    <div
      className={clsx(
        styles["text-input"],
        needsPaddingBottom && styles["text-input--padding-bottom"]
      )}
    >
      <label htmlFor={id}>{label}</label>

      <div className={clsx(styles["text-input__input-wrapper"])}>
        {LeadingIcon && (
          <LeadingIcon
            className={clsx(
              styles["text-input__icon"],
              styles["text-input__icon--leading"]
            )}
          />
        )}
        <input
          className={clsx(styles["text-input__input"])}
          type="text"
          value={text}
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
          aria-label={label}
          id={id}
          disabled={disabled}
        />
        {help && (
          <RiQuestionLine
            className={clsx(
              styles["text-input__icon"],
              styles["text-input__icon--trailing"],
              error && styles["text-input__icon--error"]
            )}
          />
        )}
      </div>

      {hint && (
        <div className={clsx(styles["text-input__message--hint"])}>{hint}</div>
      )}
      {error && (
        <div className={clsx(styles["text-input__message--error"])}>
          {error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
