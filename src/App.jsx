/* App */

import About from "./screens/About";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Name from "./screens/Name";
import Courses from "./screens/Courses";
import Tools from "./screens/Tools";
import Works from "./screens/Works";
import Contact from "./screens/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Name /> }/>
          <Route path="/Courses" element={ <Courses /> } />
          <Route path="/Tools" element={ <Tools /> } />
          <Route path="/Works" element={ <Works /> } />
          <Route path="/About" element={ <About /> } />
          <Route path="/Contact" element={ <Contact /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
} export default App;
