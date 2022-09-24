import type { NextPage } from "next";
import Head from "next/head";
import { Nav } from "../components/Nav";
import { CultVideo } from "../styles/pages/Home.styled";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>False Idols</title>
        <meta name="description" content="False Idols Cult" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav />
        <CultVideo autoPlay loop muted>
          <source src="/images/cult-final.mp4" type="video/mp4" />
        </CultVideo>
      </div>
    </div>
  );
};

export default Home;
