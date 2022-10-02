import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import Career from "./pages/Career/Career";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Career />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
