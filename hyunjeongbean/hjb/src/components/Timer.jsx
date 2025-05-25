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
        <h2>🎉 현정빈 4주차 과제 성공!</h2>
        <span>⏳ {seconds} 초 후에 폭파됩니다</span>
      </div>
      )}
    </div>
  )
}

export default Timer;