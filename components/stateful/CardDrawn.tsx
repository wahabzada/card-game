import { Card } from "components/stateless/card/Card"
import { cardColour } from "./CardDeck"

export const CardDrawn: React.FC = () => {
  const card = { id: 1, name: "Hearts", unicode: "🂱" }
  return (
    <div>
      <Card
        id={card.id}
        name={card.name}
        unicode={card.unicode}
        onClick={() => console.log("Card clicked")}
        className={`text-9xl bg-gray-50 h-28 ${
          cardColour(card.name) === "red" ? "text-red-500" : "text-gray-700"
        }`}
        show={true}
      />
    </div>
  )
}
