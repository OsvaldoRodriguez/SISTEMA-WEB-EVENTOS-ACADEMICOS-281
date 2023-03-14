// el context de react // llamado apicontext
import { createContext } from "react";
import { tasks as data } from "../data/tasks";
import { useState, useEffect } from "react";

// nombre del contexto, este almacena los datos
export const TaskContext = createContext();

// la etiqueta se llama TaskContextProvider, este componente engloba a todos los otros
// componentes
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      { title: task.title, id: tasks.length, description: task.description },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => !(task.id === taskId)));
  }

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    // ya se creo el super componenetee
    // es una forma de exportar los valoes del contexto
    <TaskContext.Provider
      value={{
        tasks: tasks,
        deleteTask: deleteTask,
        createTask: createTask,
      }}
    >
      {props.children}
      {/* // es como  decir que iran mas componenete */}
    </TaskContext.Provider>
  );
}
