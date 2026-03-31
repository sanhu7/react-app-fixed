import Card from "../components/Card";

export default function AboutPage() {
    return (
        <div className="flex justify-center mt-10 px-4">
            <Card title="About This Project">
                <div className="text-left text-gray-700 leading-relaxed ">
                    <p>
                        This project was created as part of the course assignment <strong>Mini-project 1</strong>.
                        It demonstrates the use of React, TypeScript, React Router DOM, Tailwind CSS and component-based development.
                    </p>

                    <p className="mt-4">
                        The application includes multiple pages, routing, reusable components,
                        stateful logic such as the Counter and Todo List, and persistence using LocalStorage.
                    </p>

                    <p className="mt-4">
                        The goal of the project is to practice structuring a small React application,
                        understanding component communication and building a simple but functional app.
                    </p>
                </div>
            </Card>
        </div>
    );
}
