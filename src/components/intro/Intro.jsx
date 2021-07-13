import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["대학생", "연구원", "대표"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mobile.png" alt="프로필 사진" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>자기개발을 좋아하는</h2>
          <h1>염정원 입니다.</h1>
          <h3>
            저는 <span ref={textRef}> </span> 입니다.
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow.png" alt="포트폴리오 보러 가기"></img>
        </a>
      </div>
    </div>
  );
}
