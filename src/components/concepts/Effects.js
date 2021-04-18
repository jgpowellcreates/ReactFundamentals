/* 
useEffect Overview
==================
 - effects are an abbreviation for component "side effects" -> actions that occur when there is a state change
    ie. a user clicks a button to submit a character to search for in an API
        the effect will handle the fetch based upon the state change of the var tied to that button

Effects - actions that occur when there's a state change

useEffect Syntax
================
useEffect(callback function, [dependency 1, dependency 2, ...]);

useEffect(() = > {      //FIRST we have a callback function that console.logs "hello"
    console.log('hello!');
}, [sampleStateVariable])  //2ND, variable in array brackets.
                //whenever there's a change to 'sampleStateVariable', the function runs it's console log a single time


A few big ideas for effects:
    1) useEffect is, like state, a Hook. We are 'hook'-ing into changes to our component w/ a useEffect call
    2) Every useEffect call runs the function we pass it when there's a state change (there are some exceptions)
    3) You can write a conditional in your callback function or use the array dependency to handle when the effect runs
    4) They can return a cleanup function to avoid memory leaks.
 */

import {useState, useEffect} from 'react';

const Effects = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h2>Below are some important points regarding effects</h2>
                <ul>
                    <li className="bulletPoint">They are triggered with state and props updates, as well as after initial render to the DOM</li>
                    <li className="bulletPoint">Effects are used to trigger certain actions based upon changes to a component</li>
                    <li className="bulletPoint">effects can return cleanup functions, which can clean up timers using memory, listening to ourside API's, and other functions which may use system resources</li>
                </ul>
                <SampleEffect />
                <br />
                <SampleEffect />
            </div>
        </div>
    );
};

export default Effects;


const SampleEffect = () => {

    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (timerRunning) {
            timer = window.setTimeout(() => {
                console.log('the timer expired', Date.now()/1000);
                setTimerRunning(false);
            }, 2000)
        };
        
        return () => {window.clearTimeout(timer); console.log('the timer was cleaned up', Date.now()/1000)};
    });

    useEffect(() => {
        console.log("Oh, my mind is going through [state] changes!")
    }, [timerRunning]);

    let buttonHandler = () => {
        if (!timerRunning) {
            setTimerRunning(true);
        }
    };

    return(
        <div style={{border: '1px dashed black'}}>
            <h2>This component demos an effect</h2>
            <button onClick={buttonHandler}>Click me to start an effect in the console.</button>
        </div>
    );
};