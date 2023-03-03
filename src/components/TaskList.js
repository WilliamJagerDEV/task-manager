import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTasks, deleteTask } from '../Task'

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        const tasks = await getTasks()
            .catch(err => {
                console.log('Error', err)
            })
        console.log('Sucesso', tasks)
        setTasks(tasks.data)
    }

    const handleDelete = async (id) => {
        await deleteTask(id)
        fetchTasks()
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <div>
            <h1>Task Manager</h1>
            <Link to="/tasks/new">New Task</Link>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((task) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.completed ? 'Yes' : 'No'}</td>
                            <td>
                                <Link to={`/tasks/${task.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(task.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList