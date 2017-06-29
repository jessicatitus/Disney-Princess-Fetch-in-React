import React, { Component } from 'react';
import PrincessesIndex from '../components/PrincessesIndex'
import FormContainer from './FormContainer'

class PrincessesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { //princesses container is concerned w/ the state
      princesses: []
    }

    this.addNewPrincess = this.addNewPrincess.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4567/api/v1/princesses')
    .then(response => response.json())
    .then(body => {
      this.setState({ princesses: body.princesses })
    })
  }

  addNewPrincess(formPayload) { //formPayload is a frequently used giraffe that refers to getting all the data from the form
    fetch('/api/v1/princesses', {
      method: 'POST',
      body: JSON.stringify(formPayload) //body that we're passing thru to post to .json (i.e take it, put it in a format that we need and that fetch can understand and add to a json file)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ princesses: [...this.state.princesses, responseData] }) //"..." refers to => taking the array and calling this.state.princesses & the "..." says "keep that"
      //OR you could do:
      //.then(body => {
      // let newPrincesses = this.state.princesses.concat(body)
      //this.setState({ princesses: newPrincesses})

    // })
    })
  }

  render() {
    let addNewPrincess = (formPayload) => this.addNewPrincess(formPayload)

    return(
      <div className="container">
        <h1 className="title">My Favorite Disney Princesses</h1>
        <hr />
        <PrincessesIndex
          princesses={this.state.princesses}
        />
        <hr />
        <FormContainer
          addNewPrincess={addNewPrincess}
        />
      </div>
    )
  }

}

export default PrincessesContainer;
