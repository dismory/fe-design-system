import clsx from "clsx";
import useTitle from "../hooks/useTitle";
import DropdownMenu from "../components/DropdownMenu";
import styles from "./dropdownMenu.module.css";

function DropdownMenuPage() {
  useTitle("DropdownMenu Component");

  return (
    <div className={clsx(styles.container)}>
      <DropdownMenu />
    </div>
  );
}

export default DropdownMenuPage;
