import NavScrollExample from "./components/UI/Header/NavScrollExample";
import Home from "./components/UI/Home/Home";
import Footer from "./components/UI/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoApp from "./components/Todo/TodoApp";
import './scss/style.scss';

function App() {
  return (
    <Router>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/todo" element={<Home />} />
        
      </Routes>

      <Footer name="Kunegunda Kosek" year={2023} />
    </Router>
  );
}

export default App;
