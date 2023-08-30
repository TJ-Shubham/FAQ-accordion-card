import { useState } from "react";


export default function Accordion({ data }){
    return(
        <div className="accordion">
            {data.map((item)=>(
                <AccordionItem  question={item.question} answers={item.answers} key={item.key} />
            ))}
        </div>
    );
}


function AccordionItem({ question, answers }) {
    const [isOpen, setIsOpen] = useState(false);
  
    function handleToggle() {
      setIsOpen((cur) => !cur);
    }
  
    return (
      <div onClick={handleToggle}>
        <p className="title">{question}</p>
        <p className="icon">{isOpen ? "^" : "˅"}</p>
        {isOpen && <div className="content-box">{answers}</div>}
      </div>
    );
}