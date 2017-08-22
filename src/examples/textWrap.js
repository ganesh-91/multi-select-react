import React, { Component } from 'react';
import MultiSelect from "multi-select-react";

import colorNames from "../colorUtil";

class TextWrap extends Component {
    constructor() {
        super();
        this.state = {
            selected: "",
            selectOptions: [
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
            isTextWrap: false,
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
        const code =
            `           <MultiSelect
            options={this.state.multiSelect} 
            optionClicked={callback()}
            selectedBadgeClicked={callback()}
            selectedOptionsStyles={selectedOptionsStyles}
            optionsListStyles={optionsListStyles} 
            isTextWrap={${this.state.isTextWrap}}
            />`;
        const nonResize = {
            resize: "none"
        }
        // console.log(colorNames.includes('red'));
        // colorNames.includes('red');
        return (
            <div className="row no-margin">
                <div className="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-12">
                    <h3 className="text-left">3. Text Warp </h3>
                    <MultiSelect
                        options={this.state.selectOptions}
                        optionClicked={this.singleOptionClicked.bind(this)}
                        selectedBadgeClicked={this.singleSelectedBadgeClicked.bind(this)}
                        selectedOptionsStyles={selectedOptionsStyles}
                        optionsListStyles={optionsListStyles}
                        isTextWrap={this.state.isTextWrap} />
                    <p className="text-left">
                        <br />
                        <input type="checkbox" value={this.state.isTextWrap} onChange={() => {
                            this.setState({ isTextWrap: !this.state.isTextWrap })
                        }} />   isTextWrap
                        <br />
                        <br />
                        <span> The Component's selected options are by default text wrapped, for displaying all selected options send isTextWrap boolean value in prop as true. <strong> By doing so the component will expand vertically.
                            Default value is false.
                        </strong>
                        </span>
                    </p>
                    <p>
                        Copy the below code for text wrap functionality
                    </p>
                    <textarea className="form-control" rows={8} value={code} readOnly style={nonResize} />
                    <br />
                </div>
                <br />
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
        this.setState({ selectOptions: optionsList });
    }
    multiSelectedBadgeClicked(optionsList) {
        this.setState({ selectOptions: optionsList });
    }
    singleOptionClicked(optionsList) {
        this.setState({ selectOptions: optionsList });
    }
    singleSelectedBadgeClicked(optionsList) {
        this.setState({ selectOptions: optionsList });
    }
}

export default TextWrap;
