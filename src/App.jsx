import React from "react";

import "reactflow/dist/style.css";
import DnDFlow from "./Components/DnDFlow/DnDFlow";

export default function App() {

  return (
    <div style={{ width: "100vw", height: "100vh", border:'1px solid, red' }}>
      <DnDFlow />
      
    </div>
  );
}
