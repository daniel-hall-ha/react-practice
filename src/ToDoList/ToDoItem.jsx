import { useState } from "react";
import AddTask from "./AddTask.jsx";
import Task from "./Task.jsx"

function ToDoItem(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  const ModalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const TasksHandler = () => {
    setTaskList(prev => [...prev, task])
  };

  return (
    <div
      className="p-5 w-100 h-100 shadow-sm self-start flex flex-col justify-between text-xs"
      id={props.id}
    >
      <h1 className="text-base font-medium">{props.title}</h1>
      <div className="flex flex-2 my-4 overflow-y-scroll">
        <ul className="flex flex-col w-full h-full list-none gap-1">
          {
            taskList.map(task_item => <Task name={task_item}/>)
          }
        </ul>
      </div>
      <div className="w-full h-fit flex flex-row justify-end gap-5">
        <button
          className="px-4 py-2 rounded-sm bg-sky-500 text-white text-2xs"
          onClick={() => { 
            ModalHandler();
          }}
        >
          Add Item
        </button>
        <button
          className="px-4 py-2 rounded-sm bg-white text-red-700 border border-red-700"
          onClick={() => {
            props.deleteHandler(props.id);
          }}
        >
          Delete Task
        </button>
        <div />
      </div>
      {modalOpen && (
        <AddTask
          toDoTitle={props.title}
          setTask={setTask}
          ModalHandler={ModalHandler}
          TasksHandler={TasksHandler}
        />
      )}
    </div>
  );
}

export default ToDoItem;
