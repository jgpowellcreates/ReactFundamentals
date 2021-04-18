import React from "react";
//we need to import React when we call it - in CreateElementComponent we use React.createElement
//however, if we eliminate that component, the JSX in NormalComponent continues to run fine
    //Is it's interpretation being held off until it reaches App.js?

/*
DIFFERENCES BETWEEN JSX/HTML
============================
1) "className" instead of "class" --> 'class' is a reserved word in JS, so we assign classes to JSX elements w/ "className" attribute
2) Event handler differences --> React camel cases its event handler names, unlike HTML.
    ie. React gives us access to 'onChange' or 'onClick' instead of HTML's 'onchange' or 'onclick'
3) JavaScript interpolation --> JSX allows us to write JavaScript within braces {} and interprets that JS in the context of the JSX
    This will help us build more dynamic components since variables and function names can be used directly inside the JSX code
*/

import {Container} from "reactstrap";

const JSXRules = () => {
    return(
        <Container className = "main">
            <div className="mainDiv">
                <h1 className="section-title">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's actually closer to JavaScript.</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or waht you see on the screen.</dd>
                    <dt>Not required</dt>
                    <dd>You can write in vanilla JS, but most people use JSX.</dd>
                </dl>
                <hr />
            </div>
            <NormalComponent />
            <CreateElementComponent />
        </Container>
    );
};

export default JSXRules;

const NormalComponent = () => {
    return(
        <div style={{ border: '2px solid black'}}>
            <h1>Normal Functional Component</h1>
            <p>This was constructed with JSX in the return.</p>
            <img src="https://pbs.twimg.com/media/DOzL82mXkAA0zFs.jpg" alt="jsx" />
        </div>
    );
};

const CreateElementComponent = () => {
    return(
        React.createElement(
            "div",
            {style: {border: "2px solid black"}},
                React.createElement("h1", null, "Functional Component Built w/ createElement method"),
                React.createElement("p", null, "This was constructed w/ pure JavaScript"),
                React.createElement("img",
                    {
                        src: "https://cdn.lynda.com/course/688546/688546-637491201921862347-16x9.jpg",
                        style: {width: "300px", border: "2px dotted brown"}
                    }
                )
        )
    )
}