import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg"; // make image immediately a react component
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton({ onToggleFavorite, id, isFavorite }) {
  return (
    // From this point JSX beginns and before the return everythin is javascript
    <button
      className="favorite-button"
      onClick={() => onToggleFavorite(id)}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star /> /* If "isFave" = true... */}
    </button>
  );
}
