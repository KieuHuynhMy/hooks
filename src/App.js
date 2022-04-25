import { useState, useEffect } from "react";
import AddNewTodo from "./component/AddNewTodo";
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn react router" },
    { id: 2, text: "Learn react portal" },
    { id: 3, text: "Learn react consumer, contextType" },
  ]);

  const [count, setCount] = useState(0);

  const addTodo = (text) => {
    // setTodos([...todos, { id: Math.random(), text: "Learn hook" }]);
    setTodos([...todos, { id: Math.random(), text }]);
  };

  useEffect(() => {
    console.log("use effect", todos);
  }, [todos]);

  useEffect(() => {
    console.log("use effect", count);
  }, [count]);

  return (
    <div className="App">
      <h1>Todo Lists</h1>
      {todos.map((todo) => (
        <ul>
          <li key={todo.id}>{todo.text}</li>
        </ul>
      ))}
      {/* <button onClick={addTodo}>Add</button> */}
      <AddNewTodo addTodo={addTodo} />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default App;
