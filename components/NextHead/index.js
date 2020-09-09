import Head from "next/head";

function NextHead({ title }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="Description" content="Site Pacto"></meta>
      <meta name="robots" content="noindex" />
    </Head>
  );
}

export default NextHead;
