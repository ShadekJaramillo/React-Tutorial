let CountryList = ({ items }: { items: string[] }) =>
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

function ListGroup() {
  let items = ["NY", "TK", "SF", "LA"];
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
