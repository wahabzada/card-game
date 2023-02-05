import { useRecoilValue, useResetRecoilState } from "recoil"
import { Card } from "components/stateless/card/Card"
import { cardDrawnState } from "state/cardDeckState"
import { cardColour } from "./CardDeck"

export const CardDrawn: React.FC = () => {
  const cardDrawn = useRecoilValue(cardDrawnState)
  const putBackDrawnCard = useResetRecoilState(cardDrawnState)

  return (
    <div>
      <Card
        id={cardDrawn.id}
        name={cardDrawn.name}
        unicode={cardDrawn.unicode}
        onClick={putBackDrawnCard}
        className={`text-9xl bg-gray-50 h-28 ${
          cardColour(cardDrawn.name) === "red"
            ? "text-red-500"
            : "text-gray-700"
        }`}
        show={true}
      />
    </div>
  )
}
