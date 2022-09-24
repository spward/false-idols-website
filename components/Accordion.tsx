import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionAnswer,
  AccordionQuestion,
} from "../styles/components/Accordion.styled";

interface AccordionProps {
  question: string;
  children: React.ReactNode;
}
export const Accordion: React.FC<AccordionProps> = ({ question, children }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const openCloseAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
    console.log(isAccordionOpen);
  };

  return (
    <AccordionContainer>
      <AccordionQuestion onClick={openCloseAccordion}>
        <p>{question}</p>
      </AccordionQuestion>
      <AccordionAnswer isAccordionOpen={isAccordionOpen}>
        <p>{children}</p>
      </AccordionAnswer>
    </AccordionContainer>
  );
};
