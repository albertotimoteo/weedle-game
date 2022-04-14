import { BoardData } from '../../types'
import MoveCard from '../MoveCard'
import { BoardWrapper, EmptyCard, Row } from './styles'

type BoardProps = {
  boardData: BoardData
}

const Board = ({ boardData }: BoardProps) => (
  <BoardWrapper>
    {Object.values(boardData).map(row => (
      <Row>
        {row.map(cell =>
          cell.cardInformation ? (
            <MoveCard {...cell.cardInformation} />
          ) : (
            <EmptyCard />
          )
        )}
      </Row>
    ))}
  </BoardWrapper>
)

export default Board
