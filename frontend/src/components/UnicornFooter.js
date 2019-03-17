import React from 'react';
import { Footer } from 'react-materialize';

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

export default UnicornFooter;