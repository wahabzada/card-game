import { Card } from "components/stateless/card/Card"
import cardDeckJSON from "data/cardDeck.json"

export const CardDeck: React.FC = () => {
  const data = cardDeckJSON

  return (
    <ul className=" grid grid-flow-col -space-x-10 overflow-x-auto">
      {data.map((card) => (
        <li key={card.id}>
          <Card
            id={card.id}
            name={card.name}
            unicode={card.unicode}
            onClick={() => console.log("Card clicked")}
            className={`text-8xl my-5 hover:text-9xl hover:-mt-5 bg-gray-50 block ${
              true && cardColour(card.name) === "red"
                ? "text-red-500"
                : "text-gray-700"
            }`}
            show={false}
          />
        </li>
      ))}
    </ul>
  )
}

export const cardColour = (cardName: string) => {
  if (
    (cardName && cardName.includes("Hearts")) ||
    cardName.includes("Diamonds")
  ) {
    return "red"
  } else {
    return "black"
  }
}
