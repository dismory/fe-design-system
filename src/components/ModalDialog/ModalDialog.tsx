import React from "react";
import clsx from "clsx";
import { RiCloseFill } from "react-icons/ri";

interface ModalDialogButtonProps {
  className?: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

const ModalDialogButton: React.FC<ModalDialogButtonProps> = ({
  children,
  className,
  variant = "secondary",
}) => {
  return (
    <button
      className={clsx(
        "modal-dialog__button",
        "h-11 w-44 grow cursor-pointer rounded-sm text-center text-base font-medium shadow-sm",
        variant === "primary" && "bg-indigo-700 text-white hover:bg-indigo-800",
        variant === "secondary" &&
          "hover:bg-neural-50 border-[0.5px] border-neutral-200 bg-white text-neutral-900 hover:border-1",
        className
      )}
    >
      {children}
    </button>
  );
};

interface ModalDialogProps {
  className?: string;
  title: string;
  description: string;
}

const ModalDialog: React.FC<ModalDialogProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={clsx(
        "modal-dialog",
        "relative flex w-[343px] flex-col gap-8 rounded-lg bg-white p-6",
        className
      )}
    >
      <button
        className={clsx(
          "modal-dialog__close-button",
          "absolute top-6 right-6 cursor-pointer"
        )}
      >
        <RiCloseFill className={clsx("text-2xl text-neutral-600")} />
      </button>
      <div className={clsx("modal-dialog__content", "flex flex-col gap-2")}>
        <h2
          className={clsx("modal-dialog__title", "pr-8 text-lg font-semibold")}
        >
          {title}
        </h2>
        <p
          className={clsx(
            "modal-dialog__description",
            "text-sm font-normal text-neutral-600"
          )}
        >
          {description}
        </p>
      </div>
      <div
        className={clsx(
          "modal-dialog__actions",
          "flex justify-stretch gap-3 font-medium"
        )}
      >
        <ModalDialogButton variant="secondary">No</ModalDialogButton>
        <ModalDialogButton variant="primary">Yes</ModalDialogButton>
      </div>
    </div>
  );
};

export default ModalDialog;
