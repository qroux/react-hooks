import React from "react";

const items = [
  { title: "Home", path: "/" },
  { title: "Search", path: "/search" },
  { title: "Translate", path: "/translate" },
  { title: "Dropdown", path: "/dropdown" },
];

export default () => {
  const renderItems = items.map((item) => {
    return (
      <a key={item.title} className="item">
        {item.title}
      </a>
    );
  });

  return (
    <div>
      <div className="ui four item menu">{renderItems}</div>
    </div>
  );
};
