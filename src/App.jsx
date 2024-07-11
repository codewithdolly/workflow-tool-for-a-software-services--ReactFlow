import React from "react";

import "reactflow/dist/style.css";
import DnDFlow from "./Components/DnDFlow/DnDFlow";

export default function App() {

  return (
    <div className="app" style={{ width: "98vw", height: "98vh", border:'1px solid, red' }}>
      <DnDFlow />
      <DnDFlow />
      
    </div>
  );
}
