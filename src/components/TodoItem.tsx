import { useState } from "react";
import type { Todo } from "../Types/Todo";

interface Props {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(todo.text);

    function handleSave() {
        if (value.trim() !== "") {
            onEdit(todo.id, value);
            setIsEditing(false);
        }
    }

    return (
        <li className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm border border-gray-200">

            {/* LEFT PART: checkbox + text or input */}
            <div className="flex items-center gap-3">

                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="h-4 w-4"
                />

                {/* EDIT MODE */}
                {isEditing ? (
                    <input
                        className="border px-2 py-1 rounded"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                ) : (
                    <span
                        className={`${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                    >
                        {todo.text}
                    </span>
                )}
            </div>

            {/* RIGHT PART: action buttons */}
            <div className="flex gap-2">

                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="text-green-600 hover:text-green-800"
                        >
                            ✔️
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="text-gray-600 hover:text-gray-800"
                        >
                            ✖️
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-blue-600 hover:text-blue-800"
                        >
                            ✏️
                        </button>

                        <button
                            onClick={() => onDelete(todo.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            ❌
                        </button>
                    </>
                )}

            </div>
        </li>
    );
}
