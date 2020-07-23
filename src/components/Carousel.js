import React from 'react';

import Card from '../components/Card';

import google from '../assets/images/google.png';
import youtube from '../assets/images/youtube.png';
import github from '../assets/images/github.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'google',
                    subTitle: "A search engine",
                    imgSrc: google,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Josh Ellsworth',
                    subTitle: "youtube",
                    imgSrc: youtube,
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: "Personal Github with projects",
                    imgSrc: github,
                    link: 'https://github.com/joshuaellsworth1',
                    selected: false
                }

            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;