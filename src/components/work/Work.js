import { useState } from "react";
import "./work.scss";

const Work = () => {

  const [currentSlide, setCurrentSlide ] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "discriptiondiscriptiondiscriptiondiscriptiondiscriptiondiscription",
      img: "./assets/mobileappimage.jpeg",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc: "discriptiondiscriptiondiscriptiondiscriptiondiscriptiondiscription",
      img: "./assets/mobileappimage.jpeg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)`}}
      >
        {data.map(d => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
    </div>
  )
}

export default Work
