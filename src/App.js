import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAbrsL9hPEqF_d9gEGbEZHGHNd02DW2dw",
  authDomain: "women-speakers.firebaseapp.com",
  databaseURL: "https://women-speakers.firebaseio.com",
  storageBucket: "women-speakers.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const Speakers = [
    {
        firstName: "Jessica",
        lastName: "Rabbit",
        photo: "http://placehold.it/150x150",
        expertise1: "Bunnies",
        expertise2: "Rabbits",
        expertise3: "Heels",
        expertise4: "Lips"
    },
    {
        firstName: "Bugs",
        lastName: "Bunny",
        photo: "http://placehold.it/150x150",
        expertise1: "Bunnies",
        expertise2: "Rabbits",
        expertise3: "Ears",
        expertise4: "Carrots"
    },
    {
        firstName: "Elmira",
        lastName: "?",
        photo: "http://placehold.it/150x150",
        expertise1: "Bunnies",
        expertise2: "Rabbits",
        expertise3: "Hugs",
        expertise4: "Squishes"
    },
    {
        firstName: "Jay",
        lastName: "Phelps",
        photo: "http://placehold.it/150x150",
        expertise1: "Hamburgers",
        expertise2: "Web Assembly",
        expertise3: "French Fries",
        expertise4: "Bae"
    },
    {
        firstName: "Ben",
        lastName: "Lesh",
        photo: "http://placehold.it/150x150",
        expertise1: "Yogurt",
        expertise2: "Protein",
        expertise3: "RxJS",
        expertise4: "Children"
    },
    {
        firstName: "Ben",
        lastName: "Lesh",
        photo: "http://placehold.it/150x150",
        expertise1: "Yogurt",
        expertise2: "Protein",
        expertise3: "RxJS",
        expertise4: "Children"
    },
    {
        firstName: "Ben",
        lastName: "Lesh",
        photo: "http://placehold.it/150x150",
        expertise1: "Yogurt",
        expertise2: "Protein",
        expertise3: "RxJS",
        expertise4: "Children"
    },
    {
        firstName: "Ben",
        lastName: "Lesh",
        photo: "http://placehold.it/150x150",
        expertise1: "Yogurt",
        expertise2: "Protein",
        expertise3: "RxJS",
        expertise4: "Children"
    },
    {
        firstName: "Ben",
        lastName: "Lesh",
        photo: "http://placehold.it/150x150",
        expertise1: "Yogurt",
        expertise2: "Protein",
        expertise3: "RxJS",
        expertise4: "Children"
    }
]; 

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class App extends Component {
  render() {
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
              <div style={styles.root}>
              <GridList
                cellHeight={180}
              >
                {Speakers.map((speaker) => (
                  <GridTile
                    key={speaker.photo}
                    title={speaker.firstName}
                  >
                    <img src={speaker.photo} />
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
          <div className="Margin-30 TextCenter">
            <form>
              <div>
                <span className="SpanMargin-10">
                  <TextField hintText="First Name"/>
                </span>
                <span className="SpanMargin-10">
                  <TextField hintText="Last Name"/>
                </span>       
              </div>
              <div>
                <span className="SpanMargin-10">
                  <TextField hintText="Twitter Handle URL"/>
                </span>
                <span className="SpanMargin-10">
                  <TextField hintText="LinkedIn URL"/>
                </span>       
              </div>
              <div>
                <span className="SpanMargin-10">
                  <TextField hintText="Title"/>
                </span>
                <span className="SpanMargin-10">
                  <TextField hintText="Name of Company"/>
                </span>       
              </div>
              <div>
                <span className="SpanMargin-10">
                  <TextField hintText="Paragraph Bio"/>
                </span>       
                <span className="SpanMargin-10">
                  <TextField hintText="Personal Website (if any)"/>
                </span>       
              </div>
              <div>
                <span className="SpanMargin-10">
                  <TextField hintText="Field of Expertise (1)"/>
                </span>
                <span className="SpanMargin-10">
                  <TextField hintText="Field of Expertise (2)"/>
                </span>       
              </div>
              <div>
                <span className="SpanMargin-10">
                  <TextField hintText="Field of Expertise (3)"/>
                </span>
                <span className="SpanMargin-10">
                  <TextField hintText="Field of Expertise (4)"/>
                </span>       
              </div>
              <div>
                <span className="SpanMargin-10">
                  <TextField hintText="Previous speaking example - URL"/>
                </span>
                <span className="SpanMargin-10">
                  <TextField hintText="Previous speaking example - URL"/>
                </span>       
              </div>
              <div>
                <span className="SpanMargin-10">
                  <TextField hintText="Previous speaking example - URL"/>
                </span>
                <span className="SpanMargin-10">
                  <TextField hintText="Previous speaking example - URL"/>
                </span>       
              </div>
              <div>
                <span className="SpanMargin-10">
                  <TextField hintText="Previous speaking example - URL"/>
                </span>
                <span className="SpanMargin-10">
                  <TextField hintText="Previous speaking example - URL"/>
                </span>       
              </div>
              <span className="SpanMargin-10"><RaisedButton label="Submit" secondary={true}/></span>
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
