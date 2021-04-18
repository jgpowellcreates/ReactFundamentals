import React, {useState, useEffect, useRef} from 'react';

const Stopwatch = () => {
    const startTimeRef = useRef(0);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        if(isRunning) {
            const interval = setInterval(update,10);
            return () => {clearInterval(interval)}
        }
    })
    
    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now()
    }

    const stop = () => {
        setIsRunning(false);
    }

    const update = () => {
        const delta = Date.now() - startTimeRef.current;
        setTime(time + delta);
        startTimeRef.current = Date.now();
    }

    const lap = () => {
        setLaps([...laps, time]);
    }

    const reset = () => {
        setTime(0);
        setLaps([]);
    }


    return(
        <div>
            <h1 className="section-title">React Stopwatch</h1>
            <p>  {/* Math.floor rounds our numbers so they look nicer */}
                {Math.floor((time / 1000) / 60).toString()} : {/* Top line, we divide by 1000 to display seconds, not milliseconds. Then we divide seconds by 60 to get minutes passed */}
                {Math.floor((time / 1000) % 60).toString()} {/* We use the modulus below to get remaining seconds */}
            </p>
            {
                isRunning ? <button onClick={stop}>Stop</button>
                : <button onClick={start}>Start</button>
            }
            {
                isRunning ? <button onClick={lap}>Lap</button>
                : <button onClick={reset}>Reset</button>
            }
            { laps.map(time => {
                return (
                    <p>
                        { Math.floor((time / 1000) / 60).toString()} :
                        { Math.floor((time / 1000) % 60).toString()}
                    </p>
                )
            })
            }
        </div>
    );
};

export default Stopwatch;