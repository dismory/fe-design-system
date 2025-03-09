import useTitle from "../hooks/useTitle";
import ModalDialog from "../components/ModalDialog";
import clsx from "clsx";

function ModalDialogPage() {
  useTitle("ModalDialog Component");

  return (
    <div
      className={clsx(
        "flex h-screen w-screen items-center justify-center bg-neutral-900/70"
      )}
    >
      <ModalDialog
        title="Are you sure you want to leave the process?"
        description="Your upgrade plan process will be cancelled. You need to start again if you leave the process."
      />
    </div>
  );
}

export default ModalDialogPage;
