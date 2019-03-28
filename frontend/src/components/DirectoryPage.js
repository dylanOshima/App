import React, { Component } from 'react';
import persons from './../database';
import { peopleFilter } from './../utils';
import { Card } from 'react-materialize';

class DirectoryPage extends Component {
    state = {
      people : persons
    }
  
    render() {
      return (
        <div className="content">
            <header>
                <h1>Unicorn Directory</h1>
            </header>
            <input 
                id='directory-searchbar'
                type="text" 
                className="searchTerm" 
                placeholder="Who are you looking for?"
                onChange={({ target }) => {              
                this.setState(() => ({
                    people: peopleFilter(target.value, persons)
                }))
                }}
            />
            {
                this.state.people.map((person) => (
                    <Card horizontal title={`${person.firstName} ${person.lastName}`}>
                        <p>{`${person.position} - Currently at ${person.location}`}</p>
                    </Card>
                ))
            }
        </div>     
      );
    }
}

export default DirectoryPage;