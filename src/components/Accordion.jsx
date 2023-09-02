import { useState } from "react";


export default function Accordion({ data }){
    return(
        <div className="accordion">
          <h1>FAQ</h1>
            {data.map((item)=>(
                <AccordionItem  question={item.question} answers={item.answers} key={item.key} />
            ))}
        </div>
    );
}


function AccordionItem({ question, answers }) {
    const [isOpen, setIsOpen] = useState(false);
    const arrowImage = <img className={isOpen ? "rotate" : ""} src="./images/icon-arrow-down.svg" alt="up and down arrow" />
  
    function handleToggle() {
      setIsOpen((cur) => !cur);
    }
  
    return (
      <div onClick={handleToggle}>
        <div className="faq-question">
        <p className="title">{question}</p>
        <p>{arrowImage}</p>
        </div>
        
        {isOpen && <div className="content-box">{answers}</div>}
      </div>
    );
}
