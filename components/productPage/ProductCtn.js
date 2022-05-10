import productStyles from "../../styles/Product.module.css";
import React, { useState } from "react";

function ProductCtn({ product }) {
  const [active, setActive] = useState(0);

  return (
    <div
      className="card"
      style={{ padding: "16px", flex: 1, margin: "0px 16px 40px 0px" }}
    >
      <span className="text-24">{product.name}</span>
      <div
        className="row"
        style={{
          margin: "7.5px 0px 12px 0px",
        }}
      >
        {/* only add logo if product has a logo */}
        {product.logo && (
          <img
            src={product.logo}
            style={{ width: "100px", marginRight: "16px" }}
          />
        )}
        <table>
          <tbody>
            <tr>
              <td className="text-12">Model:</td>
              <td className="text-12 eezee-blue">{product.model}</td>
            </tr>
            <tr>
              <td className="text-12">Brand:</td>
              <td className="text-12 eezee-blue">{product.brand}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col center align" style={{ marginBottom: "16px" }}>
        <div
          className="col center align"
          style={{ height: "350px", width: "712px" }}
        >
          <img
            style={{ maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }}
            alt="Main Product Image"
            // Assumption: First Thumbnail image is the Main Image
            src={product.thumbnail[active]}
          />
        </div>

        <div className="row">
          {/* Assumption: Thumbnail images are stored in a 1D array */}
          {product.thumbnail.map((item, i) => {
            return (
              <button
                key={i}
                // add border only to currently selected thumbnail
                className={`${productStyles.productThumbnail} ${
                  active == i && productStyles.productThumbnailActive
                } click`}
                onClick={() => setActive(i)}
              >
                <img src={item} style={{ width: "100%" }} />
              </button>
            );
          })}
        </div>
      </div>
      <div className="col">
        <span className="text-20" style={{ marginBottom: "23px" }}>
          Product Description
        </span>
        <span className="text-14 grey-primary" style={{ fontWeight: 700 }}>
          {product.description.header}
        </span>
        <span
          className="text-14 grey-primary"
          style={{ whiteSpace: "pre-line" }}
        >
          {product.description.body}
        </span>
      </div>
    </div>
  );
}

export default ProductCtn;
