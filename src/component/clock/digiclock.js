import React, { useState, useEffect } from 'react';
import './digi.css';

const Digiclock = () => {
    const [time, settime] = useState(new Date().toLocaleString());
    useEffect(() => {
        document.getElementById("hour").innerHTML=new Date().getHours();
        document.getElementById("minute").innerHTML = new Date().getMinutes();
        document.getElementById("second").innerHTML = new Date().getSeconds();

        setInterval(() => {
            settime(new Date().toLocaleString())
        },1000);
    })
    return (
    <div id="body">
        <div id="clock">
            <h2>Time is now</h2>
            <div id="time">
                <div><span id="hour">00</span><span>hours</span></div>
                <div><span id="minute">00</span><span>Minutes</span></div>
                <div><span id="second">00</span><span>seconds</span></div>
            </div>
        </div>
    </div>
    )
}
export default Digiclock;