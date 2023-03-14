import "./App.css";
import AdvancedStatistics from "./Components/AdvancedStatistics/AdvancedStatistics";
import BeforeFooter from "./Components/BeforeFooter/BeforeFooter";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import ShortenUrl from "./Components/ShortenUrl/ShortenUrl";

function App() {
  return (
    <div className="App">
      <Hero />
      <ShortenUrl />
      <AdvancedStatistics />
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default App;
