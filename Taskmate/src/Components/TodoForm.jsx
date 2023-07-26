import { useState } from "react"

export default function TodoForm({addTask}) {
    const [inputValue,setInputValue] =useState("");

    function handleChange(event) {
            setInputValue(() => {
                console.log(event.target.value);
                return (event.target.value);
            });
    }

    function handleSubmit(event) {
        event.preventDefault();
        addTask(inputValue);
        setInputValue("");
    }
    return(
        <div className="TodoForm-main">
            <form action="" className="TodoForm" onSubmit={handleSubmit}>
                <input type="text"  className="todo-input" value={inputValue} onChange={handleChange} placeholder="Enter your task"/>
                <button type="submit" className="todo-btn">Enter</button>
            </form>
        </div>
    )
}