import "./works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "assets/moblie.png",
      title: "example1",
      desc: "hello world",
      img: "assets/moblie.png",
    },
    {
      id: "2",
      icon: "assets/moblie.png",
      title: "example2",
      desc: "hello",
      img: "assets/moblie.png",
    },
    {
      id: "3",
      icon: "assets/moblie.png",
      title: "example2",
      desc: "world",
      img: "assets/moblie.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="mobile" />
                </div>
                <h2>"sample"</h2>
                <p>"sample"</p>
                <span>Project</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/mobile.png" alt="" />
            </div>
          </div>
          ))
        </div>
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="go left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="go right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
