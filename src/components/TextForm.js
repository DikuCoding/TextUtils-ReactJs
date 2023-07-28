import React , {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        
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
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied", "success");
    }
    const handleOnChange = (event)=>{
    
        setText(event.target.value);
    }
    const [text , setText] = useState('');
  return (
    <>
    <div className="container">
      
<h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange ={handleOnChange} style ={{backgroundColor :props.mode==='dark'?'#798585':'white'}} id="myBox" rows="8"></textarea>
</div>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleDownClick}>Convert to LowerCase</button>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>Clear Text</button>
<button disabled ={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>CopyText</button>
    </div>
    <div className="container">
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
