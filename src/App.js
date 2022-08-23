import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from "./NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
        <NavBar/>
        <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile/:username" element={<Profile />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
      <div> Foooter </div>
    </Router>
  );
}

export default App;
