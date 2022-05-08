import {
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import navStyles from "../styles/Navbar.module.css";
import layoutStyles from "../styles/Layout.module.css";
import { Avatar, Badge, Input } from "antd";

export default function Navbar() {
  return (
    <div className={navStyles.navWrapper}>
      <div style={{ background: "#f0f0f0" }}>
        <div
          className={layoutStyles.pageMaxWidth}
          style={{ height: "39px", display: "flex", alignItems: "center" }}
        >
          <span style={{ marginRight: "17px" }}>
            <img
              className={navStyles.sgicon}
              src="https://storage.googleapis.com/eezee-storage/flags/SG.png"
              alt="Singapore Flag"
            />
            Singapore
          </span>
          <span style={{ marginLeft: "17px" }}>
            <PhoneOutlined style={{ marginRight: "8px" }} />
            +65 6797 9688
          </span>
        </div>
      </div>

      <div className={navStyles.navBar}>
        <div className={layoutStyles.pageMaxWidth}>
          <div className={navStyles.topRow}>
            <div className="topRowLeft">
              <img
                className={navStyles.companyLogo}
                src="/images/Logo.png"
                alt="Company Logo"
              />
              <Input
                placeholder="Search Products Here"
                suffix={
                  <Avatar
                    style={{ backgroundColor: "#2A64DB" }}
                    size={30}
                    icon={<SearchOutlined style={{ color: "white" }} />}
                  />
                }
                style={{
                  width: 460,
                  height: 40,
                  borderRadius: 20,
                  marginLeft: 82,
                }}
              />
            </div>
            <div className={navStyles.topRowRight}>
              <Badge count={0} showZero color={"#2a64db"} offset={[0, 5]}>
                <ShoppingCartOutlined style={{ fontSize: 32 }} />
              </Badge>
              Cart
            </div>
          </div>
          <div className={navStyles.bottomRow}>
            <span>View All Brands</span>
          </div>
        </div>
      </div>
    </div>
  );
}
