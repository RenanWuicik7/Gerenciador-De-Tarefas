import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask';
import Header from './components/Header';
import { BrowserRouter as BRowter, Route, Routes } from 'react-router-dom';
import TaskDetails from './components/Task-Details';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskClick = (taskId) => {
    const newTaks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTaks);
  };

  const handleTaskDelete = (taskId) => {
    const newTaks = tasks.filter(task => task.id !== taskId);
    setTasks(newTaks);
  };

  const handleTaskAdition = (taskTitle) => {
    const newTaks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }
    ];

    setTasks(newTaks);
  };

  const exibirTarefas = () => tasks.length === 0;

  return (
    <BRowter>
      <div className='container'>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Header text="Minhas Tarefas:" />
                <AddTask adicionarNova={handleTaskAdition} />
                {exibirTarefas() ? <div className='aviso-inicial'>Sem tarefas por aqui!</div> :
                  <div className='container-tasks'>
                    <Tasks
                      tasks={tasks}
                      ativarTarefa={handleTaskClick}
                      handleTaskDelete={handleTaskDelete}
                    />
                  </div>}
              </>
            }
          />
          <Route
            path="/:taskTitle"
            exact
            element={
              <>
                <Header text="Descrição:" />
                <TaskDetails />
              </>
            }
          />
        </Routes>
      </div>
    </BRowter>
  );
};

export default App;