import styled from "styled-components";
interface AccordionAnswerProps {
  isAccordionOpen: boolean;
}

export const AccordionContainer = styled.div`
  border: 1px solid rgb(151, 151, 151);
  border-radius: 10px;
  margin: 2rem 0;
`;

export const AccordionQuestion = styled.div`
  font-size: 20px;
  cursor: pointer;
  padding: 2rem;
`;

export const AccordionAnswer = styled.div<AccordionAnswerProps>`
  display: ${(props) => (props.isAccordionOpen ? "block" : "none")};
  border-top: 1px solid rgb(151, 151, 151);
  font-size: 18px;
  padding: 2rem;
`;
