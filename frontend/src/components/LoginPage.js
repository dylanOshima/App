import React from 'react';
import Button from 'react-materialize/lib/Button';

const LoginPage = () => (
    <div className="input-field center bottom-padding">
        <header>
            <h1>Your Profile</h1>
        </header>
        <div className="row">
            <form className="col s12">
                <h4>What is your name?</h4>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <h4>What email would you like to use for communications?</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="emails_address" type="email" className="validate"/>
                        <label htmlFor="emails_address">Email</label>
                    </div>
                </div>
                <h4>Where are you currently based?</h4>
                <div className="row">
                    <div className="input-field col s4">
                        <input id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">City/Town</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name">State/Prefecture</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name">Country</label>
                    </div>
                </div>
                <h4>Where are you originally from?</h4>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="origin_country_1" type="text" className="validate"/>
                        <label htmlFor="origin_country_1">Country 1</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="origin_country_2" type="text" className="validate"/>
                        <label htmlFor="origin_country_2">Country 2</label>
                    </div>
                </div>
                <h4>What is your current position?</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Alumni</option>
                            <option value="2">Current Student</option>
                        </select>
                        <label>Position</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
            </form>
            <Button>Update</Button>
        </div>
    </div>
);

export default LoginPage;
