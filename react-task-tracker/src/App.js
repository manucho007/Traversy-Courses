import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Data available in the db.json file
// const tasksInitial = [
//   {
//     id: 1,
//     text: 'Doctors Appointment',
//     day: 'Feb 5th at 2:30pm',
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting at School',
//     day: 'Feb 6th at 1:30pm',
//     reminder: true,
//   },
// ];

const App = () => {
  const [tasks, setTasks] = useState([]);
  // Toggle Add Task
  const [showAddTask, SetShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch tasks from DB (Json Server)
  const fetchTasks = async () => {
    const { data } = await axios.get('http://localhost:5000/tasks');
    // console.log(data);
    return data;
  };
  // Fetch single task from DB (Json Server)
  const fetchTask = async (id) => {
    const { data } = await axios.get(`http://localhost:5000/tasks/${id}`);
    // console.log(data);
    return data;
  };

  // Add task
  const addTask = async (task) => {
    const { data } = await axios.post(`http://localhost:5000/tasks/`, task);
    setTasks([...tasks, data]);
  };

  // Delete task
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const { data } = await axios.put(
      `http://localhost:5000/tasks/${id}`,
      updatedTask
    );
    // console.log(data);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  return (
    <Router>
      <div className='container'>
        <Header onAdd={() => SetShowAddTask((c) => !c)} showAdd={showAddTask} />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No tasks to show'
              )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
