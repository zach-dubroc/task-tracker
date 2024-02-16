import React from "react";

function TaskCard(props) {
  //time 12h format
  let here = props.time;
  let hours = here.slice(0, 2);
  let minutes = here.slice(2);
  let time = "";
  let ampm = hours < 12 ? "am" : "pm";
  hours = hours % 12;
  time = hours + minutes + ampm;
  time == "0am" ? (time = "") : (time = hours + minutes + ampm);

  const [done, setDone] = React.useState(false);
  const [collapse, setCollapse] = React.useState("visible");

  function DeleteTask() {
    setCollapse((prevDone) => "collapse");
  }

  function StrikeTask() {
    setDone((prev) => !prev);
  }

  return (
    <div className={`row ${collapse} taskCard text-start align-items-center`}>
      <div className="col-sm-12">
        <h1>{done ? <s>{props.task}</s> : props.task}</h1>
      </div>
      <div className="row align-items-top">
        <div className="col-sm-4">
          <h6>{done ? <s>{time}</s> : time}</h6>
        </div>
        <div className="col-sm-8">
          <p>{done ? <s>{props.notes}</s> : props.notes}</p>
        </div>
        <div className="col-sm-12">
          {!done ? (
            <input
              class="btn btn-dark btn-sm"
              onClick={StrikeTask}
              type="button"
              value="✓"
            />
          ) : (
            <input
              class="btn btn-dark btn-sm"
              onClick={StrikeTask}
              type="button"
              value="do again"
            />
          )}
          <input
            class="btn btn-dark btn-sm"
            onClick={DeleteTask}
            type="button"
            value="delete"
          />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
