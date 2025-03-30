import { useState } from "react";

import Card from "./Card";

import styles from "./Cards.module.css";

const cardsArr = [
  {
    id: 1,
    title: "Personalized Plans",
    description: "Tailored relocation strategies for your unique needs.",
  },
  {
    id: 2,
    title: "Expert Guidance",
    description:
      "Navigate visas, income-generation, and housing with our expert help.",
  },
  {
    id: 3,
    title: "Global Opportunities",
    description: "Cultural integration support for smooth transitions abroad",
  },
];

const Cards = () => {
  const [cards, setCards] = useState(cardsArr);
  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <Card
          id={card.id}
          title={card.title}
          description={card.description}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
