import React from "react";
import Accordion from "./components/Accordion";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const items = [
  {
    title: "What is React ?",
    content: "React is a FrontEnd Javascript Framework",
  },
  {
    title: "Why use React ?",
    content:
      "It's a last Gen FrontEnd Javascript Framework that helps you create SPA",
  },
  {
    title: "How to start ?",
    content: "npx create-react-app your-app-name",
  },
];

export default () => {
  return (
    <div>
      <Navbar />
      <br />
      <Search />
      <br />
      <Accordion items={items} />
    </div>
  );
};
