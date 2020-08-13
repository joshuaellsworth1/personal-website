import React from 'react';
import { useSpring, animated } from 'react-spring';
import Button from 'react-bootstrap/Button';

function CardInfo (props) {

    const style = useSpring({opacity: 1, from: {opacity:0}});

    return (
        <animated.div className ="" style={style}>
            <br></br>

            <Button style={{backgroundColor: "#E27D60"}}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View
            </a>
            </Button>
            <br></br>
            <br></br>

            <p>{props.title}</p>
            <p>{props.subTitle}</p>
            
        </animated.div>
    );
}

export default CardInfo;