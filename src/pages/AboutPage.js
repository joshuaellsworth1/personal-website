import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Josh. I am a web developer with experience in React JS, Expres JS, MongoDB, Node JS, and Express JS.</p>

                <p> I am looking to start my career as a Web Developer with a focus in the Front End.</p>
            </Content>

        </div>
    );
}

export default AboutPage;