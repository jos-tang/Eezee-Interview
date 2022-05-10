import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link
        rel="icon"
        href="https://media-exp1.licdn.com/dms/image/C560BAQGIIOYefhFPqA/company-logo_200_200/0/1628793764712?e=2147483647&v=beta&t=CwdBTdI8NL43cJ12grK6Q7LkEzHpFXGfcvZxv62L31M"
      />
      <title>{title + " - Eezee"}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Making Procurement Easy",
  description: "Eezee Intern Technical Interview",
};

export default Meta;
