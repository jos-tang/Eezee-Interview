import { RightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

export default function BrandsCard({ brands }) {
  return (
    <div
      className="pageMaxWidth"
      style={{ paddingTop: "16px", paddingBottom: "16px" }}
    >
      <div
        className="row"
        style={{ justifyContent: "space-between", paddingBottom: "12px" }}
      >
        <div className="col">
          <span
            className="text-20"
            style={{ letterSpacing: "0.3px", paddingBottom: "4px" }}
          >
            Featured Brands
          </span>
          <span className="text-14" style={{ lineHeight: "16px" }}>
            Browse the full catalog of brands today
          </span>
        </div>
        <div className="eezee-blue">
          <span className="text-14">View More </span>
          <RightOutlined />
        </div>
      </div>
      <Row>
        {brands.map((item, i) => (
          <Col span={4} key={i}>
            <div className="card" bodyStyle={{ padding: "0px" }}>
              <div
                className="row center align"
                style={{
                  height: "100px",
                }}
              >
                <img
                  alt="Company Logo"
                  src={item.logo}
                  style={{ maxHeight: "60%", maxWidth: "60%" }}
                />
              </div>
              <div
                className="col center align"
                style={{
                  width: "100%",
                  padding: "7px",
                }}
              >
                <span className="text-16">{item.name} </span>
                <span className="text-12 grey-primary">
                  {item.products} products
                </span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
