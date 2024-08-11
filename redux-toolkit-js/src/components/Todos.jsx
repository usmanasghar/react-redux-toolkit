import { useSelector } from "react-redux";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log("Todos ", todos);
  
  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}
