import React, { useState } from "react";
import {
  RadioButtonChecked as RadioButtonCheckedIcon,
  Mail as MailIcon,
  Chat as ChatIcon,
  NotificationsActive as NotificationsActiveIcon,
  Pending as PendingIcon,
  MultipleStop as MultipleStopIcon,
  PermContactCalendar as PermContactCalendarIcon,
  PlaylistAdd as PlaylistAddIcon,
  Schedule as ScheduleIcon,
  LabelOutlined as LabelOutlinedIcon,
  Label as LabelIcon,
  MoreHoriz as MoreHorizIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";
import "./Sidebar.css";

const nodeTypes = [
  { label: "Start The Flow", icon: <RadioButtonCheckedIcon /> },
  { label: "Email", icon: <MailIcon /> },
  { label: "SMS", icon: <ChatIcon /> },
  { label: "Notification", icon: <NotificationsActiveIcon /> },
  { label: "Wait", icon: <PendingIcon /> },
  { label: "Decision", icon: <MultipleStopIcon /> },
  { label: "Webhook", icon: <MailIcon /> },
  { label: "Update Contact", icon: <PermContactCalendarIcon /> },
  { label: "Slack Message", icon: <ChatIcon /> },
  { label: "Create Task", icon: <PlaylistAddIcon /> },
  { label: "Schedule Meeting", icon: <ScheduleIcon /> },
  { label: "Add Tag", icon: <LabelOutlinedIcon /> },
  { label: "Remove Task", icon: <LabelIcon /> },
  { label: "End The Flow", icon: <MoreHorizIcon /> },
];

const sourceTypes = [
  { label: "Facebook", icon: <FacebookIcon /> },
  { label: "LinkedIn", icon: <LinkedInIcon /> },
  { label: "Instagram", icon: <InstagramIcon /> },
  { label: "Google", icon: <GoogleIcon /> },
];

const Sidebar = ({ nodes, edges, saveData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNodes = nodeTypes.filter((node) =>
    node.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSources = sourceTypes.filter((source) =>
    source.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="d-flex flex-column px-4 asideNodes" style={{ height: "100vh" }}>
      <div className="container-fluid p-0">
        <input
          type="text"
          className="form-control bg-light"
          placeholder="Search here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <h5 className="text-muted my-3 mt-4">Nodes</h5>
        <div className="row">
          {filteredNodes.map((node) => (
            <div className="col-6 p-1" key={node.label}>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
                onDragStart={(event) => onDragStart(event, node.label)}
                draggable
              >
                {node.icon}
                {node.label}
              </button>
            </div>
          ))}
        </div>
{/* Sources starts */}
        <h5 className="text-muted my-3 mt-4 ">Sources</h5>
        <div className="row">
          {filteredSources.map((source) => (
            <div className="col-6 p-1" key={source.label}>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
                onDragStart={(event) => onDragStart(event, source.label)}
                draggable
              >
                {source.icon}
                {source.label}
              </button>
            </div>
          ))}
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

        {/* <pre>{JSON.stringify({ nodes, edges }, null, 2)}</pre> */}
      </div>
    </aside>
  );
};

export default Sidebar;
