import { CardProps } from "./Card.types"

export const Card: React.FC<CardProps> = (card) => {
  return (
    <button className={card.className} onClick={card.onClick}>
      {card.show ? card.unicode : "🂠"}
    </button>
  )
}
