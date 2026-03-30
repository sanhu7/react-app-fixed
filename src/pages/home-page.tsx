import Card from "../components/Card";

export default function HomePage() {
    return (

        <div className="flex justify-center mt-10 px-4">

            <Card title="Welcome to My React App">
                <p className="text-gray-700">
                    This is the home page of my React + TypeScript project.
                    Use the navigation above to explore the Todo list, Counter, and About page.
                </p>
            </Card>

        </div>
    );
}