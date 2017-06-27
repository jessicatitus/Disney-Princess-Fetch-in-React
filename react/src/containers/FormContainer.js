import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTitle: '',
      movieReleaseYear: '',
      movieRuntime: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({ [name]: value })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      movieTitle: '',
      movieReleaseYear: '',
      movieRuntime: ''
    })
  };

  handleFormSubmit(event) {
    event.preventDefault();
    let formPayload = {
      title: this.state.movieTitle,
      release_year: parseInt(this.state.movieReleaseYear, 10),
      runtime: parseInt(this.state.movieRuntime, 10)
    };
    this.props.addNewMovie(formPayload);
    this.handleClearForm(event);
  };

  render() {
    return(
      <form className="callout" onSubmit={this.handleFormSubmit}>
        <TextInputField
          content={this.state.movieTitle}
          label="Movie Title"
          name="movieTitle"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.movieReleaseYear}
          label="Movie Release Year"
          name="movieReleaseYear"
          handleChange={this.handleChange}
        />
        <TextInputField
          content={this.state.movieRuntime}
          label="Movie Runtime (in minutes)"
          name="movieRuntime"
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
