import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

export default class Button extends Component {
    renderSubmit(language){
        return language === "english" ? "Submit" : "Voorlegen"

    }
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {({language}) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
