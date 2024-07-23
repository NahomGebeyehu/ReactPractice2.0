import { useState } from "react";

interface Props {
  daftpunk: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ daftpunk, title, onSelectItem }: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1);
  //daftpunk = [];
  const message = daftpunk.length === 0 && <p>Am I dreaming?</p>;
  return (
    <>
      <h1>{title}</h1>
      {message}
      <ul className="list-group">
        {daftpunk.map((punk, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={punk}
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(punk);
            }}
          >
            {punk}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
