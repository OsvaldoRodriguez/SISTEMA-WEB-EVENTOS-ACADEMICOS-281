// es  con llaves porque es solo export no es export default

import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// console.log(tasks);

// en este caso en el ejemplo el arreglo de tarea estaba en task list el cual es hermano
// de TaskForm => no puede accder al form, para eso el arreglo se lleva a App y se manda
// como parametro a TaskList
// siempre se manda el parametro props
function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center"> No hay tarea aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2" > 
      {tasks.map((task, i) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}
export default TaskList;
