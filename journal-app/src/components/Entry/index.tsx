import "./Entry.css";

import { FavoriteButton } from "../FavoriteButton";

type EntryPropTypes = { date: string; motto: string; notes: string };

export function Entry({ date, motto, notes }: EntryPropTypes) {
  return (
    <article>
      <time dateTime={date}>{date}</time>
      <div className="title-icon">
        <h3>{motto}</h3>
        <FavoriteButton />
      </div>
      <p>{notes}</p>
    </article>
  );
}
