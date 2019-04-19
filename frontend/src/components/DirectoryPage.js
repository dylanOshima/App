import React, { Component } from 'react';
import persons from './../database';
import { peopleFilter } from './../utils';
import { Card, Row, Col } from 'react-materialize';

/**
 * Returns JSX of the visualization depending on the visualOption
 * 
 * @param {String} visualOption The visual display option 
 * @param {Object} peopleArray Array of the people object
 */
const DirectoryVisualization = (visualOption, peopleArray) => {
    switch (visualOption) {
        case "List": 
            return peopleArray.map((person) => (
                <Card horizontal title={`${person.firstName} ${person.lastName}`}>
                    <p>{`${person.position} - Currently at ${person.location}`}</p>
                </Card>
            ));
        case "Cards":
            return (
                <Row>
                {
                    peopleArray.map((person) => (
                        <Col l={3} m={6} s={12}>
                              <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src={person.image}/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">{`${person.firstName} ${person.lastName}`}<i className="material-icons right">more_vert</i></span>
                                    <p>{person.position}</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">{person.position}<i className="material-icons right">close</i></span>
                                    <p>{person.location}</p>
                                    <p>{person.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))
                }
                </Row>
            )
    }
}

class DirectoryPage extends Component {
    state = {
        visualOption: "Cards",
        people : persons
    }
  
    render() {
      return (
        <div className="content">
            <header>
                <h1>Unicorn Directory</h1>
            </header>
            <div className="switch bottom-padding">
                <label>
                    Cards
                <input 
                    type="checkbox"
                    onChange={({ target })=> {
                        if (target.checked) {
                            this.setState(() => ({
                                visualOption: "List"
                            }))
                        } else {
                            this.setState(() => ({
                                visualOption: "Cards"
                            }))
                        }
                    }}
                />
                <span class="lever"></span>
                    List
                </label>
            </div>
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
                DirectoryVisualization(this.state.visualOption, this.state.people)
            }
        </div>     
      );
    }
}

export default DirectoryPage;