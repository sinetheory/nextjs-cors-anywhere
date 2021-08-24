import Head from "next/head";

const Metadata = () => {
  return (
    <Head>
      <meta charSet={"utf-8"} />
      <meta
        name={"viewport"}
        content={"width=device-width, initial-scale=1, shrink-to-fit=no"}
      />
      <meta name={"description"} content={"NextJS-CORS-Anywhere"} />
      <meta
        name={"keywords"}
        content={"NextJS, CORS, CORS-Anywhere, REST, API, JSON, REST API"}
      />
      <meta name={"author"} content={"Deyby Rodriguez"} />
      <meta name={"robots"} content={"index, follow"} />

      <meta property={"og:title"} content={"Deyby Rodriguez"} />
      <meta property={"og:type"} content={"website"} />
      <meta
        property={"og:image"}
        content={"https://deybyr647.com/opengraph.png"}
      />
      <meta property={"og:url"} content={"https://deybyr647.com"} />
      <meta property={"og:description"} content={"NextJS-CORS-Anywhere"} />

      <title>NextJS-CORS-Anywhere</title>
    </Head>
  );
};

export default Metadata;
