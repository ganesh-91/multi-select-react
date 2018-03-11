import React from "react";
import "./style.css";
class ReactMultiSelect extends React.Component {
    constructor() {
        super();
        this.state = {
            dropDownClicked: false
        };
    }
    render() {
        const textWrapOptionStyle = {
            padding: "5px 0px 5px 10px"
        };
        const nonTextWrapOptionStyle = {
            padding: "0px 0px 5px 10px"
        };
        const textWrapSelectedBadgesStyle = {
            margin: "0 5px 0 0"
        };
        const nonTextWrapSelectedBadgesStyle = {
            margin: "5px 5px 0 0"
        };
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#dff0d8",
            color: "#3c763d"
        };
        let selected = [];
        this.props.options.map((day) => {
            if (day.value) {
                selected.push({ label: day.label, id: day.id });
            }
        });
        const disabledStyle = {
            color: "#212529",
            backgroundColor: "#dee2e6"
        };
        let selectedList = (
            <label className={"selected-options-badges-list " + (this.props.isTextWrap ? "text-warp" : "")} onClick={() => {
                this.setState({ dropDownClicked: false });
            }}>
                {selected.map((obj) => {
                    return (
                        <span style={this.props.disabled ? disabledStyle : (this.props.selectedOptionsStyles || selectedOptionsStyles)} key={obj.id}
                            onClick={this.selectedOptionsClick.bind(this, obj.id)}
                            className={"selected-options-badges " + (this.props.isTextWrap ? "margin-right" : "margin-top-right")} >{obj.label}
                        </span>
                    );
                })}
            </label>);
        return (
            <div className="multi-select" tabIndex="0"
                onBlur={() => {
                    this.setState({ dropDownClicked: false });
                }}>
                <div className="selected-options" style={this.props.isTextWrap ? textWrapOptionStyle : nonTextWrapOptionStyle}>{selectedList}
                    <div className="arrow" onClick={() => {
                        this.setState({ dropDownClicked: !this.state.dropDownClicked });
                    }}>
                        &#9660;
                    </div>
                </div>
                <ul className={"options " + (this.state.dropDownClicked ? "show" : "")}>
                    {this.props.options.map((el, i) => {
                        return (
                            <li key={el.id} value={el.value}  >
                                <div className="option-list" style={this.props.disabled ? disabledStyle : (el.value ? (this.props.optionsListStyles || optionsListStyles) : {})} onClick={this.optionsOnchange.bind(this, i, !el.value)}>{el.label}</div>
                            </li>
                        );
                    })}

                </ul>
            </div>
        );
    }
    componentDidMount() {

    }
    selectedOptionsClick(id) {
        let filteredToasts = this.props.options.slice();

        filteredToasts.map((obj) => {
            if (obj.id === id) {
                obj.value = false;
            }
        });
        this.setState({ dropDownClicked: false });
        this.props.optionClicked(filteredToasts);
    }
    optionsOnchange(index, value) {
        let dd = this.props.options.slice();

        // for single select options
        if (this.props.isSingleSelect === true) {
            dd.map((option) => {
                option.value = false;
            });
        }

        dd[index].value = value;
        this.props.selectedBadgeClicked(dd);
    }
}

export default ReactMultiSelect;