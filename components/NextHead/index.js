import Head from "next/head";

function NextHead({ title }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="Description" content="Site Pacto"></meta>
    </Head>
  );
}

export default NextHead;
