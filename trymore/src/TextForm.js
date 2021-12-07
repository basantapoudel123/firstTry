import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked and uppercase was:- " + text.toUpperCase());
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to uppercase", "success");
    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked and uppercase was:- " + text.toUpperCase());
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to lowercase", "success");
    }
    const handleClick = () => {
        // console.log("Uppercase was clicked and uppercase was:- " + text.toUpperCase());
         let newText = "";
        setText(newText);
        props.showAlert(" Text Cleared", "success");
    }
    const handleOnChange = (event) => {
        // console.log("Text Changed");
        setText(event.target.value);
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to ClipBoard", "success");
    }

    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra space has been removed", "success");

    }

    const [text , setText]  = useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
             <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white' ,
                 color:props.mode==='light'?'black':'white'}}
                id="myBox"  rows="8"  value={text} onChange={handleOnChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UC</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LC</button>
            <button className="btn btn-primary mx-3" onClick={handleClick}>Clear</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove ExtraSpaces</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text: "Enter something in the textbox above to preview it here...."}</p>
        </div>

        </>
    );
}
