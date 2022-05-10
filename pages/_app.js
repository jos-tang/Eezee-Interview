import Layout from "../components/Layout";
import "../styles/global.css";
import "antd/dist/antd.css";
import { AppWrapper } from "./cart";

function MyApp({ Component, pageProps }) {
  return (
    // share cart state between components using context
    // share NavBar between pages
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
