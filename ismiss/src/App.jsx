import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Dashboard from "./components/Dasboard";
import Registration from "./components/Registration";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
