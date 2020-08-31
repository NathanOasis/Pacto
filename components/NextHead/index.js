import Head from "next/head";

function NextHead({ title }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

export default NextHead;
