import {
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import navStyles from "../styles/Navbar.module.css";
import { Avatar, Badge, Input } from "antd";
import { useAppContext } from "../pages/cart";
import Link from "next/link";

export default function Navbar() {
  const { cart } = useAppContext();
  return (
    <div className={navStyles.navWrapper}>
      <div className={navStyles.navTop}>
        <div className="pageMaxWidth row align" style={{ height: "39px" }}>
          <span style={{ marginRight: "17px" }}>
            <img
              className={navStyles.sgIcon}
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

      <div className={navStyles.navBody}>
        <div className="pageMaxWidth">
          <div
            className="row align"
            style={{
              height: "80px",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Link href="/">
                <img
                  className={navStyles.companyLogo}
                  src="/images/Logo.png"
                  alt="Company Logo"
                />
              </Link>

              <Input
                placeholder="Search Products Here"
                suffix={
                  <Avatar
                    className="theme-primary"
                    size={30}
                    icon={<SearchOutlined />}
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
            <div
              className="col grey-primary text-12 align"
              style={{ fontWeight: "700" }}
            >
              <Badge count={cart} showZero color={"#2a64db"} offset={[0, 5]}>
                <ShoppingCartOutlined style={{ fontSize: 32 }} />
              </Badge>
              Cart
            </div>
          </div>
          <div className="row align" style={{ height: "38px" }}>
            <span className="text-14 eezee-blue">View All Brands</span>
          </div>
        </div>
      </div>
    </div>
  );
}
