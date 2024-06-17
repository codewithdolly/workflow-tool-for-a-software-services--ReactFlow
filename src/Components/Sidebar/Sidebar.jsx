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

const Sidebar = ({ nodes, edges, saveData }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  console.log("nodes", nodes);

  return (
    <aside
      className="d-flex flex-column px-4 border shadow"
      style={{ height: "100vh" }}
    >
      <div className="container-fluid p-0">
        <h5>Nodes</h5>
        <div className="row">
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Start The Flow")}
              draggable
            >
              <RadioButtonCheckedIcon />
              Start The Flow
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Email")}
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
              draggable
            >
              <PermContactCalendarIcon />
              Update Contact
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Slack Message")}
              draggable
            >
              <ChatIcon />
              Slack Message
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Create Task")}
              draggable
            >
              <PlaylistAddIcon />
              Create Task
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Schedule Meeting")}
              draggable
            >
              <ScheduleIcon />
              Schedule Meeting
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Add Tag")}
              draggable
            >
              <LabelOutlinedIcon />
              Add Tag
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "Create Task")}
              draggable
            >
              <LabelIcon />
              Remove Task
            </button>
          </div>
          <div className="col-6 p-1">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm d-flex flex-column align-items-center justify-content-center w-100 h-100"
              onDragStart={(event) => onDragStart(event, "End The Flow")}
              draggable
            >
              <MoreHorizIcon />
              End The Flow
            </button>
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
