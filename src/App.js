import React, { useState, useEffect } from "react";
import Accordion from "./components/Accordion";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// ACCORDION
// const items = [
//   {
//     title: "What is React ?",
//     content: "React is a FrontEnd Javascript Framework",
//   },
//   {
//     title: "Why use React ?",
//     content:
//       "It's a last Gen FrontEnd Javascript Framework that helps you create SPA",
//   },
//   {
//     title: "How to start ?",
//     content: "npx create-react-app your-app-name",
//   },
// ];

//DropDown
const options = [
  { label: "Red color", value: "red" },
  { label: "Blue color", value: "blue" },
  { label: "Green color", value: "green" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdow, setShowDropdown] = useState(true);

  return (
    <div>
      <Navbar />
      <br />
      <button onClick={() => setShowDropdown(!showDropdow)}>show</button>
      <br />
      {showDropdow ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          title="Select a color"
        />
      ) : null}

      {/* <Search />
      <br />
      <Accordion items={items} /> */}
    </div>
  );
};
