import styles from "./styles.module.scss";
import backgroundImg from "./../../assets/background/background-1.png";
import Card from "../../components/Card";

//import { ReactComponent as Favicon } from "../../assets/logoPPMLight.svg";

const MainFunctionality = () => {
  return (
    <section className={styles.container}>
      <img className={styles.background} src={backgroundImg} alt="" />
      <h2 className={styles.title}>How Does Sofbox Work?</h2>
      <p className={styles.description}>
        If you are planning on developing a product landing app or website, take
        a look at this beatiful-crafted
      </p>
      <div className={styles.wrapper}>
        <Card
          svg={<></>}
          title="Customized Invoices"
          description="There are many variations of passages of Lorem Ipsum available."
        />
        <Card
          svg={<></>}
          title="Customized Invoices"
          description="There are many variations of passages of Lorem Ipsum available."
        />
        <Card
          svg={<></>}
          title="Customized Invoices"
          description="There are many variations of passages of Lorem Ipsum available."
        />
        <Card
          svg={<></>}
          title="Customized Invoices"
          description="There are many variations of passages of Lorem Ipsum available."
        />
      </div>
    </section>
  );
};

export default MainFunctionality;
