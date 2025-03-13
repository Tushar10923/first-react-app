import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("My name is Khan");
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("changed to upperCase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1 className={`text-${props.mode === "dark" ? "white" : "black "}`}>
          {props.title}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleTextarea"
            rows="8"
            value={text}
            valueonchange={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === "dark" ? "white" : "black ",
              backgroundColor: props.mode === "dark" ? "#333741" : "white",
            }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Set to Uppercase
        </button>
      </div>
      <p className={`text-${props.mode === "dark" ? "white" : "black"}`}>
        {text}
      </p>
    </>
  );
}
