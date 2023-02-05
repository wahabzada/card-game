export interface CardProps {
  id: number
  unicode: string
  name: string
  show: boolean
  onClick: (event: React.MouseEvent) => void
  className: string
  disabled?: boolean
  loading?: boolean
}
