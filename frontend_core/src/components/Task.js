const Task = ({ task, onDelete, onToggle }) => {

  return (

    <div className={`task ${task.reminder ? "reminder": ""}`} onDoubleClick={() => onToggle(task.id)} >

      <h3>{task.title} <button className="btn" style={{ border: "none", backgroundColor: "transparent", fontWeight: "700", color: "red"}} onClick={() => onDelete(task.id)}>X</button></h3>
      <p>{task.time}</p>

    </div>

  )
}

export default Task
