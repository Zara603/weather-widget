import React from "react";
import sun from "../../Icons/sun.svg";
import "./style.css";

class Widget extends React.Component {
  render() {
    const { title, wind, unit, temp, windSpeed } = this.props;
    let unitTemp =
      unit === "fahrenheit"
        ? Math.floor((parseInt(temp) - 273.15) * 9 / 5 + 32)
        : Math.floor(parseInt(temp) - 273.15);
    if (isNaN(unitTemp)) {
      unitTemp = "20";
    }
    const unitLetter = unit === "fahrenheit" ? "℉" : "℃";

    return (
      <section className="widget">
        <div className="widget-title">{title}</div>
        <div className="widget-content">
          <div>
            {" "}
            <img src={sun} className="widget-logo" alt="logo" />
          </div>
          <div className="widget-details">
            <div>sydney</div>
            <div className="widget-temp">
              {unitTemp}
              {unitLetter}
            </div>
            {wind === "windOn" && (
              <div className="widget-wind">
                <div className="widget-label">{windSpeed}</div>
                <div>32km</div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Widget;
