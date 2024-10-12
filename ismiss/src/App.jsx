import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Dashboard from "./components/Dasboard";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Registration from "./components/Registration";
import ManageAccount from './components/ManageAccount.jsx'
import AnnouncementDetails from "./components/AnnoucementDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  
  return (
    <>
    <Header/>
    <Navbar/>
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/ManageAccount" element={<ManageAccount/>}/>
            <Route path="/Annoucements/:id" element={<AnnouncementDetails/>} />
            <Route path="/Registration" element={<Registration />}/>
        </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
