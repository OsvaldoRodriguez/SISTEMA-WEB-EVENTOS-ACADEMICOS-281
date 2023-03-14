import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// ya no  le manda nada, pero necesitamos el arreglo y demas
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // lo que quiero utilizar
  const { createTask } = useContext(TaskContext); // aqui ya esta el arreglo
  // console.log(valor);

  const handleSubmit = (e) => {
    e.preventDefault();
    // creando como objeto
    // const newTask = { title: title };
    // console.log(newTask);
    // el problema que hay es con el id, como controlar eso, para esto
    // solo  se enviara el titulo de la nueva tarea y en App, como se tiene acceso al
    // arreglo se podra controlar el id con el tamaño del arreglo
    // props.createTask(newTask);
    createTask({ title, description });

    // aqui se esta limpiando los state
    setTitle("");
    setDescription("");

    // y ypara limpiar el form (frontEnd se usa el valor de los state)
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus // para que directo apareza el cursor
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>

        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar </button>
      </form>
    </div>
  );
}

export default TaskForm;
