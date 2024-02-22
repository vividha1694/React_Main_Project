import React from "react";
import styles from "./Home.module.css";
import Card from "./CategoryCard";

function Home() {
  const cardsData = [
    {
      title: "English",
      links: [
        { url: "#", text: "Basic English Course" },
        { url: "#", text: "Intermediate English Course" },
        { url: "#", text: "Advanced English Course" },
      ],
      buttonText: "Explore",
    },
    {
      title: "Recorded Classes",
      links: [
        { url: "#", text: "British Accent Course" },
        { url: "#", text: "American Accent Course" },
        { url: "#", text: "Full IELTS Course" },
      ],
      buttonText: "Explore",
    },
    {
      title: "One-to-One Classes",
      links: [
        { url: "#", text: "Basic French Language Course" },
        { url: "#", text: "Basic Japanese Language Course" },
        { url: "#", text: "Basic Spanish Language Course" },
      ],
      buttonText: "Explore",
    },
  ];

  return (
    <>
      <div className={styles.flex}>
        <div>
          <h3 className={styles.head_three}>Top Categories</h3>
          <h2 className={styles.head_two}>
            All features <br />
            Topics by Categories
          </h2>
        </div>
        <div>
          <p className={styles.para}>
            “Explore Wonder Girl Janhavi’s Signature English Courses”
          </p>
        </div>
        <div className={styles.div}>
          <a href="https://wp.hixstudio.net/eduker/courses/">All Categories</a>
        </div>
      </div>

      <div>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            links={card.links}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
