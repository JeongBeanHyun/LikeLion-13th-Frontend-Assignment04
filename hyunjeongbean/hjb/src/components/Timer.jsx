import { useEffect, useState } from "react";
import './Timer.css'

const Timer = () => {
  const[seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev -1);
    }, 1000); // 1초마다 상태변경

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      {seconds > 0 && (
      <div className='modal'>
        <h2>🍀 행운의 메세지가 도착했습니다!</h2>
        <h4>행운 넘치는 하루되세요~😊</h4>
        <span>⏳ {seconds} 초 후에 폭파됩니다</span>
      </div>
      )}
    </div>
  )
}

export default Timer;