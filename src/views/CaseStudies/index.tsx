import Slide from "../../components/Slider/Slide";
import styles from "./styles.module.scss";
import slide1 from "../../assets/images/slideImg.jpg";
import MySlider from "../../components/Slider";

const caseStudies = [
  //need to have min. 4 elements, if not, double the first at the end
  {
    img: slide1,
    title: "Dignissimos wisi cillum",
    description: "Dignissimos wisi cillum",
    href: "https://ppmlight.com/",
  },
  {
    img: slide1,
    title: "Our Case Studies",
    description: "Our Case Studies Our Case Studies",
    href: "https://ppmlight.com/",
  },
  {
    img: slide1,
    title: "Buyer Protection",
    description:
      "There are many variations of passages of Lorem Ipsum available",
    href: "https://ppmlight.com/",
  },
  {
    img: slide1,
    title: "Dignissimos wisi cillum",
    description: "Dignissimos wisi cillum",
    href: "https://ppmlight.com/",
  },
];

const CaseStudies = () => {
  const slides = caseStudies.map((caseStudie, index) => (
    <Slide
      key={index}
      img={caseStudie.img}
      title={caseStudie.title}
      description={caseStudie.description}
      href={caseStudie.href}
    />
  ));
  return (
    <section className={styles.background}>
      <h2 className={styles.title}>Our Case Studies</h2>
      <p className={styles.description}>
        If you are planning on developing a product landing app or website, take
        a look at this beautiful-crafted
      </p>
      <div className={styles.wrapper}>
        <MySlider slide={slides} />
      </div>
    </section>
  );
};

export default CaseStudies;
