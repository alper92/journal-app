import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

/* A Fragment is a special React component that allows 
 you to group multiple children without adding extra DOM elements 
 to the rendered output. */

export default function EntriesSection({
  entries,
  onToggleFavorite,
  onShowAllEntries,
  onShowFavoriteEntries,
  allEntriesCount,
  favoriteEntriesCount,
  filter,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab onClick={onShowAllEntries} isActive={filter === "all"}>
          All Entries <Badge isActive>{allEntriesCount}</Badge>
        </Tab>
        <Tab onClick={onShowFavoriteEntries} isActive={filter === "favorites"}>
          Favorites <Badge>{favoriteEntriesCount}</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
