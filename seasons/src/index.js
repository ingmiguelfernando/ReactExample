import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

export default class App extends Component {
  constructor(props) {
    super(props);
    //THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" };    
  }


  //We can use this without constructor.
  // state = { lat: null, errorMessage: ''};

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div> <SeasonDisplay lat = {this.state.lat}/> </div>;
    }
    return <div> <Spinner message="por favor acepte el gps"/></div>;
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
