import webs from "../assets/web.svg";
import apis from "../assets/api.svg";
import conversation from "../assets/conversation.svg";

import styles from "../styles/ProviderArea.module.css";

const fields = [
  {
    id: "web",
    title: "Web application",
    imgSrc: webs,
    alt: "multiple web tabs",
    description:
      "Build scalable web application to solve different business needs",
  },
  {
    id: "api",
    title: "Api service",
    imgSrc: apis,
    alt: "an api control page",
    description: "Maintain and construct flexible cloud services",
  },
  {
    id: "con",
    title: "Open mind",
    imgSrc: conversation,
    alt: "two people is communicating",
    description: "Communicate projects with people in a more approachable way",
  },
];

export function ProvideArea() {
  return (
    <div className={styles.container}>
      {fields.map((field) => (
        <div key={field.id} className={styles.inner}>
          <img src={field.imgSrc} alt={field.alt} />
          <div className={styles.inner_text}>
            <h3>{field.title}</h3>
            <h4 className={styles.description}>{field.description}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
