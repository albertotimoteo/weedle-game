import Board from './components/Board'
import { GameWrapper } from './styles'
import { BoardData, Slot } from './types'

const emptySlot = {
  cardInformation: undefined,
  gameState: undefined,
}

const card1: Slot = {
  cardInformation: {
    moveType: 'poison',
    moveName: 'Acid',
  },
  gameState: 'not-checked',
}

const card2: Slot = {
  cardInformation: {
    moveType: 'grass',
    moveName: 'Razor Leaf',
  },
  gameState: 'not-checked',
}

const board: BoardData = {
  1: [card1, card2, emptySlot, emptySlot],
  2: [emptySlot, emptySlot, emptySlot, emptySlot],
  3: [emptySlot, emptySlot, emptySlot, emptySlot],
  4: [emptySlot, emptySlot, emptySlot, emptySlot],
  5: [emptySlot, emptySlot, emptySlot, emptySlot],
}

function App() {
  return (
    <GameWrapper>
      <Board boardData={board} />
    </GameWrapper>
  )
}

export default App
