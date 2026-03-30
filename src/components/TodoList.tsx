import { useState } from "react";
import TodoItem from "./TodoItem";
import type { Todo } from "../types/Todo";

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [text, setText] = useState("");

    function addTodo() {
        if (text.trim() === "") return;

        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setText("");
    }

    function toggleTodo(id: number) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function deleteTodo(id: number) {
        setTodos(todos.filter((t) => t.id !== id));
    }

    return (
        <section style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h1>Todo List</h1>

            <div className="flex gap-2">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add todo..."
                />
                <button onClick={addTodo}>Add</button>
            </div>

            <ul className="mt-3 flex flex-col gap-2">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </ul>
        </section>
    );
}