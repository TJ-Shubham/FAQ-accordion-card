import faqQuestions from "./data";
import "./App.css";
import Accordion from "./Accordion";



function App() {
  return (
    <div className="app">
      <Accordion data={faqQuestions} />
    </div>
  )
}

export default App



