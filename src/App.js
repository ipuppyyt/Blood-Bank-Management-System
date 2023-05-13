import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Home from "./components/Home";


function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
