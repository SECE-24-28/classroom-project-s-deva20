import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Users from "./Users.js";
import Books from "./Books.js";


function App(){
    return(
        <BrowserRouter>
        <h1>im from app</h1>
        
        <ul>
           <Link to="/"><li>Home</li></Link> 
           <Link to="/about"><li>About</li></Link>
           <Link to="/contact"><li>Contact</li></Link>
           <Link to="/user/1"><li>user 1</li></Link>
           <Link to="/user/2"><li>user 2</li></Link>
           <Link to="/book/oldbook"><li>old book</li></Link>
           <Link to="/book/newbook"><li>new book</li></Link>
        </ul>

        <Routes>
            <Route path="/"  element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>   
            <Route path="/user/:id" element={<Users/>}></Route>
            <Route path="/book/:bookname" element={<Books/>}></Route>
        </Routes>
        </BrowserRouter>
    )
    
}

export default App;