import React from "react";

//guia props
// TaskTitle = titulo da task

const Task = (props) => {
  let [checked, setChecked] = useState(false);

  function checkTesk(event) {
    setChecked(event.target.checked);
  }

  return (
    <div>
      <div>nome</div>
      <input type="checkbox" checked={checked} onChange={checkTesk} />
    </div>
  );
};

export default Task;
