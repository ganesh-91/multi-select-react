module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactMultiSelect = function (_React$Component) {
    _inherits(ReactMultiSelect, _React$Component);

    function ReactMultiSelect() {
        _classCallCheck(this, ReactMultiSelect);

        var _this = _possibleConstructorReturn(this, (ReactMultiSelect.__proto__ || Object.getPrototypeOf(ReactMultiSelect)).call(this));

        _this.state = {
            dropDownClicked: false
        };

        _this.buildDropDown = _this.buildDropDown.bind(_this);
        _this.onSelectAll = _this.onSelectAll.bind(_this);
        _this.onSelectNone = _this.onSelectNone.bind(_this);
        return _this;
    }

    _createClass(ReactMultiSelect, [{
        key: "buildDropDown",
        value: function buildDropDown() {
            var _this2 = this;

            var optionsList = [];
            var optionsListStyles = {};
            var selectedCount = 0;

            optionsList = this.props.options.map(function (el, i) {
                if (el.value) {
                    selectedCount++;
                    optionsListStyles = _this2.props.optionsListStyles;
                } else {
                    optionsListStyles = {};
                }
                return _react2.default.createElement(
                    "li",
                    { key: el.id, value: el.value },
                    _react2.default.createElement(
                        "div",
                        { className: "option-list", style: _this2.props.disabled ? disabledStyle : optionsListStyles, onClick: _this2.optionsOnchange.bind(_this2, i, !el.value) },
                        el.label
                    )
                );
            });

            if (this.props.enableSelectAllorNone) {
                optionsList = [_react2.default.createElement(
                    "li",
                    { key: "SelectAll", value: selectedCount === optionsList.length },
                    _react2.default.createElement(
                        "div",
                        { className: "option-list",
                            style: this.props.disabled ? disabledStyle : selectedCount === optionsList.length ? this.props.optionsListStyles || optionsListStyles : {},
                            onClick: this.onSelectAll
                        },
                        "Select All"
                    )
                )].concat(optionsList);

                optionsList = optionsList.concat([_react2.default.createElement(
                    "li",
                    { key: "SelectNone", value: selectedCount === 0 },
                    _react2.default.createElement(
                        "div",
                        { className: "option-list",
                            style: this.props.disabled ? disabledStyle : selectedCount === 0 ? this.props.optionsListStyles || optionsListStyles : {},
                            onClick: this.onSelectNone
                        },
                        "Select None"
                    )
                )]);
            }

            return optionsList;
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var textWrapOptionStyle = {
                padding: "5px 0px 5px 10px"
            };
            var nonTextWrapOptionStyle = {
                padding: "0px 0px 5px 10px"
            };
            var textWrapSelectedBadgesStyle = {
                margin: "0 5px 0 0"
            };
            var nonTextWrapSelectedBadgesStyle = {
                margin: "5px 5px 0 0"
            };
            var selectedOptionsStyles = {
                color: "#3c763d",
                backgroundColor: "#dff0d8"
            };
            var optionsListStyles = {
                backgroundColor: "#dff0d8",
                color: "#3c763d"
            };
            var selected = [];
            this.props.options.map(function (day) {
                if (day.value) {
                    selected.push({ label: day.label, id: day.id });
                }
            });
            var disabledStyle = {
                color: "#212529",
                backgroundColor: "#dee2e6"
            };
            var selectedList = _react2.default.createElement(
                "label",
                { className: "selected-options-badges-list " + (this.props.isTextWrap ? "text-warp" : ""), onClick: function onClick() {
                        _this3.setState({ dropDownClicked: false });
                    } },
                selected.map(function (obj) {
                    return _react2.default.createElement(
                        "span",
                        { style: _this3.props.disabled ? disabledStyle : _this3.props.selectedOptionsStyles || selectedOptionsStyles, key: obj.id,
                            onClick: _this3.selectedOptionsClick.bind(_this3, obj.id),
                            className: "selected-options-badges " + (_this3.props.isTextWrap ? "margin-right" : "margin-top-right") },
                        obj.label
                    );
                })
            );
            return _react2.default.createElement(
                "div",
                { className: "multi-select", tabIndex: "0",
                    onBlur: function onBlur() {
                        _this3.setState({ dropDownClicked: false });
                    } },
                _react2.default.createElement(
                    "div",
                    { className: "selected-options", style: this.props.isTextWrap ? textWrapOptionStyle : nonTextWrapOptionStyle },
                    selectedList,
                    _react2.default.createElement(
                        "div",
                        { className: "arrow", onClick: function onClick() {
                                _this3.setState({ dropDownClicked: !_this3.state.dropDownClicked });
                            } },
                        "\u25BC"
                    )
                ),
                _react2.default.createElement(
                    "ul",
                    { className: "options " + (this.state.dropDownClicked ? "show" : "") },
                    this.buildDropDown()
                )
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "selectedOptionsClick",
        value: function selectedOptionsClick(id) {
            var filteredToasts = this.props.options.slice();

            filteredToasts.map(function (obj) {
                if (obj.id === id) {
                    obj.value = false;
                }
            });
            this.setState({ dropDownClicked: false });
            this.props.optionClicked(filteredToasts);
        }
    }, {
        key: "optionsOnchange",
        value: function optionsOnchange(index, value) {
            var dd = this.props.options.slice();

            // for single select options
            if (this.props.isSingleSelect === true) {
                dd.map(function (option) {
                    option.value = false;
                });
            }
            dd[index].value = value;
            this.props.selectedBadgeClicked(dd);
        }
    }, {
        key: "onSelectAll",
        value: function onSelectAll() {
            this.onSelectAllOrNone(true, this);
        }
    }, {
        key: "onSelectNone",
        value: function onSelectNone() {
            this.onSelectAllOrNone(false, this);
        }
    }, {
        key: "onSelectAllOrNone",
        value: function onSelectAllOrNone(choice, ref) {
            var dd = ref.props.options.slice();
            var ddAllChecked = dd.map(function (option) {
                option.value = choice;
                return option;
            });
            ref.props.selectedBadgeClicked(ddAllChecked);
        }
    }]);

    return ReactMultiSelect;
}(_react2.default.Component);

exports.default = ReactMultiSelect;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".multi-select .arrow {\r\n    margin: auto;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    font-size: 12px;\r\n    width: 20px;\r\n    /*margin: 0 5px;*/\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    /* float: right; */\r\n}\r\n\r\n.multi-select .options.show {\r\n    display: block;\r\n}\r\n\r\n.multi-select .options {\r\n    height: 200px;\r\n    z-index: 10001;\r\n    overflow-x: auto;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    margin: 0;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    border-top-width: 0;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    width: 100%;\r\n    /* width: inherit; */\r\n    padding: 0;\r\n    display: none;\r\n    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.margin-right {\r\n    margin: 0 5px 0 0\r\n}\r\n\r\n.margin-top-right {\r\n    margin: 5px 5px 0 0\r\n}\r\n\r\n.options li {\r\n    display: block;\r\n    font-size: 16px;\r\n}\r\n\r\n.options li .option-list {\r\n    cursor: default;\r\n    margin-bottom: 2px;\r\n    text-transform: capitalize;\r\n    /*border-bottom: solid 2px #fff;*/\r\n    padding: 2px 5px;\r\n}\r\n\r\n.text-warp {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.multi-select .bg-color-blue {\r\n    background-color: cornflowerblue;\r\n    color: #fff;\r\n}\r\n\r\n.multi-select .selected-options {\r\n    vertical-align: middle;\r\n    height: inherit;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    display: inline-block;\r\n    /*padding: 5px 0px 5px 10px;*/\r\n    width: inherit;\r\n    /*padding: 0 0 0 10px;*/\r\n}\r\n\r\n.multi-select .selected-options .selected-options-badges-list {\r\n    font-weight: 400;\r\n    margin: 0;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    width: calc(100% - 20px);\r\n    text-overflow: clip;\r\n    /*overflow: hidden;\r\n    white-space: nowrap;*/\r\n    /* float: left; */\r\n    /*width: calc(100% - 30px);*/\r\n    /*padding: 2px 0;*/\r\n    /*line-height: 1.4;*/\r\n}\r\n\r\n.multi-select .selected-options .selected-options-badges:after {\r\n    content: '\\D7';\r\n    cursor: pointer;\r\n    margin-left: 5px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.multi-select {\r\n    position: relative;\r\n    background-color: #fff;\r\n    border-radius: 4px;\r\n    width: 100%;\r\n    outline: none;\r\n    display: inline-block;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -khtml-user-select: none;\r\n    -ms-user-select: none;\r\n    /*height: 28px;*/\r\n}\r\n\r\n.multi-select .selected-options-badges {\r\n    text-transform: capitalize;\r\n    font-size: 14px;\r\n    border-radius: 2px;\r\n    padding: 0 5px;\r\n    /*margin: 0 5px 0 0;*/\r\n    border: solid 1px #ddd;\r\n    display: inline-block;\r\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);