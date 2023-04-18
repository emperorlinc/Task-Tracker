import { useState } from 'react';

const AddTask = ({addTask}) => {

  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!title) {
      alert("Please add task")
      return
    }

    addTask({ title, time, reminder})

    setTitle("")
    setTime("")
    setReminder(false)
  }

  return (

    <form className="add-form" onSubmit={onSubmit}>

      <div className="form-control">
        <label>Task</label>
        <input type="text" name="title" placeholder="Set task" value={title} onChange={(e) => setTitle(e.target.value)} autoComplete="off"/>
      </div>

      <div className="form-control">
        <label>Time</label>
        <input type="text" name="title" placeholder="Set time" value={time} onChange={(e) => setTime(e.target.value)} autoComplete="off"/>
      </div>

      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input type="checkbox" name="title" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input className="btn btn-block" type="submit" value="Save task"/ >

    </form>
  )
}

export default AddTask
