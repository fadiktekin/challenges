import "./FavoriteButton.css";

import star from "../../assets/resources/star.svg";
import starFilled from "../../assets/resources/star-filled.svg";

type PropTypes = {
  isFavorite: boolean;
  id: number;
  onToggleFavorite: (id: number) => void;
};
export function FavoriteButton({
  isFavorite,
  id,
  onToggleFavorite,
}: PropTypes) {
  return (
    <button
      type="button"
      className="favorite-button"
      onClick={() => onToggleFavorite(id)}
    >
      <img role="button" src={isFavorite ? starFilled : star} alt="" />
    </button>
  );
}
