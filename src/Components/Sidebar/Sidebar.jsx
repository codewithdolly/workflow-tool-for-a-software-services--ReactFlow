import React, { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PendingIcon from '@mui/icons-material/Pending';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import LanguageIcon from '@mui/icons-material/Language';

export default () => {
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
    <aside className="d-flex flex-column px-3" style={{ height: "100vh" }}>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Email")}
              onDragEnd={() => onDragEnd("Email")}
              draggable
            >
              <MailIcon />
              Email
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "SMS")}
              onDragEnd={() => onDragEnd("SMS")}
              draggable
            >
              <ChatIcon />
              SMS
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Notification")}
              onDragEnd={() => onDragEnd("Notification")}
              draggable
            >
              <NotificationsActiveIcon />
              Notification
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Wait")}
              onDragEnd={() => onDragEnd("Wait")}
              draggable
            >
              <PendingIcon />
              Wait
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Decision")}
              onDragEnd={() => onDragEnd("Decision")}
              draggable
            >
              <MultipleStopIcon />
              Decision
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Webhook")}
              onDragEnd={() => onDragEnd("Webhook")}
              draggable
            >
              <MailIcon />
              Webhook
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Update Contact")}
              onDragEnd={() => onDragEnd("Update Contact")}
              draggable
            >
              <LanguageIcon />
              Update Contact
            </button>
          </div>
        </div>
      </div>
      <div className="mt-auto mb-3">
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary m-1 flex-fill"
            onClick={createTool}
          >
            Validate
          </button>
          <button
            type="button"
            className="btn btn-primary m-1 flex-fill"
            onClick={createTool}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-primary m-1 flex-fill"
            onClick={createTool}
          >
            Save & Run
          </button>
        </div>
      </div>
    </aside>
  );
};
