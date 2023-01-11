// import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import User from './components/User';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/user/:id" element={<User/>}/>
      <Route path="/user/adduser" element={<AddUser/>}/>
      <Route path="/user/edituser/:id" element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
