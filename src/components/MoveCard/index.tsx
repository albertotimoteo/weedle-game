import { pokemonTypes } from '../../types'
import { Card } from './styles'

type MoveCardProps = {
  moveName: string
  moveType: pokemonTypes
}

const MoveCard = ({ moveName, moveType }: MoveCardProps) => (
  <Card moveType={moveType}>{moveName}</Card>
)

export default MoveCard
