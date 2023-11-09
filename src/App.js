// import logo from './logo.svg';
// import './App.css';
import Home from "./Home"
import About from "./About"
import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">

     
      <BrowserRouter>
      <header>
       <Nav />
      </header>
        <main className="min-h-screen">
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route />
          </Routes>
        </main>

       <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
