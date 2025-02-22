import React, { useEffect, useId } from "react";
import clsx from "clsx";

enum CheckboxState {
  Checked = "checked",
  Unchecked = "unchecked",
  Indeterminate = "indeterminate",
}

interface CheckboxProps extends React.ComponentPropsWithoutRef<"div"> {
  state?: CheckboxState;
  label?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  state,
  label,
  ...props
}) => {
  const id = useId();
  const checkMarkClasses = clsx(
    "checked:after:box-content checked:after:content-['']",
    "checked:after:absolute checked:after:left-[5px] checked:after:top-[1px]",
    "checked:after:h-[8px] checked:after:w-[3px]",
    "checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white",
    "checked:after:rotate-45",
  );
  const indeterminateMarkClasses = clsx(
    "indeterminate:after:absolute indeterminate:after:left-[3px] indeterminate:after:top-[6px]",
    "indeterminate:after:h-[2px] indeterminate:after:w-[8px]",
    "indeterminate:after:bg-white",
  );

  useEffect(() => {
    const input = document.getElementById(id);
    if (input instanceof HTMLInputElement) {
      input.checked = state === CheckboxState.Checked;
      input.indeterminate = state === CheckboxState.Indeterminate;
    }
  }, [state]);

  return (
    <div className={clsx("flex gap-[12px] h-[1.5rem]", className)} {...props}>
      <div className={clsx("flex items-center justify-center p-[4px]")}>
        <input
          className={clsx(
            "appearance-none",
            "outline-none",
            "size-[1rem] relative",
            "border border-neutral-300 rounded-[4px]",
            "checked:bg-indigo-600 checked:border-indigo-600",
            checkMarkClasses,
            "indeterminate:bg-indigo-600 indeterminate:border-indigo-600",
            indeterminateMarkClasses,
            "focus:border-indigo-600 focus:shadow-[0_0_0_1px_#444CE7,0_0_0_4px_rgba(68,76,231,0.2)]",
          )}
          type="checkbox"
          id={id}
        />
      </div>
      <label htmlFor={id} className={clsx("text-neutral-600")}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
