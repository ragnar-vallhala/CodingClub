import {Home, Event} from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <div>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Events' element={<Event/>}></Route>
      <Route path='/*' element={(
        <div>
          404 Not Found
        </div>
      )}></Route>
    </Routes>
  </div>
    
);

export default App;
