import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/react-toolbox/theme.css';
// import './assets/material-design/roboto.css';
// import './assets/material-design/material-icon.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Button from 'react-toolbox/lib/button/Button';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>I've just did!</p>
          <Button label="Test Button" raised primary />
          <Button icon='inbox' label='Inbox' flat />
          <Button icon='add' floating />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
