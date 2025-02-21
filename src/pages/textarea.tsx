import useTitle from "../hooks/useTitle";
import Textarea from "../components/Textarea";
import styles from "./textarea.module.css";

function TextareaPage() {
  useTitle("Textarea Component");

  return (
    <div className={styles.container}>
      <div className={styles["textarea-variants"]}>
        <Textarea
          maxLength={500}
          className={styles["textarea-variants__textarea"]}
        />
        <Textarea
          maxLength={500}
          placeholder="Enter a description..."
          errorMessage="This field is required"
          className={styles["textarea-variants__textarea"]}
        />
        <Textarea
          maxLength={500}
          disabled={true}
          className={styles["textarea-variants__textarea"]}
        />
      </div>
    </div>
  );
}

export default TextareaPage;
