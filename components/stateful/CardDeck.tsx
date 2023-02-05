import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import {
  cardDeckState,
  cardDrawnState,
  loadingState,
  showCardsState,
} from "state/cardDeckState"
import { Card } from "components/stateless/card/Card"
import { CardType } from "state/cardDeck.types"

export const CardDeck: React.FC = () => {
  const [cardDeck, setCardDeck] = useRecoilState(cardDeckState)
  const setCardDrawn = useSetRecoilState(cardDrawnState)
  const [loading, setLoading] = useRecoilState(loadingState)
  const showCards = useRecoilValue(showCardsState)

  const drawACard = (card: CardType) => {
    setLoading(true)

    // 1. draw a new card
    setCardDrawn(card)

    // 2. remove the drawn card from the deck
    setCardDeck([...cardDeck.filter((c) => c.id !== card.id)])

    setLoading(false)
  }

  return (
    <ul className=" grid grid-flow-col -space-x-10 overflow-x-auto">
      {cardDeck.map((card) => (
        <li key={card.id}>
          <Card
            id={card.id}
            name={card.name}
            unicode={card.unicode}
            onClick={() => drawACard(card)}
            className={`text-8xl my-5 hover:text-9xl hover:-mt-5 bg-gray-50 block ${
              showCards && cardColour(card.name) === "red"
                ? "text-red-500"
                : "text-gray-700"
            }`}
            disabled={loading}
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
