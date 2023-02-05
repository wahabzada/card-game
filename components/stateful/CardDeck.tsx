import { useRecoilState, useRecoilValue } from "recoil"
import {
  cardDeckState,
  cardDrawnState,
  showCardsState,
} from "state/cardDeckState"
import { Card } from "components/stateless/card/Card"

export const CardDeck: React.FC = () => {
  const cardDeck = useRecoilValue(cardDeckState)
  const [cardDrawn, setCardDrawn] = useRecoilState(cardDrawnState)
  const showCards = useRecoilValue(showCardsState)
  const filteredCardDeck = cardDeck.filter((c) => c.id !== cardDrawn.id)

  return (
    <ul className=" grid grid-flow-col -space-x-10 overflow-x-auto">
      {filteredCardDeck.map((card) => (
        <li key={card.id}>
          <Card
            id={card.id}
            name={card.name}
            unicode={card.unicode}
            onClick={() => setCardDrawn(card)}
            className={`text-8xl my-5 hover:text-9xl hover:-mt-5 bg-gray-50 block ${
              showCards && cardColour(card.name) === "red"
                ? "text-red-500"
                : "text-gray-700"
            }`}
            show={showCards}
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
