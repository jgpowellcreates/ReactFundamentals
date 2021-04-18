/* 
State Overview
==============
State is information that a component stores and keeps track of (which may change over time)
State can be a primitive data type (string, boolean) or complex data (function, object, array)
 
1. State data is local to the component it's stored in.
    Props allow us to break this rule somewhat, but state is only in the component where it's defined by default
2. State data is usually representational (data that the user will see), but it doesn't have to be
3. Changing state updates the component to the screen
    Along with props, changing the state data of a component 're-fires' the component


useState Syntax
===============
const [//1 stateVariable, //2 setStateVariable] = useState(<initial value here>);

useState uses array destructuring to provide two things:
    1) state variable (w/ whatever provided name) - equal to the initial value provided to useState
    2) access to a function - by convention is called "set<state variable name here>"
        this function is the ONLY way you should EVER change a state variable.
        it not only changes the value of the state variable, but also 're-fires' the component

useState should be declared at the top level of our component
*/

import { useState } from 'react';

const State = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>UseState is unique to Functional Components</dt>
                    <dd>Class components have a separate means of using and changing state</dd>
                    <dt>useState uses array destructuring</dt>
                    <dd>UseState provides a state variable and a setState function</dd>
                    <dt>useState is a Hook</dt>
                    <dd>useState is a hook baked into React</dd>
                    <dt>Triggers re-renders</dt>
                    <dd>Like with props changes, changing the state of a component re-renders the whole component</dd>
                </ul>
            <StateExample />
            </div>
        </div>
    );
};

export default State;

function StateExample() {

    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <br />
            <br />
            <img   
                style={{width: '100px', height: '100px'}}
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" alt="thumb"
                onClick={() => setLikeNum(likeNum + 1)}
            />
            <span>{likeNum}</span>
        </div>
    );
};
/* The process we'll see goes:
    1) User inputs to the input field
    2) Event handler initiates a state change to our 'text' variablee
    3) Because we initiated a state change, the componet re0first w/ new value of the text variable

This process is called "2-way binding".
State variable value is determined by the input field & the input field value is determined by the state variable value.


*/