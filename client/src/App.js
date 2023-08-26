import './App.css';
import { useState } from 'react';
import ToDoList from './components/ToDoList';

function App() {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const [showList, setShowList] = useState(false);

  function saveToDo(event) {
    event.preventDefault();

    fetch('/api/todo', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, comment }),
    })
      .catch((error) => {
        alert('Error while saving todo');
        console.error(error)
      });

    setTitle('');
    setComment('');
  }


  return (
    <div className="app">
      <form onSubmit={saveToDo}>
        <label>Title</label>
        <input type="text" value={title} placeholder="Enter a task" onChange={(event) => setTitle(event.target.value)} />
        <label>Comment</label>
        <input type="text" value={comment} placeholder="Enter a description" onChange={(event) => setComment(event.target.value)} />
        <button type="submit">Save</button>
      </form>
      <button onClick={() => setShowList((status) => !status)} type="button">{showList ? "Hide" : "Show"} a list</button>
      {showList ? <ToDoList /> : <p>List is hiding</p>}
    </div>
  );
}

export default App;
