import React, { Component } from 'react';
import { Card } from 'react-materialize';
import './App.css'; // Tell Webpack that Button.js uses these styles
import persons from './database';
import UnicornNavbar from './components/UnicornNavbar';
import UnicornFooter from './components/UnicornFooter';
import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UnicornNavbar />
        
        <div className="content">
          <header>
            <h1>Unicorn Directory</h1>
          </header>
          <SearchBar />
          {
            persons.map((person) => (
              <Card horizontal title={`${person.firstName} ${person.lastName}`}>
                <p>{`${person.position} - Currently at ${person.location}`}</p>
              </Card>
            ))
          }
        </div>     
        <UnicornFooter/>
      </div>
    );
  }
}

export default App;
