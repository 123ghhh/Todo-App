import {Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import {SignUp} from "./Components/SignUp"
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
     {/* <Login/> */}
    <Routes>
      <Route path="/home" element={<Todo/>}   /> 
    <Route path="/signup" element={<SignUp/>}   /> 
      <Route path="/" element={<Login/>}   />
    </Routes>
    </div>
  );
}

export default App;
