import './NotesCard.css'
export const NotesCard = ({ task, handleClick }) => {
    return (
        <div className="notescard">
            <li className={task.completed ? "completed" : "incomplete"}>
                <span >{task.id}-{task.name}</span>
                <button onClick={() => handleClick(task.id)} className="button delete"> Delete</button>
            </li>
        </div>

    )
}