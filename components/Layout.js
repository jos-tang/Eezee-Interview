import Nav from "./Navbar";
import Meta from "./Head";

const Layout = ({ children }) => {
  return (
    <div style={{ background: "#f5f5f7" }}>
      <Meta />
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
