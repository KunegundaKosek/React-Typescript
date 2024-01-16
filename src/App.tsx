import NavScrollExample from "./components/UI/Header/NavScrollExample";
import Footer from "./components/UI/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TodoApp from "./components/Projects/Todo/TodoApp";
import Weather from "./components/Projects/Weather/Weather";
import InvestmentCalculator from "./components/InvestmentCalculator/InvestmentCalculator";
import styles from './scss/style.module.scss';
import Timer from "./components/Projects/Timer/Timer";

function App() {
  return (
    <Router>
      <div className={styles.body}>
        <NavScrollExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/calculator" element={<InvestmentCalculator />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>

        <Footer name="Kunegunda Kosek" year={2023} />
      </div>
    </Router>
  );
}

export default App;
