import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Translate component</h1>
      <br />
      <Dropdown
        options={options}
        selected={selected}
        title="Select language"
        onSelectedChange={setSelected}
      />
      <br />
      <div className="ui two column divided grid">
        <div className="row" style={{ height: "300px" }}>
          <div className="column">
            <h3>Enter text</h3>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="column">
            <h3 className="ui header">Translation</h3>

            <Convert language={selected} text={text} />
          </div>
        </div>
      </div>
      {/* <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <hr />
        <h3 className="ui header">Translation</h3>

        <Convert language={selected} text={text} />
      </div> */}
    </div>
  );
};
