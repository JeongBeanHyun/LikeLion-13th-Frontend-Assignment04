import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer';

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {<button className='btn' onClick={() => setShowModal(!showModal)}>모달 보기</button>}
      {showModal && <Timer />}
    </div>
  );
}

export default App;
