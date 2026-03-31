import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types/Todo";

export default function TodoList() {

    //  Load sparade todos direkt i useState 
    const [todos, setTodos] = useState<Todo[]>(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    const [text, setText] = useState("");




    //  spara i LocalStorage 
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


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


    function editTodo(id: number, newText: string) {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    }

    return (
        <div>
            <div className="flex gap-2 mb-4">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Add a task..."
                />
                <button
                    onClick={addTodo}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Add
                </button>
            </div>

            <ul className="flex flex-col gap-3">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        onEdit={editTodo}
                    />
                ))}
            </ul>
        </div>
    );
}