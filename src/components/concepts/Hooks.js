/* 
Hooks Overview
==============
Hooks earned their name because they let us "hook" into the life-cycle of a React component

Components have 3 phases to their lifetime on the page (in the DOM)
    1) Mount - they're initialized and first displayed to the page
    2) Update - this can happen many times. Involves the user input changes to the component
    3) Unmount - involves cleaning up memory issues and removing them from the page

    The update is the trickiest part.
    When props or state changes, React is signaled that the component needs to be re-painted to the browser
    React repaint the component and runs all effects
        Before the effect function fires, any cleanup function provided by a effect runs, then the effect callback fires
    This 4-step process can happen as many times as the user is interacting w/ this component and it's on screen
        1) State/prop change
        2) Re-paint
        3) Cleanup function firing
        4) Effect firing

We can write custom hooks to extract the state and efect logic of component into reusable hooks.
Hooks are functions that use the useState/useEffect API
    - Hooks start with 'use'
    - Hooks can hide some variables and make others available
    - Basically an API that we configure!


Some final words:
    - Hooks are not functional components and they have specialized jobs
    - Custom hooks reduce code redundancy. They're ultimately functions that exist to provude us reusable logic
 */

import React, {useState, useEffect} from 'react';
import Counter from './stateHooksPractice';
import EffectButtons from './effectHooksPractice';

//COMMENTED OUT. Component was rebuilt below as Hooks2. This it to prevent console Warnings 
/* const Hooks = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState('');

    const fetcher = () => {
        fetch(`https://swapi.dev/api/people/${query}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setResults(json);
            });
    }

    return(
        <div className="main">
            <div className="mainDiv">
                <input value={query} onChange={e => setQuery(e.target.value)}
                    placeholder="Enter your SW Character Number" />
                <button onClick={() => fetcher()}>Click for Character!</button>
                {results ? <h2>{results.name}</h2> : <div></div>}
            </div>
        </div>
    )
}
 */
//REBUILDING THE HOOKS COMPONENT FROM ABOVE//
//This time, we're including our Custom Hook into the component//
const Hooks2 = () => {
    const [results, queryNum, setQueryNum] = useNumHook('');
    const [clicks, setClicks] = useClicks(0);

    return(
        <div className="main">
            <div className="mainDiv">
                <h3>Enter a number below to see a number fact</h3>
                <input value={queryNum} onChange={e => setQueryNum(e.target.value)} placeholder="Enter a Number" />
                {results ? <h2>{results}</h2> : <div></div>}
                <button onClick={() => setClicks(clicks +1)}>Click to Update Document Title</button>
                <br />
                <br />
                <Counter />
                <br />
                <EffectButtons />
            </div>
        </div>
    )
}

const useNumHook = (num) => {
    const [queryNum, setQueryNum] = useState(num);
    const [results, setResults] = useState('');
    
    useEffect(() => {
        if(queryNum !== ''){
            console.log("state change means effects run!");
            fetch(`http://numbersapi.com/${queryNum}`)
            .then(res => res.text())
            .then(text => {
                setResults(text);
                console.log(text)
            })
        }
    }, [queryNum])
    
    return [results, queryNum, setQueryNum];
}

const useClicks = (initCount) => {
    const [clicks, setClicks] = useState(initCount);

    useEffect(() => {
        document.title = `You have clicked ${clicks} times`;
    }, [clicks])
    return [clicks, setClicks]
};

export default Hooks2;