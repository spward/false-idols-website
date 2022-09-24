import type { NextPage } from "next";
import Head from "next/head";
import { ContentLayout } from "../layout/ContentLayout";
import { Accordion } from "../components/Accordion";

const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>False Idols Team</title>
        <meta name="description" content="False Idols Cult Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentLayout>
        <Accordion question="What is your Policy Id's?">
          <>False Idols:</>{" "}
          76d51276ff5d4616fa87fe5e398f09110e9f085a26b44f07130b57a9
          <br />
          <>False Idols X Collabs:</>{" "}
          67d93d864323be0f9d78bf1c5d58c141e448f3e5eb267bba90b1de03
        </Accordion>
        <Accordion question="How many NFTs are in the False Idols collection?">
          6666
        </Accordion>
        <Accordion question="What is Idola Industries?">
          Idola Industries is a shell company that we will leverage to brand
          physical assets in a more consumer friendly way and continue to use
          our art style.
        </Accordion>
        <Accordion question="What is $idol and how can I earn it?">
          $idol is our internal ecosystems currency. It will be used in multiple
          ways including redeeming prizes, exclusive access to events, and more.
          You are able to earn $idol through our staking system using False
          Idols NFTs.
        </Accordion>
        <Accordion question="How does staking work?">
          Staking will have you send your False Idols NFTs to yourself and earn
          $idol while doing so.
        </Accordion>
        <Accordion question="What are subsidiaries?">
          Subsidiaries will be upcoming drops including utility, NFTs, and
          physical assets.
        </Accordion>
      </ContentLayout>
    </>
  );
};

export default Faq;
