import styles from "./styles.module.scss";

const prices = [
  { title: "Free", price: 0, points: ["Free up to 10 users"] },
  {
    title: "Standard",
    price: 0.5,
    points: ["11-100 users"],
  },
  { title: "Premium", price: 0.45, points: ["101-250+ users"] },
];

//Try it for free!

//Paid subscription begins after your free trial.
const Pricing = () => {
  const Price = prices.map((price) => (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.title}>{price.title}</p>
        <p className={styles.price}>
          {price.price}€<span className={styles.month}>/monthly</span>
        </p>
      </div>
      <div className={styles.main}>
        <ul className={styles.ulist}>
          {price.points.map((point) => (
            <li className={styles.list}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width="1.5rem"
                height="1.5rem"
                stroke="currentColor"
                className={styles.svg}
                data-darkreader-inline-stroke=""
                //style="--darkreader-inline-stroke: currentColor;"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <button className={styles.btnSignUp}>Get started</button>
      </div>
    </div>
  ));

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Pricing</h1>
          <p className={styles.description}>
            Get the package you need and upgrade as you grow.
          </p>
          <div>
            <button className={styles.btnMonthLeft}>Monthly</button>
            <button className={styles.btnMonthRight}>Annually</button>
          </div>
          <div className={styles.grid}>{Price}</div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
