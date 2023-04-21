
import {Route,Routes,Router} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
   <>
 
 
<Navbar title="TextUtils" aboutText="About" />

<Routes>
  <Route path='/' element={<Textform heading="Enter a text here" /> }/>
  <Route path='/about' element={<About/>}/>
</Routes>


  

{/*  
  <div className="container my-3">
       <Textform heading="Enter the title for analyze"/>
  </div> */}

  




   </>
  );
}

export default App;
