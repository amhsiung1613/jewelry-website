import React from "react";
import ImageSlider from "./ImageSlider";
import news1 from "../../assets/ring-images/ring-category-cover.jpg";
import news2 from "../../assets/pearls.jpg";

const IMAGES = [
  { url: news1, alt: "News One" },
  { url: news2, alt: "News Two" },
]

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      {/* <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a> */}
    </div>
  )
}