import styled from "styled-components";
import Image from "next/image";

export const TeamContainer = styled.div`
  margin: 5rem 10% 0 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  gap: 3rem;
`;

export const TeamMember = styled.div`
  position: relative;
  border: 1px solid rgb(151, 151, 151);
  text-align: center;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    h3 {
      text-shadow: 0 0 15px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.5);
    }
  }

  h3 {
    font-size: calc(30px + 1vw);
    padding: 0.5rem;
    font-weight: bold;
    font-family: markerTag;
  }

  h4 {
    font-size: calc(12px + 0.2vw);
    padding: 0.5rem;
    padding-bottom: 1rem;
  }
`;

export const TeamMemberImage = styled(Image)`
  width: 100%;
  height: auto;
`;
