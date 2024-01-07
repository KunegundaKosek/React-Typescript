import NavScrollExample from "./components/UI/Header/NavScrollExample";
import Footer from "./components/UI/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TodoApp from "./components/Todo/TodoApp";
import Weather from "./components/Weather/Weather";
import InvestmentCalculator from "./components/InvestmentCalculator/InvestmentCalculator";

function App() {
  return (
    <Router>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/calculator" element={<InvestmentCalculator />} />
      </Routes>

      <Footer name="Kunegunda Kosek" year={2023} />
    </Router>
  );
}

export default App;
