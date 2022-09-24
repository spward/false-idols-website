import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -99;
  pointer-events: none;
  opacity: 0.6;
`;

export const ContentLayoutStyling = styled.div`
  padding: 40% auto;
  position: relative;
  width: 80%;
  margin: 0 auto;
`;
