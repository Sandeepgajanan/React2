import React,{useState} from 'react'


export default function Textform(props) {
    const upca=()=>{
       let newText=text.toUpperCase();
        setText(newText);
    }
    const handleonchange=(event)=>{
        setText(event.target.value)
    }
    const lowcs=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    
    const clear=()=>{
        setText('')
    }
    const [text,setText]=useState('')

    const speak = () => {
      // let msg = new SpeechSynthesisUtterance();
      // msg.text = text;
      // window.speechSynthesis.speak(msg);
      let voice=new SpeechSynthesisUtterance();
      voice.text=text;
      window.speechSynthesis.speak(voice);
    }
    const revr=()=>{
      let nwt=text.split("").reverse().join("")
      setText(nwt);
    }

  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
      
<div className="mb-3">

  <textarea className="form-control" value={text}  onChange={handleonchange}
  id="myBox" rows="8"></textarea>
</div>
<div>
<button className="btn btn-primary mx-2" onClick={upca} >Convert To UpperCase</button>     
 <button className="btn btn-primary mx-2" onClick={lowcs} >Convert To lowercase</button>
 <button className="btn btn-primary mx-2" onClick={clear}>clear</button>
 <button className="btn btn-primary mx-2" onClick={speak}>speak</button>
 <button className="btn btn-primary mx-2" onClick={revr}>Reverse</button>

</div>
</div>
<div className="container my-3">
    <h2>Summary</h2>
    <p>Number of charcters{text.length} and Number of words{text.split(" ").length}</p>
    <p>minutes to read this{text.split(" ").length*0.008}</p>
    <h2>Previw</h2>
    <p>{text}</p>
</div>
</>
  )
}
