/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Component } from "react";
import "./App.css";
import { Table, Button } from "reactstrap";
import Flags from "country-flag-icons/react/1x1";
import wales_icon from "../src/images/walesflag.jpg";
import england_icon from "../src/images/englandflag.jpg"
import hyu_icon from "../src/images/hyu_logo.jpg"
import toyota_icon from "../src/images/toy_logo.jpg"
import ford_icon from "../src/images/ford_logo.jpg"
const driverData = [
  {
    name: "Tanak",
    flag: <Flags.EE className="flag_icon" />,
    car:<img src={hyu_icon} className="flag_icon" />,
    rally_time: 645.34,
  },
  {
    name: "Rovanpera",
    flag: <Flags.FI className="flag_icon" />,
    car:<img src={toyota_icon} className="flag_icon" />,
    rally_time: 661.76,
  },
  {
    name: "Ogier",
    flag: <Flags.FR className="flag_icon" />,
    car:<img src={toyota_icon} className="flag_icon" />,
    rally_time: 659.05,
  },
  {
    name: "Evans",
    flag: <img src={wales_icon} className="flag_icon" />,
    car:<img src={toyota_icon} className="flag_icon" />,
    rally_time: 668.61,
  },
  {
    name: "Lappi",
    flag: <Flags.FI className="flag_icon" />,
    car:<img src={ford_icon} className="flag_icon" />,
    rally_time: 693.42,
  },
  {
    name: "Katsuta",
    flag: <Flags.JP className="flag_icon" />,
    car:<img src={toyota_icon} className="flag_icon" />,
    rally_time: 702.95,
  },
  {
    name: "Greensmith",
    flag: <img src={england_icon} className="flag_icon" />,
    car:<img src={ford_icon} className="flag_icon" />,
    rally_time: 659.05,
  },
  {
    name: "Neuville",
    flag: <Flags.BE className="flag_icon" />,
    car:<img src={hyu_icon} className="flag_icon" />,
    rally_time: 680.07,
  },
  {
    name: "Solberg",
    flag: <Flags.SE className="flag_icon" />,
    car:<img src={hyu_icon} className="flag_icon" />,
    rally_time: 687.04,
  },
  {
    name: "Suninen",
    flag: <Flags.FI className="flag_icon" />,
    car:<img src={ford_icon} className="flag_icon" />,
    rally_time: 673.21,
  },
  {
    name: "Sordo",
    flag: <Flags.ES className="flag_icon" />,
    car:<img src={hyu_icon} className="flag_icon" />,
    rally_time: 679.53,
  },
  {
    name: "Breen",
    flag: <Flags.IE className="flag_icon" />,
    car:<img src={hyu_icon} className="flag_icon" />,
    rally_time: 711.3,
  },
];
const sortTypes = {
  up: {
    class: "sort-up",
    fn: (a, b) => a.rally_time - b.rally_time,
  },
  down: {
    class: "sort-down",
    fn: (a, b) => b.rally_time - a.rally_time,
  },
  default: {
    class: "sort",
    fn: (a, b) => a,
  },
};

class Leaderboard extends Component {
  state = {
    sortObj: "default",
  };

  onSortChange = () => {
    const { sortObj } = this.state;
    let nextSort;

    if (sortObj === "down") nextSort = "up";
    else if (sortObj === "up") nextSort = "default";
    else if (sortObj === "default") nextSort = "down";

    this.setState({
      sortObj: nextSort,
    });
  };

  render() {
    const { data } = this.props;
    const { sortObj } = this.state;

    return (
      data.length > 0 && (
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Car</th>
              <th>
                <Button onClick={this.onSortChange}>
                  <i className={`fas fa-${sortTypes[sortObj].class}`}>
                    Sort Position
                  </i>
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...data].sort(sortTypes[sortObj].fn).map((driver) => (
              <tr>
                <td>{driver.name}</td>
                <td>{driver.flag}</td>
                <td>{driver.car}</td>
                <td>{driver.rally_time} seconds</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )
    );
  }
}

function App() {
  return (
    <div className="App">
      <Leaderboard data={driverData} />
    </div>
  );
}

export default App;
