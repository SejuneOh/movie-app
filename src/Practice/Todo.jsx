import React from 'react'

export default function Todo() {
  // state
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // event
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos(prev => [todo, ...prev])
    setTodo("");
  }


  // jsx
  return (
    <div className="App">
      <h2>My to do list ({todos.length})</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Wrtite your to do...'
          onChange={onChange}
          value={todo} />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {todos.map((el, idx) => (<li key={idx}>{el}</li>))}
      </ul>
    </div>
  )
}
