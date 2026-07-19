import { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";

function ToDoList() {
  const [toDoListTitle, setToDoListTitle] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [isDuplicate, setIsDuplicate] = useState(false);

  function handleSubmit() {
    setToDoList((prev) => [...prev, toDoListTitle]);
    setToDoListTitle("");
  }

  function handleDelete(index) {
    setToDoList((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="mt-30">
        <h1 className="text-3xl font-medium mb-4">To Do List</h1>
        <div className="flex flex-row items-center gap-10">
          <input
            type="text"
            placeholder="Enter to do task."
            className="w-80 mr-4 py-2 px04 focus:outline-none focus:ring-0 border-b border-gray-400"
            onChange={(e) => {
              setToDoListTitle(e.target.value);
              if (toDoList.includes(e.target.value)) setIsDuplicate(true);
              else setIsDuplicate(false);
            }}
            value={toDoListTitle}
          />
          {isDuplicate ? (
            <>
              <button className="bg-gray-500/30 text-white rounded-sm py-2 px-4 disabled">
                Submit
              </button>
              <p className="text-red-800">Entry cannot be duplicated.</p>
            </>
          ) : (
            <button
              className="bg-sky-500 text-white rounded-sm py-2 px-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>
      </div>
      <div className="mt-10 mb-10 w-full h-full flex-wrap gap-2 overflow-scroll">
        {toDoList.length === 0 ? (
          <div className="w-full h-full flex justify-center items-center">
            <p>No tasks scheduled.</p>
          </div>
        ) : (
          <div className="m-0 p-0 w-fit h-fit flex flex-row flex-wrap justify-start gap-x-10 gap-y-10">
            {toDoList.map((toDo, index) => (
              <ToDoItem title={toDo} deleteHandler={handleDelete} id={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
