import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    princessName: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value; //track the value
    let name = event.target.name; //track the name
    this.setState({ [name]: value }) //dynamically tracks whatever you put in (grabs princessTitle, princessReleaseYear, princessRuntime)
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
    princessName: ''
    })
  };

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: this.state.princessName
    };
    this.props.addNewPrincess(formPayload);
    this.handleClearForm(event);
  };

  render() {
    return(
      <form className="callout" onSubmit={this.handleFormSubmit}>
        <TextInputField
          content={this.state.princessName}
          label="Princess Name"
          name="princessName"
          handleChange={this.handleChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
export default FormContainer;
