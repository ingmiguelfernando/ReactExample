import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    //THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" };    
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude: {this.state.lat} </div>;
    }
    return <div> Loading ... </div>;
  }

  componentDidMount(){
    this.getPosition();
  }

  getPosition() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setstate!!!!
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
