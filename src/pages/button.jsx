import { RiStarLine } from "react-icons/ri";

import "./button.css";
import useTitle from "../hooks/useTitle";
import {
  Button,
  BUTTON_SIZES,
  BUTTON_COLORS,
  BUTTON_ICON_POSITIONS,
} from "../components/Button";

function ButtonPage() {
  useTitle("Button Component");

  return (
    <div className="container">
      <div className="button__colors">
        {Object.values(BUTTON_COLORS).map((color) => (
          <div key={color} className="button__sizes">
            <Button
              size={BUTTON_SIZES.MEDIUM}
              color={color}
              title="Button CTA"
            />
            <Button
              size={BUTTON_SIZES.LARGE}
              color={color}
              title="Button CTA"
              icons={[RiStarLine]}
            />
            <Button
              size={BUTTON_SIZES.XLARGE}
              color={color}
              title="Button CTA"
              icons={[RiStarLine]}
              iconPosition={BUTTON_ICON_POSITIONS.RIGHT}
            />
            <Button
              size={BUTTON_SIZES["2XLARGE"]}
              color={color}
              title="Button CTA"
            />
            <Button
              size={BUTTON_SIZES["2XLARGE"]}
              icons={[RiStarLine]}
              color={color}
              iconPosition={BUTTON_ICON_POSITIONS.CENTER}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonPage;
