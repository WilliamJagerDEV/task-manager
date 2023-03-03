import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Switch from 'react-switch'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TaskList/>} />
        <Route exact path="/tasks/new" element={<TaskForm />} />
        <Route exact path="/tasks/:id" element={<TaskForm />} />
      </Routes>
    </Router>
  )
}

export default App