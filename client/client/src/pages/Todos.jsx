import { getTodos } from "../../../../api/todos";
import TodoCard from "../components/TodoCard";
import { useLoaderData } from "react-router";

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todosRoute = {
  loader,
  element: <Todos />,
};

export default function Todos() {
  const todos = useLoaderData();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}
