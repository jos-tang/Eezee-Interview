import Nav from "./Navbar";
import Meta from "./Head";

const Layout = ({ children }) => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Meta />
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
