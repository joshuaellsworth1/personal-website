import React from 'react';

import Card from '../components/Card';

import fridge from '../assets/images/fridge.png';
import tricycle from '../assets/images/tricycle.png';
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
                    title: 'Friendly Fridge',
                    subTitle: "Never let your food spoil again",
                    imgSrc: fridge,
                    link: 'https://glacial-brushlands-77323.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Third Wheel',
                    subTitle: "Find a group, based on interest",
                    imgSrc: tricycle,
                    link: 'https://thirdwheel.herokuapp.com/',
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