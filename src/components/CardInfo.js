import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo (props) {

    const style = useSpring({opacity: 1, from: {opacity:0}});

    return (
        <animated.div className ="" style={style}>
            <br></br>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Third Wheel
            </a>

            <p>{props.title}</p>
            <p>{props.subTitle}</p>
            
        </animated.div>
    );
}

export default CardInfo;