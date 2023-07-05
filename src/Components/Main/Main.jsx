import React, { useEffect, useState } from "react";
import "./main.scss";
import Task from "../Task/Task";
import AddTask from "../addTask/AddTask";

const Main = () => {
  const [Tasks, setTasks] = useState([]);

  const [filteredTasks, setFilteredTasks] = useState([]);
  const [search, setSearch] = useState("");
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

  //search
  useEffect(() => {
    if (search == "") {
      setFilteredTasks(Tasks);
    } else {
      const filterArr = Tasks.filter((task) => task.title.includes(search));
      setFilteredTasks(filterArr);
    }
  }, [search]);

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="addT" onClick={() => setAddTask(true)}>
          Add task
        </button>
      </div>
      {addTask && (
        <AddTask onSubmit={onSubmit} onCancel={onCancel} editTask={editTask} />
      )}
      {search == ""
        ? Tasks ||
          Tasks.map((task) => (
            <Task
              task={task}
              onDelete={onDelete}
              onEditClicked={onEditClicked}
            />
          )) ||
          "NO TASK ADDED"
        : (filteredTasks &&
            filteredTasks.map((task) => (
              <Task
                task={task}
                onDelete={onDelete}
                onEditClicked={onEditClicked}
              />
            ))) ||
          "NO MATCH FOUND"}
    </div>
  );
};

export default Main;
