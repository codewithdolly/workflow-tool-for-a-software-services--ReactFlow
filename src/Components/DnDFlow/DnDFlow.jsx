// src/Components/DnDFlow/DnDFlow.jsx
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
import nodeObjects from "../Sidebar/NodeObjects";
import CustomNode from "../Nodes/CustomNode/CustomNode";
import SourceNode from "../Nodes/CustomNode/SourceNode";
import CustomEdge from "../Edges/CustomEdge/CustomEdge";

const nodeTypes = {
  customNode: CustomNode,
  sourceNode: SourceNode,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

const initialNodes = [
  {
    id: "1",
    type: "customNode",
    position: { x: 250, y: 5 },
    data: { label: "Start your Design here ➡️" },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "customEdge",
    animated: true,
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

// Reintroducing alignYPosition with a default gap of 50
const alignYPosition = (position, lastPosition, gap = 50) => {
  return lastPosition ? { ...position, y: lastPosition.y + gap } : position;
};

const DnDFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const reactFlowWrapper = useRef(null);

  const lastNodePosition = useRef(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: "customEdge" }, eds)),
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

      const position = alignYPosition(reactFlowBounds, lastNodePosition.current); // Using alignYPosition with default gap
      let parsedType = JSON.parse(type);
      let nodeData = nodeObjects.find((node) => node.id === parsedType.id);

      const newNode = {
        id: getId(),
        type: nodeData.type === "sourceNode" ? "sourceNode" : "customNode",
        position,
        data: nodeData.data,
      };

      setNodes((nds) => nds.concat(newNode));
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
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
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
