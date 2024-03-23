import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/home"
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
                </div>
            </div>
        </Router>
  );
}

export default App;
