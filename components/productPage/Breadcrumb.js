import { Breadcrumb } from "antd";
import navStyles from "../../styles/Navbar.module.css";

export default function BreadcrumbBar({ name }) {
  return (
    <div className={navStyles.navBody} style={{ background: "white" }}>
      <div
        className="pageMaxWidth"
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
      >
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>

          <Breadcrumb.Item>{name}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
}
BreadcrumbBar.defaultProps = {
  name: "NIL",
};
