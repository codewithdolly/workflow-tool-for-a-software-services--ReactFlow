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
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Sidebar.css";
import { IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SendIcon from "@mui/icons-material/Send";
import PlaylistRemoveOutlinedIcon from "@mui/icons-material/PlaylistRemoveOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import LabelIcon from "@mui/icons-material/Label";
import Logo from "../../../public/workflow logo.png";

const nodeTypes = [
  { id: 1, data: { label: "Start", icon: <RadioButtonCheckedIcon /> } },
  { id: 2, data: { label: "Email", icon: <MailIcon /> } },
  { id: 3, data: { label: "SMS", icon: <ChatIcon /> } },
  { id: 4, data: { label: "Notification", icon: <NotificationsActiveIcon /> } },
  { id: 5, data: { label: "Wait", icon: <PendingIcon /> } },
  { id: 6, data: { label: "Decision", icon: <MultipleStopIcon /> } },
  { id: 7, data: { label: "Webhook", icon: <MailIcon /> } },
  { id: 8, data: { label: "Update Contact", icon: <PermContactCalendarIcon /> } },
  { id: 9, data: { label: "Schedule Meeting", icon: <ScheduleIcon /> } },
  { id: 10, data: { label: "Slack Message", icon: <SendIcon /> } },
  { id: 11, data: { label: "Create Task", icon: <PlaylistAddIcon /> } },
  { id: 12, data: { label: "Remove Task", icon: <PlaylistRemoveOutlinedIcon /> } },
  { id: 13, data: { label: "Add Tag", icon: <LabelOutlinedIcon /> } },
  { id: 14, data: { label: "Remove Tag", icon: <LabelIcon /> } },
  { id: 15, data: { label: "Accept", icon: <CheckCircleOutlineIcon /> } },
  { id: 16, data: { label: "Reject", icon: <CancelOutlinedIcon /> } },
  { id: 17, data: { label: "End", icon: <DoneAllIcon /> } },
];

const sourceTypes = [
  { id: 18, data: { label: "Facebook", icon: <FacebookIcon /> } },
  { id: 19, data: { label: "LinkedIn", icon: <LinkedInIcon /> } },
  { id: 20, data: { label: "Instagram", icon: <InstagramIcon /> } },
  { id: 21, data: { label: "Google", icon: <GoogleIcon /> } },
];

const Sidebar = ({ nodes, edges, saveData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNodes, setShowNodes] = useState(true);
  const [showSources, setShowSources] = useState(true);

  const filteredNodes = nodeTypes.filter((node) =>
    node.data.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSources = sourceTypes.filter((source) =>
    source.data.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onDragStart = (event, nodeData) => {
    event.dataTransfer.setData("application/reactflow", JSON.stringify(nodeData));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside
      className="d-flex flex-column px-4 asideNodes"
      style={{ height: "100vh" }}
    >
      <div className="container-fluid ">
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
              aria-label="delete"
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
                    onDragStart={(event) => onDragStart(event, node.data.label)}
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
              aria-label="sources"
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
                    onDragStart={(event) => onDragStart(event, source.data.label)}
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
