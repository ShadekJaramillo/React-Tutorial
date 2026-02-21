import type React from "react";

function ListGroup() {
  let items = ["NY", "TK", "SF", "LA"];
  items = [];

  let message: React.ReactElement;
  if (items.length === 0) {
    message = <p>No item Found</p>;
  } else {
    message = (
      <>
        {items.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </>
    );
  }

  return (
    <>
      <h1>Title changed</h1>
      <ul className="list-group">{message}</ul>
    </>
  );
}

export { ListGroup };
