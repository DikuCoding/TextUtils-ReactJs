import React , {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleDownClick = ()=>{
        let Ltext = text.toLowerCase();
        setText(Ltext);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text , setText] = useState('');
  return (
    <>
    <div className="container">
      
<h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange ={handleOnChange} style ={{backgroundColor :props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1 " onClick={handleDownClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1 " onClick={handleClearClick}>Cleat Text</button>
<button className="btn btn-primary mx-1 " onClick={handleCopy}>CopyText</button>
    </div>
    <div className="container">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words , {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").length} Minutes read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something above in a text box above to preview it here"}</p>
    </div>
    </>
  )
}
