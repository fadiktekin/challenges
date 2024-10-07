import "./Entry.css";

import { FavoriteButton } from "../FavoriteButton";

type EntryPropTypes = {
  isFavorite: boolean;
  id: number;
  date: string;
  motto: string;
  notes: string;
  onToggleFavorite: (id: number) => void;
};

export function Entry({
  date,
  motto,
  notes,
  id,
  isFavorite,
  onToggleFavorite,
}: EntryPropTypes) {
  return (
    <article>
      <time dateTime={date}>{date}</time>
      <div className="title-icon">
        <h3>{motto}</h3>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          id={id}
        />
      </div>
      <p>{notes}</p>
    </article>
  );
}
