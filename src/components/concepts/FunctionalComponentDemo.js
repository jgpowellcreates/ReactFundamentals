/* 
A functional Component is essentially a function. We need to call a function to use it.

Functional components have the following capabilities/traits:
    1. Rendering of information w/ or w/o changing state
    2. Hook ready --useState and useEffect can cause informational and presentational changes
    3. No "this" keyword. (Class components use "this")
    4. Often used as child components that will receive properties ("props") from a parent component
*/

import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,
    Container, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo = () => {
    return(
        <Container className="main">
            <Container className="mainDiv">
            <Row>
                <Col xs="12">
                    <h1>Functional Component</h1>
                    <p>Functional components are the primary tool in React to build a small, modular piece of your page.<br />
                    A Functional Component is essentially a function. We need to call a function to use it.<br />
                    Therefore, like with Express, we need to export and import this component for use.</p>
                    
                    <dl>
                        <dt className="dataTerm">Can Use State</dt>
                        <dd>With the 'useState' hook, functional components can now both redner a display to the page and update the information to be shown.</dd>
                        <dt className="dataTerm">No 'this' keyword</dt>
                        <dd>Older clas components use 'this', functional components have no 'this' object.</dd>
                        <dt className="dataTerm">Can use effects</dt>
                        <dd>With the 'useEffect' hook, functional components can perform side effect with any props or state changes.</dd>
                        <dt className="dataTerm">return()</dt>
                        <dd>Must return a single element, but this element mya have nested elements inside.</dd>
                    </dl>
                    <br />
                    <h1>Functional Syntax versus Arrow Function</h1>
                </Col>
            </Row>
            <hr />
            <h1>Challenge 1</h1>
            <Row>
                <Col md="6">
                    <HelloWorldFatArrow className="logo"/>
                </Col>
                <Col md='6'>
                    <HelloWorld />
                    </Col>
            </Row>
            </Container>
        </Container>
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function() {
    return(
        <div>
            <Card>
                <CardImg width="100%" height="280px" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="card cap" />
                    <CardBody>
                            <CardTitle>Regular Style Function</CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>const HelloWorld = function()</CardText>
                            <Button>Click Me!</Button>
                    </CardBody>
            </Card>
        </div>
    )
};

//fat arrow function component - cuts out a few extra lines

const HelloWorldFatArrow = () =>
    <div>
        <Card>
            <img width="100%" height="280px" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" alt="card cap" />
            <CardBody>
                <CardTitle>Fat Arrow in Action!</CardTitle>
                <CardSubtitle>Using this syntax saves space</CardSubtitle>
                <CardText>const HelloWorld = ( ) => </CardText>
                <Button>I Want to be Touched</Button>
            </CardBody>
        </Card>
    </div>