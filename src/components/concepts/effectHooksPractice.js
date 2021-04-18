/* 
React Hooks - useEffect
=======================


In our example, we're going to pull from an API based on what resourceType we have selected.
So, we need our component to react whenever there is a change (that's the effect!)
*/


import React, {useState, useEffect} from 'react';

const EffectButtons = () => {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);
    //console.log("render!");

    useEffect(() => {
        console.log("On Mount");
    }, []); //because this won't see any change, this will only ever run when our component first mounts

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);
        //useEffect takes in a 2nd argument -> values that, when changed, run the hook

    return(
        <div>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h4>{resourceType}</h4>
        </div>
    )
}

export default EffectButtons;