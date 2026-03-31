import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PagesLayout from "./layouts/PagesLayout";

import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import TodoPage from "./pages/Todo-page";
import CounterPage from "./pages/Counter-page";
import NotFoundPage from "./pages/notFound-page";

function App() {
  return (
    <Router>

      <Routes>

        <Route element={<PagesLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />

      </Routes>

    </Router>
  );
}

export default App;
