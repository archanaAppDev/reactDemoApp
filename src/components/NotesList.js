import { useState } from 'react';
import { NotesCard } from './NotesCard';
import { BoxCard } from './BoxCard';

export const NotesList = () => {

  const [tasks, setTask] = useState([
    { id: 1012, name: "Add new item", completed: true },
    { id: 2023, name: "Update the dashboard", completed: false },
    { id: 3045, name: "Create home screen", completed: true }
  ]);
  const [isVisible, setVisibility] = useState(true);

  function handleClick(id) {
    setTask(tasks.filter(task => task.id !== id));
  }
  return (
    <section className="notescard">
      <ul className="box fitScreen">
        <button onClick={() => setVisibility(!isVisible)}>toggle</button>
        {isVisible && tasks.map((task) => (
          <NotesCard key={task.id} task={task} handleClick={handleClick} />
        ))

        }
      </ul>
      {/* <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="discption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a repudiandae provident asperiores. Nihil ipsam, sequi nisi laborum soluta doloremque accusantium laboriosam temporibus mollitia quo obcaecati praesentium deserunt aspernatur corporis. </p>
      </BoxCard>
      <BoxCard result="alert">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="discption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel nulla aliquid, veritatis veniam voluptas harum praesentium numquam, rerum ab consequuntur consectetur culpa error! Excepturi nulla voluptates numquam iusto dolore. </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="discption">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, facilis temporibus saepe corporis cum maxime asperiores est reiciendis consequuntur nesciunt, itaque hic architecto qui officia dignissimos, accusantium debitis quam. Autem?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, earum!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, earum!</p>
      </BoxCard> */}
    </section>

  )
}
