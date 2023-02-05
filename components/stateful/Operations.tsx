import { Button } from "components/stateless/button/Button"

export const Operations: React.FC = () => {
  return (
    <div className="space-x-5">
      <Button label="Shuffle" onClick={() => console.log("Shuffle button")} />
      <Button label="Sort" onClick={() => console.log("Sort button")} />
      <Button label="Shuffle" onClick={() => console.log("shuffle button")} />
      <Button
        label="Display/Hide cards"
        onClick={() => console.log("Display/Hide cards button")}
      />
    </div>
  )
}
