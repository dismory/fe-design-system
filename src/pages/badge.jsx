import "./badge.css";
import { Badge, BADGE_COLORS, BADGE_SIZES } from "../components/Badge";
import useTitle from "../hooks/useTitle";

function BadgePage() {
  useTitle("Badge Component");

  return (
    <div className="container">
      <div className="badge__colors">
        {Object.values(BADGE_COLORS).map((color) => (
          <div key={color} className="badge__sizes">
            {Object.values(BADGE_SIZES).map((size) => (
              <Badge key={size} color={color} size={size} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BadgePage;
