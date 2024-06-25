import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";
import Sidebar from "../Sidebar/Sidebar";
import "./DnDFlow.css";

const initialNodes = [
  {
    id: "1",
    data: { label: "Text" },
    position: { x: 250, y: 5 },
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2", animated: true }
];

let id = 0;
const getId = () => `dndnode_${id++}`;
const alignYPosition = (position, lastPosition, gap = 60) => {
  return lastPosition ? { ...position, y: lastPosition.y + gap } : position;
};

const DnDFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const reactFlowWrapper = useRef(null);

  // To store the position of the last dropped node
  const lastNodePosition = useRef(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const containerBounds = reactFlowWrapper.current.getBoundingClientRect();
      const reactFlowBounds = reactFlowInstance.project({
        x: containerBounds.width / 2 - containerBounds.left,
        y: containerBounds.height / 2 - containerBounds.top,
      });

      const position = alignYPosition(reactFlowBounds, lastNodePosition.current);

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      };

      setNodes((nds) => {
        const filteredNodes = nds.filter((node) => node.id !== "1");
        return filteredNodes.concat(newNode);
      });

      // Update the last node position
      lastNodePosition.current = position;
    },
    [reactFlowInstance]
  );

  const saveData = () => {
    const dataToSave = { nodes, edges };
    console.log("Saving data: ", dataToSave);
    // Example: localStorage.setItem("flowData", JSON.stringify(dataToSave));
  };

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
            <Background gap={10} color="#ccc" variant="dots" />
          </ReactFlow>
        </div>
        <Sidebar nodes={nodes} edges={edges} saveData={saveData} />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
