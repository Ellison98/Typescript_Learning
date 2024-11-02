import React, { useState } from 'react';

// const Timer : React.FC = () => {
//     const [seconds, secondsSet] = useState<number>(0);

//     return (
//         <div>
//             <h2>Timer : {seconds}초</h2>
//             <button onClick={
//                 function() {
//                     setInterval(() => {
//                         secondsSet((prev) => prev + 1);
//                     }, 1000)
//                 }
//             }></button>
//         </div>
//     )
// }

const Timer : React.FC = () => {
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);

    return (
        <div>
            현재 시간 : {time.toLocaleTimeString()}
        </div>
    )
}

export default Timer;