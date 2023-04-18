import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetchApi()
      setTasks(res)
    }
    getData()
  }, [])

  const fetchApi = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/tasks/")
    const data = await response.json()
    return data
  }

  const onDelete = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/task-delete/${id}`, {
      method: "DELETE"
    })
    setTasks(tasks.filter((task) => (task.id !== id)))
  }

  const fetchTask = async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/api/task/${id}`)
    const data = await response.json()
    return data
  }

  const onToggle = async (id) => {
    const taskToggle = await fetchTask(id)
    const updTask = { ...taskToggle, reminder: !taskToggle.reminder }
    const response = await fetch(`http://127.0.0.1:8000/api/task-update/${id}/`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updTask)
    })
    const data = response.json()

    console.log(data)

    setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: data.reminder} : task)))
  }

  const addTask = async (task) => {
    const response = await fetch("http://127.0.0.1:8000/api/task-create/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    })
    const data = await response.json()

    console.log(data)
    setTasks([...tasks, data])
  }

  return (
    <div className="container">
        {showForm && <AddTask addTask={addTask}/>}
        <Header showForm={showForm} toggleForm={() => setShowForm(!showForm)} />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} /> : "No task to show"}
    </div>
  );
}

export default App;
