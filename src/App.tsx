import "./App.scss";
import Header from "./views/Header";
import Hero from "./views/Hero";
import MainFunctionality from "./views/MainFunctionality";
import TipsAndTricks from "./views/TipsAndTricks/Index";
import MockupContent from "./views/MockupContent";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MainFunctionality />
      <TipsAndTricks />
      <MockupContent />
    </>
  );
}

export default App;
