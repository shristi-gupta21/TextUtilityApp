import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText); //text will get change on the click on the button
  };

  const handleOnChange = (event) => {
    // console.log("m");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleNumClick = () => {
    const reg = /[0-9]/g;

    const newText = text.match(reg);
    const res = newText.join("");
    setText(res);
  };

  const handleExtraSpace = () =>{
    const newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const [text, setText] = useState(""); //text is value, setText is a function
  // setText("new Text");
  return (
    <>
      <div className="conatiner">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            onChange={handleOnChange} //otherwise we will not be able to type anything
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleNumClick}>
          Numbers in the text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="conatiner my-3">
        <h2>Yout text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}