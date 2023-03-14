import { useContext } from "react";
import { TaskContext } from "../context/TaskContext"; // solo queiero  el nombre del contexto

function TaskCard(props) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{props.task.title}</h1>
      <p className="text-gray-500 text-sm">{props.task.description}</p>
      {/* cuando se llama a una función f(x) con  parametros al momento de crear la e
      etiqueta ya ejecuta la funcioni, pero cuando no tiene parametros f, entonces
      ya no se ejecuta ese rato, sino cuadno sucede el evento, otra forma es ponerlo en funcioni */}
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(props.task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
