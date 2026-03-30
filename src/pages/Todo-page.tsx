import TodoList from "../components/TodoList";

export default function TodoPage() {
  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          ✏️ Todo List
        </h1>

        <TodoList />
      </div>
    </div>
  );
}