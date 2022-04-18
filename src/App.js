import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

const items = [
  {
    title: "What is React?",
    content: "React is a javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is popular library",
  },
  {
    title: "How do you use React?",
    content: "By creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
  {
    label: "The Color Green",
    value: "green",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <br /> */}
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
