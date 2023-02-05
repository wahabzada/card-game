import { SetStateAction, useState } from "react"

export const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState<String>(initialValue)

  const handleChange = (e: { target: { value: SetStateAction<String> } }) => {
    setValue(e.target.value)
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  }

  return inputProps
}
