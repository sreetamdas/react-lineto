(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-lineto", ["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["react-lineto"] = factory(require("prop-types"), require("react"));
	else
		root["react-lineto"] = factory(root["prop-types"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const defaultAnchor = { x: 0.5, y: 0.5 };
var defaultBorderColor = "#f00";
var defaultInnerColor = "#00ff00";
var defaultBorderStyle = "solid";
var defaultBorderWidth = 1;

var optionalStyleProps = {
	borderColor: _propTypes2.default.string,
	innerColor: _propTypes2.default.string,
	borderStyle: _propTypes2.default.string,
	borderWidth: _propTypes2.default.number,
	className: _propTypes2.default.string,
	zIndex: _propTypes2.default.number
};

var Line = function (_PureComponent) {
	_inherits(Line, _PureComponent);

	function Line() {
		_classCallCheck(this, Line);

		return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
	}

	_createClass(Line, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			// Append rendered DOM element to the container the
			// offsets were calculated for
			this.within.appendChild(this.el);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			this.within.removeChild(this.el);
		}
	}, {
		key: "findElement",
		value: function findElement(className) {
			return document.getElementsByClassName(className)[0];
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    x0 = _props.x0,
			    y0 = _props.y0,
			    x1 = _props.x1,
			    y1 = _props.y1,
			    progress = _props.progress,
			    _props$within = _props.within,
			    within = _props$within === undefined ? "" : _props$within;


			this.within = within ? this.findElement(within) : document.body;

			var dy = y1 - y0;
			var dx = x1 - x0;

			var angle = Math.atan2(dy, dx) * 180 / Math.PI;
			var length = Math.sqrt(dx * dx + dy * dy);

			var positionStyle = {
				position: "absolute",
				top: y0 + "px",
				left: x0 + "px",
				width: length + "px",
				zIndex: Number.isFinite(this.props.zIndex) ? String(this.props.zIndex) : "1",
				transform: "rotate(" + angle + "deg)",
				// Rotate around (x0, y0)
				transformOrigin: "0 0"
			};

			var progressStyle = {
				position: "absolute",
				top: y0 + "px",
				left: x0 + "px",
				zIndex: Number.isFinite(this.props.zIndex) ? String(this.props.zIndex + 1) : "2",
				transform: "rotate(" + angle + "deg)",
				// Rotate around (x0, y0)
				transformOrigin: "0 0",
				width: length * (progress / 100) + "px"
				// color: this.props.progressColor || "#00FF00"
			};

			var defaultStyle = {
				borderColor: this.props.borderColor || defaultBorderColor,
				borderStyle: this.props.borderStyle || defaultBorderStyle,
				borderWidth: this.props.borderWidth || defaultBorderWidth
			};

			var defaultProgressStyle = {
				borderColor: this.props.innerColor || defaultInnerColor,
				borderStyle: this.props.borderStyle || defaultBorderStyle,
				borderWidth: this.props.borderWidth || defaultBorderWidth
			};

			var props = {
				className: this.props.className,
				style: Object.assign({}, defaultStyle, positionStyle)
			};

			var progressProps = {
				className: this.props.progressClassName,
				style: Object.assign({}, defaultProgressStyle, progressStyle)
			};

			// We need a wrapper element to prevent an exception when then
			// React component is removed. This is because we manually
			// move the rendered DOM element after creation.
			return _react2.default.createElement(
				"div",
				{ className: "react-lineto-placeholder" },
				_react2.default.createElement("div", _extends({
					ref: function ref(el) {
						_this2.el = el;
					}
				}, props)),
				_react2.default.createElement("div", progressProps)
			);
		}
	}]);

	return Line;
}(_react.PureComponent);

exports.default = Line;


Line.propTypes = Object.assign({}, {
	x0: _propTypes2.default.number.isRequired,
	y0: _propTypes2.default.number.isRequired,
	x1: _propTypes2.default.number.isRequired,
	y1: _propTypes2.default.number.isRequired
}, optionalStyleProps);

/***/ })
/******/ ]);
});