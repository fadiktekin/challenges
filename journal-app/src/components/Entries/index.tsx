import { Entry } from "../Entry";

import "./Entries.css";
import { Fragment } from "react/jsx-runtime";

export type EntryType = {
  id: number;
  date: string;
  motto: string;
  notes: string;
  isFavorite: boolean;
};

type PropType = {
  entries: EntryType[];
  onToggleFavorite: (id: number) => void;
};

export function Entries({ entries, onToggleFavorite }: PropType) {
  return (
    <>
      <section className="entry-list">
        {entries.map((entry: EntryType) => (
          <Fragment key={entry.id}>
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              isFavorite={entry.isFavorite}
              id={entry.id}
              onToggleFavorite={onToggleFavorite}
            />
          </Fragment>
        ))}
      </section>
    </>
  );
}
