import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PendingIcon from "@mui/icons-material/Pending";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LabelIcon from "@mui/icons-material/Label";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


const Sidebar = ({ nodes, edges, saveData }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  // Node Variables
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

  return (
    <aside
      className="d-flex flex-column px-4 border shadow"
      style={{ height: "100vh" }}
    >
      {/* Create Nodes */}
      <div className="container-fluid p-0">
        <h5 className="text-muted p-2">Nodes</h5>
        <div className="row">
          {nodeTypes.map((node, index) => (
            <div key={index} className="col-6 p-1">
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
        <div className="row">
          <h5 className="text-muted p-2 mt-2">Sources</h5>
          <div className="row">
        {sourceTypes.map((source, index) => (
          <div key={index} className="col-6 p-1">
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
        </div>
        {/* Save Buttons at bottom */}
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
