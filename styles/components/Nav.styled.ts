import styled, { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";

interface NavProps {
  isNavOpen: boolean;
}
export const NavFullscreenContainer = styled.div<NavProps>`
  z-index: 2;

  ${(props) =>
    props.isNavOpen
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background-color: #011001;
        `
      : ""}
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  opacity: 0.8;
  z-index: 2;
  margin: 0 10%;
`;

export const NavOpen = styled.div<NavProps>`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: -1;
  margin-top: 10rem;
  ${(props) => (props.isNavOpen ? "display: flex;" : "display: none;")}

  a {
    font-size: 5rem;
    font-family: markerTag, serif;

    &:hover {
      text-shadow: 0 0 15px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.5);
    }
  }
`;

export const NavLogoContainer = styled(Link)`
  height: 30px;
  width: 30px;
`;

export const NavLogo = styled(Image)`
  object-fit: contain;
  height: 20px;
  cursor: pointer;
`;

export const NavIdolaLogo = styled.a`
  position: absolute;
  bottom: 5%;
  right: 10%;
`;

export const NavOpenIcon = styled(Image)`
  position: absolute;
  bottom: 5%;
  right: 10%;
`;

export const NavCloseIcon = styled(Image)`
  position: absolute;
  bottom: 5%;
  right: 10%;
  cursor: pointer;
`;
