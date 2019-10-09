import React, { Component } from "react";


const seasonConfig = {
    summer: {
        text: "let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }
  else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

export default class SeasonDisplay extends Component {
  render() {
    const season = getSeason(this.props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return <div>Season: {text} , season icon: {iconName}</div>;
  }
}
