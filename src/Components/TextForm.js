import React  from 'react';
import { useState } from "react";

function TextForm(props) {

  const handleUPclick = ()=>{
    let newText = text.toUpperCase()
    settext(newText)
    props.showAlert("the text has been changed to UpperCase","success");
  }
  const handleLowclick = ()=>{
    let newText = text.toLowerCase()
    settext(newText)
    props.showAlert("the text has been changed to LowerCaseCase","success");

  }
  const handlerevclick= ()=>{
    let newText = text.split("").reverse().join("")
    settext(newText)
    props.showAlert("the text has been changed to Reverse","success");

  }
  const handleClearClick= ()=>{
    let newText =("")
    settext(newText)
    props.showAlert("the text has been cleared","success");

  }

  let handleCfClick = function (){
    let newText = '';
    text.split(' ').forEach((element)=>{
      let capital = element[0].toUpperCase() + element.slice(1) + " ";
      newText += capital;
      settext(newText);
      props.showAlert("the text has been changed capitalize all","success");

    });

  }

  const handleCapclick= ()=>{
    let newText = text.charAt(0).toUpperCase() + text.slice(1)
    settext(newText)
    props.showAlert("the text has been changed capitalize","success");

  }
  const copyOnClipboard= ()=>{
  var text =   document.getElementById("mybox")
text.select();
 navigator.clipboard.writeText(text.value);
 props.showAlert("text copied","success");

  }

  const handleONChange = (event)=>{
    settext(event.target.value)
  } 
  
  const [text, settext] = useState('');
    return ( 
          <>
    <div className="mb-3" style={{color:props.mode==='dark' ? 'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">

      <textarea className="form-control" mode = {props.mode}  onChange={handleONChange} style={{backgroundColor:props.mode==='dark' ? 'grey':'white' , color:props.mode==='dark' ? 'white':'black'}} value={text} id="mybox" rows="8"></textarea>
    </div>
    <button className="mx-2 btn btn-primary" onClick={handleUPclick}>UpperCase</button>
    <button className="mx-2 btn btn-primary" onClick={handleLowclick}> LowerCaseCase</button>
    <button className="mx-2 btn btn-primary" onClick={handlerevclick}> Reverse</button>
    <button className="mx-2 btn btn-primary" onClick={handleCapclick}> Capitalize</button>
    <button className="mx-2 btn btn-primary" onClick={handleCfClick}> Capitalize all</button>
    <button className="mx-2 btn btn-primary" onClick={handleClearClick}> Clear</button>
    <button className="mx-2 btn btn-primary" onClick={copyOnClipboard}> Copy</button>
        </div>
<div className="container my-3" style={{color:props.mode==='dark' ? 'white':'#020114'}}>
  <h1>text your summary</h1>
 <p> {text.split(" ").filter((char)=>{return char.length!==0}).length} words and {text.length} character </p>
 <p>it takes {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
 <h3> Preview</h3>
 <p><i>{text.length>0 ? text : "enter your text here  "}</i> </p>
</div>
        </>
    )
  }
export default TextForm
  
