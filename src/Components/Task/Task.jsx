import React from "react";
import "./task.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Task = ({ task, onDelete, onEditClicked }) => {
  const { title, description, start, end } = task;
  return (
    <div className="Task">
      <div className="time">
        <div className="start">{start}</div>
        <hr />
        <div className="end">{end}</div>
      </div>
      <div className="content">
        <h1 className="heading">{title}</h1>
        <p className="desc">{description}</p>
      </div>
      <div className="Buttons">
        <DeleteIcon
          fontSize="small"
          onClick={() => {
            onDelete(task);
          }}
        />
        <EditIcon
          fontSize="small"
          onClick={() => {
            onEditClicked(task);
          }}
        />
      </div>
    </div>
  );
};

export default Task;
