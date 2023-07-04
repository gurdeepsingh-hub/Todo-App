import React, { useState } from "react";
import "./addtask.scss";

const AddTask = ({ onSubmit, onCancel, editTask }) => {
  const [data, setData] = useState(editTask || []);
  const DataHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value, id: Math.random() };
    });
  };
  return (
    <div className="addtask">
      <div className="cancel" onClick={onCancel}>
        x
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(data, editTask);
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Name of task"
          required
          defaultValue={editTask ? editTask.title : ""}
          onChange={DataHandler}
          maxLength={18}
        />
        <input
          type="text"
          name="description"
          required
          onChange={DataHandler}
          defaultValue={editTask ? editTask.description : ""}
          placeholder="Description"
          maxLength={50}
        />
        <div className="time">
          <input
            type="time"
            name="start"
            placeholder="Start"
            required
            defaultValue={editTask ? editTask.start : ""}
            onChange={DataHandler}
            max={data.end}
          />
          <input
            type="time"
            name="end"
            placeholder="End"
            required
            defaultValue={editTask ? editTask.end : ""}
            onChange={DataHandler}
            min={data.start}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTask;
