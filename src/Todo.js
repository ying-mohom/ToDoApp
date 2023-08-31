import React, { useState } from "react";
import "./ToDo.css";


const AddToDo = () => {
    const [task, setTask] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const [editList, setEditList] = useState();
    const [editTaskText, setEditTaskText] = useState("");

    let addTask = (e) => {
        e.preventDefault();
        setToDoList([...toDoList, { text: task, checked: false }]);
        setTask("");
    };

    let deleteTask = (index) => {
        setToDoList(toDoList.filter((_, i) => i !== index));
    };

    const handleCheckboxChange = (index) => {
        setToDoList(
            toDoList.map((todo, i) =>
                i === index ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };


    const handleFilterClick = (filterType, e) => {
        e.preventDefault();
        if (filterType === "completed") {
            setShowCompleted(true);

        } else {
            setShowCompleted(false);

        }
    };

    const filteredToDoList = showCompleted
        ? toDoList.filter((todo) => todo.checked)
        : toDoList;


    function editTask(index) {
        setEditMode(true);
        setEditList(index);
        setEditTaskText(toDoList[index].text);
    }


    let handleEditTask = (e) => {
        e.preventDefault();
        const updatedToDoList = toDoList.map((todo, index) =>
            index === editList ? { ...todo, text: editTaskText } : todo
        );

        setToDoList(updatedToDoList);
        setEditMode(false);
        setEditList(null);
        setEditTaskText("");
    };


    return (
        <div className="box">
            {isEditMode ? (<form onSubmit={handleEditTask} className="add">
                <input className="addTask"
                    type="text"
                    value={editTaskText}
                    placeholder="Enter task to Do..."
                    onChange={(e) => setEditTaskText(e.target.value)}
                />
                <button className="submit" >Update</button>
            </form>) : (
                <form onSubmit={addTask} className="add">
                    <input className="addTask"
                        type="text"
                        value={task}
                        placeholder="Enter task to Do..."
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button className="submit">Submit</button>
                </form>)}


            {filteredToDoList.map((todo, index) => (
                <div key={index} className="list">
                    <input
                        type="checkbox"
                        checked={todo.checked}
                        onChange={() => handleCheckboxChange(index)}
                    />
                    <h4 style={{ textDecoration: todo.checked ? "line-through" : "none" }}>
                        {todo.text}
                    </h4>
                    <div>
                        <button className="delete" onClick={(e) => deleteTask(index)}>Delete</button>
                        <button
                            className={`edit ${todo.checked ? "disabled-button" : ""}`}
                            onClick={(e) => editTask(index)}
                            disabled={todo.checked}
                        >
                            Edit
                        </button>
                    </div>

                </div>
            ))}

            <div className="">
                <a href="#" onClick={(e) => handleFilterClick("all", e)}>
                    All
                </a>
                <a href="#" onClick={(e) => handleFilterClick("active", e)}>
                    Active
                </a>
                <a href="#" onClick={(e) => handleFilterClick("completed", e)}>
                    Completed
                </a>
            </div>
        </div>
    );
};

export default AddToDo;