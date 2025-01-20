import "./App.css";
import Badge, { BADGE_COLORS, BADGE_SIZES } from "../../components/Badge";

function App() {
  return (
    <div className="container">
      <div className="badge__colors">
        {Object.values(BADGE_COLORS).map((color) => (
          <div className="badge__sizes">
            {Object.values(BADGE_SIZES).map((size) => (
              <Badge key={`${color}-${size}`} color={color} size={size} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
