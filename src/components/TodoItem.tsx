import { useState } from "react";
import { Todo } from "../types/Todo";
import { FaPencilAlt, FaTimes, FaCheck } from "react-icons/fa";

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
        <li className="flex items-center justify-between bg-slate-50 px-4 py-3 rounded-xl gap-3">


            <div className="flex items-center gap-3 flex-1">

                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="w-4 h-4 accent-teal-600 cursor-pointer shrink-0"
                />

                {isEditing ? (
                    <input
                        autoFocus
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSave()}
                        className="flex-1 border border-blue-300 rounded-lg px-3 py-1 text-sm outline-none"
                    />
                ) : (
                    <span className={`text-sm flex-1 ${todo.completed
                        ? "line-through text-slate-300"
                        : "text-slate-700"
                        }`}>
                        {todo.text}
                    </span>
                )}
            </div>

            <div className="flex gap-2 shrink-0">

                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="text-teal-500 hover:text-teal-700 transition-colors"
                        >
                            <FaCheck />
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <FaTimes />
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-orange-400 hover:text-orange-600 transition-colors"
                        >
                            <FaPencilAlt />
                        </button>
                        <button
                            onClick={() => onDelete(todo.id)}
                            className="text-red-400 hover:text-red-600 transition-colors"
                        >
                            <FaTimes />
                        </button>
                    </>
                )}

            </div>
        </li>
    );
}