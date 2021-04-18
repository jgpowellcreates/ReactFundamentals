import React, {useState, useEffect} from 'react';
import { Row, Col } from 'reactstrap';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
            }, 1000);
        
            return () => clearInterval(interval);
        }, []);

    return(
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation" />
            <Row>
                <Col>
                <h4>Indianapolis/EST</h4>
                <p> It is currently {time}</p>
                </Col>
                <Col>
                <h4>Somewhere Else/EST</h4>
                <p> It is currently {time}</p>
                </Col>
            </Row>
        </div>
    )
}

export default ClockApp;