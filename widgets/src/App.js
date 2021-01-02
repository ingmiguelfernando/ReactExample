import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  { label: "The color Red", value: "red" },
  { label: "The color green", value: "green" },
  { label: "The color blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <br />
      {/* <Accordion items ={items}/> */}
      {/* <Search/> */}
      {/* <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      /> */}
      <Translate />
    </div>
  );
};
