import { Tab } from "../Tab";
import "./Tabs.css";

type PropTypes = {
  allEntriesCount: number;
  favoriteEntriesCount: number;
  showAllEntries: () => void;
  showFavoriteEntries: () => void;
};

export function Tabs({
  allEntriesCount,
  favoriteEntriesCount,
  showAllEntries,
  showFavoriteEntries,
}: PropTypes) {
  return (
    <nav>
      <ul>
        <li>
          <Tab onClick={showAllEntries}>All Entries {allEntriesCount}</Tab>
        </li>
        <li>
          <Tab onClick={showFavoriteEntries}>
            Favorites {favoriteEntriesCount}
          </Tab>
        </li>
      </ul>
    </nav>
  );
}
