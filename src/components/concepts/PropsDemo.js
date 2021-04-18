/* 
Props Overview
==============
 - Props are not the same as state
 - Received from above from a "parent" component
 - are immutable
 - are properties, a way to configure a component
 - can think of them as parameters to a function

Props can be multi-level: not passed directly from parent to child, but thorugh an intermediate component
 - props can be passed like through as many 'middlemen' components as you need

PropTypes
=========

*/


import {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {
    const [color, setColor] = useState("white");
    const [backgroundColor, setBackgroundColor] = useState("purple");
    const [borderRadius, setBorderRadius] = useState("5px");
    const [borderStyle, setBorderStyle] = useState("dashed");
    //const [display, setDisplay] = useState("inline-block");
    //const [width, setWidth] = useState("350px");
    const [textAlign, setTextAlign] = useState("center");

let styles = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    //display: display,
    //width: width,
    textAlign: textAlign
};

const toggleFont = () => {
    color === "white" ? setColor("pink") : setColor("white");
    textAlign === "center" ? setTextAlign("justify") : setTextAlign("center");
}

const toggleBackgroundColor = () => {
    backgroundColor === "purple" ? setBackgroundColor("black") : setBackgroundColor("purple");
}

const toggleBorderRadius = () => {
    borderRadius === "5px" ? setBorderRadius("30px") : setBorderRadius("5px");
}

const toggleBorderStyle = () => {
    borderStyle === "dashed" ? setBorderStyle("solid") : setBorderStyle("dashed");
}


    return(
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                <FunctionalComponent string='Will this display?' 
                noDuplicatePropsAllowed="I guess it will!" wumbo="It might not though"
                function={toggleFont} selectedStyle={`${color} and ${textAlign}`} />
                    {/* This component is passing a prop of "string" to another func comp */}
                <FunctionalComponent string="How does this move?" chumbo="Look at your notes"
                    function={toggleBackgroundColor} selectedStyle={backgroundColor}/>
                <FunctionalComponent chumbo="Hello, hello!" string="Good day, sir!"
                    function={toggleBorderRadius} selectedStyle={borderRadius}  />
                <FunctionalComponent string="This one's here for the function button!"
                    function={toggleBorderStyle} selectedStyle={borderStyle} />

                {/* Look at the order of:
                    - FunctionalComponent in the Parent Component
                    - string names (props) in those components
                    - props called in the FunctionalComponent itself
                    
                It appears that the order is determined 1)first by the Component placement <Functional Component />
                        2)second by the prop order in the child component
                        3)finally by the string/prop called inside each Component when it's called in the Parent

                While this arrangment may be confusing at first, it gives us the ability to create pretty dynamic components
                    */}
                </div>{/* {styles} div */}
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <p>{props.chumbo}</p>
            <p>{props.wumbo}</p>
            <button onClick={props.function}>Press Me!</button>
            <TinyComponent selectedStyle={props.selectedStyle} />
        </div>
    )
}

const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is: {props.selectedStyle}</p>
        </div>
    )
}

/* FunctionalComponent.defaultProps = {
    string: "DEFAULT. This is wild!",
    function: () => console.log("DEFAULT. Can I see this in my dev tools?"),
    selectedStyle: "DEFAULT. What style?"
} */
//DefaultProps exist when props are not provided.
//Notice how these fill in the FunctionalComponent info in the PropsDemo component when props are commented out.

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}