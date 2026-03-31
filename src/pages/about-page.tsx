import Card from "../components/Card";

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center gap-6 py-10 px-4">

            <Card title="About This Project" className="w-full max-w-2xl">
                <div className="text-slate-500 text-sm leading-relaxed flex flex-col gap-3">
                    <p>
                        This project was created as part of <strong className="text-slate-700">Mini-project 1</strong>.
                        It demonstrates React, TypeScript, routing and component-based development.
                    </p>
                    <p>
                        The app includes a <strong className="text-slate-700">Todo List</strong> and a <strong className="text-slate-700">Counter</strong> with LocalStorage, multiple pages and reusable components.
                    </p>
                    <p>
                        Built with <strong className="text-slate-700">React 19</strong>, <strong className="text-slate-700">TypeScript</strong>, <strong className="text-slate-700">Vite</strong>, <strong className="text-slate-700">Tailwind CSS v4</strong> and <strong className="text-slate-700">React Router v6</strong>.
                    </p>
                </div>
            </Card>

            <Card title="About the Developer" className="w-full max-w-2xl">
                <p className="text-slate-500 text-sm">
                    👤 <strong className="text-slate-700">Sana</strong> — Front End development student, Mini-project 1.
                </p>
            </Card>

        </div>
    );
}