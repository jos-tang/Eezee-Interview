import layoutStyles from "../styles/Layout.module.css";

export default function Carousel() {
  return (
    <div className={layoutStyles.pageMaxWidth}>
      <div
        style={{
          height: "385px",
          width: "1200px",
          border: "1px solid #E4E5E7",
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://storage.googleapis.com/eezee-banner-images/gponBtgICZZHlsB_qOscEr.png"
          alt="Carousel Image"
        />
      </div>
    </div>
  );
}
