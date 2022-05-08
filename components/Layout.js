import Nav from "./Navbar";
import styles from "../styles/Layout.module.css";
import Carousel from "./Carousel";
import BrandsCard from "./BrandsCard";

const Layout = ({ children }) => {
  return (
    <div style={{ background: "#F7F7F8" }}>
      <Nav />
      <div className={styles.divider} />
      <Carousel />
      <div className={styles.divider} />
      <BrandsCard />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
