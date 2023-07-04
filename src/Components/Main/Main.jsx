import React, { useState } from "react";
import "./main.scss";
import Task from "../Task/Task";
import AddTask from "../addTask/AddTask";

const Main = () => {
  const [Tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const [editTask, setEditTask] = useState(null);

  //ADDTASK FUNCTIONS
  const onSubmit = (newTask, editTask) => {
    console.log(newTask, editTask);
    editTask == null && setTasks((prevTasks) => [...prevTasks, newTask]);
    if (editTask != null) {
      const copy = Tasks.filter((task) => task.id != editTask.id);
      setTasks([...copy, newTask]);
    }
    setAddTask(false);
    setEditTask(null);
  };
  const onCancel = () => {
    setEditTask(null);
    setAddTask(false);
  };

  //TASK FUNCTIONS
  const onDelete = (task) => {
    const newTasks = Tasks.filter((item) => task.id != item.id);
    setTasks([...newTasks]);
  };
  const onEditClicked = (task) => {
    setEditTask(task);
    setAddTask(true);
  };

  return (
    <div className="container">
      <div className="search">
        <input type="text" />
        <button className="addT" onClick={() => setAddTask(true)}>
          Add task
        </button>
      </div>
      {addTask && (
        <AddTask onSubmit={onSubmit} onCancel={onCancel} editTask={editTask} />
      )}
      {Tasks &&
        Tasks.map((task) => (
          <Task task={task} onDelete={onDelete} onEditClicked={onEditClicked} />
        ))}
    </div>
  );
};

export default Main;
