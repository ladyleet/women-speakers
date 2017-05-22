import React, { Component } from 'react';
import './App.css';
import * as lodash from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { GridList, GridTile } from 'material-ui/GridList';
import { AddSpeakers } from './AddSpeakers';
import { database } from './database';

class App extends Component {
  state = {
    women: []
  };

  componentDidMount() {
    database.ref()
      .on('value', snapshot => {
        this.setState({
          women: lodash.values(snapshot.val())
        });
      });
  }

  render() {
    const { women } = this.state;

    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Women Speakers" />
          <div className="Margin-30">
            <h4>This app gives you access to a database of women speakers. </h4>
            <h4>Add yourself or other female speakers to this directory!</h4>
          </div>  
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="Recently Added Speakers"/>
            </ToolbarGroup>
          </Toolbar>
          <div className="Margin-30">
            <div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              }}>
             <GridList
                cellHeight={180}
              >
                {women.map(speaker => (
                  <GridTile
                    key={speaker.id}
                    title={speaker.firstName}
                  >
                    <img
                      src={speaker.photo}
                      alt={`${speaker.firstName} ${speaker.lastName}`}
                    />
                  </GridTile>
                ))}
              </GridList>
            </div>
            </div>
          </div>
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="Find Speakers"/>
            </ToolbarGroup>
          </Toolbar>
          <div className="Margin-30 TextCenter">
            <div>
              <span className="SpanMargin-10"><TextField hintText="Search Women"/></span>
              <span className="SpanMargin-10"><RaisedButton label="Submit" primary={true}/></span>
              <span className="SpanMargin-10"><RaisedButton label="Give Me a Random Speaker" secondary={true}/></span>
            </div>
          </div>
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="Add Speakers"/>
            </ToolbarGroup>
          </Toolbar>
          <AddSpeakers/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
