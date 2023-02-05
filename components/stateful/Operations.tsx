import { useRecoilState, useRecoilValue } from "recoil"
import { Button } from "components/stateless/button/Button"
import {
  cardDeckState,
  loadingState,
  showCardsState,
} from "state/cardDeckState"

export const Operations: React.FC = () => {
  const [cardDeck, setCardDeck] = useRecoilState(cardDeckState)
  const [showCards, setShowCards] = useRecoilState(showCardsState)
  const loading = useRecoilValue(loadingState)

  const shuffleCards = () => {
    setCardDeck([...cardDeck].sort(() => Math.random() - 0.5))
  }

  const sortCards = () => {
    setCardDeck([...cardDeck].sort((a, b) => (a.id > b.id ? 1 : -1)))
  }
  return (
    <div className="space-x-5">
      <Button
        label={`${showCards ? "Hide" : "Show"} cards`}
        onClick={() => setShowCards(!showCards)}
        disabled={loading}
      />
      <Button label="Shuffle" onClick={shuffleCards} disabled={loading} />
      <Button label="Sort" onClick={sortCards} disabled={loading} />
    </div>
  )
}
