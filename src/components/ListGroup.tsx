import type { MouseEvent } from "react";
import { useState } from "react";

let CountryList = ({ items }: { items: string[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClickEvent = (event: MouseEvent, city: string, index: number) => {
    console.log("Clicked " + city);
    console.log(event);
    setSelectedIndex(index);
  };

  return items.length === 0 ? (
    <p>No item found</p>
  ) : (
    <>
      {items.map((city, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={city}
          onClick={(event) => handleClickEvent(event, city, index)}
        >
          {index + 1}. {city}
        </li>
      ))}
    </>
  );
};

function ListGroup() {
  let items = ["New York", "Tokyo", "San Francisco", "Los Angeles"];
  // items = [];

  return (
    <>
      <h1>Title changed</h1>
      <ul className="list-group">
        <CountryList items={items} />
      </ul>
    </>
  );
}

export { ListGroup };
