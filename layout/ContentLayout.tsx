import React from "react";
import {
  ContentLayoutStyling,
  Background,
} from "../styles/layout/ContentLayout.styled";
import { Nav } from "../components/Nav";
import Image from "next/image";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      <ContentLayoutStyling>
        <Background>
          <Image
            src="/images/darkness.png"
            alt="False Idols Logo"
            layout="fill"
          />
        </Background>
        {children}
      </ContentLayoutStyling>
    </div>
  );
};
