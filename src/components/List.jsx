import React, { useState } from "react";

const List = () => {
  const initialState = [
    {
      id: `${new Date().getSeconds()}`,
      description: "This is something",
      significance: 7,
    },
  ];

  const [listData, setListData] = useState(initialState);

  return (
    <div style={{ marginLeft: "auto", marginTop: 500, marginBottom: 500 }}>
      <h1>This is a list</h1>
      <ul style={{ listStyleType: "none" }}>
        {listData.map((listItem) => {
          return (
            <li key={listItem.id} data-testid="list-item">
              {listItem.description}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() =>
          setListData([
            ...listData,
            { id: 999, description: "999", significance: 999 },
          ])
        }
      >
        This button can add new entry to the list
      </button>
    </div>
  );
};

export default List;
