# multi-select-react

## Description
A React Component providing multi select functionality.(under development)

----
## Installation
```
npm install multi-select-react
```
----
## Demo
[Multi-select-react](https://ganesh-91.github.io/multi-select-react/)

----
## 1. Basic Usage
```js
import React, { Component } from 'react';
import  MultiSelectReact  from 'multi-select-react';

class MyComponent extends Component {
  constructor() {
        super();
        this.state = {
            multiSelect: []
        };
    }
  render() {
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#dff0d8",
            color: "#3c763d"
        };
    return (
      <MultiSelectReact 
      options={this.state.multiSelect}
      optionClicked={this.optionClicked.bind(this)}
      selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
      selectedOptionsStyles={selectedOptionsStyles}
      optionsListStyles={optionsListStyles} />
    );
  }

  optionClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
  }
  selectedBadgeClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
  }

}
```
## 2. Single Select Usage
```js
import React, { Component } from 'react';
import  MultiSelectReact  from 'multi-select-react';

class MyComponent extends Component {
  constructor() {
        super();
        this.state = {
            multiSelect: []
        };
    }
  render() {
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#fcf8e3",
            color: "#8a6d3b"
        };
    return (
      <MultiSelectReact 
      options={this.state.multiSelect}
      optionClicked={this.optionClicked.bind(this)}
      selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
      selectedOptionsStyles={selectedOptionsStyles}
      optionsListStyles={optionsListStyles}
      isSingleSelect={true} />
    );
  }

  optionClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
  }
  selectedBadgeClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
  }

}
```

----

## Props

| Prop  | Type  | Default | Description |
|:--------- | :---- | :----   |:----  |
| `selectedOptionsColor` | `object` | `{}` | CSS for MultiSelect options selected badges
| `optionsListStyles` | `object` | `{}` | CSS for MultiSelect options drop down
| `options` | `array` | R | Options to be pre-populated in select
| `optionClicked` | `function` | R | Callback, invoked after an option is clicked
| `selectedBadgeClicked` | `function` | R | Callback, invoked after an selected option badge
| `isSingleSelect` | `boolean` | Optional | boolean value for single select functionality, component's default behavior is multi select


## Licence

[MIT]

