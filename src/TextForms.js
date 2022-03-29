import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    let temp = text.toUpperCase();
    setText(temp);
  };

  const toLowerCase = () => {
    let temp = text.toLowerCase();
    setText(temp);
  };

  const copy = () => {
    console.log(text);
    navigator.clipboard.writeText(text);
  };

  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const clear = () => {
    setText("");
  };

  return (
    <div className="container my-5">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter Text Below
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          style={{
            backgroundColor: props.mode.color === "dark" ? "gray" : "white",
            color: props.mode.color === "dark" ? "white" : "black",
          }}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <button
        type="button"
        className={`btn btn-${
          props.mode.color === "dark" ? "dark" : "primary"
        } my-3 mx-1`}
        onClick={toUpperCase}
      >
        Convert to UpperCase
      </button>
      <button
        type="button"
        className={`btn btn-${
          props.mode.color === "dark" ? "dark" : "primary"
        } my-3 mx-1`}
        onClick={toLowerCase}
      >
        Convert to LowerCase
      </button>
      <button
        type="button"
        className={`btn btn-${
          props.mode.color === "dark" ? "dark" : "primary"
        } my-3 mx-1`}
        onClick={clear}
      >
        clear
      </button>

      <button
        type="button"
        className={`btn btn-${
          props.mode.color === "dark" ? "dark" : "primary"
        } my-3 mx-1`}
        onClick={copy}
      >
        Copy to clipboard
      </button>

      <button
        type="button"
        className={`btn btn-${
          props.mode.color === "dark" ? "dark" : "primary"
        } my-3 mx-1`}
        onClick={removeSpace}
      >
        remove extra space
      </button>
      <div className="container">
        <h3>Your Text Summary Below...!!!</h3>
        <p>
          {text.trim().split(" ").length === 1 && (text === "" || text === " ")
            ? 0
            : text.trim().split(" ").length}{" "}
          Words, {text.length} Charactrers
        </p>
        <p>{0.008 * text.trim().split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
