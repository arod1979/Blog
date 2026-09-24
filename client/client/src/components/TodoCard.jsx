export default function TodoCard({ todo }) {
  return (
    <li className={todo.completed ? "strike-through" : undefined}>
      {todo.title}
    </li>
  );
}
