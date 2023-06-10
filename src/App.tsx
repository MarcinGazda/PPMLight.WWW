import "./App.scss";
import Header from "./views/Header";
import Hero from "./views/Hero";
import MainFunctionality from "./views/MainFunctionality";
import TipsAndTricks from "./views/TipsAndTricks/Index";
import CaseStudies from "./views/CaseStudies";
import Footer from "./views/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <MainFunctionality />
      <TipsAndTricks />
      <CaseStudies />
      <Footer />
    </>
  );
}

export default App;
