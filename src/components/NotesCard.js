import './NotesCard.css'
import { GoArrowDown } from "react-icons/go";
import { IoIosEye } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

export const NotesCard = ({ task, handleClick }) => {
    return (
        <div className="notescard">
            <li className={task.completed ? "completed" : "incomplete"}>
                <span >{task.id}-{task.name}</span>
                <button onClick={() => handleClick(task.id)} className="button delete"> Delete</button>
                <p>  <IoIosEye /> <GoArrowDown /> <IoMdCreate /> <IoMdTrash /></p>
            </li>
        </div>

    )
}