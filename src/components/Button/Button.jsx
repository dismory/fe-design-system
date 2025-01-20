import clsx from "clsx";
import styles from "./Button.module.css";

const BUTTON_SIZES = {
  MEDIUM: "md",
  LARGE: "lg",
  XLARGE: "xl",
  "2XLARGE": "2xl",
};

const BUTTON_COLORS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  LINK_COLOR: "link-color",
  LINK_GRAY: "link-gray",
  DESTRUCTIVE: "destructive",
};

const BUTTON_ICON_POSITIONS = {
  LEFT: "left",
  RIGHT: "right",
  CENTER: "center",
  BOTH: "both",
};

function ButtonIcon({ iconUrl, size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={clsx(
        styles.button__icon,
        styles[`button__icon--size--${size}`],
        styles[`button__icon--color--${color}`]
      )}
    >
      <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
    </svg>
  );
}

function Button({
  size = BUTTON_SIZES.MEDIUM,
  color = BUTTON_COLORS.PRIMARY,
  title,
  iconUrl,
  iconPosition = BUTTON_ICON_POSITIONS.CENTER,
}) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--size--${size}`],
        styles[`button--color--${color}`],
        {
          [styles["button--icon-only"]]: !title && iconUrl,
          [styles["button--icon-position--right"]]:
            title && iconUrl && iconPosition === BUTTON_ICON_POSITIONS.RIGHT,
        }
      )}
    >
      {title && title}
      {iconUrl && <ButtonIcon iconUrl={iconUrl} size={size} color={color} />}
    </button>
  );
}

export default Button;
export { BUTTON_SIZES, BUTTON_COLORS, BUTTON_ICON_POSITIONS };
