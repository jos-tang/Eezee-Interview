import Layout from "../components/Layout";
import "../styles/global.css";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
