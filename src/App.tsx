import "./App.scss";
import Header from "./views/Header";
import Hero from "./views/Hero";
import MainFunctionality from "./views/MainFunctionality";
import TipsAndTricks from "./views/TipsAndTricks/Index";
import FAQ from "./views/FAQ";
import Footer from "./views/Footer";
import Pricing from "./views/Pricing";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MainFunctionality />
      <TipsAndTricks />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
