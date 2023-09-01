import faqQuestions from "./data";
import "./App.css";
import Accordion from "./Accordion";
import Header from "./components/Header";



function App() {
  return (
    <div className="app">
      <Header />
      <Accordion data={faqQuestions} />
    </div>
  )
}

export default App



