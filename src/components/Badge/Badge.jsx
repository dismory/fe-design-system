import styles from "./Badge.module.css";
import clsx from "clsx";

export const BADGE_SIZES = {
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
};

export const BADGE_COLORS = {
  NEUTRAL: "neutral",
  DANGER: "danger",
  WARNING: "warning",
  SUCCESS: "success",
  BRAND: "brand",
};

function Badge({
  size = BADGE_SIZES.SMALL,
  color = BADGE_COLORS.BRAND,
  children = "Label",
}) {
  return (
    <span
      className={clsx(
        styles.badge,
        styles[`badge--size--${size}`],
        styles[`badge--color--${color}`]
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
