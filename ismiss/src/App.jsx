import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Dashboard from "./components/Dasboard";
import Registration from "./components/Registration";
import ManageAccount from './components/ManageAccount.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/ManageAccount" element={<ManageAccount/>}/>
            <Route path="/Registration" element={<Registration />}/>
        </Routes>
    </Router>
  );
}

export default App;
