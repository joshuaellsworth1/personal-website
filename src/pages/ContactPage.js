import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';


function ContactPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Github: https://github.com/joshuaellsworth1 </p>

                <p> LinkedIn: www.linkedin.com/in/joshuaellsworth1 </p>
            </Content>
        </div>
    )
}

export default ContactPage;