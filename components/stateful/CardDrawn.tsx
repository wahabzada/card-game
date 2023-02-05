import { useRecoilState } from "recoil"
import { Card } from "components/stateless/card/Card"
import {
  cardDeckState,
  cardDrawnState,
  loadingState,
} from "state/cardDeckState"
import { cardColour } from "./CardDeck"
import { CardType } from "state/cardDeck.types"

export const CardDrawn: React.FC = () => {
  const [cardDrawn, setCardDrawn] = useRecoilState(cardDrawnState)
  const [loading, setLoading] = useRecoilState(loadingState)
  const [cardDeck, setCardDeck] = useRecoilState(cardDeckState)

  const putBackTheCard = (card: CardType) => {
    setLoading(true)

    setCardDeck([...cardDeck, card])
    setCardDrawn({ id: 0, name: "", unicode: "" })

    setLoading(false)
  }

  return (
    <div>
      <Card
        id={cardDrawn.id}
        name={cardDrawn.name}
        unicode={cardDrawn.unicode}
        onClick={() => putBackTheCard(cardDrawn)}
        className={`text-9xl bg-gray-50 h-28 ${
          cardColour(cardDrawn.name) === "red"
            ? "text-red-500"
            : "text-gray-700"
        }`}
        show={true}
        disabled={loading}
      />
    </div>
  )
}
