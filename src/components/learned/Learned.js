import { useState } from "react";
import "./learned.scss";

const Learned = () => {

  const [currentSlide, setCurrentSlide ] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/scss-image.png",
      title: "Sass(scss)",
      desc: "UdemyにてSsssについて学びました。\n【animation、@構文、変数、レスポンシブデザイン等】",
      img: "./assets/gaticss4.png",
      href: "https://www.udemy.com/course/front-dev-tutorial/",
    },
    {
      id: "2",
      icon: "./assets/javascript-icon.png",
      title: "JavaScript",
      desc: "UdemyにてJavaScriptの挙動について学びました。\n【非同期、Map Set、this bind、アロー関数、promise、class等】",
      img: "./assets/js.png",
      href: "https://www.udemy.com/course/javascript-essence/",
    },
    {
      id: "3",
      icon: "./assets/logo512.png",
      title: "その他",
      desc: "Udemyや書籍にて下記学習済です。\n【React TypeScript Firebase ReactNative Python Django Git等】",
      img: "./assets/udemy-learned3.png",
      href: "https://www.udemy.com/ja/",
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
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`
        }}
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
                  <span>
                    {/* <a href={d.href} target="_blank" rel="noopener noreferrer">
                      学習サイトへ
                    </a> */}
                    <details>
                      <summary>学習サイトへ</summary>
                      <ul>
                        <li><a href={d.href} target="_blank" rel="noopener noreferrer">Udemy</a></li>
                      </ul>
                    </details>
                  </span>
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

export default Learned;
