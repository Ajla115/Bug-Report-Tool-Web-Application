import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './views/Login';

const App = ( ) => {
//some component have both opening and closing tag such as <div></div>
//but others don't have that closing tag, rather everything is written in the opening tag 

  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<div>hello root</div>}/>
      <Route path="/hello" element = {<div>component2</div>}/>
      <Route path="/login" element = {<Login/>}/>
     {/* In this third route, we have used a Login component, and then imported it on the same page because we are building SPAPP*/}



    </Routes>
    </BrowserRouter>

  );


};

export default App;

