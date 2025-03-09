import useTitle from "../hooks/useTitle";
import ModalDialog from "../components/ModalDialog";
import styles from "./modalDialog.module.css";

function ModalDialogPage() {
  useTitle("ModalDialog Component");

  return (
    <div className={styles.container}>
      <ModalDialog
        title="Are you sure you want to leave the process?"
        description="Your upgrade plan process will be cancelled. You need to start again if you leave the process."
      />
    </div>
  );
}

export default ModalDialogPage;
