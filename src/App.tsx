import ControlledCarousel from "./components/UI/Home/ControlledCarousel";
import NavScrollExample from "./components/UI/Header/NavScrollExample";
import Introduction from "./components/UI/Home/Introduction";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <div>
      <NavScrollExample />

      <Introduction />

      <ControlledCarousel />

      <Footer name="Kunegunda Kosek" year={2023} />
    </div>
  );
}

export default App;
