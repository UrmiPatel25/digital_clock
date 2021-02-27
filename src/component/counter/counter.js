import React, { useState, useEffect } from 'react';
import './count.css';


const test = () => {
    console.log("test called");
    return 0;
}
const Counter = () => {
    const [cnt, setcnt] = useState(() => test());
    const [mflag, setflag] = useState(true);
    useEffect(() => {
        console.log(`counter value ${cnt}`);
        console.log(mflag);
    },[cnt])
    const clickHandler = () => {
        setcnt((prevCnt) => prevCnt + 1);
        //for counter++
       // setcnt((prevCnt) => prevCnt + 1);
    }
    return (
        <div className="cbody">
            <div className="counter">
                
                    <h1>Counter:{cnt}</h1>
                <h1>{"flag:" + mflag}</h1>
                <div className="btns"><button className="btn" onClick={clickHandler}>increament</button>
                    <button className="btn" onClick={() => setflag(!mflag)}>flag</button></div>
                
            </div>
           
            
                  
       
            
        </div>
    )
}
export default Counter;