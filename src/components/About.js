import React,{useState} from 'react'


export default function About() {
 const [mystyle,setMyStyle]=useState({
        color:'white',
        backgroundColor:'black'
    })
const togstyle=()=>{
    if(mystyle.color ==='white'){
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setText("Enable dark mode")
    }
    else{
    setMyStyle({
        color:'white',
        backgroundColor:'black'
    })
    setText("Enable white mode")
}
}
const [btntext,setText]=useState('mode')


 
     return (
    <>
   
    <div className='container' style={mystyle}>
        <h1 className='my-3'> About us</h1>
      <div className="accordion"  id="accordionExample"   >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Name
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={mystyle}>
        <strong>My name is Sandeep Gajanan</strong>  
        </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo" >
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Phone
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>9482064048</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingThree" >
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Address
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>Beeri madooru</strong>
      </div>
    </div>
  </div>
</div>
<div className="container"><button className="btn btn-dark my-2" onClick={togstyle}>{btntext}</button></div>

    </div>
    </>
  )
}
