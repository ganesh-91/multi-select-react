import React, { Component } from 'react';
import MultiSelect from "multi-select-react";

import colorNames from "../colorUtil";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      multiSelect: [
        {
          id: 1,
          label: "monday",
          value: true
        },
        {
          id: 2,
          label: "tuesday",
          value: true
        },
        {
          id: 3,
          label: "wednesday",
          value: true
        },
        {
          id: 4,
          label: "thursday",
          value: true
        },
        {
          id: 5,
          label: "friday",
          value: true
        },
        {
          id: 6,
          label: "saturday",
          value: true
        },
        {
          id: 7,
          label: "sunday",
          value: true
        }
      ],
      singleSelect: [
        {
          id: 1,
          label: "monday",
          value: false
        },
        {
          id: 2,
          label: "tuesday",
          value: false
        },
        {
          id: 3,
          label: "wednesday",
          value: false
        },
        {
          id: 4,
          label: "thursday",
          value: false
        },
        {
          id: 5,
          label: "friday",
          value: false
        },
        {
          id: 6,
          label: "saturday",
          value: false
        },
        {
          id: 7,
          label: "sunday",
          value: false
        }
      ],
      optionsListStyles: {
        backgroundColor: "#dff0d8",
        color: "#3c763d"
      },
      selectedOptionsStyles: {
        color: "#3c763d",
        backgroundColor: "#dff0d8"
      },
      selDdOptBgValid: false,
      selDdOptColorValid: false,
      selOptBgValid: false,
      selOptColorNotValid: false,
      isSingleSelect: false
    };
  }
  render() {
    const selectedOptionsStyles = this.state.selectedOptionsStyles;
    const optionsListStyles = this.state.optionsListStyles;
    const borderRed = { borderColor: "#ff7043" };

    // console.log(colorNames.includes('red'));
    // colorNames.includes('red');


    return (
      <div className="row no-margin">
        <div className="demo col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-12 container">
          <h3 className="text-left">Basic usage</h3>
          <MultiSelect
            options={this.state.multiSelect}
            optionClicked={this.multiOptionClicked.bind(this)}
            selectedBadgeClicked={this.multiSelectedBadgeClicked.bind(this)}
            selectedOptionsStyles={selectedOptionsStyles}
            optionsListStyles={optionsListStyles} />
          <br />
          <form className="row no-margin top-margin-30 text-left" onSubmit={this.handleSubmit.bind(this)}>
            <h4 className="text-center">
              <label>Try entering color name or color code in given input fields</label>
            </h4>
            <div className="col-md-6">
              <label>Styles for selected options</label>
              <div className="form-group">
                <label>font color</label>
                <input type="text" style={this.state.selOptColorNotValid ? borderRed : {}} ref={(input) => this.selOptColor = input} className="form-control" />
              </div>
              <div className="form-group">
                <label>background color</label>
                <input type="text" style={this.state.selOptBgValid ? borderRed : {}} ref={(input) => this.selOptBg = input} className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <label>Styles for select dropdown</label>
              <div className="form-group">
                <label>font color</label>
                <input type="text" style={this.state.selDdOptColorValid ? borderRed : {}} ref={(input) => this.selDdOptColor = input} className="form-control" />
              </div>
              <div className="form-group">
                <label>background color</label>
                <input type="text" style={this.state.selDdOptBgValid ? borderRed : {}} ref={(input) => this.selDdOptBg = input} className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <input type="submit" value="Submit" className="btn btn-default" />
            </div>
          </form>
          <br />
        </div>
      </div>
    );
  }
  handleSubmit(event) {
    const regex = /[0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}/g;
    this.setState({
      selOptColorNotValid: false,
      selOptBgValid: false,
      selDdOptColorValid: false,
      selDdOptBgValid: false
    });

    console.log(colorNames.includes(!this.selOptColor.value));

    var selectedOptionsStyles = Object.assign({}, this.state.selectedOptionsStyles);
    var optionsListStyles = Object.assign({}, this.state.optionsListStyles);

    if (this.selOptColor.value.match(regex)) {
      selectedOptionsStyles.color = "#" + (this.selOptColor.value);
      this.setState({ selOptColorNotValid: true });
    } else if (colorNames.includes(this.selOptColor.value)) {
      selectedOptionsStyles.color = (this.selOptColor.value);
    } else {
      this.setState({ selOptColorNotValid: true });
    }

    if (this.selOptBg.value.match(regex)) {
      selectedOptionsStyles.backgroundColor = "#" + (this.selOptBg.value);
    } else if (colorNames.includes(this.selOptBg.value)) {
      selectedOptionsStyles.backgroundColor = (this.selOptBg.value);
    } else {
      this.setState({ selOptBgValid: true });
    }

    if (this.selDdOptColor.value.match(regex)) {
      optionsListStyles.color = "#" + (this.selDdOptColor.value);
    } else if (colorNames.includes(this.selDdOptColor.value)) {
      optionsListStyles.color = (this.selDdOptColor.value);
    } else {
      this.setState({ selDdOptColorValid: true });
    }

    if (this.selDdOptBg.value.match(regex)) {
      optionsListStyles.backgroundColor = "#" + (this.selDdOptBg.value);
    } else if (colorNames.includes(this.selDdOptBg.value)) {
      optionsListStyles.backgroundColor = (this.selDdOptBg.value);
    } else {
      this.setState({ selDdOptBgValid: true });
    }
    this.setState({ selectedOptionsStyles, optionsListStyles });
    // alert('A name was submitted: ' + this.selOptColor.value + 'A name was submitted: ' + this.selOptBg.value + 'A name was submitted: ' + this.selDdOptColor.value + 'A name was submitted: ' + this.selDdOptBg.value);
    event.preventDefault();
  }
  multiOptionClicked(optionsList) {
    this.setState({ multiSelect: optionsList });
  }
  multiSelectedBadgeClicked(optionsList) {
    this.setState({ multiSelect: optionsList });
  }
  singleOptionClicked(optionsList) {
    this.setState({ multiSelect: optionsList });
  }
  singleSelectedBadgeClicked(optionsList) {
    this.setState({ multiSelect: optionsList });
  }
}

export default App;
