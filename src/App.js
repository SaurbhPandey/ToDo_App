import React , {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './Components/NavbarComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import Screen_1 from './Components/Screen_1';
import Screen_2 from './Components/Screen_2';
import Screen_3 from './Components/Screen_3';
import HeaderComponenet from './Components/HeaderComponenet';
import FooterBar from './Components/FooterBar';
import Screnn_4 from './Components/Screnn_4';
import Error from './Components/Error';
import Memo from './Components/Screnn_4';
import ImageOpener from './Components/ImageOpener';
const App = () => {
  const[count , setCount] = useState(0);
  const callbackFunction = (currentCount) =>{
     setCount(currentCount);
  }
  return (
    <>
      {/* // It is basically used to connect our application with browser url */}
      <BrowserRouter>
        {/* Routes we need to add inside browser router. 
    meaning of routes is path.
    All paths will come inside this */}
        <HeaderComponenet />
        <Routes>
          {/* Route shows a single path */}
          <Route path='/' element={<NavbarComponent />} />
          <Route path='/screen1' element={<Screen_1 callback={callbackFunction}/>} />
          <Route path='/screen2' element={<Screen_2/>} />
          <Route path='/screen3' element={<Screen_3 />} />
          <Route path='/screen4/' element={<Memo/>} />
          {/* <Route path = '/imageopener' element = {<ImageOpener/>} */}
          {/* <Route path='*' element={<Error/>}/> */}
        </Routes>
        <FooterBar count = {count}/>
      </BrowserRouter>
    </>
  )
}

export default App