import { RightOutlined } from "@ant-design/icons";
import layoutStyles from "../styles/Layout.module.css";

export default function BrandsCard() {
  return (
    <div
      className={layoutStyles.pageMaxWidth}
      style={{ paddingTop: "16px", paddingBottom: "16px" }}
    >
      <div className={layoutStyles.sectionHeader}>
        <div className={layoutStyles.sectionHeaderLeft}>
          <span className={layoutStyles.sectionTitle}> Featured Brands</span>
          <span className={layoutStyles.sectionExcerpt}>
            Browse the full catalog of brands today
          </span>
        </div>
        <div className="eezee-blue">
          <span>View More </span>
          <RightOutlined />
        </div>
      </div>
    </div>
  );
}
