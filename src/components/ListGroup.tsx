import type { MouseEvent } from "react";
import { useState } from "react";

interface CountryList {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

let ItemsList = ({ heading, items, onSelectItem }: CountryList) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClickEvent = (event: MouseEvent, city: string, index: number) => {
    console.log("Clicked " + city);
    console.log(event);
    setSelectedIndex(index);
  };

  let list =
    items.length === 0 ? (
      <p>No item found</p>
    ) : (
      <ul className="list-group">
        {items.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={(event) => {
              handleClickEvent(event, city, index);
              onSelectItem(city);
            }}
          >
            {index + 1}. {city}
          </li>
        ))}
      </ul>
    );

  return (
    <>
      <h1>{heading}</h1>
      {list}
    </>
  );
};

function ListGroup() {
  let items = ["New York", "Tokyo", "San Francisco", "Los Angeles", "El paso"];
  // items = [];
  const handleSelectItem = (item: string) => {
    console.log(item + " handler activated");
  };
  return (
    <ItemsList items={items} heading="cities" onSelectItem={handleSelectItem} />
  );
}

export { ListGroup };
export { ItemsList };
