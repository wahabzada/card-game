import { DefaultLayout } from "layouts/DefaultLayout"
import { CardDeck } from "components/stateful/CardDeck"
import { CardDrawn } from "components/stateful/CardDrawn"
import { Operations } from "components/stateful/Operations"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex flex-col mx-auto max-w-4xl mt-20 text-center bg-gray-50 p-5 space-y-10 rounded-md justify-center">
        <CardDrawn />
        <CardDeck />
        <Operations />
      </div>
    </DefaultLayout>
  )
}
