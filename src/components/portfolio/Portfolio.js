import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  allPortfolio,
  webPortfolio,
  mobilePortfolio
} from "../../data";

const Portfolio = () => {

  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "all",
      title: "All App",
    },
    // {
    //   id: "featured",
    //   title: "Featured",
    // },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // }
  ];

  useEffect(() => {
    switch(selected) {
      case "all":
        setData(allPortfolio);
        break;
      case "featured":
        setData(allPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(allPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        )) }
      </ul>
      <div className="container">
        {data.map(d=> (
          <a
            className="item"
            key={d.id}
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
