import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import Settings from "./components/Settings";
import Footer from "./components/Footer";
import ApiPractice from "./components/ApiPractice";
import { DataContext, DataProvider } from "./components/DataContext";

function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState();

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // const setTableData = (d)=>{
  //   setData(d)
  // }
  const editTask = (taskId, newTitle) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <DataProvider value={data}>
      <ThemeProvider value={theme}>
        <div
          className={`${theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-neutral-100 text-gray-800"
            } flex flex-col min-h-screen`}
        >
          <Router>
            <Header />
            <div className="flex-grow">
              
              <Routes>
                <Route path="/" element={<TaskList tasks={tasks} setData={setData} editTask={editTask} removeTask={removeTask} />} />
                <Route path="/add" element={<AddTaskForm addTask={addTask} />} />
                <Route
                  path="/settings"
                  element={<Settings toggleTheme={toggleTheme} />}
                />
              </Routes>
            </div>
            <Footer className="sticky top-[100vh]" />
          </Router>
        </div>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
