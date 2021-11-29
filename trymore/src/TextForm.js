import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked and uppercase was:- " + text.toUpperCase());
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("Text Changed");
        setText(event.target.value);
    }
    const [text , setText]  = useState("Enter text here");
    return (
        <div>
             <h2>{props.heading}</h2>
         
            <div className="mb-3">
                <textarea className="form-control" id="myBox"  rows="8"  value={text} onChange={handleOnChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UC</button>
        </div>
    );
}
