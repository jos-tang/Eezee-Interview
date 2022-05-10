import { Row, Col } from "antd";
import Link from "next/link";

export default function PopProducts({ products }) {
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
            Our Most Popular Products
          </span>
          <span className="text-14" style={{ lineHeight: "16px" }}>
            Trusted by the best companies in Asia
          </span>
        </div>
      </div>
      <Row>
        {products.map((item, i) => (
          <Col span={4} key={i}>
            <Link href={`/product/${item.id}`}>
              <div className="card click">
                <div
                  className="row center align"
                  style={{
                    height: "191px",
                  }}
                >
                  <img
                    src={item.thumbnail[0]}
                    style={{ maxHeight: "80%", maxWidth: "80%" }}
                  />
                </div>
                <div
                  className="col"
                  style={{
                    width: "100%",
                    height: "140px",
                    padding: "7px",
                  }}
                >
                  <div
                    className="row"
                    style={{
                      flexDirection: "flex-start",
                      width: "100%",
                    }}
                  >
                    <span className="text-10 eezee-blue">S$</span>
                    <span className="text-16 eezee-blue">{item.price}</span>
                  </div>
                  <span
                    className="grey-base"
                    style={{
                      lineHeight: "16px",
                      height: "48px",
                      overflow: "hidden",
                      marginTop: "10px",
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
