import Navbar from "./components/Navbar";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Main/>}>
        </Route>
      </Routes>
      </div>
      <Footer/>
    </Router>

  );
}

export default App;
