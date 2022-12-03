import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Features/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
