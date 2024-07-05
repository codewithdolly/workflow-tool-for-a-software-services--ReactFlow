import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import Logo from "../../../public/workflow logo.png";
import nodeObjects from "./NodeObjects"; // Adjust the import path as needed
import CustomNode from "./CustomNode";
import "./Sidebar.css";

const Sidebar = ({ nodes, edges, saveData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNodes, setShowNodes] = useState(true);
  
  const [showSources, setShowSources] = useState(true);

  const filteredNodes = nodeObjects.filter(
    (node) =>
      node.type === "CustomNode" &&
      node.data.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSources = nodeObjects.filter(
    (node) =>
      node.type === "sourceType" &&
      node.data.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onDragStart = (event, nodeData) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(nodeData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside
      className="d-flex flex-column px-4 asideNodes"
      style={{ height: "100vh" }}
    >
      <div className="container-fluid">
        <div className="sticky-top bg-white">
          <img
            src={Logo}
            alt="Mix flow"
            className="img-fluid"
            style={{ maxHeight: "80px" }}
          />
          <input
            type="text"
            className="form-control searchInput"
            placeholder="Search nodes or sources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="border px-4 m-2">
          <h5 className="text-muted pt-4 p-0 d-flex justify-content-between">
            Nodes
            <IconButton
              aria-label="toggle"
              size="small"
              onClick={() => setShowNodes(!showNodes)}
            >
              {showNodes ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </IconButton>
          </h5>
          {showNodes && (
            <div className="row">
              {filteredNodes.map((node) => (
                <div className="col-6 p-1" key={node.id}>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100 NodesBtn"
                    onDragStart={(event) => onDragStart(event, node.data.icon)}
                    draggable
                  >
                    {node.data.icon}
                    {node.data.label}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border px-4 m-2">
          <h5 className="text-muted pt-4 d-flex justify-content-between">
            Sources
            <IconButton
              aria-label="toggle"
              size="small"
              onClick={() => setShowSources(!showSources)}
            >
              {showSources ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowUpIcon />
              )}
            </IconButton>
          </h5>
          {showSources && (
            <div className="row">
              {filteredSources.map((source) => (
                <div className="col-6 p-1" key={source.id}>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
                    onDragStart={(event) =>
                      onDragStart(event, source.data.icon)
                    }
                    draggable
                  >
                    {source.data.icon}
                    {source.data.label}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="fixed-bottom float-right mt-auto mb-3 bg-secondary">
          <button
            type="button"
            className="btn btn-primary m-1 flex-fill"
            onClick={saveData}
          >
            Validate
          </button>
          <button
            type="button"
            className="btn btn-primary m-1 flex-fill"
            onClick={saveData}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-primary m-1 flex-fill"
            onClick={saveData}
          >
            Save & Run
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
