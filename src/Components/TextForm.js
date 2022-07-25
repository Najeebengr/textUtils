import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick =  ()=>{
        let newValue = text.toUpperCase();
        setText(newValue)
        props.showAlert("Converted to Upper Case", "success")
    }
    const handleLoClick =  ()=>{
        let newValue = text.toLowerCase();
        setText(newValue)
        props.showAlert("Converted to Lower Case", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'#263e72'}} >
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode === 'dark'?'#566585':'white', color: props.mode === 'dark'?'white':'#263e72'}} onChange={handleOnChange} value={text} rows="12"></textarea>
    <button disabled = {text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleUpClick}>
        Convert to Uppercase
    </button>
    <button disabled = {text.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleLoClick}>
        Convert to Lowercase
    </button>
  </div>
  </div>
  <div className="container" style={{color: props.mode === 'dark'?'white':'#263e72'}}>
    <h2>
        Your Text Summary
    </h2>
    <p>
        {text.split(" ").filter((element)=>{return element.length !== 0}).length} Words, {text.length} Characters, {text.split("\n").filter((element)=>{return element.length !== 0}).length} Sentences
    </p>
    <h2>
        Review
    </h2>
    <p>
        {text.length>0?text:"Enter Something in the text box above to Preview it Here!"}
    </p>
  </div>
  </>
  );
}
