import React, { useState } from "react";
import {
  NavContainer,
  NavOpen,
  NavLogoContainer,
  NavLogo,
  NavIdolaLogo,
  NavOpenIcon,
  NavFullscreenContainer,
  NavCloseIcon,
} from "../styles/components/Nav.styled";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const changeOpenState = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
  };

  return (
    <NavFullscreenContainer isNavOpen={isNavOpen}>
      <NavContainer>
        <NavLogoContainer href="/">
          <NavLogo
            src="/images/false-idols-logo--white.png"
            alt="False Idols Logo"
            height={30}
            width={40}
          />
        </NavLogoContainer>
        <div>
          {isNavOpen ? (
            <NavOpenIcon
              src="/icons/close_icon.svg"
              alt="open nav"
              height={30}
              width={30}
              onClick={changeOpenState}
            />
          ) : (
            <NavCloseIcon
              src="/icons/open_icon.svg"
              alt="open nav"
              height={30}
              width={30}
              onClick={changeOpenState}
            />
          )}
        </div>
      </NavContainer>

      <NavOpen isNavOpen={isNavOpen}>
        <a
          href="https://staking.falseidols.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          Staking
        </a>
        <a
          href="https://whitepaper.falseidols.xyz/"
          target="_blank"
          rel="noreferrer"
        >
          Cult Paper
        </a>
        <Link href="/team">Cult Leaders</Link>
        <Link href="/faq">FAQ</Link>

        <NavIdolaLogo
          href="https://www.idolaindustries.com"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/idola-logo--white.png"
            alt="False Idols Logo"
            height={20}
            width={30}
          />
        </NavIdolaLogo>
      </NavOpen>
    </NavFullscreenContainer>
  );
};
