/* App */

import About from "./componentes/About";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Name from "./componentes/Name";
import Courses from "./componentes/Courses";
import Tools from "./componentes/Tools";
import Works from "./componentes/Works";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
} export default App;
