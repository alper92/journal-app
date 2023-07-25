import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg"; // make image immediately a react component
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  const [isFav, setFav] = useState(false); // initially set "isFav" to "false"

  return (
    // From this point JSX beginns and before the return everythin is javascript
    <button
      className="favorite-button"
      onClick={() => {
        setFav(!isFav);
        /* with the click event on the button we change the state of isFav to true!
        So all the functions before the return will be triggered from top to bottom automatically again!
        */
      }}
      aria-label="favorite"
    >
      {isFav ? <StarFilled /> : <Star /> /* If "isFave" = true... */}
    </button>
  );
}
