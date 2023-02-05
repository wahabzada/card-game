import { atom } from "recoil"
import cardDeckJSON from "data/cardDeck.json"
import { CardType } from "./cardDeck.types"

export const cardDeckState = atom({
  key: "cardDeckState",
  default: cardDeckJSON as CardType[],
})

export const cardDrawnState = atom({
  key: "cardDrawnState",
  default: { id: 0, name: "", unicode: "" } as CardType,
})

export const showCardsState = atom({
  key: "showCardsState",
  default: false,
})
