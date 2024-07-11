import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Whychoose from "./components/Whychoose";
import Works from "./components/Works";
import Gettouch from "./components/Gettouch";
import Footer from "./components/Footer";
import Whatwedo from "./components/Whatwedo";

function App() {
  return (
    <>
      <div className="hero_bg d-flex align-items-center flex-column pt-4">
        <Header />
        <Hero />
      </div>
      <Whatwedo />
      <Whychoose />
      <Works />
      <Gettouch />
      <Footer />
    </>
  );
}

export default App;
