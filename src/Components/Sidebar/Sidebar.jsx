import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PendingIcon from '@mui/icons-material/Pending';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import LanguageIcon from '@mui/icons-material/Language';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="px-3">
      <button type="button" class="btn btn-block my-3 p-2 createToolBtn">
        Create Tool
      </button>

      <button
        type="button"
        class="btn btn-outline-dark btn-sm m-2 px-4 py-2"
        onDragStart={(event) => onDragStart(event, "Send Email")}
        draggable
      >
        <MailIcon /><br />
        Send Email
      </button>
      <button
        type="button"
        class="btn btn-outline-dark btn-sm m-2 px-4 py-2"
        onDragStart={(event) => onDragStart(event, "Send SMS")}
        draggable
      > <ChatIcon /><br />
        Send SMS
      </button>
      <button
        type="button"
        class="btn btn-outline-dark btn-sm m-2 px-4 py-2"
        onDragStart={(event) => onDragStart(event, " Push Notification")}
        draggable
      >
 <NotificationsActiveIcon /><br />
        Push Notification
      </button>

      <button
        type="button"
        class="btn btn-outline-dark btn-sm m-2 px-4 py-2"
        onDragStart={(event) => onDragStart(event, "Wait")}
        draggable
      > <PendingIcon /><br />
        Wait
      </button>
      <button
        type="button"
        class="btn btn-outline-dark btn-sm m-2 px-4 py-2"
        onDragStart={(event) => onDragStart(event, "Decision")}
        draggable
      > <MultipleStopIcon /><br />
        Decision
      </button>
      <button
        type="button"
        class="btn btn-outline-dark btn-sm m-2 px-4 py-2"
        onDragStart={(event) => onDragStart(event, "Webhook")}
        draggable
      > <MailIcon /><br />
        Webhook
      </button>
      <button
        type="button"
        class="btn btn-outline-dark btn-sm m-2 px-4 py-2"
        onDragStart={(event) => onDragStart(event, "Update Contact")}
        draggable
      > <LanguageIcon /><br />
        Update Contact
      </button>

    </aside>
  );
};
