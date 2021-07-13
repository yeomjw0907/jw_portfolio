import "./works.scss";

export default function Works() {
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
                <h2>Title</h2>
                <p>설명</p>
                <span>Project</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/mobile.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
