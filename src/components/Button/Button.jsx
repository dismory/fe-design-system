import styles from "./Button.module.css";

import clsx from "clsx";

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

function Button({
  size = BUTTON_SIZES.MEDIUM,
  color = BUTTON_COLORS.PRIMARY,
  title,
  icons,
  iconPosition = BUTTON_ICON_POSITIONS.CENTER,
  disabled = false,
}) {
  const [LeftIcon, RightIcon] = icons ? icons : [];
  const isIconOnly =
    !title && ((LeftIcon && !RightIcon) || (RightIcon && !LeftIcon));

  return (
    <button
      disabled={disabled}
      className={clsx(
        styles.button,
        styles[`${isIconOnly ? "button-icon" : "button"}--size--${size}`],
        styles[`button--color--${color}`],
        {
          [styles["button--icon-position--right"]]:
            title &&
            ((LeftIcon && !RightIcon) || (RightIcon && !LeftIcon)) &&
            iconPosition === BUTTON_ICON_POSITIONS.RIGHT,
        }
      )}
    >
      {LeftIcon && (
        <LeftIcon
          className={clsx(
            styles.button__icon,
            styles[`button__icon--size--${size}`],
            styles[`button__icon--color--${color}`]
          )}
        />
      )}
      {title && title}
      {RightIcon && (
        <RightIcon
          className={clsx(
            styles.button__icon,
            styles[`button__icon--size--${size}`],
            styles[`button__icon--color--${color}`]
          )}
        />
      )}
    </button>
  );
}

export default Button;
export { BUTTON_SIZES, BUTTON_COLORS, BUTTON_ICON_POSITIONS };
