import styles from "./styles.module.scss";
import backgroundImg from "./../../assets/background/background-1.png";
import Card from "../../components/Card";
import MF1 from "../../assets/SVG/MF1";
import { Color } from "../../components/Card";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import MF2 from "../../assets/SVG/MF2";
import MF3 from "../../assets/SVG/MF3";
import MF4 from "../../assets/SVG/MF4";
import MFWhite1 from "../../assets/SVG/MFWhite1";
import MFWhite2 from "../../assets/SVG/MFWhite4";
import MFWhite3 from "../../assets/SVG/MFWhite3";
import MFWhite4 from "../../assets/SVG/MFWhite2";

const MAIN_FUNCTIONALITY = [
  {
    svg: <MF1 />,
    svgWhite: <MFWhite1 />,
    title: "Project and Program Statuses",
    description: "A simple and clear presentation.",
  },
  {
    svg: <MF4 />,
    svgWhite: <MFWhite4 />,
    title: "Project Card",
    description: "User friendly content management.",
    color: Color.Green,
  },
  {
    svg: <MF3 />,
    svgWhite: <MFWhite3 />,
    title: "Jira Environment",
    description:
      "The ability to download data to manage projects and programs portfolio",
    color: Color.Green,
  },
  {
    svg: <MF2 />,
    svgWhite: <MFWhite2 />,
    title: "Report Archive",
    description: "All previous reports in one place.",
  },
];

const MainFunctionality = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <section className={styles.container}>
      <img className={styles.background} src={backgroundImg} alt="" />
      <h2 data-aos="slide-left" data-aos-once="true" className={styles.title}>
        How Does PPMlight Work?
      </h2>
      <p
        data-aos="slide-right"
        data-aos-once="true"
        className={styles.description}
      >
        If you are planning on developing a product landing app or website, take
        a look at this beatiful-crafted
      </p>
      <div className={styles.wrapper}>
        {MAIN_FUNCTIONALITY.map((data, index) => (
          <Card
            svg={data.svg}
            svgWhite={data.svgWhite}
            title={data.title}
            description={data.description}
            color={data.color}
            key={index}
            data-aos="fade-up"
          />
        ))}
      </div>
    </section>
  );
};

export default MainFunctionality;
