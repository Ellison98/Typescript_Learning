import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { appContainer, board, buttons, } from './App.css.ts'
import BoardList from './components/BoardList/BoardList'

function App() {

const [activeBoardId, setActiveBoardId] = useState('board-0');

  return (
    <div className={appContainer}>
      <div className={board}>
        <BoardList 
          activeBoardId={activeBoardId} 
          setActiveBoardId={setActiveBoardId}/>
      </div>

      <div className={buttons}>
        <button>
          이 게시판 삭제하기
        </button>
        <button>
          활동 목록 보이기
        </button>
      </div>
    </div>
  )
}

export default App
