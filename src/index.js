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
        const selectedOptionsStyles = {
            color: "#000",
            backgroundColor: "#fff"
        };
        const optionsListStyles = {
            backgroundColor: "cornflowerblue",
            color: "#fff"
        };
        let selected = [];
        this.props.options.map((day) => {
            if (day.value) {
                selected.push({ label: day.label, id: day.id });
            }
        });
        let selectedList = (
            <label className="selected-options-badges-list" onClick={() => {
                this.setState({ dropDownClicked: false });
            }}>
                {selected.map((obj) => {
                    return (
                        <span style={this.props.selectedOptionsStyles || selectedOptionsStyles} key={obj.id}
                            onClick={this.selectedOptionsClick.bind(this, obj.id)}
                            className="selected-options-badges" >{obj.label}
                        </span>
                    );
                })}
            </label>);
        return (
            <div className="multi-select" tabIndex="0" 
            onBlur={() => {
                this.setState({ dropDownClicked: false });
            }}>
                <div className="selected-options">{selectedList}
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
                                <div className="option-list" style={el.value ? (this.props.optionsListStyles || optionsListStyles) : {}} onClick={this.optionsOnchange.bind(this, i, !el.value)}>{el.label}</div>
                            </li>
                        );
                    })}

                </ul>
            </div>
        );
    }
    componentDidMount(){
        
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