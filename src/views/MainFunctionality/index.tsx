import styles from "./styles.module.scss";
import backgroundImg from "./../../assets/background/background-1.png";
import Card from "../../components/Card";
import { Test } from "../../assets/SVG/Test";
import { Color } from "../../components/Card";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const MAIN_FUNCTIONALITY = [
  {
    svg: <Test />,
    title: "A simple and clear presentation of Project and Program Statuses.",
    description:
      "A simple and clear presentation of Project and Program Statuses.",
  },
  {
    svg: <Test />,
    title:
      "Creation and management of Project and Program Portfolios within the Jira environment.",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
    color: Color.Green,
  },
  {
    svg: <Test />,
    title: "Intuitive and easy content management within the Project Card.",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
    color: Color.Green,
  },
  {
    svg: <Test />,
    title: "Keeping a history of Reports in one place.",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
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

      <div className={styles.wrapper}>
        {MAIN_FUNCTIONALITY.map((data, index) => (
          <Card
            svg={data.svg}
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
