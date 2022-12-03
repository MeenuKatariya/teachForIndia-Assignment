import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Hompage/Homepage';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import Data from './Components/Notes/Notes';
import AdminRegister from "./Components/adminRegister/adminRegister"
import  AdminLogin from "./Components/adminLogin/admin"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/notes" element={<Data />} />
        <Route path="/create" element={<AdminRegister />} />
        <Route path="/register" element={<Register />} />
        

      </Routes>
    </div>
  );
}

export default App;
