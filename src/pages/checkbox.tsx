import useTitle from "../hooks/useTitle";
import Checkbox, { CheckboxState } from "../components/Checkbox";
import styles from "./checkbox.module.css";

function CheckboxPage() {
  useTitle("Checkbox Component");

  return (
    <div className={styles.container}>
      <div className={styles["checkbox-variants"]}>
        <Checkbox label="Unchecked" state={CheckboxState.Unchecked} />
        <Checkbox label="Checked" state={CheckboxState.Checked} />
        <Checkbox label="Indeterminate" state={CheckboxState.Indeterminate} />
      </div>
    </div>
  );
}

export default CheckboxPage;
