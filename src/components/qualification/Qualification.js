import "./qualification.scss";

const Qualification = () => {

  const data = [
    {
      id: 1,
      name: "Paiza Learning",
      title: "Bランク",
      img: "assets/paiza-brank.png",
      icon: "assets/sign-check-icon.png",
      desc:
        "Paiza プログラミングスキルチェックにて、Bランク取得",
    },
    {
      id: 2,
      name: "HTML5プロフェッショナル",
      title: "Level1",
      img: "assets/html5-logo.png",
      icon: "assets/sign-check-icon.png",
      desc: "HTML5プロフェッショナル Level1取得",
      // featured: true,
    },
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img: "assets/logo512.png",
    //   icon: "assets/sign-check-icon.png",
    //   desc: "desclinkedin",
    // },
  ]

  return (
    <div className="testimonials" id="testimonials">
      <h1>資格等</h1>
      <div className="container">
        {data.map(d => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Qualification;
