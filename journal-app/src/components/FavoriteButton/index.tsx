import "./FavoriteButton.css";

import star from "../../assets/resources/star.svg";
import starFilled from "../../assets/resources/star-filled.svg";
import { useState } from "react";

export function FavoriteButton() {
  const [filled, setFilled] = useState(false);

  function onClick() {
    setFilled(!filled);
  }
  return (
    <button type="button" className="favorite-button" onClick={onClick}>
      <img role="button" src={filled ? starFilled : star} alt="" />
    </button>
  );
}
