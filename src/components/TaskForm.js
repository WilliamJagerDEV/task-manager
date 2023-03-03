import { useState, useEffect } from 'react'
import { useNavigate, useParams, redirect } from 'react-router-dom'
import { getTask, createTask, updateTask } from '../Task'

const TaskForm = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [task, setTask] = useState({ title: '', description: '', completed: false })

    const fetchTask = async () => {
        const task = await getTask(id)
        setTask(task.data)
    }

    useEffect(() => {
        if (id) {
            fetchTask()
        }
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === 'completed') {
            setTask((prevState) => ({ ...prevState, [name]: !task.completed }))
            return;
        }
        setTask((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const body = { task: task }
        if (id) {
            await updateTask(id, body)
        } else {
            await createTask(body)
        }
        navigate("/");
    }

    return (
        <div>
            <h1>{id ? 'Edit Task' : 'New Task'}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <br />
                    <input type="text" name="title" value={task.title} onChange={handleChange} />
                </label>
                <br />
                <br />
                <label>
                    Description:
                    <br />
                    <textarea name="description" value={task.description} onChange={handleChange}></textarea>
                </label>
                <br />
                <label>
                    Completed:
                    <input type="checkbox" name="completed" checked={task.completed} onChange={handleChange} />
                </label>
                <br />
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default TaskForm