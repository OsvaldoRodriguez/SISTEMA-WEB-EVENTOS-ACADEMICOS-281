import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  // cuando se crear el componenete, el tasks no existe, asi que para evitar esos errores cuando
  // se cree el componente recien asiganmos tasks por eso es usa el useEffect
  // useEffect(() => {
  //   setTasks(data);
  // }, []);

  // para adicionar elementos a un array, no se hace directo se crea una función eso se enviar
  // a TaskForm, en TaskForm se actualiza eso y retorna a App y recien  se actualiza el array
  // es decir no se puede mandar el array como parametro

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
