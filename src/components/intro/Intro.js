import "./intro.scss";
import {init} from 'ityped';
import { useEffect, useRef } from "react";
import ThreeDimension from "./ThreeDimension";

const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["JavaScript", "React.js", "Sass(scss)"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/* <img src="assets/logo512.png" alt="" /> */}
          <ThreeDimension />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, This is</h2>
          <h1>Portfolio Site</h1>
          <h3>Using <span ref={textRef} ></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro;
