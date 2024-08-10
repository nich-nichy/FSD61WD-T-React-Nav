import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FSD from "./components/individual-pages/FSD";
import DS from "./components/individual-pages/DS";
import CBS from "./components/individual-pages/CBS";
import Career from "./components/individual-pages/Career";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/fsd" element={<FSD />} />
        <Route path="/course/ds" element={<DS />} />
        <Route path="/course/cbs" element={<CBS />} />
        <Route path="/course/career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
