import "./styles/main.css"
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Contacts from "./pages/Contacts";

import {BrowserRouter as Router, Routes, Route, ScrollRestoration} from "react-router-dom";
import scrollToTop from "./utils/scrollToTop"

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <ScrollRestoration />
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <Footer />

        </Router>

    </div>
  );
}

export default App;
