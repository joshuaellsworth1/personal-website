import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router"
import Container from 'react-bootstrap/Container';
import './App.css';

class App extends React.Component() {

  constructor(props) {
    super(props);
    this.state = {
      title: "Josh Ellsworth",
      headerLinks: [
        {title: "Home", path: '/'},
        {title: "About", path: '/about'},
        {title: "Contact", path: '/contact'}
      ],
      home: {
        title: 'Simple. Clean. Fun.',
        subTitle: 'Apps that challenge and change',
        text: 'checkout projects below'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Talk',
      }
    }
  }

  render() {
  return (
    <Router>
      <Container fluid={true}>
        
      </Container>

    </Router>
    );
  }
}

export default App;
