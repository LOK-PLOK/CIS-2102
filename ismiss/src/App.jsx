import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Dashboard from "./components/Dasboard";
import Registration from "./components/Registration";
import ManageAccount from './components/ManageAccount.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Dashboard /> */}
        <ManageAccount />
      </div>
    </>
  );
}

export default App;
