import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {GroupPreference} from "./Preferences";
import {GroupList} from "./GroupList";

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
              <p>Require experience</p>
              <input id="skilled" type="checkbox" onClick={this.changePreferences} /><br/>
              <p>Number of Groups </p>
              <input type="text" name="enter" value="" id="numgroup"/><br/>
              <GroupList children=""/>

          </header>

        </div>
      );
    }
}

export default App;
