function ListGroup() {
  let items = ["NY", "TK", "SF", "LA"];
  items = [];

  let message =
    items.length === 0 ? (
      <p>No item found</p>
    ) : (
      <>
        {items.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </>
    );

  return (
    <>
      <h1>Title changed</h1>
      <ul className="list-group">{message}</ul>
    </>
  );
}

export { ListGroup };
