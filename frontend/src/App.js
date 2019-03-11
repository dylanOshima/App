import React, { Component } from 'react';
import { Navbar, NavItem, Footer, Card } from 'react-materialize';
import './App.css'; // Tell Webpack that Button.js uses these styles
import persons from './database'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UnicornNavbar />
        <div className="content">
          <header>
            <h1>Unicorn Directory</h1>
          </header>

          {
            persons.map((person) => (
              <Card horizontal title={`${person.firstName} ${person.lastName}`}>
                <p>{person.position}</p>
                <p>{`Currently at ${person.location}`}</p>
              </Card>
            ))
          }
        </div>     
        <UnicornFooter/>
      </div>
    );
  }
}

const UnicornNavbar = () => (
  <Navbar>
    <NavItem onClick={() => console.log('test click')}>About</NavItem>
    <NavItem href='components.html'>Connect</NavItem>
    <NavItem href='components.html'>Directory</NavItem>
    <NavItem href='components.html'>Help</NavItem>
  </Navbar>
);

const UnicornFooter = () => (
  <Footer 
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">Give Us Feedback!</a>
    }
    links={
      <ul>
        <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Connect</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Directory</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Help</a></li>
      </ul>
    }
    className="footer"
  >
    <h5 className="white-text">ISAK Unicorn</h5>
    <p className="grey-text text-lighten-4">At the ISAK Unicorn we strive to bring the students, faculty and alumni all closer together.</p>
  </Footer>
);

export default App;
