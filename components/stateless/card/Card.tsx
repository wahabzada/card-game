import { CardProps } from "./Card.types"

export const Card: React.FC<CardProps> = (card) => {
  return (
    <button
      className={card.className}
      onClick={card.onClick}
      disabled={card.disabled}
    >
      {card.show ? card.unicode : "🂠"}
    </button>
  )
}
