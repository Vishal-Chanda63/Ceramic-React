import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Whychoose from "./components/Whychoose";

function App() {
  return (
    <>
      <div className="hero_bg d-flex align-items-center flex-column pt-4">
        <Header />
        <Hero />
      </div>
      <Whychoose />
      {/* <Footer /> */}
    </>
  );
}

export default App;
