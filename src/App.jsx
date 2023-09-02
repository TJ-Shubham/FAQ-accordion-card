import faqQuestions from "./data";
import "./App.css";
import Accordion from "./components/Accordion";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <>
    <div className="app">
      <Header />
      <Accordion data={faqQuestions} />
    </div>
    <Footer />
    </>
  )
}

export default App



