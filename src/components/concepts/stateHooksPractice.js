/*
React Hooks
===========
You can only use Hooks in Functional Components - not in classes
useState() hooks must be called in the exact same order in every component render
    They can't be nested in "if", functions, etc.
    They have to be AT THE TOP of your Functional Component

useState always returns an array w/ 2 values

       //1      //2
const [count, setCount] = useState(4)

    //1 - The current state, "count".
    //2 - A function that will update the state.
*/

import React, {useState} from 'react';

function countInit() {
    console.log("run function")
    return 0;
};

const Counter = () => {
            //THERE ARE 2 WAYS TO PASS INFO INTO STATE: 
                        //1- Pass in something definite, "4"
    //const [count, setCount] = useState(4);


                        //2 - Pass in a function. Runs this function ONLY the 1st time your component renders
    /* const [count, setCount] = useState(() => {
        console.log('run function')
        return 0;
    }); */
                        //When we pass in an outside function, the function runs on every click see it runs evertime.
    //const [count, setCount] = useState(countInit());

                        //Whereas if we pass in a function THAT CALLS countInit, that run function doesn't run everytime we re-render the component
    const [count, setCount] = useState(() => countInit());
                    
    

    let decrementCount = () => {
        setCount(phn => phn - 1)
    }

    let incrementCount = () => {
        setCount(phn => phn + 1)
    }

    return(
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default Counter;