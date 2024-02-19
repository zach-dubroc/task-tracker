import React from "react";

function TaskCard(props) {
  //24hr -> 12h (12-1 machine broke)
  let here = props.time;
  let hours = here.slice(0, 2);
  let minutes = here.slice(2);
  let time = "";
  let ampm = hours < 12 ? "am" : "pm";
  hours = hours % 12;
  hours == 0 && minutes != 0 ? (hours = 12) : (hours = hours % 12);
  time = hours + minutes + ampm;
  time == "0am" ? (time = "") : (time = hours + minutes + ampm);
  console.log(hours);

  const [done, setDone] = React.useState(false);
  const [collapse, setCollapse] = React.useState("visible");

  function DeleteTask() {
    setCollapse((prevDone) => "collapse");
  }

  function StrikeTask() {
    setDone((prev) => !prev);
  }

  return (
    <div
      className={`row ${collapse} taskCard text-start align-items-center border-dark border-bottom`}
    >
      <div className="col-sm-12">
        <h1>{done ? <s>{props.task}</s> : props.task}</h1>
      </div>
      <div className="row align-items-top">
        <div className="col-sm-4">
          <h6>{done ? <s>{time}</s> : time}</h6>
        </div>

        <div className="col-sm-12 d-flex justify-content-start">
          <br />
          <p>{done ? <s>{props.notes}</s> : props.notes}</p>
        </div>
        <div className="col-sm-12 text-end">
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
            value="X"
          />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
