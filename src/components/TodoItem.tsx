import type { Todo } from "../types/Todo";

interface Props {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
    return (
        <li className="flex items-center gap-3">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />

            <span
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                }}
            >
                {todo.text}
            </span>

            <button onClick={() => onDelete(todo.id)} style={{ color: "red" }}>
                ❌
            </button>
        </li>
    );
}
