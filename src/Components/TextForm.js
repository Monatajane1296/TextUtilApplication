import React,{useState} from 'react'

export default function TextForm(props) {
          const handleUpClick=()=>{
              // console.log("uppercase was clicked"+ text);
               let newText = text.toUpperCase();
               setText(newText)
               props.showAlert("converted to uppercase!","succees");
          }
          const handleLoClick=()=>{
               // console.log("uppercase was clicked"+ text);
                let newText = text.toLowerCase();
                setText(newText)
                props.showAlert("converted to lowercase!","succees");
           }
           const handleClearClick=()=>{
               // console.log("uppercase was clicked"+ text);
                let newText = (" ");
                setText(newText)
                props.showAlert("text cleared!","succees");
           }
           const handleCopy =()=>{
               console.log("I am copy");
               var text = document.getElementById("MyBox");
               text.select();
               navigator.clipboard.writeText(text.value);
               props.showAlert("copied to ClipBoard!","succees");
           }
           //using RegExp handel extraspaces
           const handleExtraSpaces =()=>
           {
               let newText = text.split(/[ ]+/);
               setText(newText.join(" "))
               props.showAlert("Removed Extra Spaces!","succees");
           }
          const handleOnChange=(event)=>{
                   // console.log("on change");
                    setText(event.target.value)
               }
          const[text,setText]=useState(''); 
          // text="new text"; //wrong way to change the state
          // setText("new text"); //correct way to change the text 
  return (
     <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1 className='mb-4'>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="MyBox" rows="9"></textarea>
          </div>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clere the text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
  </div>
  <div className="container my-3" style={{color:props.mode=== 'dark'?'white':'#042743'}}>
     <h2>Your Text Summary</h2>
     <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
  </>
  )
}
