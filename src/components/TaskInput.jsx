import React from "react";
import TaskCard from "./Task";

function TaskInput() {
  let counter = 0;
  const [taskData, setTaskData] = React.useState({
    task: "",
    notes: "",
    time: "",
  });

  const [taskList, setTaskList] = React.useState([]);

  function handleChange() {
    const { name, value } = event.target;
    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (taskData.task == "") {
      alert("enter a task please");
      return;
    }
    setTaskList((prev) => [...prev, taskData]);

    setTaskData({
      task: "",
      notes: "",
      time: "",
    });
  }

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-sm-8">
        <div className="row todoBody">
          <div className="col-sm-6 inputs">
            <form className="taskForm" onSubmit={handleSubmit}>
              <div className="row">
                <label htmlFor="task">task</label>
                <br />
                <input
                  type="text"
                  placeholder="add task"
                  name="task"
                  id="task"
                  value={taskData.task}
                  onChange={handleChange}
                />
              </div>
              {/* maybe change to textare */}
              <div className="row">
                <label htmlFor="task">notes</label>
                <br />
                <input
                  type="text"
                  placeholder="add notes"
                  name="notes"
                  id="notes"
                  value={taskData.notes}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <label htmlFor="time">time</label>
                  <br />
                  <input
                    type="time"
                    name="time"
                    id="time"
                    value={taskData.time}
                    onChange={handleChange}
                  />

                  <button
                    class="btn btn-dark btn-sm align-items-center"
                    onClick={handleSubmit}
                  >
                    add
                  </button>
                </div>
              </div>
              <br />
            </form>
          </div>

          <div className="col-sm-6">
            {taskList.map((task) => {
              return (
                <TaskCard
                  task={task.task}
                  notes={`-${task.notes}-`}
                  time={task.time}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskInput;
