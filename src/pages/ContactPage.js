import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import './ContactPage.css';


function ContactPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content className="text-edit">
                <p>Github: https://github.com/joshuaellsworth1 </p>

                <p> LinkedIn: www.linkedin.com/in/joshuaellsworth1 </p>
            </Content>
        </div>
    )
}

export default ContactPage;