import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import AdminAddDonor from "./components/AdminAddDonor";
import Add from "./components/Add";
import { useEffect, useState } from "react";
import './components/css/preloader.css';
import AdminRequest from "./components/AdminRequest";
import AdminUpdate from "./components/AdminUpdate";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  function fadeOut() {
    const div = document.getElementById("preloader");
    div.style.transition = "opacity 0.5s";
    div.style.opacity = "0";
  }
  

  useEffect(() => {
    // Simulating a delay for data loading
    const delay = setTimeout(() => {
      setIsLoading(false);
      fadeOut();
    }, 3000);

    // Clean up the timeout when the component is unmounted or the loading is finished
    return () => clearTimeout(delay);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {isLoading ? (
        <div className="preloader" id="preloader">
        <div class="spinner"></div>
        </div>
      ) : (
      <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/apply" element={<Add />} />


          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/adddonor" element={<AdminAddDonor />} />
          <Route path="/admin/requests" element={<AdminRequest />} />
          <Route path="/admin/update" element={<AdminUpdate />} />

        </Routes>
        <Footer />
      </BrowserRouter>)}
    </div>
  );
}

export default App;
