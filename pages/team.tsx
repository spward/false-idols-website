import type { NextPage } from "next";
import Head from "next/head";
import { ContentLayout } from "../layout/ContentLayout";

import {
  TeamContainer,
  TeamMember,
  TeamMemberImage,
} from "../styles/pages/Team.styled";

const Team: NextPage = () => {
  return (
    <>
      <Head>
        <title>False Idols Team</title>
        <meta name="description" content="False Idols Cult Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentLayout>
        <TeamContainer>
          <TeamMember>
            <a
              href="https://www.twitter.com/SintreeNFT"
              target="_blank"
              rel="noreferrer"
            >
              <TeamMemberImage
                src="/images/team/sintree.gif"
                alt="False Idols Team Member Sintree"
                width="1000"
                height="1000"
                quality="100"
              />
              <h3>Sintree</h3>
              <h4>Founder</h4>
            </a>
          </TeamMember>
          <TeamMember>
            <a
              href="https://www.twitter.com/pineapp1e_p1zza"
              target="_blank"
              rel="noreferrer"
            >
              <TeamMemberImage
                src="/images/team/pineapple_pizza.png"
                alt="False Idols Team Member Pineapple Pizza"
                width="1000"
                height="1000"
                quality="100"
              />
              <h3>Pineapple Pizza</h3>
              <h4>Art Director</h4>
            </a>
          </TeamMember>
          <TeamMember>
            <a
              href="https://www.twitter.com/Cryptoverse_33"
              target="_blank"
              rel="noreferrer"
            >
              <TeamMemberImage
                src="/images/team/cryptoverse.png"
                alt="False Idols Team Member Cryptoverse33"
                width="1000"
                height="1000"
                quality="100"
              />
              <h3>Cryptoverse33</h3>
              <h4>Project Manager</h4>
            </a>
          </TeamMember>
          <TeamMember>
            <a
              href="https://www.twitter.com/keny8816"
              target="_blank"
              rel="noreferrer"
            >
              <TeamMemberImage
                src="/images/team/keny.png"
                alt="False Idols Team Member Keny9"
                width="1000"
                height="1000"
                quality="100"
              />
              <h3>Keny9</h3>
              <h4>Mod</h4>
            </a>
          </TeamMember>
          <TeamMember>
            <a
              href="https://www.twitter.com/69Anonymouss420"
              target="_blank"
              rel="noreferrer"
            >
              <TeamMemberImage
                src="/images/team/polohot.png"
                alt="False Idols Team Member Polohot"
                width="1000"
                height="1000"
                quality="100"
              />
              <h3>Polohot</h3>
              <h4>Data Analytics / Mod</h4>
            </a>
          </TeamMember>
          <TeamMember>
            <a
              href="https://www.twitter.com/Wa666Mr"
              target="_blank"
              rel="noreferrer"
            >
              <TeamMemberImage
                src="/images/team/wawa.png"
                alt="False Idols Team Member Wawa"
                width="1000"
                height="1000"
                quality="100"
              />
              <h3>Wawa</h3>
              <h4>Social Media / Mod</h4>
            </a>
          </TeamMember>
          <TeamMember>
            <a
              href="https://www.twitter.com/ImSaragde"
              target="_blank"
              rel="noreferrer"
            >
              <TeamMemberImage
                src="/images/team/saragde.png"
                alt="False Idols Team Member Saragde"
                width="1000"
                height="1000"
                quality="100"
              />
              <h3>Saragde</h3>
              <h4>Mod</h4>
            </a>
          </TeamMember>
        </TeamContainer>
      </ContentLayout>
    </>
  );
};

export default Team;
