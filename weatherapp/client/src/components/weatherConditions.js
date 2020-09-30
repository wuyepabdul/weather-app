import React from "react";
export const weatherConditions = (rangeId) => {
  switch (true) {
    case rangeId >= 200 && rangeId <= 232:
      return (
        <div className="temp thunderstorm">
          <i className="fas fa-poo-storm"></i>
        </div>
      );
    case rangeId >= 300 && rangeId <= 321:
      return (
        <div className="temp drizzle">
          <i className="fas fa-cloud-rain"></i>
        </div>
      );
    case rangeId >= 500 && rangeId <= 531:
      return (
        <div className="temp rain">
          <i className="fas fa-cloud-showers-heavy"></i>
        </div>
      );
    case rangeId >= 600 && rangeId <= 622:
      return (
        <div className="temp snow">
          <i className="fas fa-cloud-meatball"></i>
        </div>
      );
    case rangeId >= 701 && rangeId <= 781:
      return (
        <div className="temp atmosphere">
          <i className="fas fa-cloud-moon"></i>
        </div>
      );
    case rangeId === 800:
      return (
        <div className="temp clear">
          <i className="fas fa-cloud-sun"></i>
        </div>
      );
    case rangeId >= 801 && rangeId <= 804:
      return (
        <div className="temp clear">
          <i className="fas fa-cloud"></i>
        </div>
      );
    default:
      return (
        <div className="temp weather">
          <i className="fas fa-cloud"></i>
        </div>
      );
  }
};
