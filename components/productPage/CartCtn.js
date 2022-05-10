import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";
import { useAppContext } from "../../pages/cart";

export default function CartCtn({ product }) {
  const { cart, setCart } = useAppContext();

  const [quantity, setQuantity] = useState(1);

  //If quantity input is not valid, reset to 1
  useEffect(() => {
    if (quantity < 1 || isNaN(quantity)) {
      setQuantity(1);
    }
  }, [quantity]);
  return (
    <div
      className="card"
      style={{ width: "440px", marginLeft: "16px", padding: "16px 24px" }}
    >
      <div
        className="row"
        style={{
          width: "100%",
          marginBottom: "27px",
        }}
      >
        <span className="text-20 eezee-blue">S$</span>
        <span className="text-30 eezee-blue">
          {(Number(product.price) * quantity).toFixed(2)}
        </span>
      </div>
      <div className="row align" style={{ marginBottom: "24px" }}>
        <span
          className="text-14 grey-primary"
          style={{ fontWeight: "700", marginRight: "30px" }}
        >
          Quantity:
        </span>
        <Button
          className="eezee-blue"
          icon={<MinusOutlined />}
          onClick={() => setQuantity(quantity - 1)}
        />
        <Input
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          style={{ width: "56px", textAlign: "center" }}
        />
        <Button
          className="eezee-blue"
          icon={<PlusOutlined />}
          onClick={() => setQuantity(quantity + 1)}
        />
      </div>
      <div>
        <Button
          className="theme-primary"
          style={{
            width: "100%",
            height: "40px",
          }}
          onClick={() => setCart(cart + quantity)}
        >
          Add to Cart
        </Button>
        <Button
          className="eezee-blue"
          style={{
            width: "100%",
            height: "40px",
            marginTop: "8px",
          }}
        >
          Add to Favourites
        </Button>
      </div>
    </div>
  );
}
