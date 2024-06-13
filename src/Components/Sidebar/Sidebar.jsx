import React, { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PendingIcon from '@mui/icons-material/Pending';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import LanguageIcon from '@mui/icons-material/Language';
import "../DnDFlow/DnDFlow.css"; // Ensure you have this CSS file

export default function Sidebar() {
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [toolData, setToolData] = useState({ tools: [] });

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = (nodeType) => {
    setSelectedNodes((prevNodes) => [...prevNodes, { type: nodeType }]);
  };

  const createTool = () => {
    const newTool = { nodes: selectedNodes };
    setToolData((prevData) => ({
      ...prevData,
      tools: [...prevData.tools, newTool],
    }));
    setSelectedNodes([]);
    console.log("toolData", toolData, newTool);
  };

  return (
    <aside className="d-flex flex-column h-100 px-3 sidebar">
      <div className="flex-grow-1">
        <h5 className="text-dark font-weight-light">Basic Tools</h5>
        <div className="">
        <button
          type="button"
          className="btn btn-outline-dark btn-sm m-2 px-4 py-2"
          onDragStart={(event) => onDragStart(event, "Email")}
          onDragEnd={() => onDragEnd("Email")}
          draggable
        >
          <MailIcon /><br />
          Email
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-sm m-2 px-4 py-2"
          onDragStart={(event) => onDragStart(event, "SMS")}
          onDragEnd={() => onDragEnd("SMS")}
          draggable
        >
          <ChatIcon /><br />
          SMS
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-sm m-2 px-4 py-2"
          onDragStart={(event) => onDragStart(event, "Notification")}
          onDragEnd={() => onDragEnd("Notification")}
          draggable
        >
          <NotificationsActiveIcon /><br />
          Notification
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-sm m-2 px-4 py-2"
          onDragStart={(event) => onDragStart(event, "Wait")}
          onDragEnd={() => onDragEnd("Wait")}
          draggable
        >
          <PendingIcon /><br />
          Wait
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-sm m-2 px-4 py-2"
          onDragStart={(event) => onDragStart(event, "Decision")}
          onDragEnd={() => onDragEnd("Decision")}
          draggable
        >
          <MultipleStopIcon /><br />
          Decision
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-sm m-2 px-4 py-2"
          onDragStart={(event) => onDragStart(event, "Webhook")}
          onDragEnd={() => onDragEnd("Webhook")}
          draggable
        >
          <MailIcon /><br />
          Webhook
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-sm m-2 px-4 py-2"
          onDragStart={(event) => onDragStart(event, "Update Contact")}
          onDragEnd={() => onDragEnd("Update Contact")}
          draggable
        >
          <LanguageIcon /><br />
          Update Contact
        </button>
      </div>
      </div>
      <div className="mt-auto">
        <button
          type="button"
          className="btn btn-block my-3 p-2 createToolBtn"
          onClick={createTool}
        >
          Create Tool
        </button>
      </div>
    </aside>
  );
}
