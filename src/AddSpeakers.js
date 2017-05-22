import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { database } from './database';

const rows = [
  [{
    hintText: 'First Name',
    stateKey: 'firstName'
  }, {
    hintText: 'Last Name',
    stateKey: 'lastName'
  }],
  [{
    hintText: 'Twitter Handle URL',
    stateKey: 'twitterHandleURL'
  }, {
    hintText: 'LinkedIn URL',
    stateKey: 'linkedInURL'
  }]
];

export class AddSpeakers extends Component {
  state = rows.reduce((state, columns) =>
    columns.reduce((state, { stateKey }) => {
      state[stateKey] = '';
      return state;
    }, state)
  , {});

  changeTextField = (fieldName, newValue) => {
    this.setState({
      [fieldName]: newValue
    });
  };

  submitForm = () => {
    console.log(this.state);
    const ref = database.ref().push();

    ref.set({
      id: ref.key,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });
  };

  render() {
    return (
      <div className="Margin-30 TextCenter">
        <form>
          {rows.map((columns, i) =>
            <div key={i}>
              {columns.map(({ hintText, stateKey }) =>
                <span key={stateKey} className="SpanMargin-10">
                  <TextField
                    hintText={hintText}
                    value={this.state[stateKey]}
                    onChange={(event, newValue) => this.changeTextField(stateKey, newValue)}
                  />
                </span>
              )}   
            </div>
          )}
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
          <span className="SpanMargin-10">
            <RaisedButton
              label="Submit"
              secondary={true}
              onTouchTap={this.submitForm}
            />
          </span>
        </form>
      </div>
    );
  }
}
