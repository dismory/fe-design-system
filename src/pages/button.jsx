import "./button.css";
import { Button, BUTTON_SIZES, BUTTON_COLORS } from "../components/Button";
import useTitle from "../hooks/useTitle";

import starUrl from "../assets/icons/star-line.svg?url";

function ButtonPage() {
  useTitle("Button Component");

  return (
    <div className="container">
      <div className="button__colors">
        <div className="button__sizes">
          <Button size={BUTTON_SIZES.MEDIUM} title="Button CTA" />
          <Button
            size={BUTTON_SIZES.LARGE}
            title="Button CTA"
            iconUrl={starUrl}
          />
          <Button
            size={BUTTON_SIZES.XLARGE}
            title="Button CTA"
            iconUrl={starUrl}
          />
          <Button size={BUTTON_SIZES["2XLARGE"]} title="Button CTA" />
          <Button size={BUTTON_SIZES["2XLARGE"]} iconUrl={starUrl} />
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
