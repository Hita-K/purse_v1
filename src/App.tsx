import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {GroupPreference} from "./Preferences";

class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            group_preferences : null
        };
    }

    //changes the preferences
    changePreferences = (event: any) => {
        // this.setState();
    };

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Welcome to PURSE!
            </p>
            <input id="skilled" type="checkbox" onClick={this.changePreferences} />Require experience<br/>
              <input type="text" name="enter" value="" id="numgroup"/> Number of Groups <br/>


          </header>

        </div>
      );
    }
}

export default App;
