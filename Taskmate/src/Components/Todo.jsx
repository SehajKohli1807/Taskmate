/* eslint-disable react/prop-types */
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Todo({task,toggleComplete,deleteTask,editTask}) {
    function handleclick() {
        console.log("Clicked");
            return toggleComplete(task.id);
    }
    // ()=>{toggleComplete(task.id)}
    return(
        <>
        <div className="Todo-main">
             <p onClick={handleclick} className={task.completed?'completed':""}>{task.task}</p>
            <div className="icons">
                <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTask(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTask(task.id)} />
            </div>
        </div>
        </>
    )
}