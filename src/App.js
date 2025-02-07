import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Whychoose from "./components/Whychoose";
import Works from "./components/Works";
import Gettouch from "./components/Gettouch";
import Footer from "./components/Footer";
import Whatwedo from "./components/Whatwedo";
import Ourblog from "./components/Ourblog";
import Services from "./components/Services";
import Faq from "./components/Faq";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerReview from "./components/CustomerReview";
import FaqsHeading from "./components/FaqsHeading";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <div className="hero_bg d-flex align-items-center flex-column pt-4">
        <Header />
        <Hero />
      </div>
      <Whatwedo />
      <Whychoose />
      <CustomerReview />
      <Works />
      <Gettouch />
      <Ourblog />
      <FaqsHeading />
      <Faq />
      <Services />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
