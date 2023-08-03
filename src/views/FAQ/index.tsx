import styles from "./styles.module.scss";

const data = [
  {
    title: "What is our application and what is it used for?",
    content:
      "Our application is a project portfolio management tool on the JIRAplatform. It allows you to monitor and plan projects in one place,facilitating workflow and project review process.",
  },
  {
    title: "How can I start using the application?",
    content:
      "To start using our application, simply install it as an add-on to your JIRA instance. Once the app is installed, you will be able to start adding and managing projects right away.",
  },
  {
    title: "Does our app integrate with JIRA?",
    content:
      "Yes, our application is integrated with the JIRA platform. When creating a new project, you can select a project that was previously created in Jira.  Saving the project creates a project in PPlight with annotation (linking) to the project in Jira.",
  },
  {
    title: "What are the main features available in the application?",
    content: (
      <>
        <p>
          Our app offers a number of useful features to help you manage your
          project portfolio efficiently. We list the key features below:
        </p>
        <ul>
          <li>
            Create projects easily: Our app allows you to create new projects
            quickly and intuitively. By entering the required information, such
            as name, project description, dates, priority, status, etc., you
            will easily create a project in our system.
          </li>
          <li>
            Report Generation: Our application allows you to generate detailed
            reports that are perfect for presentation during project reviews.
            These reports contain key information about the progress of the
            project.
          </li>
          <li>
            Integration with JIRA: Our application is integrated with the JIRA
            platform, which allows for flexible project management. You can
            easily select existing projects from JIRA and link them to our
            system.
          </li>
          <li>
            Report archiving: There is a report archiving feature in our
            application. This allows you to keep historical reports and track
            project progress over time. Archiving also makes it easier to check
            and verify the results achieved.
          </li>
          <li>
            Progress monitoring: Our app allows you to effectively monitor the
            progress of your projects. You can track tasks, milestones, risks,
            problems, and achievements in real time, allowing you to react
            quickly to any problems and take appropriate action.
          </li>
        </ul>
        <p>
          With these features, our app enables you to comprehensively manage
          your project portfolio, giving you full control over your projects and
          making wise management decisions.
        </p>
      </>
    ),
  },
  {
    title: "Does the application offer technical support?",
    content:
      "Yes, we provide technical support for our app. If you have questions or encounter problems, our experts are available to help you resolve any issues related to the use of the app.",
  },
];

const FAQ = () => {
  const faq = data.map((data, index) => (
    <details key={index} className={`${styles.card}`}>
      <summary className={styles.question}>{data.title} </summary>
      <div className={styles.answer}>
        <p>{data.content}</p>
      </div>
    </details>
  ));

  return (
    <section className={styles.background}>
      <h2 className={styles.title}>FAQ</h2>
      <p className={styles.description}></p>
      <div className={styles.wrapper}>{faq}</div>
    </section>
  );
};

export default FAQ;
