/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	// import injectTapEventPlugin from "react-tap-event-plugin";
	// // Needed for onTouchTap
	// // http://stackoverflow.com/a/34015469/988941
	// injectTapEventPlugin();
	var MuiThemeProvider_1 = __webpack_require__(3);
	var Hello_1 = __webpack_require__(161);
	var Alerta_1 = __webpack_require__(162);
	ReactDOM.render(React.createElement(Hello_1.default, {compilador: "TS", ferramenta: "ReacT"}), document.getElementById("example"));
	ReactDOM.render(React.createElement(MuiThemeProvider_1.default, null, React.createElement(Alerta_1.default, {mensagem: "Wagner é legal"})), document.querySelector("#testeDialog"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _getMuiTheme = __webpack_require__(4);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MuiThemeProvider = function (_Component) {
	  _inherits(MuiThemeProvider, _Component);
	
	  function MuiThemeProvider() {
	    _classCallCheck(this, MuiThemeProvider);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MuiThemeProvider).apply(this, arguments));
	  }
	
	  _createClass(MuiThemeProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: this.props.muiTheme || (0, _getMuiTheme2.default)()
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	
	  return MuiThemeProvider;
	}(_react.Component);
	
	MuiThemeProvider.propTypes = {
	  children: _react.PropTypes.element,
	  muiTheme: _react.PropTypes.object
	};
	MuiThemeProvider.childContextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = MuiThemeProvider;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getMuiTheme;
	
	var _merge = __webpack_require__(5);
	
	var _merge2 = _interopRequireDefault(_merge);
	
	var _colorManipulator = __webpack_require__(118);
	
	var _lightBaseTheme = __webpack_require__(119);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _zIndex = __webpack_require__(122);
	
	var _zIndex2 = _interopRequireDefault(_zIndex);
	
	var _autoprefixer = __webpack_require__(123);
	
	var _autoprefixer2 = _interopRequireDefault(_autoprefixer);
	
	var _callOnce = __webpack_require__(157);
	
	var _callOnce2 = _interopRequireDefault(_callOnce);
	
	var _rtl = __webpack_require__(158);
	
	var _rtl2 = _interopRequireDefault(_rtl);
	
	var _compose = __webpack_require__(159);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _typography = __webpack_require__(160);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	var _colors = __webpack_require__(120);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Get the MUI theme corresponding to a base theme.
	 * It's possible to override the computed theme values
	 * by providing a second argument. The calculated
	 * theme will be deeply merged with the second argument.
	 */
	function getMuiTheme(muiTheme) {
	  for (var _len = arguments.length, more = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    more[_key - 1] = arguments[_key];
	  }
	
	  muiTheme = _merge2.default.apply(undefined, [{
	    zIndex: _zIndex2.default,
	    isRtl: false,
	    userAgent: undefined
	  }, _lightBaseTheme2.default, muiTheme].concat(more));
	
	  var _muiTheme = muiTheme;
	  var spacing = _muiTheme.spacing;
	  var fontFamily = _muiTheme.fontFamily;
	  var palette = _muiTheme.palette;
	
	  var baseTheme = { spacing: spacing, fontFamily: fontFamily, palette: palette };
	
	  muiTheme = (0, _merge2.default)({
	    appBar: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      height: spacing.desktopKeylineIncrement,
	      titleFontWeight: _typography2.default.fontWeightNormal,
	      padding: spacing.desktopGutter
	    },
	    avatar: {
	      color: palette.canvasColor,
	      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.26)
	    },
	    badge: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.accent1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    bottomNavigation: {
	      backgroundColor: palette.canvasColor,
	      unselectedColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      selectedColor: palette.primary1Color,
	      height: 56,
	      unselectedFontSize: 12,
	      selectedFontSize: 14
	    },
	    button: {
	      height: 36,
	      minWidth: 88,
	      iconButtonSize: spacing.iconSize * 2
	    },
	    card: {
	      titleColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      subtitleColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    cardMedia: {
	      color: _colors.darkWhite,
	      overlayContentBackground: _colors.lightBlack,
	      titleColor: _colors.darkWhite,
	      subtitleColor: _colors.lightWhite
	    },
	    cardText: {
	      textColor: palette.textColor
	    },
	    checkbox: {
	      boxColor: palette.textColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    chip: {
	      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12),
	      deleteIconColor: (0, _colorManipulator.fade)(palette.textColor, 0.26),
	      textColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      fontSize: 14,
	      fontWeight: _typography2.default.fontWeightNormal,
	      shadow: '0 1px 6px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12) + ',\n        0 1px 4px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12)
	    },
	    datePicker: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      calendarTextColor: palette.textColor,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor,
	      calendarYearBackgroundColor: _colors.white
	    },
	    dialog: {
	      titleFontSize: 22,
	      bodyFontSize: 16,
	      bodyColor: (0, _colorManipulator.fade)(palette.textColor, 0.6)
	    },
	    dropDownMenu: {
	      accentColor: palette.borderColor
	    },
	    enhancedButton: {
	      tapHighlightColor: _colors.transparent
	    },
	    flatButton: {
	      color: _colors.transparent,
	      buttonFilterColor: '#999999',
	      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
	      textColor: palette.textColor,
	      primaryTextColor: palette.primary1Color,
	      secondaryTextColor: palette.accent1Color,
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    floatingActionButton: {
	      buttonSize: 56,
	      miniSize: 40,
	      color: palette.primary1Color,
	      iconColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryIconColor: palette.alternateTextColor,
	      disabledTextColor: palette.disabledColor,
	      disabledColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12)
	    },
	    gridTile: {
	      textColor: _colors.white
	    },
	    icon: {
	      color: palette.canvasColor,
	      backgroundColor: palette.primary1Color
	    },
	    inkBar: {
	      backgroundColor: palette.accent1Color
	    },
	    drawer: {
	      width: spacing.desktopKeylineIncrement * 4,
	      color: palette.canvasColor
	    },
	    listItem: {
	      nestedLevelDepth: 18,
	      secondaryTextColor: palette.secondaryTextColor,
	      leftIconColor: _colors.grey600,
	      rightIconColor: _colors.grey600
	    },
	    menu: {
	      backgroundColor: palette.canvasColor,
	      containerBackgroundColor: palette.canvasColor
	    },
	    menuItem: {
	      dataHeight: 32,
	      height: 48,
	      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.035),
	      padding: spacing.desktopGutter,
	      selectedTextColor: palette.accent1Color,
	      rightIconDesktopFill: _colors.grey600
	    },
	    menuSubheader: {
	      padding: spacing.desktopGutter,
	      borderColor: palette.borderColor,
	      textColor: palette.primary1Color
	    },
	    overlay: {
	      backgroundColor: _colors.lightBlack
	    },
	    paper: {
	      color: palette.textColor,
	      backgroundColor: palette.canvasColor,
	      zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
	        return '0 ' + d[0] + 'px ' + d[1] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[5]);
	      })
	    },
	    radioButton: {
	      borderColor: palette.textColor,
	      backgroundColor: palette.alternateTextColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      size: 24,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    raisedButton: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.primary1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      disabledColor: (0, _colorManipulator.darken)(palette.alternateTextColor, 0.1),
	      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    refreshIndicator: {
	      strokeColor: palette.borderColor,
	      loadingStrokeColor: palette.primary1Color
	    },
	    ripple: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.87)
	    },
	    slider: {
	      trackSize: 2,
	      trackColor: palette.primary3Color,
	      trackColorSelected: palette.accent3Color,
	      handleSize: 12,
	      handleSizeDisabled: 8,
	      handleSizeActive: 18,
	      handleColorZero: palette.primary3Color,
	      handleFillColor: palette.alternateTextColor,
	      selectionColor: palette.primary1Color,
	      rippleColor: palette.primary1Color
	    },
	    snackbar: {
	      textColor: palette.alternateTextColor,
	      backgroundColor: palette.textColor,
	      actionColor: palette.accent1Color
	    },
	    subheader: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    stepper: {
	      backgroundColor: 'transparent',
	      hoverBackgroundColor: (0, _colorManipulator.fade)(_colors.black, 0.06),
	      iconColor: palette.primary1Color,
	      hoveredIconColor: _colors.grey700,
	      inactiveIconColor: _colors.grey500,
	      textColor: (0, _colorManipulator.fade)(_colors.black, 0.87),
	      disabledTextColor: (0, _colorManipulator.fade)(_colors.black, 0.26),
	      connectorLineColor: _colors.grey400
	    },
	    svgIcon: {
	      color: palette.textColor
	    },
	    table: {
	      backgroundColor: palette.canvasColor
	    },
	    tableFooter: {
	      borderColor: palette.borderColor,
	      textColor: palette.accent3Color
	    },
	    tableHeader: {
	      borderColor: palette.borderColor
	    },
	    tableHeaderColumn: {
	      textColor: palette.accent3Color,
	      height: 56,
	      spacing: 24
	    },
	    tableRow: {
	      hoverColor: palette.accent2Color,
	      stripeColor: (0, _colorManipulator.fade)((0, _colorManipulator.lighten)(palette.primary1Color, 0.5), 0.4),
	      selectedColor: palette.borderColor,
	      textColor: palette.textColor,
	      borderColor: palette.borderColor,
	      height: 48
	    },
	    tableRowColumn: {
	      height: 48,
	      spacing: 24
	    },
	    tabs: {
	      backgroundColor: palette.primary1Color,
	      textColor: (0, _colorManipulator.fade)(palette.alternateTextColor, 0.7),
	      selectedTextColor: palette.alternateTextColor
	    },
	    textField: {
	      textColor: palette.textColor,
	      hintColor: palette.disabledColor,
	      floatingLabelColor: palette.textColor,
	      disabledTextColor: palette.disabledColor,
	      errorColor: _colors.red500,
	      focusColor: palette.primary1Color,
	      backgroundColor: 'transparent',
	      borderColor: palette.borderColor
	    },
	    timePicker: {
	      color: palette.alternateTextColor,
	      textColor: palette.accent3Color,
	      accentColor: palette.primary1Color,
	      clockColor: palette.textColor,
	      clockCircleColor: palette.clockCircleColor,
	      headerColor: palette.pickerHeaderColor || palette.primary1Color,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    toggle: {
	      thumbOnColor: palette.primary1Color,
	      thumbOffColor: palette.accent2Color,
	      thumbDisabledColor: palette.borderColor,
	      thumbRequiredColor: palette.primary1Color,
	      trackOnColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5),
	      trackOffColor: palette.primary3Color,
	      trackDisabledColor: palette.primary3Color,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor,
	      trackRequiredColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5)
	    },
	    toolbar: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      backgroundColor: (0, _colorManipulator.darken)(palette.accent2Color, 0.05),
	      height: 56,
	      titleFontSize: 20,
	      iconColor: (0, _colorManipulator.fade)(palette.textColor, 0.4),
	      separatorColor: (0, _colorManipulator.fade)(palette.textColor, 0.175),
	      menuHoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1)
	    },
	    tooltip: {
	      color: _colors.white,
	      rippleBackgroundColor: _colors.grey700
	    }
	  }, muiTheme, {
	    baseTheme: baseTheme, // To provide backward compatibility.
	    rawTheme: baseTheme });
	
	  var transformers = [_autoprefixer2.default, _rtl2.default, _callOnce2.default].map(function (t) {
	    return t(muiTheme);
	  }).filter(function (t) {
	    return t;
	  });
	  muiTheme.prepareStyles = _compose2.default.apply(undefined, _toConsumableArray(transformers));
	
	  return muiTheme;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(6),
	    createAssigner = __webpack_require__(114);
	
	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});
	
	module.exports = merge;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(7),
	    arrayEach = __webpack_require__(48),
	    assignMergeValue = __webpack_require__(49),
	    baseKeysIn = __webpack_require__(50),
	    baseMergeDeep = __webpack_require__(53),
	    isArray = __webpack_require__(66),
	    isObject = __webpack_require__(25),
	    isTypedArray = __webpack_require__(108);
	
	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = baseKeysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;
	
	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}
	
	module.exports = baseMerge;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(8),
	    stackClear = __webpack_require__(16),
	    stackDelete = __webpack_require__(17),
	    stackGet = __webpack_require__(18),
	    stackHas = __webpack_require__(19),
	    stackSet = __webpack_require__(20);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(9),
	    listCacheDelete = __webpack_require__(10),
	    listCacheGet = __webpack_require__(13),
	    listCacheHas = __webpack_require__(14),
	    listCacheSet = __webpack_require__(15);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	module.exports = listCacheClear;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(11);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(12);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(11);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(11);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(11);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(8);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}
	
	module.exports = stackClear;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	module.exports = stackDelete;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(8),
	    Map = __webpack_require__(21),
	    MapCache = __webpack_require__(33);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(22),
	    root = __webpack_require__(29);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(23),
	    getValue = __webpack_require__(32);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(24),
	    isHostObject = __webpack_require__(26),
	    isMasked = __webpack_require__(27),
	    isObject = __webpack_require__(25),
	    toSource = __webpack_require__(31);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(28);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(29);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(30);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 31 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(34),
	    mapCacheDelete = __webpack_require__(42),
	    mapCacheGet = __webpack_require__(45),
	    mapCacheHas = __webpack_require__(46),
	    mapCacheSet = __webpack_require__(47);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(35),
	    ListCache = __webpack_require__(8),
	    Map = __webpack_require__(21);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(36),
	    hashDelete = __webpack_require__(38),
	    hashGet = __webpack_require__(39),
	    hashHas = __webpack_require__(40),
	    hashSet = __webpack_require__(41);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(37);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	module.exports = hashClear;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(22);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	module.exports = hashDelete;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(37);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(37);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(37);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(43);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(44);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(43);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(43);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(43);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(12);
	
	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	module.exports = assignMergeValue;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25),
	    isPrototype = __webpack_require__(51),
	    nativeKeysIn = __webpack_require__(52);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeysIn;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = nativeKeysIn;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(49),
	    baseClone = __webpack_require__(54),
	    copyArray = __webpack_require__(72),
	    isArguments = __webpack_require__(61),
	    isArray = __webpack_require__(66),
	    isArrayLikeObject = __webpack_require__(62),
	    isFunction = __webpack_require__(24),
	    isObject = __webpack_require__(25),
	    isPlainObject = __webpack_require__(107),
	    isTypedArray = __webpack_require__(108),
	    toPlainObject = __webpack_require__(112);
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);
	
	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;
	
	  var isCommon = newValue === undefined;
	
	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}
	
	module.exports = baseMergeDeep;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(7),
	    arrayEach = __webpack_require__(48),
	    assignValue = __webpack_require__(55),
	    baseAssign = __webpack_require__(56),
	    cloneBuffer = __webpack_require__(71),
	    copyArray = __webpack_require__(72),
	    copySymbols = __webpack_require__(73),
	    getAllKeys = __webpack_require__(76),
	    getTag = __webpack_require__(79),
	    initCloneArray = __webpack_require__(85),
	    initCloneByTag = __webpack_require__(86),
	    initCloneObject = __webpack_require__(101),
	    isArray = __webpack_require__(66),
	    isBuffer = __webpack_require__(104),
	    isHostObject = __webpack_require__(26),
	    isObject = __webpack_require__(25),
	    keys = __webpack_require__(58);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(12);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(57),
	    keys = __webpack_require__(58);
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(55);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(59),
	    baseKeys = __webpack_require__(68),
	    isArrayLike = __webpack_require__(63);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(60),
	    isArguments = __webpack_require__(61),
	    isArray = __webpack_require__(66),
	    isIndex = __webpack_require__(67);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(62);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(63),
	    isObjectLike = __webpack_require__(65);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(24),
	    isLength = __webpack_require__(64);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 64 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(51),
	    nativeKeys = __webpack_require__(69);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(70);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 70 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}
	
	module.exports = cloneBuffer;


/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(57),
	    getSymbols = __webpack_require__(74);
	
	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	module.exports = copySymbols;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(70),
	    stubArray = __webpack_require__(75);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
	
	module.exports = getSymbols;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(77),
	    getSymbols = __webpack_require__(74),
	    keys = __webpack_require__(58);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(78),
	    isArray = __webpack_require__(66);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(80),
	    Map = __webpack_require__(21),
	    Promise = __webpack_require__(81),
	    Set = __webpack_require__(82),
	    WeakMap = __webpack_require__(83),
	    baseGetTag = __webpack_require__(84),
	    toSource = __webpack_require__(31);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(22),
	    root = __webpack_require__(29);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(22),
	    root = __webpack_require__(29);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(22),
	    root = __webpack_require__(29);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(22),
	    root = __webpack_require__(29);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(87),
	    cloneDataView = __webpack_require__(89),
	    cloneMap = __webpack_require__(90),
	    cloneRegExp = __webpack_require__(94),
	    cloneSet = __webpack_require__(95),
	    cloneSymbol = __webpack_require__(98),
	    cloneTypedArray = __webpack_require__(100);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case dataViewTag:
	      return cloneDataView(object, isDeep);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	module.exports = initCloneByTag;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(88);
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	module.exports = cloneArrayBuffer;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(29);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(87);
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	module.exports = cloneDataView;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(91),
	    arrayReduce = __webpack_require__(92),
	    mapToArray = __webpack_require__(93);
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}
	
	module.exports = cloneMap;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	module.exports = addMapEntry;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	module.exports = arrayReduce;


/***/ },
/* 93 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	module.exports = cloneRegExp;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(96),
	    arrayReduce = __webpack_require__(92),
	    setToArray = __webpack_require__(97);
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}
	
	module.exports = cloneSet;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}
	
	module.exports = addSetEntry;


/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(99);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	module.exports = cloneSymbol;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(29);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(87);
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	module.exports = cloneTypedArray;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(102),
	    getPrototype = __webpack_require__(103),
	    isPrototype = __webpack_require__(51);
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	module.exports = initCloneObject;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}
	
	module.exports = baseCreate;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(70);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(29),
	    stubFalse = __webpack_require__(106);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(105)(module)))

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(103),
	    isHostObject = __webpack_require__(26),
	    isObjectLike = __webpack_require__(65);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(109),
	    baseUnary = __webpack_require__(110),
	    nodeUtil = __webpack_require__(111);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(64),
	    isObjectLike = __webpack_require__(65);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(30);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(105)(module)))

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(57),
	    keysIn = __webpack_require__(113);
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}
	
	module.exports = toPlainObject;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(59),
	    baseKeysIn = __webpack_require__(50),
	    isArrayLike = __webpack_require__(63);
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	module.exports = keysIn;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(115),
	    isIterateeCall = __webpack_require__(117);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(116);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = baseRest;


/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(12),
	    isArrayLike = __webpack_require__(63),
	    isIndex = __webpack_require__(67),
	    isObject = __webpack_require__(25);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 118 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertColorToString = convertColorToString;
	exports.convertHexToRGB = convertHexToRGB;
	exports.decomposeColor = decomposeColor;
	exports.getContrastRatio = getContrastRatio;
	exports.getLuminance = getLuminance;
	exports.emphasize = emphasize;
	exports.fade = fade;
	exports.darken = darken;
	exports.lighten = lighten;
	/**
	 * Returns a number whose value is limited to the given range.
	 *
	 * @param {number} value The value to be clamped
	 * @param {number} min The lower boundary of the output range
	 * @param {number} max The upper boundary of the output range
	 * @returns {number} A number in the range [min, max]
	 */
	function clamp(value, min, max) {
	  if (value < min) {
	    return min;
	  }
	  if (value > max) {
	    return max;
	  }
	  return value;
	}
	
	/**
	 * Converts a color object with type and values to a string.
	 *
	 * @param {object} color - Decomposed color
	 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
	 * @returns {string} A CSS color string
	 */
	function convertColorToString(color) {
	  var type = color.type;
	  var values = color.values;
	
	
	  if (type.indexOf('rgb') > -1) {
	    // Only convert the first 3 values to int (i.e. not alpha)
	    for (var i = 0; i < 3; i++) {
	      values[i] = parseInt(values[i]);
	    }
	  }
	
	  var colorString = void 0;
	
	  if (type.indexOf('hsl') > -1) {
	    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
	  } else {
	    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
	  }
	
	  if (values.length === 4) {
	    colorString += ', ' + color.values[3] + ')';
	  } else {
	    colorString += ')';
	  }
	
	  return colorString;
	}
	
	/**
	 * Converts a color from CSS hex format to CSS rgb format.
	 *
	 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
	 *  @returns {string} A CSS rgb color string
	 */
	function convertHexToRGB(color) {
	  if (color.length === 4) {
	    var extendedColor = '#';
	    for (var i = 1; i < color.length; i++) {
	      extendedColor += color.charAt(i) + color.charAt(i);
	    }
	    color = extendedColor;
	  }
	
	  var values = {
	    r: parseInt(color.substr(1, 2), 16),
	    g: parseInt(color.substr(3, 2), 16),
	    b: parseInt(color.substr(5, 2), 16)
	  };
	
	  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
	}
	
	/**
	 * Returns an object with the type and values of a color.
	 *
	 * Note: Does not support rgb % values.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {{type: string, values: number[]}} A MUI color object
	 */
	function decomposeColor(color) {
	  if (color.charAt(0) === '#') {
	    return decomposeColor(convertHexToRGB(color));
	  }
	
	  var marker = color.indexOf('(');
	  var type = color.substring(0, marker);
	  var values = color.substring(marker + 1, color.length - 1).split(',');
	  values = values.map(function (value) {
	    return parseFloat(value);
	  });
	
	  return { type: type, values: values };
	}
	
	/**
	 * Calculates the contrast ratio between two colors.
	 *
	 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	 *
	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
	 */
	function getContrastRatio(foreground, background) {
	  var lumA = getLuminance(foreground);
	  var lumB = getLuminance(background);
	  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
	
	  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
	}
	
	/**
	 * The relative brightness of any point in a color space,
	 * normalized to 0 for darkest black and 1 for lightest white.
	 *
	 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} The relative brightness of the color in the range 0 - 1
	 */
	function getLuminance(color) {
	  color = decomposeColor(color);
	
	  if (color.type.indexOf('rgb') > -1) {
	    var rgb = color.values.map(function (val) {
	      val /= 255; // normalized
	      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	    });
	    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
	  } else if (color.type.indexOf('hsl') > -1) {
	    return color.values[2] / 100;
	  }
	}
	
	/**
	 * Darken or lighten a colour, depending on its luminance.
	 * Light colors are darkened, dark colors are lightened.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function emphasize(color) {
	  var coefficient = arguments.length <= 1 || arguments[1] === undefined ? 0.15 : arguments[1];
	
	  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
	}
	
	/**
	 * Set the absolute transparency of a color.
	 * Any existing alpha values are overwritten.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} value - value to set the alpha channel to in the range 0 -1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function fade(color, value) {
	  color = decomposeColor(color);
	  value = clamp(value, 0, 1);
	
	  if (color.type === 'rgb' || color.type === 'hsl') {
	    color.type += 'a';
	  }
	  color.values[3] = value;
	
	  return convertColorToString(color);
	}
	
	/**
	 * Darkens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function darken(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient, 0, 1);
	
	  if (color.type.indexOf('hsl') > -1) {
	    color.values[2] *= 1 - coefficient;
	  } else if (color.type.indexOf('rgb') > -1) {
	    for (var i = 0; i < 3; i++) {
	      color.values[i] *= 1 - coefficient;
	    }
	  }
	  return convertColorToString(color);
	}
	
	/**
	 * Lightens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function lighten(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient, 0, 1);
	
	  if (color.type.indexOf('hsl') > -1) {
	    color.values[2] += (100 - color.values[2]) * coefficient;
	  } else if (color.type.indexOf('rgb') > -1) {
	    for (var i = 0; i < 3; i++) {
	      color.values[i] += (255 - color.values[i]) * coefficient;
	    }
	  }
	
	  return convertColorToString(color);
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(120);
	
	var _colorManipulator = __webpack_require__(118);
	
	var _spacing = __webpack_require__(121);
	
	var _spacing2 = _interopRequireDefault(_spacing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */
	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors.cyan500,
	    primary2Color: _colors.cyan700,
	    primary3Color: _colors.grey400,
	    accent1Color: _colors.pinkA200,
	    accent2Color: _colors.grey100,
	    accent3Color: _colors.grey500,
	    textColor: _colors.darkBlack,
	    secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
	    alternateTextColor: _colors.white,
	    canvasColor: _colors.white,
	    borderColor: _colors.grey300,
	    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
	    pickerHeaderColor: _colors.cyan500,
	    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
	    shadowColor: _colors.fullBlack
	  }
	}; /**
	    * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
	    */

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var red50 = exports.red50 = '#ffebee';
	var red100 = exports.red100 = '#ffcdd2';
	var red200 = exports.red200 = '#ef9a9a';
	var red300 = exports.red300 = '#e57373';
	var red400 = exports.red400 = '#ef5350';
	var red500 = exports.red500 = '#f44336';
	var red600 = exports.red600 = '#e53935';
	var red700 = exports.red700 = '#d32f2f';
	var red800 = exports.red800 = '#c62828';
	var red900 = exports.red900 = '#b71c1c';
	var redA100 = exports.redA100 = '#ff8a80';
	var redA200 = exports.redA200 = '#ff5252';
	var redA400 = exports.redA400 = '#ff1744';
	var redA700 = exports.redA700 = '#d50000';
	
	var pink50 = exports.pink50 = '#fce4ec';
	var pink100 = exports.pink100 = '#f8bbd0';
	var pink200 = exports.pink200 = '#f48fb1';
	var pink300 = exports.pink300 = '#f06292';
	var pink400 = exports.pink400 = '#ec407a';
	var pink500 = exports.pink500 = '#e91e63';
	var pink600 = exports.pink600 = '#d81b60';
	var pink700 = exports.pink700 = '#c2185b';
	var pink800 = exports.pink800 = '#ad1457';
	var pink900 = exports.pink900 = '#880e4f';
	var pinkA100 = exports.pinkA100 = '#ff80ab';
	var pinkA200 = exports.pinkA200 = '#ff4081';
	var pinkA400 = exports.pinkA400 = '#f50057';
	var pinkA700 = exports.pinkA700 = '#c51162';
	
	var purple50 = exports.purple50 = '#f3e5f5';
	var purple100 = exports.purple100 = '#e1bee7';
	var purple200 = exports.purple200 = '#ce93d8';
	var purple300 = exports.purple300 = '#ba68c8';
	var purple400 = exports.purple400 = '#ab47bc';
	var purple500 = exports.purple500 = '#9c27b0';
	var purple600 = exports.purple600 = '#8e24aa';
	var purple700 = exports.purple700 = '#7b1fa2';
	var purple800 = exports.purple800 = '#6a1b9a';
	var purple900 = exports.purple900 = '#4a148c';
	var purpleA100 = exports.purpleA100 = '#ea80fc';
	var purpleA200 = exports.purpleA200 = '#e040fb';
	var purpleA400 = exports.purpleA400 = '#d500f9';
	var purpleA700 = exports.purpleA700 = '#aa00ff';
	
	var deepPurple50 = exports.deepPurple50 = '#ede7f6';
	var deepPurple100 = exports.deepPurple100 = '#d1c4e9';
	var deepPurple200 = exports.deepPurple200 = '#b39ddb';
	var deepPurple300 = exports.deepPurple300 = '#9575cd';
	var deepPurple400 = exports.deepPurple400 = '#7e57c2';
	var deepPurple500 = exports.deepPurple500 = '#673ab7';
	var deepPurple600 = exports.deepPurple600 = '#5e35b1';
	var deepPurple700 = exports.deepPurple700 = '#512da8';
	var deepPurple800 = exports.deepPurple800 = '#4527a0';
	var deepPurple900 = exports.deepPurple900 = '#311b92';
	var deepPurpleA100 = exports.deepPurpleA100 = '#b388ff';
	var deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff';
	var deepPurpleA400 = exports.deepPurpleA400 = '#651fff';
	var deepPurpleA700 = exports.deepPurpleA700 = '#6200ea';
	
	var indigo50 = exports.indigo50 = '#e8eaf6';
	var indigo100 = exports.indigo100 = '#c5cae9';
	var indigo200 = exports.indigo200 = '#9fa8da';
	var indigo300 = exports.indigo300 = '#7986cb';
	var indigo400 = exports.indigo400 = '#5c6bc0';
	var indigo500 = exports.indigo500 = '#3f51b5';
	var indigo600 = exports.indigo600 = '#3949ab';
	var indigo700 = exports.indigo700 = '#303f9f';
	var indigo800 = exports.indigo800 = '#283593';
	var indigo900 = exports.indigo900 = '#1a237e';
	var indigoA100 = exports.indigoA100 = '#8c9eff';
	var indigoA200 = exports.indigoA200 = '#536dfe';
	var indigoA400 = exports.indigoA400 = '#3d5afe';
	var indigoA700 = exports.indigoA700 = '#304ffe';
	
	var blue50 = exports.blue50 = '#e3f2fd';
	var blue100 = exports.blue100 = '#bbdefb';
	var blue200 = exports.blue200 = '#90caf9';
	var blue300 = exports.blue300 = '#64b5f6';
	var blue400 = exports.blue400 = '#42a5f5';
	var blue500 = exports.blue500 = '#2196f3';
	var blue600 = exports.blue600 = '#1e88e5';
	var blue700 = exports.blue700 = '#1976d2';
	var blue800 = exports.blue800 = '#1565c0';
	var blue900 = exports.blue900 = '#0d47a1';
	var blueA100 = exports.blueA100 = '#82b1ff';
	var blueA200 = exports.blueA200 = '#448aff';
	var blueA400 = exports.blueA400 = '#2979ff';
	var blueA700 = exports.blueA700 = '#2962ff';
	
	var lightBlue50 = exports.lightBlue50 = '#e1f5fe';
	var lightBlue100 = exports.lightBlue100 = '#b3e5fc';
	var lightBlue200 = exports.lightBlue200 = '#81d4fa';
	var lightBlue300 = exports.lightBlue300 = '#4fc3f7';
	var lightBlue400 = exports.lightBlue400 = '#29b6f6';
	var lightBlue500 = exports.lightBlue500 = '#03a9f4';
	var lightBlue600 = exports.lightBlue600 = '#039be5';
	var lightBlue700 = exports.lightBlue700 = '#0288d1';
	var lightBlue800 = exports.lightBlue800 = '#0277bd';
	var lightBlue900 = exports.lightBlue900 = '#01579b';
	var lightBlueA100 = exports.lightBlueA100 = '#80d8ff';
	var lightBlueA200 = exports.lightBlueA200 = '#40c4ff';
	var lightBlueA400 = exports.lightBlueA400 = '#00b0ff';
	var lightBlueA700 = exports.lightBlueA700 = '#0091ea';
	
	var cyan50 = exports.cyan50 = '#e0f7fa';
	var cyan100 = exports.cyan100 = '#b2ebf2';
	var cyan200 = exports.cyan200 = '#80deea';
	var cyan300 = exports.cyan300 = '#4dd0e1';
	var cyan400 = exports.cyan400 = '#26c6da';
	var cyan500 = exports.cyan500 = '#00bcd4';
	var cyan600 = exports.cyan600 = '#00acc1';
	var cyan700 = exports.cyan700 = '#0097a7';
	var cyan800 = exports.cyan800 = '#00838f';
	var cyan900 = exports.cyan900 = '#006064';
	var cyanA100 = exports.cyanA100 = '#84ffff';
	var cyanA200 = exports.cyanA200 = '#18ffff';
	var cyanA400 = exports.cyanA400 = '#00e5ff';
	var cyanA700 = exports.cyanA700 = '#00b8d4';
	
	var teal50 = exports.teal50 = '#e0f2f1';
	var teal100 = exports.teal100 = '#b2dfdb';
	var teal200 = exports.teal200 = '#80cbc4';
	var teal300 = exports.teal300 = '#4db6ac';
	var teal400 = exports.teal400 = '#26a69a';
	var teal500 = exports.teal500 = '#009688';
	var teal600 = exports.teal600 = '#00897b';
	var teal700 = exports.teal700 = '#00796b';
	var teal800 = exports.teal800 = '#00695c';
	var teal900 = exports.teal900 = '#004d40';
	var tealA100 = exports.tealA100 = '#a7ffeb';
	var tealA200 = exports.tealA200 = '#64ffda';
	var tealA400 = exports.tealA400 = '#1de9b6';
	var tealA700 = exports.tealA700 = '#00bfa5';
	
	var green50 = exports.green50 = '#e8f5e9';
	var green100 = exports.green100 = '#c8e6c9';
	var green200 = exports.green200 = '#a5d6a7';
	var green300 = exports.green300 = '#81c784';
	var green400 = exports.green400 = '#66bb6a';
	var green500 = exports.green500 = '#4caf50';
	var green600 = exports.green600 = '#43a047';
	var green700 = exports.green700 = '#388e3c';
	var green800 = exports.green800 = '#2e7d32';
	var green900 = exports.green900 = '#1b5e20';
	var greenA100 = exports.greenA100 = '#b9f6ca';
	var greenA200 = exports.greenA200 = '#69f0ae';
	var greenA400 = exports.greenA400 = '#00e676';
	var greenA700 = exports.greenA700 = '#00c853';
	
	var lightGreen50 = exports.lightGreen50 = '#f1f8e9';
	var lightGreen100 = exports.lightGreen100 = '#dcedc8';
	var lightGreen200 = exports.lightGreen200 = '#c5e1a5';
	var lightGreen300 = exports.lightGreen300 = '#aed581';
	var lightGreen400 = exports.lightGreen400 = '#9ccc65';
	var lightGreen500 = exports.lightGreen500 = '#8bc34a';
	var lightGreen600 = exports.lightGreen600 = '#7cb342';
	var lightGreen700 = exports.lightGreen700 = '#689f38';
	var lightGreen800 = exports.lightGreen800 = '#558b2f';
	var lightGreen900 = exports.lightGreen900 = '#33691e';
	var lightGreenA100 = exports.lightGreenA100 = '#ccff90';
	var lightGreenA200 = exports.lightGreenA200 = '#b2ff59';
	var lightGreenA400 = exports.lightGreenA400 = '#76ff03';
	var lightGreenA700 = exports.lightGreenA700 = '#64dd17';
	
	var lime50 = exports.lime50 = '#f9fbe7';
	var lime100 = exports.lime100 = '#f0f4c3';
	var lime200 = exports.lime200 = '#e6ee9c';
	var lime300 = exports.lime300 = '#dce775';
	var lime400 = exports.lime400 = '#d4e157';
	var lime500 = exports.lime500 = '#cddc39';
	var lime600 = exports.lime600 = '#c0ca33';
	var lime700 = exports.lime700 = '#afb42b';
	var lime800 = exports.lime800 = '#9e9d24';
	var lime900 = exports.lime900 = '#827717';
	var limeA100 = exports.limeA100 = '#f4ff81';
	var limeA200 = exports.limeA200 = '#eeff41';
	var limeA400 = exports.limeA400 = '#c6ff00';
	var limeA700 = exports.limeA700 = '#aeea00';
	
	var yellow50 = exports.yellow50 = '#fffde7';
	var yellow100 = exports.yellow100 = '#fff9c4';
	var yellow200 = exports.yellow200 = '#fff59d';
	var yellow300 = exports.yellow300 = '#fff176';
	var yellow400 = exports.yellow400 = '#ffee58';
	var yellow500 = exports.yellow500 = '#ffeb3b';
	var yellow600 = exports.yellow600 = '#fdd835';
	var yellow700 = exports.yellow700 = '#fbc02d';
	var yellow800 = exports.yellow800 = '#f9a825';
	var yellow900 = exports.yellow900 = '#f57f17';
	var yellowA100 = exports.yellowA100 = '#ffff8d';
	var yellowA200 = exports.yellowA200 = '#ffff00';
	var yellowA400 = exports.yellowA400 = '#ffea00';
	var yellowA700 = exports.yellowA700 = '#ffd600';
	
	var amber50 = exports.amber50 = '#fff8e1';
	var amber100 = exports.amber100 = '#ffecb3';
	var amber200 = exports.amber200 = '#ffe082';
	var amber300 = exports.amber300 = '#ffd54f';
	var amber400 = exports.amber400 = '#ffca28';
	var amber500 = exports.amber500 = '#ffc107';
	var amber600 = exports.amber600 = '#ffb300';
	var amber700 = exports.amber700 = '#ffa000';
	var amber800 = exports.amber800 = '#ff8f00';
	var amber900 = exports.amber900 = '#ff6f00';
	var amberA100 = exports.amberA100 = '#ffe57f';
	var amberA200 = exports.amberA200 = '#ffd740';
	var amberA400 = exports.amberA400 = '#ffc400';
	var amberA700 = exports.amberA700 = '#ffab00';
	
	var orange50 = exports.orange50 = '#fff3e0';
	var orange100 = exports.orange100 = '#ffe0b2';
	var orange200 = exports.orange200 = '#ffcc80';
	var orange300 = exports.orange300 = '#ffb74d';
	var orange400 = exports.orange400 = '#ffa726';
	var orange500 = exports.orange500 = '#ff9800';
	var orange600 = exports.orange600 = '#fb8c00';
	var orange700 = exports.orange700 = '#f57c00';
	var orange800 = exports.orange800 = '#ef6c00';
	var orange900 = exports.orange900 = '#e65100';
	var orangeA100 = exports.orangeA100 = '#ffd180';
	var orangeA200 = exports.orangeA200 = '#ffab40';
	var orangeA400 = exports.orangeA400 = '#ff9100';
	var orangeA700 = exports.orangeA700 = '#ff6d00';
	
	var deepOrange50 = exports.deepOrange50 = '#fbe9e7';
	var deepOrange100 = exports.deepOrange100 = '#ffccbc';
	var deepOrange200 = exports.deepOrange200 = '#ffab91';
	var deepOrange300 = exports.deepOrange300 = '#ff8a65';
	var deepOrange400 = exports.deepOrange400 = '#ff7043';
	var deepOrange500 = exports.deepOrange500 = '#ff5722';
	var deepOrange600 = exports.deepOrange600 = '#f4511e';
	var deepOrange700 = exports.deepOrange700 = '#e64a19';
	var deepOrange800 = exports.deepOrange800 = '#d84315';
	var deepOrange900 = exports.deepOrange900 = '#bf360c';
	var deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80';
	var deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40';
	var deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00';
	var deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00';
	
	var brown50 = exports.brown50 = '#efebe9';
	var brown100 = exports.brown100 = '#d7ccc8';
	var brown200 = exports.brown200 = '#bcaaa4';
	var brown300 = exports.brown300 = '#a1887f';
	var brown400 = exports.brown400 = '#8d6e63';
	var brown500 = exports.brown500 = '#795548';
	var brown600 = exports.brown600 = '#6d4c41';
	var brown700 = exports.brown700 = '#5d4037';
	var brown800 = exports.brown800 = '#4e342e';
	var brown900 = exports.brown900 = '#3e2723';
	
	var blueGrey50 = exports.blueGrey50 = '#eceff1';
	var blueGrey100 = exports.blueGrey100 = '#cfd8dc';
	var blueGrey200 = exports.blueGrey200 = '#b0bec5';
	var blueGrey300 = exports.blueGrey300 = '#90a4ae';
	var blueGrey400 = exports.blueGrey400 = '#78909c';
	var blueGrey500 = exports.blueGrey500 = '#607d8b';
	var blueGrey600 = exports.blueGrey600 = '#546e7a';
	var blueGrey700 = exports.blueGrey700 = '#455a64';
	var blueGrey800 = exports.blueGrey800 = '#37474f';
	var blueGrey900 = exports.blueGrey900 = '#263238';
	
	var grey50 = exports.grey50 = '#fafafa';
	var grey100 = exports.grey100 = '#f5f5f5';
	var grey200 = exports.grey200 = '#eeeeee';
	var grey300 = exports.grey300 = '#e0e0e0';
	var grey400 = exports.grey400 = '#bdbdbd';
	var grey500 = exports.grey500 = '#9e9e9e';
	var grey600 = exports.grey600 = '#757575';
	var grey700 = exports.grey700 = '#616161';
	var grey800 = exports.grey800 = '#424242';
	var grey900 = exports.grey900 = '#212121';
	
	var black = exports.black = '#000000';
	var white = exports.white = '#ffffff';
	
	var transparent = exports.transparent = 'rgba(0, 0, 0, 0)';
	var fullBlack = exports.fullBlack = 'rgba(0, 0, 0, 1)';
	var darkBlack = exports.darkBlack = 'rgba(0, 0, 0, 0.87)';
	var lightBlack = exports.lightBlack = 'rgba(0, 0, 0, 0.54)';
	var minBlack = exports.minBlack = 'rgba(0, 0, 0, 0.26)';
	var faintBlack = exports.faintBlack = 'rgba(0, 0, 0, 0.12)';
	var fullWhite = exports.fullWhite = 'rgba(255, 255, 255, 1)';
	var darkWhite = exports.darkWhite = 'rgba(255, 255, 255, 0.87)';
	var lightWhite = exports.lightWhite = 'rgba(255, 255, 255, 0.54)';

/***/ },
/* 121 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  iconSize: 24,
	
	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopDrawerMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  menu: 1000,
	  appBar: 1100,
	  drawerOverlay: 1200,
	  drawer: 1300,
	  dialogOverlay: 1400,
	  dialog: 1500,
	  layer: 2000,
	  popover: 2100,
	  snackbar: 2900,
	  tooltip: 3000
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = function (muiTheme) {
	  var userAgent = muiTheme.userAgent;
	
	  if (userAgent === undefined && typeof navigator !== 'undefined') {
	    userAgent = navigator.userAgent;
	  }
	
	  if (userAgent === undefined && !hasWarnedAboutUserAgent) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n      for server-side rendering.') : void 0;
	
	    hasWarnedAboutUserAgent = true;
	  }
	
	  if (userAgent === false) {
	    // Disabled autoprefixer
	    return null;
	  } else if (userAgent === 'all' || userAgent === undefined) {
	    // Prefix for all user agent
	    return function (style) {
	      return _inlineStylePrefixer2.default.prefixAll(style);
	    };
	  } else {
	    var _ret = function () {
	      var prefixer = new _inlineStylePrefixer2.default({
	        userAgent: userAgent
	      });
	
	      return {
	        v: function v(style) {
	          return prefixer.prefix(style);
	        }
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	};
	
	var _inlineStylePrefixer = __webpack_require__(125);
	
	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);
	
	var _warning = __webpack_require__(156);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hasWarnedAboutUserAgent = false;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 124 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// special flexbox specifications
	
	
	var _prefixAll2 = __webpack_require__(126);
	
	var _prefixAll3 = _interopRequireDefault(_prefixAll2);
	
	var _getBrowserInformation = __webpack_require__(140);
	
	var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);
	
	var _getPrefixedKeyframes = __webpack_require__(143);
	
	var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);
	
	var _capitalizeString = __webpack_require__(128);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _prefixProps = __webpack_require__(144);
	
	var _prefixProps2 = _interopRequireDefault(_prefixProps);
	
	var _calc = __webpack_require__(145);
	
	var _calc2 = _interopRequireDefault(_calc);
	
	var _zoomCursor = __webpack_require__(147);
	
	var _zoomCursor2 = _interopRequireDefault(_zoomCursor);
	
	var _grabCursor = __webpack_require__(148);
	
	var _grabCursor2 = _interopRequireDefault(_grabCursor);
	
	var _flex = __webpack_require__(149);
	
	var _flex2 = _interopRequireDefault(_flex);
	
	var _sizing = __webpack_require__(150);
	
	var _sizing2 = _interopRequireDefault(_sizing);
	
	var _gradient = __webpack_require__(151);
	
	var _gradient2 = _interopRequireDefault(_gradient);
	
	var _transition = __webpack_require__(152);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	var _flexboxIE = __webpack_require__(154);
	
	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);
	
	var _flexboxOld = __webpack_require__(155);
	
	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var plugins = [_calc2.default, _zoomCursor2.default, _grabCursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default,
	// this must be run AFTER the flexbox specs
	_flex2.default];
	
	var Prefixer = function () {
	  /**
	   * Instantiante a new prefixer
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   * @param {string} keepUnprefixed - keeps unprefixed properties and values
	   */
	
	  function Prefixer() {
	    var _this = this;
	
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Prefixer);
	
	    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
	
	    this._userAgent = options.userAgent || defaultUserAgent;
	    this._keepUnprefixed = options.keepUnprefixed || false;
	
	    this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);
	
	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      // set additional prefix information
	      this.cssPrefix = this._browserInfo.prefix.css;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo);
	    } else {
	      this._usePrefixAllFallback = true;
	      return false;
	    }
	
	    var data = this._browserInfo.browser && _prefixProps2.default[this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._usePrefixAllFallback = true;
	    }
	  }
	
	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */
	
	
	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;
	
	      // use prefixAll as fallback if userAgent can not be resolved
	      if (this._usePrefixAllFallback) {
	        return (0, _prefixAll3.default)(styles);
	      }
	
	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object && !Array.isArray(value)) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
	            if (!_this2._keepUnprefixed) {
	              delete styles[property];
	            }
	          }
	        }
	      });
	
	      Object.keys(styles).forEach(function (property) {
	        [].concat(styles[property]).forEach(function (value) {
	          // resolve plugins
	          plugins.forEach(function (plugin) {
	            // generates a new plugin interface with current data
	            assignStyles(styles, plugin({
	              property: property,
	              value: value,
	              styles: styles,
	              browserInfo: _this2._browserInfo,
	              prefix: {
	                js: _this2.jsPrefix,
	                css: _this2.cssPrefix,
	                keyframes: _this2.prefixedKeyframes
	              },
	              keepUnprefixed: _this2._keepUnprefixed,
	              requiresPrefix: _this2._requiresPrefix
	            }), value, _this2._keepUnprefixed);
	          });
	        });
	      });
	
	      return styles;
	    }
	
	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      return (0, _prefixAll3.default)(styles);
	    }
	  }]);
	
	  return Prefixer;
	}();
	
	exports.default = Prefixer;
	
	
	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var value = arguments[2];
	  var keepUnprefixed = arguments[3];
	
	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (val) {
	        if (base[property].indexOf(val) === -1) {
	          base[property].splice(baseValue.indexOf(value), keepUnprefixed ? 0 : 1, val);
	        }
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixAll;
	
	var _prefixProps = __webpack_require__(127);
	
	var _prefixProps2 = _interopRequireDefault(_prefixProps);
	
	var _capitalizeString = __webpack_require__(128);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _calc = __webpack_require__(129);
	
	var _calc2 = _interopRequireDefault(_calc);
	
	var _cursor = __webpack_require__(132);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _flex = __webpack_require__(133);
	
	var _flex2 = _interopRequireDefault(_flex);
	
	var _sizing = __webpack_require__(134);
	
	var _sizing2 = _interopRequireDefault(_sizing);
	
	var _gradient = __webpack_require__(135);
	
	var _gradient2 = _interopRequireDefault(_gradient);
	
	var _transition = __webpack_require__(136);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	var _flexboxIE = __webpack_require__(138);
	
	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);
	
	var _flexboxOld = __webpack_require__(139);
	
	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// special flexbox specifications
	
	
	var plugins = [_calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];
	
	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */
	function prefixAll(styles) {
	  Object.keys(styles).forEach(function (property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      styles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2.default).forEach(function (prefix) {
	        var properties = _prefixProps2.default[prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
	        }
	      });
	    }
	  });
	
	  Object.keys(styles).forEach(function (property) {
	    [].concat(styles[property]).forEach(function (value, index) {
	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return assignStyles(styles, plugin(property, value));
	      });
	    });
	  });
	
	  return styles;
	}
	
	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (value) {
	        var valueIndex = baseValue.indexOf(value);
	        if (valueIndex > -1) {
	          base[property].splice(valueIndex, 1);
	        }
	        base[property].push(value);
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 128 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// helper to capitalize strings
	
	exports.default = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	module.exports = exports["default"];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;
	
	var _joinPrefixedValue = __webpack_require__(130);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	var _isPrefixedValue = __webpack_require__(131);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function calc(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
	    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// returns a style object with a single concated prefixed value string
	
	exports.default = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	    return replacer(prefix, value);
	  }));
	};
	
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  if (Array.isArray(value)) value = value.join(',');
	
	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};
	
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cursor;
	
	var _joinPrefixedValue = __webpack_require__(130);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};
	
	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	var values = { flex: true, 'inline-flex': true };
	
	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;
	
	var _joinPrefixedValue = __webpack_require__(130);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};
	
	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;
	
	var _joinPrefixedValue = __webpack_require__(130);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	var _isPrefixedValue = __webpack_require__(131);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	function gradient(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;
	
	var _hyphenateStyleName = __webpack_require__(137);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _capitalizeString = __webpack_require__(128);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _isPrefixedValue = __webpack_require__(131);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	var _prefixProps = __webpack_require__(127);
	
	var _prefixProps2 = _interopRequireDefault(_prefixProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};
	
	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;
	
	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');
	
	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }
	
	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}
	
	function prefixValue(value) {
	  if ((0, _isPrefixedValue2.default)(value)) {
	    return value;
	  }
	
	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';
	
	      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);
	
	        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });
	
	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports) {

	'use strict';
	
	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	
	function hyphenateStyleName(string) {
	    return string
	        .replace(uppercasePattern, '-$&')
	        .toLowerCase()
	        .replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;


/***/ },
/* 138 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};
	
	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	function flexboxOld(property, value) {
	  if (property === 'flexDirection') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bowser = __webpack_require__(141);
	
	var _bowser2 = _interopRequireDefault(_bowser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen', 'chromium', 'vivaldi'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};
	var browsers = {
	  chrome: [['chrome'], ['chromium']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  edge: [['msedge']],
	  opera: [['opera'], ['vivaldi']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie: [['msie']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};
	
	var browserByInfo = function browserByInfo(info) {
	  if (info.firefox) {
	    return 'firefox';
	  }
	  var name = '';
	
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });
	
	  return name;
	};
	
	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */
	
	exports.default = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }
	  var info = _bowser2.default._detect(userAgent);
	
	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          css: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });
	
	  info.browser = browserByInfo(info);
	
	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);
	  info.osversion = parseFloat(info.osversion);
	
	  // iOS forces all browsers to use Safari under the hood
	  // as the Safari version seems to match the iOS version
	  // we just explicitely use the osversion instead
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
	  if (info.browser === 'ios_saf' && info.version > info.osversion) {
	    info.version = info.osversion;
	    info.safari = true;
	  }
	
	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (info.browser === 'android' && info.chrome && info.version > 37) {
	    info.browser = 'and_chr';
	  }
	
	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (info.browser === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }
	
	  return info;
	};
	
	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */
	
	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) __webpack_require__(142)(name, definition)
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */
	
	  var t = true
	
	  function detect(ua) {
	
	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }
	
	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }
	
	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
	      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
	      , chromeos = /CrOS/.test(ua)
	      , silk = /silk/i.test(ua)
	      , sailfish = /sailfish/i.test(ua)
	      , tizen = /tizen/i.test(ua)
	      , webos = /(web|hpw)os/i.test(ua)
	      , windowsphone = /windows phone/i.test(ua)
	      , samsungBrowser = /SamsungBrowser/i.test(ua)
	      , windows = !windowsphone && /windows/i.test(ua)
	      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
	      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , xbox = /xbox/i.test(ua)
	      , result
	
	    if (/opera|opr|opios/i.test(ua)) {
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/SamsungBrowser/i.test(ua)) {
	      result = {
	        name: 'Samsung Internet for Android'
	        , samsungBrowser: t
	        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/coast/i.test(ua)) {
	      result = {
	        name: 'Opera Coast'
	        , coast: t
	        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/ucbrowser/i.test(ua)) {
	      result = {
	          name: 'UC Browser'
	        , ucbrowser: t
	        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/mxios/i.test(ua)) {
	      result = {
	        name: 'Maxthon'
	        , maxthon: t
	        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/epiphany/i.test(ua)) {
	      result = {
	        name: 'Epiphany'
	        , epiphany: t
	        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/puffin/i.test(ua)) {
	      result = {
	        name: 'Puffin'
	        , puffin: t
	        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
	      }
	    }
	    else if (/sleipnir/i.test(ua)) {
	      result = {
	        name: 'Sleipnir'
	        , sleipnir: t
	        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/k-meleon/i.test(ua)) {
	      result = {
	        name: 'K-Meleon'
	        , kMeleon: t
	        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (windowsphone) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeos) {
	      result = {
	        name: 'Chrome'
	      , chromeos: t
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/vivaldi/i.test(ua)) {
	      result = {
	        name: 'Vivaldi'
	        , vivaldi: t
	        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (sailfish) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel|fxios/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (silk) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/slimerjs/i.test(ua)) {
	      result = {
	        name: 'SlimerJS'
	        , slimer: t
	        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (webos) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (tizen) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/qupzilla/i.test(ua)) {
	      result = {
	        name: 'QupZilla'
	        , qupzilla: t
	        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
	      }
	    }
	    else if (/chromium/i.test(ua)) {
	      result = {
	        name: 'Chromium'
	        , chromium: t
	        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	        , chrome: t
	        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	        , version: versionIdentifier
	      }
	    }
	    else if (/safari|applewebkit/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      }
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if(/googlebot/i.test(ua)) {
	      result = {
	        name: 'Googlebot'
	      , googlebot: t
	      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }
	
	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      if (/(apple)?webkit\/537\.36/i.test(ua)) {
	        result.name = result.name || "Blink"
	        result.blink = t
	      } else {
	        result.name = result.name || "Webkit"
	        result.webkit = t
	      }
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }
	
	    // set OS flags for platforms that have multiple browsers
	    if (!result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    } else if (mac) {
	      result.mac = t
	    } else if (xbox) {
	      result.xbox = t
	    } else if (windows) {
	      result.windows = t
	    } else if (linux) {
	      result.linux = t
	    }
	
	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }
	
	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (
	         tablet
	      || nexusTablet
	      || iosdevice == 'ipad'
	      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
	      || result.silk
	    ) {
	      result.tablet = t
	    } else if (
	         mobile
	      || iosdevice == 'iphone'
	      || iosdevice == 'ipod'
	      || android
	      || nexusMobile
	      || result.blackberry
	      || result.webos
	      || result.bada
	    ) {
	      result.mobile = t
	    }
	
	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
			    (result.vivaldi && result.version >= 1.0) ||
	        (result.chrome && result.version >= 20) ||
	        (result.samsungBrowser && result.version >= 4) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        || (result.chromium && result.version >= 20)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        || (result.chromium && result.version < 20)
	        ) {
	      result.c = t
	    } else result.x = t
	
	    return result
	  }
	
	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')
	
	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }
	
	  /**
	   * Get version precisions count
	   *
	   * @example
	   *   getVersionPrecision("1.10.3") // 3
	   *
	   * @param  {string} version
	   * @return {number}
	   */
	  function getVersionPrecision(version) {
	    return version.split(".").length;
	  }
	
	  /**
	   * Array::map polyfill
	   *
	   * @param  {Array} arr
	   * @param  {Function} iterator
	   * @return {Array}
	   */
	  function map(arr, iterator) {
	    var result = [], i;
	    if (Array.prototype.map) {
	      return Array.prototype.map.call(arr, iterator);
	    }
	    for (i = 0; i < arr.length; i++) {
	      result.push(iterator(arr[i]));
	    }
	    return result;
	  }
	
	  /**
	   * Calculate browser version weight
	   *
	   * @example
	   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
	   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
	   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
	   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
	   *
	   * @param  {Array<String>} versions versions to compare
	   * @return {Number} comparison result
	   */
	  function compareVersions(versions) {
	    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
	    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
	    var chunks = map(versions, function (version) {
	      var delta = precision - getVersionPrecision(version);
	
	      // 2) "9" -> "9.0" (for precision = 2)
	      version = version + new Array(delta + 1).join(".0");
	
	      // 3) "9.0" -> ["000000000"", "000000009"]
	      return map(version.split("."), function (chunk) {
	        return new Array(20 - chunk.length).join("0") + chunk;
	      }).reverse();
	    });
	
	    // iterate in reverse order by reversed chunks array
	    while (--precision >= 0) {
	      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
	      if (chunks[0][precision] > chunks[1][precision]) {
	        return 1;
	      }
	      else if (chunks[0][precision] === chunks[1][precision]) {
	        if (precision === 0) {
	          // all version chunks are same
	          return 0;
	        }
	      }
	      else {
	        return -1;
	      }
	    }
	  }
	
	  /**
	   * Check if browser is unsupported
	   *
	   * @example
	   *   bowser.isUnsupportedBrowser({
	   *     msie: "10",
	   *     firefox: "23",
	   *     chrome: "29",
	   *     safari: "5.1",
	   *     opera: "16",
	   *     phantom: "534"
	   *   });
	   *
	   * @param  {Object}  minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function isUnsupportedBrowser(minVersions, strictMode, ua) {
	    var _bowser = bowser;
	
	    // make strictMode param optional with ua param usage
	    if (typeof strictMode === 'string') {
	      ua = strictMode;
	      strictMode = void(0);
	    }
	
	    if (strictMode === void(0)) {
	      strictMode = false;
	    }
	    if (ua) {
	      _bowser = detect(ua);
	    }
	
	    var version = "" + _bowser.version;
	    for (var browser in minVersions) {
	      if (minVersions.hasOwnProperty(browser)) {
	        if (_bowser[browser]) {
	          // browser version and min supported version.
	          return compareVersions([version, minVersions[browser]]) < 0;
	        }
	      }
	    }
	
	    return strictMode; // not found
	  }
	
	  /**
	   * Check if browser is supported
	   *
	   * @param  {Object} minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function check(minVersions, strictMode, ua) {
	    return !isUnsupportedBrowser(minVersions, strictMode, ua);
	  }
	
	  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
	  bowser.compareVersions = compareVersions;
	  bowser.check = check;
	
	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;
	
	  return bowser
	});


/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 143 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;
	
	  var prefixedKeyframes = 'keyframes';
	
	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.css + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};
	
	module.exports = exports['default'];

/***/ },
/* 144 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 55, "userSelect": 55, "fontKerning": 32, "textEmphasisPosition": 55, "textEmphasis": 55, "textEmphasisStyle": 55, "textEmphasisColor": 55, "boxDecorationBreak": 55, "clipPath": 55, "maskImage": 55, "maskMode": 55, "maskRepeat": 55, "maskPosition": 55, "maskClip": 55, "maskOrigin": 55, "maskSize": 55, "maskComposite": 55, "mask": 55, "maskBorderSource": 55, "maskBorderMode": 55, "maskBorderSlice": 55, "maskBorderWidth": 55, "maskBorderOutset": 55, "maskBorderRepeat": 55, "maskBorder": 55, "maskType": 55, "textDecorationStyle": 55, "textDecorationSkip": 55, "textDecorationLine": 55, "textDecorationColor": 55, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 51, "userSelect": 51, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 51, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 41, "userSelect": 41, "fontKerning": 19, "textEmphasisPosition": 41, "textEmphasis": 41, "textEmphasisStyle": 41, "textEmphasisColor": 41, "boxDecorationBreak": 41, "clipPath": 41, "maskImage": 41, "maskMode": 41, "maskRepeat": 41, "maskPosition": 41, "maskClip": 41, "maskOrigin": 41, "maskSize": 41, "maskComposite": 41, "mask": 41, "maskBorderSource": 41, "maskBorderMode": 41, "maskBorderSlice": 41, "maskBorderWidth": 41, "maskBorderOutset": 41, "maskBorderRepeat": 41, "maskBorder": 41, "maskType": 41, "textDecorationStyle": 41, "textDecorationSkip": 41, "textDecorationLine": 41, "textDecorationColor": 41, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 51, "userSelect": 51, "fontKerning": 4.4, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "filter": 51, "fontFeatureSettings": 4.4, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "and_chr": { "appearance": 51, "userSelect": 51, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "textDecorationStyle": 51, "textDecorationSkip": 51, "textDecorationLine": 51, "textDecorationColor": 51, "filter": 51 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": {} };
	module.exports = exports["default"];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;
	
	var _getPrefixedValue = __webpack_require__(146);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function calc(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, css + 'calc('), value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (prefixedValue, value, keepUnprefixed) {
	  return keepUnprefixed ? [prefixedValue, value] : prefixedValue;
	};
	
	module.exports = exports["default"];

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = zoomCursor;
	
	var _getPrefixedValue = __webpack_require__(146);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = { 'zoom-in': true, 'zoom-out': true };
	
	function zoomCursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return {
	      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = grabCursor;
	
	var _getPrefixedValue = __webpack_require__(146);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = { grab: true, grabbing: true };
	
	function grabCursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var browser = _ref.browserInfo.browser;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  // adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
	  if (property === 'cursor' && values[value] && (browser === 'firefox' || browser === 'chrome' || browser === 'safari' || browser === 'opera')) {
	    return {
	      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	
	var _getPrefixedValue = __webpack_require__(146);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = { flex: true, 'inline-flex': true };
	
	function flex(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
	    return {
	      display: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;
	
	var _getPrefixedValue = __webpack_require__(146);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};
	
	function sizing(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  // This might change in the future
	  // Keep an eye on it
	  if (properties[property] && values[value]) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;
	
	var _getPrefixedValue = __webpack_require__(146);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	function gradient(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = transition;
	
	var _hyphenateStyleName = __webpack_require__(137);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _unprefixProperty = __webpack_require__(153);
	
	var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = { transition: true, transitionProperty: true };
	
	function transition(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var css = _ref.prefix.css;
	  var requiresPrefix = _ref.requiresPrefix;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  // also check for already prefixed transitions
	  var unprefixedProperty = (0, _unprefixProperty2.default)(property);
	
	  if (typeof value === 'string' && properties[unprefixedProperty]) {
	    var _ret = function () {
	      // TODO: memoize this array
	      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
	        return (0, _hyphenateStyleName2.default)(prop);
	      });
	
	      // only split multi values, not cubic beziers
	      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	      requiresPrefixDashCased.forEach(function (prop) {
	        multipleValues.forEach(function (val, index) {
	          if (val.indexOf(prop) > -1 && prop !== 'order') {
	            multipleValues[index] = val.replace(prop, css + prop) + (keepUnprefixed ? ',' + val : '');
	          }
	        });
	      });
	
	      return {
	        v: _defineProperty({}, property, multipleValues.join(','))
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 153 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (property) {
	  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
	  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
	};
	
	module.exports = exports['default'];

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;
	
	var _getPrefixedValue = __webpack_require__(146);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: 'flexbox',
	  'inline-flex': 'inline-flexbox'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};
	
	function flexboxIE(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var styles = _ref.styles;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if ((alternativeProps[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
	    if (!keepUnprefixed && !Array.isArray(styles[property])) {
	      delete styles[property];
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;
	
	var _getPrefixedValue = __webpack_require__(146);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
	var properties = Object.keys(alternativeProps).concat(otherProps);
	
	function flexboxOld(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var styles = _ref.styles;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (!keepUnprefixed && !Array.isArray(styles[property])) {
	      delete styles[property];
	    }
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = callOnce;
	
	var _warning = __webpack_require__(156);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CALLED_ONCE = 'muiPrepared';
	
	function callOnce() {
	  if (process.env.NODE_ENV !== 'production') {
	    return function (style) {
	      if (style[CALLED_ONCE]) {
	        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'You cannot call prepareStyles() on the same style object more than once.') : void 0;
	      }
	      style[CALLED_ONCE] = true;
	      return style;
	    };
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 158 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = rtl;
	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;
	
	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function rtl(muiTheme) {
	  if (muiTheme.isRtl) {
	    return function (style) {
	      var flippedAttributes = {
	        // Keys and their replacements.
	        right: 'left',
	        left: 'right',
	        marginRight: 'marginLeft',
	        marginLeft: 'marginRight',
	        paddingRight: 'paddingLeft',
	        paddingLeft: 'paddingRight',
	        borderRight: 'borderLeft',
	        borderLeft: 'borderRight'
	      };
	
	      var newStyle = {};
	
	      Object.keys(style).forEach(function (attribute) {
	        var value = style[attribute];
	        var key = attribute;
	
	        if (flippedAttributes.hasOwnProperty(attribute)) {
	          key = flippedAttributes[attribute];
	        }
	
	        switch (attribute) {
	          case 'float':
	          case 'textAlign':
	            if (value === 'right') {
	              value = 'left';
	            } else if (value === 'left') {
	              value = 'right';
	            }
	            break;
	
	          case 'direction':
	            if (value === 'ltr') {
	              value = 'rtl';
	            } else if (value === 'rtl') {
	              value = 'ltr';
	            }
	            break;
	
	          case 'transform':
	            if (!value) break;
	            var matches = void 0;
	            if (matches = value.match(reTranslate)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	            }
	            if (matches = value.match(reSkew)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ', ' + (-parseFloat(matches[7]) + matches[8]) : '');
	            }
	            break;
	
	          case 'transformOrigin':
	            if (!value) break;
	            if (value.indexOf('right') > -1) {
	              value = value.replace('right', 'left');
	            } else if (value.indexOf('left') > -1) {
	              value = value.replace('left', 'right');
	            }
	            break;
	        }
	
	        newStyle[key] = value;
	      });
	
	      return newStyle;
	    };
	  }
	}

/***/ },
/* 159 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = compose;
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  return function () {
	    var result = last.apply(undefined, arguments);
	    for (var i = funcs.length - 2; i >= 0; i--) {
	      var f = funcs[i];
	      result = f(result);
	    }
	    return result;
	  };
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(120);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Typography = function Typography() {
	  _classCallCheck(this, Typography);
	
	  // text colors
	  this.textFullBlack = _colors.fullBlack;
	  this.textDarkBlack = _colors.darkBlack;
	  this.textLightBlack = _colors.lightBlack;
	  this.textMinBlack = _colors.minBlack;
	  this.textFullWhite = _colors.fullWhite;
	  this.textDarkWhite = _colors.darkWhite;
	  this.textLightWhite = _colors.lightWhite;
	
	  // font weight
	  this.fontWeightLight = 300;
	  this.fontWeightNormal = 400;
	  this.fontWeightMedium = 500;
	
	  this.fontStyleButtonFontSize = 14;
	};
	
	exports.default = new Typography();

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	// export function Hello(props: HelloProps) {
	//     return <h1>Hello world, with {props.compiler} and {props.framework}!</h1>
	// }
	var Hello = (function (_super) {
	    __extends(Hello, _super);
	    function Hello() {
	        _super.apply(this, arguments);
	    }
	    Hello.prototype.render = function () {
	        return React.createElement("h1", null, "Hello world, with ", this.props.compilador, " and ", this.props.ferramenta, "!");
	    };
	    return Hello;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Hello;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Dialog_1 = __webpack_require__(163);
	var FlatButton_1 = __webpack_require__(213);
	var RaisedButton_1 = __webpack_require__(229);
	var AlertaExemplo = (function (_super) {
	    __extends(AlertaExemplo, _super);
	    function AlertaExemplo() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.state = { aberto: false };
	        this.handleOpen = function () {
	            _this.setState({ aberto: true });
	        };
	        this.handleClose = function () {
	            _this.setState({ aberto: false });
	        };
	    }
	    AlertaExemplo.prototype.render = function () {
	        var Acoes = [
	            React.createElement(FlatButton_1.default, {label: "Cancel", primary: true, onClick: this.handleClose}),
	            React.createElement(FlatButton_1.default, {label: "Descartar", primary: true, onClick: this.handleClose}),
	            React.createElement(FlatButton_1.default, {label: "Wagner", primary: false})
	        ];
	        return (React.createElement("div", null, React.createElement(RaisedButton_1.default, {label: "Alerta", onClick: this.handleOpen}), React.createElement(Dialog_1.default, {actions: Acoes, modal: false, open: this.state.aberto, onRequestClose: this.handleClose}, this.props.mensagem)));
	    };
	    return AlertaExemplo;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AlertaExemplo;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Dialog = __webpack_require__(164);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Dialog2.default;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactEventListener = __webpack_require__(166);
	
	var _reactEventListener2 = _interopRequireDefault(_reactEventListener);
	
	var _keycode = __webpack_require__(168);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _transitions = __webpack_require__(169);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _Overlay = __webpack_require__(170);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _RenderToLayer = __webpack_require__(172);
	
	var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);
	
	var _Paper = __webpack_require__(174);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _reactAddonsTransitionGroup = __webpack_require__(177);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TransitionItem = function (_Component) {
	  _inherits(TransitionItem, _Component);
	
	  function TransitionItem() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, TransitionItem);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TransitionItem)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      style: {}
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(TransitionItem, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimeout);
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.componentWillAppear(callback);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      var spacing = this.context.muiTheme.baseTheme.spacing;
	
	      this.setState({
	        style: {
	          opacity: 1,
	          transform: 'translate(0, ' + spacing.desktopKeylineIncrement + 'px)'
	        }
	      });
	
	      this.enterTimeout = setTimeout(callback, 450); // matches transition duration
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      this.setState({
	        style: {
	          opacity: 0,
	          transform: 'translate(0, 0)'
	        }
	      });
	
	      this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var style = _props.style;
	      var children = _props.children;
	
	      var other = _objectWithoutProperties(_props, ['style', 'children']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, this.state.style, style)) }),
	        children
	      );
	    }
	  }]);
	
	  return TransitionItem;
	}(_react.Component);
	
	TransitionItem.propTypes = {
	  children: _react.PropTypes.node,
	  style: _react.PropTypes.object
	};
	TransitionItem.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	
	function getStyles(props, context) {
	  var autoScrollBodyContent = props.autoScrollBodyContent;
	  var open = props.open;
	  var _context$muiTheme = context.muiTheme;
	  var _context$muiTheme$bas = _context$muiTheme.baseTheme;
	  var spacing = _context$muiTheme$bas.spacing;
	  var palette = _context$muiTheme$bas.palette;
	  var dialog = _context$muiTheme.dialog;
	  var zIndex = _context$muiTheme.zIndex;
	
	
	  var gutter = spacing.desktopGutter;
	  var borderScroll = '1px solid ' + palette.borderColor;
	
	  return {
	    root: {
	      position: 'fixed',
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      zIndex: zIndex.dialog,
	      top: 0,
	      left: open ? 0 : -10000,
	      width: '100%',
	      height: '100%',
	      transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
	    },
	    content: {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      transition: _transitions2.default.easeOut(),
	      position: 'relative',
	      width: '75%',
	      maxWidth: spacing.desktopKeylineIncrement * 12,
	      margin: '0 auto',
	      zIndex: zIndex.dialog
	    },
	    actionsContainer: {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      padding: 8,
	      width: '100%',
	      textAlign: 'right',
	      marginTop: autoScrollBodyContent ? -1 : 0,
	      borderTop: autoScrollBodyContent ? borderScroll : 'none'
	    },
	    overlay: {
	      zIndex: zIndex.dialogOverlay
	    },
	    title: {
	      margin: 0,
	      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
	      color: palette.textColor,
	      fontSize: dialog.titleFontSize,
	      lineHeight: '32px',
	      fontWeight: 400,
	      marginBottom: autoScrollBodyContent ? -1 : 0,
	      borderBottom: autoScrollBodyContent ? borderScroll : 'none'
	    },
	    body: {
	      fontSize: dialog.bodyFontSize,
	      color: dialog.bodyColor,
	      padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
	      boxSizing: 'border-box',
	      overflowY: autoScrollBodyContent ? 'auto' : 'hidden'
	    }
	  };
	}
	
	var DialogInline = function (_Component2) {
	  _inherits(DialogInline, _Component2);
	
	  function DialogInline() {
	    var _Object$getPrototypeO2;
	
	    var _temp2, _this2, _ret2;
	
	    _classCallCheck(this, DialogInline);
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(DialogInline)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.handleTouchTapOverlay = function () {
	      _this2.requestClose(false);
	    }, _this2.handleKeyUp = function (event) {
	      if ((0, _keycode2.default)(event) === 'esc') {
	        _this2.requestClose(false);
	      }
	    }, _this2.handleResize = function () {
	      _this2.positionDialog();
	    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	  }
	
	  _createClass(DialogInline, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.positionDialog();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.positionDialog();
	    }
	  }, {
	    key: 'positionDialog',
	    value: function positionDialog() {
	      var _props2 = this.props;
	      var actions = _props2.actions;
	      var autoDetectWindowHeight = _props2.autoDetectWindowHeight;
	      var autoScrollBodyContent = _props2.autoScrollBodyContent;
	      var bodyStyle = _props2.bodyStyle;
	      var open = _props2.open;
	      var repositionOnUpdate = _props2.repositionOnUpdate;
	      var title = _props2.title;
	
	
	      if (!open) {
	        return;
	      }
	
	      var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	      var container = _reactDom2.default.findDOMNode(this);
	      var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
	      var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
	      var minPaddingTop = 16;
	
	      // Reset the height in case the window was resized.
	      dialogWindow.style.height = '';
	      dialogContent.style.height = '';
	
	      var dialogWindowHeight = dialogWindow.offsetHeight;
	      var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
	      if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;
	
	      // Vertically center the dialog window, but make sure it doesn't
	      // transition to that position.
	      if (repositionOnUpdate || !container.style.paddingTop) {
	        container.style.paddingTop = paddingTop + 'px';
	      }
	
	      // Force a height if the dialog is taller than clientHeight
	      if (autoDetectWindowHeight || autoScrollBodyContent) {
	        var styles = getStyles(this.props, this.context);
	        styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
	        var maxDialogContentHeight = clientHeight - 2 * 64;
	
	        if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;
	
	        if (_react2.default.Children.count(actions)) {
	          maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
	        }
	
	        dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
	      }
	    }
	  }, {
	    key: 'requestClose',
	    value: function requestClose(buttonClicked) {
	      if (!buttonClicked && this.props.modal) {
	        return;
	      }
	
	      if (this.props.onRequestClose) {
	        this.props.onRequestClose(!!buttonClicked);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var actions = _props3.actions;
	      var actionsContainerClassName = _props3.actionsContainerClassName;
	      var actionsContainerStyle = _props3.actionsContainerStyle;
	      var bodyClassName = _props3.bodyClassName;
	      var bodyStyle = _props3.bodyStyle;
	      var children = _props3.children;
	      var className = _props3.className;
	      var contentClassName = _props3.contentClassName;
	      var contentStyle = _props3.contentStyle;
	      var overlayClassName = _props3.overlayClassName;
	      var overlayStyle = _props3.overlayStyle;
	      var open = _props3.open;
	      var titleClassName = _props3.titleClassName;
	      var titleStyle = _props3.titleStyle;
	      var title = _props3.title;
	      var style = _props3.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      styles.root = (0, _simpleAssign2.default)(styles.root, style);
	      styles.content = (0, _simpleAssign2.default)(styles.content, contentStyle);
	      styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
	      styles.actionsContainer = (0, _simpleAssign2.default)(styles.actionsContainer, actionsContainerStyle);
	      styles.overlay = (0, _simpleAssign2.default)(styles.overlay, overlayStyle);
	      styles.title = (0, _simpleAssign2.default)(styles.title, titleStyle);
	
	      var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
	        'div',
	        { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
	        _react2.default.Children.toArray(actions)
	      );
	
	      var titleElement = title;
	      if (_react2.default.isValidElement(title)) {
	        titleElement = _react2.default.cloneElement(title, {
	          className: title.props.className || titleClassName,
	          style: prepareStyles((0, _simpleAssign2.default)(styles.title, title.props.style))
	        });
	      } else if (typeof title === 'string') {
	        titleElement = _react2.default.createElement(
	          'h3',
	          { className: titleClassName, style: prepareStyles(styles.title) },
	          title
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: className, style: prepareStyles(styles.root) },
	        open && _react2.default.createElement(_reactEventListener2.default, {
	          target: 'window',
	          onKeyUp: this.handleKeyUp,
	          onResize: this.handleResize
	        }),
	        _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          {
	            component: 'div',
	            ref: 'dialogWindow',
	            transitionAppear: true,
	            transitionAppearTimeout: 450,
	            transitionEnter: true,
	            transitionEnterTimeout: 450
	          },
	          open && _react2.default.createElement(
	            TransitionItem,
	            {
	              className: contentClassName,
	              style: styles.content
	            },
	            _react2.default.createElement(
	              _Paper2.default,
	              { zDepth: 4 },
	              titleElement,
	              _react2.default.createElement(
	                'div',
	                {
	                  ref: 'dialogContent',
	                  className: bodyClassName,
	                  style: prepareStyles(styles.body)
	                },
	                children
	              ),
	              actionsContainer
	            )
	          )
	        ),
	        _react2.default.createElement(_Overlay2.default, {
	          show: open,
	          className: overlayClassName,
	          style: styles.overlay,
	          onTouchTap: this.handleTouchTapOverlay
	        })
	      );
	    }
	  }]);
	
	  return DialogInline;
	}(_react.Component);
	
	DialogInline.propTypes = {
	  actions: _react.PropTypes.node,
	  actionsContainerClassName: _react.PropTypes.string,
	  actionsContainerStyle: _react.PropTypes.object,
	  autoDetectWindowHeight: _react.PropTypes.bool,
	  autoScrollBodyContent: _react.PropTypes.bool,
	  bodyClassName: _react.PropTypes.string,
	  bodyStyle: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string,
	  contentClassName: _react.PropTypes.string,
	  contentStyle: _react.PropTypes.object,
	  modal: _react.PropTypes.bool,
	  onRequestClose: _react.PropTypes.func,
	  open: _react.PropTypes.bool.isRequired,
	  overlayClassName: _react.PropTypes.string,
	  overlayStyle: _react.PropTypes.object,
	  repositionOnUpdate: _react.PropTypes.bool,
	  style: _react.PropTypes.object,
	  title: _react.PropTypes.node,
	  titleClassName: _react.PropTypes.string,
	  titleStyle: _react.PropTypes.object
	};
	DialogInline.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	
	var Dialog = function (_Component3) {
	  _inherits(Dialog, _Component3);
	
	  function Dialog() {
	    var _Object$getPrototypeO3;
	
	    var _temp3, _this3, _ret3;
	
	    _classCallCheck(this, Dialog);
	
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }
	
	    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_Object$getPrototypeO3 = Object.getPrototypeOf(Dialog)).call.apply(_Object$getPrototypeO3, [this].concat(args))), _this3), _this3.renderLayer = function () {
	      return _react2.default.createElement(DialogInline, _this3.props);
	    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
	  }
	
	  _createClass(Dialog, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
	    }
	  }]);
	
	  return Dialog;
	}(_react.Component);
	
	Dialog.propTypes = {
	  /**
	   * Action buttons to display below the Dialog content (`children`).
	   * This property accepts either a React element, or an array of React elements.
	   */
	  actions: _react.PropTypes.node,
	  /**
	   * The `className` to add to the actions container's root element.
	   */
	  actionsContainerClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the actions container's root element.
	   */
	  actionsContainerStyle: _react.PropTypes.object,
	  /**
	   * If set to true, the height of the `Dialog` will be auto detected. A max height
	   * will be enforced so that the content does not extend beyond the viewport.
	   */
	  autoDetectWindowHeight: _react.PropTypes.bool,
	  /**
	   * If set to true, the body content of the `Dialog` will be scrollable.
	   */
	  autoScrollBodyContent: _react.PropTypes.bool,
	  /**
	   * The `className` to add to the content's root element under the title.
	   */
	  bodyClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the content's root element under the title.
	   */
	  bodyStyle: _react.PropTypes.object,
	  /**
	   * The contents of the `Dialog`.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The `className` to add to the content container.
	   */
	  contentClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the content container.
	   */
	  contentStyle: _react.PropTypes.object,
	  /**
	   * Force the user to use one of the actions in the `Dialog`.
	   * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
	   */
	  modal: _react.PropTypes.bool,
	  /**
	   * Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
	   *
	   * @param {bool} buttonClicked Determines whether a button click triggered this request.
	   */
	  onRequestClose: _react.PropTypes.func,
	  /**
	   * Controls whether the Dialog is opened or not.
	   */
	  open: _react.PropTypes.bool.isRequired,
	  /**
	   * The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
	   */
	  overlayClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * Determines whether the `Dialog` should be repositioned when it's contents are updated.
	   */
	  repositionOnUpdate: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * The `className` to add to the title's root container element.
	   */
	  titleClassName: _react.PropTypes.string,
	  /**
	   * Overrides the inline-styles of the title's root container element.
	   */
	  titleStyle: _react.PropTypes.object
	};
	Dialog.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	Dialog.defaultProps = {
	  autoDetectWindowHeight: true,
	  autoScrollBodyContent: false,
	  modal: false,
	  repositionOnUpdate: true
	};
	exports.default = Dialog;

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	  return target;
	};


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _shallowEqual = __webpack_require__(167);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function on(target, eventName, callback, capture) {
	  if (target.addEventListener) {
	    target.addEventListener(eventName, callback, capture);
	  } else if (target.attachEvent) {
	    // IE8+ Support
	    target.attachEvent('on' + eventName, function () {
	      callback.call(target);
	    });
	  }
	}
	function off(target, eventName, callback, capture) {
	  if (target.removeEventListener) {
	    target.removeEventListener(eventName, callback, capture);
	  } else if (target.detachEvent) {
	    // IE8+ Support
	    target.detachEvent('on' + eventName, callback);
	  }
	}
	
	function forEachListener(props, iteratee) {
	  for (var name in props) {
	    if (name.substring(0, 2) === 'on' && props[name] instanceof Function) {
	      var _eventName = name.substring(2).toLowerCase();
	      iteratee(_eventName, props[name]);
	    }
	  }
	}
	
	var EventListener = function (_Component) {
	  _inherits(EventListener, _Component);
	
	  function EventListener() {
	    _classCallCheck(this, EventListener);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EventListener).apply(this, arguments));
	  }
	
	  _createClass(EventListener, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.addListeners();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      this.removeListeners();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.addListeners();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeListeners();
	    }
	  }, {
	    key: 'addListeners',
	    value: function addListeners() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var capture = _props.capture;
	      var target = _props.target;
	
	
	      if (target) {
	        (function () {
	          var element = target;
	
	          if (typeof target === 'string') {
	            element = window[target];
	          }
	
	          forEachListener(_this2.props, function (eventName, listener) {
	            return on(element, eventName, listener, capture);
	          });
	        })();
	      }
	    }
	  }, {
	    key: 'removeListeners',
	    value: function removeListeners() {
	      var _this3 = this;
	
	      var _props2 = this.props;
	      var capture = _props2.capture;
	      var target = _props2.target;
	
	
	      if (target) {
	        (function () {
	          var element = target;
	
	          if (typeof target === 'string') {
	            element = window[target];
	          }
	
	          forEachListener(_this3.props, function (eventName, listener) {
	            return off(element, eventName, listener, capture);
	          });
	        })();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children || null;
	    }
	  }]);
	
	  return EventListener;
	}(_react.Component);
	
	EventListener.propTypes = {
	  /**
	   * Whether to use capturing listeners.
	   */
	  capture: _react.PropTypes.bool.isRequired,
	  /**
	   * You can provide a children too.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The DOM target to listen to.
	   */
	  target: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.string])
	};
	EventListener.defaultProps = {
	  capture: false
	};
	exports.default = EventListener;

/***/ },
/* 167 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 168 */
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes
	
	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */
	
	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }
	
	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]
	
	  // Everything else (cast to string)
	  var search = String(searchInput)
	
	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)
	
	  return undefined
	}
	
	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */
	
	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}
	
	// Helper aliases
	
	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}
	
	
	/*!
	 * Programatically add the following
	 */
	
	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32
	
	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i
	
	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111
	
	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96
	
	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */
	
	var names = exports.names = exports.title = {} // title for backward compat
	
	// Create reverse mapping
	for (i in codes) names[codes[i]] = i
	
	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


/***/ },
/* 169 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
	
	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;
	
	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }
	
	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';
	
	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(169);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _AutoLockScrolling = __webpack_require__(171);
	
	var _AutoLockScrolling2 = _interopRequireDefault(_AutoLockScrolling);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var overlay = context.muiTheme.overlay;
	
	
	  var style = {
	    root: {
	      position: 'fixed',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: '-100%',
	      opacity: 0,
	      backgroundColor: overlay.backgroundColor,
	      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)
	
	      // Two ways to promote overlay to its own render layer
	      willChange: 'opacity',
	      transform: 'translateZ(0)',
	
	      transition: props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left', '400ms') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
	    }
	  };
	
	  if (props.show) {
	    (0, _simpleAssign2.default)(style.root, {
	      left: 0,
	      opacity: 1,
	      transition: _transitions2.default.easeOut('0ms', 'left') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
	    });
	  }
	
	  return style;
	}
	
	var Overlay = function (_Component) {
	  _inherits(Overlay, _Component);
	
	  function Overlay() {
	    _classCallCheck(this, Overlay);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).apply(this, arguments));
	  }
	
	  _createClass(Overlay, [{
	    key: 'setOpacity',
	    value: function setOpacity(opacity) {
	      this.refs.overlay.style.opacity = opacity;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var autoLockScrolling = _props.autoLockScrolling;
	      var show = _props.show;
	      var style = _props.style;
	      var transitionEnabled = _props.transitionEnabled;
	
	      var other = _objectWithoutProperties(_props, ['autoLockScrolling', 'show', 'style', 'transitionEnabled']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { ref: 'overlay', style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        autoLockScrolling && _react2.default.createElement(_AutoLockScrolling2.default, { lock: show })
	      );
	    }
	  }]);
	
	  return Overlay;
	}(_react.Component);
	
	Overlay.propTypes = {
	  autoLockScrolling: _react.PropTypes.bool,
	  show: _react.PropTypes.bool.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  transitionEnabled: _react.PropTypes.bool
	};
	Overlay.defaultProps = {
	  autoLockScrolling: true,
	  style: {},
	  transitionEnabled: true
	};
	Overlay.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Overlay;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var originalBodyOverflow = null;
	var lockingCounter = 0;
	
	var AutoLockScrolling = function (_Component) {
	  _inherits(AutoLockScrolling, _Component);
	
	  function AutoLockScrolling() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, AutoLockScrolling);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(AutoLockScrolling)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.locked = false, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(AutoLockScrolling, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.lock === true) this.preventScrolling();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.lock !== nextProps.lock) {
	        if (nextProps.lock) {
	          this.preventScrolling();
	        } else {
	          this.allowScrolling();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.allowScrolling();
	    }
	
	    // force to only lock/unlock once
	
	  }, {
	    key: 'preventScrolling',
	    value: function preventScrolling() {
	      if (this.locked === true) return;
	      lockingCounter = lockingCounter + 1;
	      this.locked = true;
	
	      // only lock the first time the component is mounted.
	      if (lockingCounter === 1) {
	        var body = document.getElementsByTagName('body')[0];
	        originalBodyOverflow = body.style.overflow;
	        body.style.overflow = 'hidden';
	      }
	    }
	  }, {
	    key: 'allowScrolling',
	    value: function allowScrolling() {
	      if (this.locked === true) {
	        lockingCounter = lockingCounter - 1;
	        this.locked = false;
	      }
	
	      if (lockingCounter === 0 && originalBodyOverflow !== null) {
	        var body = document.getElementsByTagName('body')[0];
	        body.style.overflow = originalBodyOverflow || '';
	        originalBodyOverflow = null;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return AutoLockScrolling;
	}(_react.Component);
	
	AutoLockScrolling.propTypes = {
	  lock: _react.PropTypes.bool.isRequired
	};
	exports.default = AutoLockScrolling;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _reactDom = __webpack_require__(2);
	
	var _dom = __webpack_require__(173);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
	var RenderToLayer = function (_Component) {
	  _inherits(RenderToLayer, _Component);
	
	  function RenderToLayer() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RenderToLayer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RenderToLayer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.onClickAway = function (event) {
	      if (event.defaultPrevented) {
	        return;
	      }
	
	      if (!_this.props.componentClickAway) {
	        return;
	      }
	
	      if (!_this.props.open) {
	        return;
	      }
	
	      var el = _this.layer;
	      if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
	        _this.props.componentClickAway(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RenderToLayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.renderLayer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.renderLayer();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unrenderLayer();
	    }
	  }, {
	    key: 'getLayer',
	    value: function getLayer() {
	      return this.layer;
	    }
	  }, {
	    key: 'unrenderLayer',
	    value: function unrenderLayer() {
	      if (!this.layer) {
	        return;
	      }
	
	      if (this.props.useLayerForClickAway) {
	        this.layer.style.position = 'relative';
	        this.layer.removeEventListener('touchstart', this.onClickAway);
	        this.layer.removeEventListener('click', this.onClickAway);
	      } else {
	        window.removeEventListener('touchstart', this.onClickAway);
	        window.removeEventListener('click', this.onClickAway);
	      }
	
	      (0, _reactDom.unmountComponentAtNode)(this.layer);
	      document.body.removeChild(this.layer);
	      this.layer = null;
	    }
	
	    /**
	     * By calling this method in componentDidMount() and
	     * componentDidUpdate(), you're effectively creating a "wormhole" that
	     * funnels React's hierarchical updates through to a DOM node on an
	     * entirely different part of the page.
	     */
	
	  }, {
	    key: 'renderLayer',
	    value: function renderLayer() {
	      var _this2 = this;
	
	      var _props = this.props;
	      var open = _props.open;
	      var render = _props.render;
	
	
	      if (open) {
	        if (!this.layer) {
	          this.layer = document.createElement('div');
	          document.body.appendChild(this.layer);
	
	          if (this.props.useLayerForClickAway) {
	            this.layer.addEventListener('touchstart', this.onClickAway);
	            this.layer.addEventListener('click', this.onClickAway);
	            this.layer.style.position = 'fixed';
	            this.layer.style.top = 0;
	            this.layer.style.bottom = 0;
	            this.layer.style.left = 0;
	            this.layer.style.right = 0;
	            this.layer.style.zIndex = this.context.muiTheme.zIndex.layer;
	          } else {
	            setTimeout(function () {
	              window.addEventListener('touchstart', _this2.onClickAway);
	              window.addEventListener('click', _this2.onClickAway);
	            }, 0);
	          }
	        }
	
	        var layerElement = render();
	        this.layerElement = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, layerElement, this.layer);
	      } else {
	        this.unrenderLayer();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return RenderToLayer;
	}(_react.Component);
	
	RenderToLayer.propTypes = {
	  componentClickAway: _react.PropTypes.func,
	  open: _react.PropTypes.bool.isRequired,
	  render: _react.PropTypes.func.isRequired,
	  useLayerForClickAway: _react.PropTypes.bool
	};
	RenderToLayer.defaultProps = {
	  useLayerForClickAway: true
	};
	RenderToLayer.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = RenderToLayer;

/***/ },
/* 173 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;
	
	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	
	    return false;
	  },
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  }
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Paper = __webpack_require__(175);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Paper2.default;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(176);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(169);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var rounded = props.rounded;
	  var circle = props.circle;
	  var transitionEnabled = props.transitionEnabled;
	  var zDepth = props.zDepth;
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var paper = _context$muiTheme.paper;
	
	
	  return {
	    root: {
	      color: paper.color,
	      backgroundColor: paper.backgroundColor,
	      transition: transitionEnabled && _transitions2.default.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: baseTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    }
	  };
	}
	
	var Paper = function (_Component) {
	  _inherits(Paper, _Component);
	
	  function Paper() {
	    _classCallCheck(this, Paper);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Paper).apply(this, arguments));
	  }
	
	  _createClass(Paper, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var circle = _props.circle;
	      var rounded = _props.rounded;
	      var style = _props.style;
	      var transitionEnabled = _props.transitionEnabled;
	      var zDepth = _props.zDepth;
	
	      var other = _objectWithoutProperties(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        children
	      );
	    }
	  }]);
	
	  return Paper;
	}(_react.Component);
	
	Paper.propTypes = {
	  /**
	   * Children passed into the paper element.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Set to true to generate a circlular paper container.
	   */
	  circle: _react.PropTypes.bool,
	  /**
	   * By default, the paper container will have a border radius.
	   * Set this to false to generate a container with sharp corners.
	   */
	  rounded: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Set to false to disable CSS transitions for the paper element.
	   */
	  transitionEnabled: _react.PropTypes.bool,
	  /**
	   * This number represents the zDepth of the paper shadow.
	   */
	  zDepth: _propTypes2.default.zDepth
	};
	Paper.defaultProps = {
	  circle: false,
	  rounded: true,
	  transitionEnabled: true,
	  zDepth: 1
	};
	Paper.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = Paper;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var horizontal = _react.PropTypes.oneOf(['left', 'middle', 'right']);
	var vertical = _react.PropTypes.oneOf(['top', 'center', 'bottom']);
	
	exports.default = {
	
	  corners: _react.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
	
	  horizontal: horizontal,
	
	  vertical: vertical,
	
	  origin: _react.PropTypes.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),
	
	  cornersAndCenter: _react.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),
	
	  stringOrNumber: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	
	  zDepth: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5])
	
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(178);

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(179);
	
	var React = __webpack_require__(180);
	var ReactInstanceMap = __webpack_require__(210);
	var ReactTransitionChildMapping = __webpack_require__(211);
	
	var emptyFunction = __webpack_require__(188);
	
	/**
	 * A basis for animations. When children are declaratively added or removed,
	 * special lifecycle hooks are called.
	 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
	 */
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',
	
	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },
	
	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      // TODO: can we get useful debug information to show at this point?
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },
	
	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping;
	    if (process.env.NODE_ENV !== 'production') {
	      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    }
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  },
	
	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },
	
	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping;
	    if (process.env.NODE_ENV !== 'production') {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping;
	    if (process.env.NODE_ENV !== 'production') {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];
	
	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping;
	    if (process.env.NODE_ENV !== 'production') {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }
	
	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = _assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },
	
	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	
	    // Do not forward ReactTransitionGroup props to primitive DOM nodes
	    var props = _assign({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;
	
	    return React.createElement(this.props.component, props, childrenToRender);
	  }
	});
	
	module.exports = ReactTransitionGroup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 179 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(179);
	
	var ReactChildren = __webpack_require__(181);
	var ReactComponent = __webpack_require__(193);
	var ReactPureComponent = __webpack_require__(196);
	var ReactClass = __webpack_require__(197);
	var ReactDOMFactories = __webpack_require__(202);
	var ReactElement = __webpack_require__(185);
	var ReactPropTypes = __webpack_require__(207);
	var ReactVersion = __webpack_require__(208);
	
	var onlyChild = __webpack_require__(209);
	var warning = __webpack_require__(187);
	
	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;
	
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(203);
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}
	
	var __spread = _assign;
	
	if (process.env.NODE_ENV !== 'production') {
	  var warned = false;
	  __spread = function () {
	    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
	    warned = true;
	    return _assign.apply(null, arguments);
	  };
	}
	
	var React = {
	
	  // Modern
	
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },
	
	  Component: ReactComponent,
	  PureComponent: ReactPureComponent,
	
	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,
	
	  // Classic
	
	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },
	
	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,
	
	  version: ReactVersion,
	
	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};
	
	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(182);
	var ReactElement = __webpack_require__(185);
	
	var emptyFunction = __webpack_require__(188);
	var traverseAllChildren = __webpack_require__(190);
	
	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;
	
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
	
	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;
	
	  func.call(context, child, bookKeeping.count++);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;
	
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}
	
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	
	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}
	
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}
	
	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};
	
	module.exports = ReactChildren;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(183);
	
	var invariant = __webpack_require__(184);
	
	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};
	
	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};
	
	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};
	
	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};
	
	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};
	
	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};
	
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	
	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};
	
	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};
	
	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 183 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';
	
	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */
	
	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;
	
	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;
	
	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }
	
	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';
	
	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame
	
	  throw error;
	}
	
	module.exports = reactProdInvariant;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(179);
	
	var ReactCurrentOwner = __webpack_require__(186);
	
	var warning = __webpack_require__(187);
	var canDefineProperty = __webpack_require__(189);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	
	var specialPropKeyWarningShown, specialPropRefWarningShown;
	
	function hasValidRef(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}
	
	function hasValidKey(config) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}
	
	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}
	
	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}
	
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	
	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	    var shadowChildren = Array.isArray(props.children) ? props.children.slice(0) : props.children;
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      Object.defineProperty(element, '_shadowChildren', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: shadowChildren
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._shadowChildren = shadowChildren;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }
	
	  return element;
	};
	
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;
	
	  if (config != null) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(
	      /* eslint-disable no-proto */
	      config.__proto__ == null || config.__proto__ === Object.prototype,
	      /* eslint-enable no-proto */
	      'React.createElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
	    }
	
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};
	
	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};
	
	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	
	  return newElement;
	};
	
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;
	
	  // Original props are copied
	  var props = _assign({}, element.props);
	
	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;
	
	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;
	
	  if (config != null) {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(
	      /* eslint-disable no-proto */
	      config.__proto__ == null || config.__proto__ === Object.prototype,
	      /* eslint-enable no-proto */
	      'React.cloneElement(...): Expected props argument to be a plain object. ' + 'Properties defined in its prototype chain will be ignored.') : void 0;
	    }
	
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};
	
	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};
	
	ReactElement.REACT_ELEMENT_TYPE = REACT_ELEMENT_TYPE;
	
	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 186 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */
	
	'use strict';
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	
	var ReactCurrentOwner = {
	
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	
	};
	
	module.exports = ReactCurrentOwner;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(188);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 188 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */
	
	'use strict';
	
	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}
	
	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(183);
	
	var ReactCurrentOwner = __webpack_require__(186);
	var ReactElement = __webpack_require__(185);
	
	var getIteratorFn = __webpack_require__(191);
	var invariant = __webpack_require__(184);
	var KeyEscapeUtils = __webpack_require__(192);
	var warning = __webpack_require__(187);
	
	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */
	
	var didWarnAboutMaps = false;
	
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;
	
	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }
	
	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }
	
	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }
	
	  return subtreeCount;
	}
	
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	
	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 191 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * 
	 */
	
	'use strict';
	
	/* global Symbol */
	
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}
	
	module.exports = getIteratorFn;

/***/ },
/* 192 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule KeyEscapeUtils
	 * 
	 */
	
	'use strict';
	
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
	
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	
	  return '$' + escapedString;
	}
	
	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
	
	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}
	
	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};
	
	module.exports = KeyEscapeUtils;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(183);
	
	var ReactNoopUpdateQueue = __webpack_require__(194);
	
	var canDefineProperty = __webpack_require__(189);
	var emptyObject = __webpack_require__(195);
	var invariant = __webpack_require__(184);
	var warning = __webpack_require__(187);
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	ReactComponent.prototype.isReactComponent = {};
	
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};
	
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};
	
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}
	
	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */
	
	'use strict';
	
	var warning = __webpack_require__(187);
	
	function warnNoop(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    var constructor = publicInstance.constructor;
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}
	
	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },
	
	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },
	
	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};
	
	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPureComponent
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(179);
	
	var ReactComponent = __webpack_require__(193);
	var ReactNoopUpdateQueue = __webpack_require__(194);
	
	var emptyObject = __webpack_require__(195);
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;
	
	module.exports = ReactPureComponent;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(183),
	    _assign = __webpack_require__(179);
	
	var ReactComponent = __webpack_require__(193);
	var ReactElement = __webpack_require__(185);
	var ReactPropTypeLocations = __webpack_require__(198);
	var ReactPropTypeLocationNames = __webpack_require__(200);
	var ReactNoopUpdateQueue = __webpack_require__(194);
	
	var emptyObject = __webpack_require__(195);
	var invariant = __webpack_require__(184);
	var keyMirror = __webpack_require__(199);
	var keyOf = __webpack_require__(201);
	var warning = __webpack_require__(187);
	
	var MIXINS_KEY = keyOf({ mixins: null });
	
	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});
	
	var injectedMixins = [];
	
	/**
	 * Composite components are higher-level components that compose other composite
	 * or host components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {
	
	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,
	
	  // ==== Definition methods ====
	
	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,
	
	  // ==== Delegate methods ====
	
	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
	
	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,
	
	  // ==== Advanced methods ====
	
	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE
	
	};
	
	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };
	
	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but only in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
	    }
	  }
	}
	
	function validateMethodOverride(isAlreadyDefined, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
	
	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
	  }
	
	  // Disallow defining methods more than once unless explicitly allowed.
	  if (isAlreadyDefined) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
	  }
	}
	
	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classes.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      var typeofSpec = typeof spec;
	      var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
	    }
	
	    return;
	  }
	
	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;
	
	  var proto = Constructor.prototype;
	  var autoBindPairs = proto.__reactAutoBindPairs;
	
	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }
	
	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }
	
	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }
	
	    var property = spec[name];
	    var isAlreadyDefined = proto.hasOwnProperty(name);
	    validateMethodOverride(isAlreadyDefined, name);
	
	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
	
	      if (shouldAutoBind) {
	        autoBindPairs.push(name, property);
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];
	
	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;
	
	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}
	
	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }
	
	    var isReserved = name in RESERVED_SPEC_KEYS;
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;
	
	    var isInherited = name in Constructor;
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
	    Constructor[name] = property;
	  }
	}
	
	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;
	
	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}
	
	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}
	
	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}
	
	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	    };
	  }
	  return boundMethod;
	}
	
	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  var pairs = component.__reactAutoBindPairs;
	  for (var i = 0; i < pairs.length; i += 2) {
	    var autoBindKey = pairs[i];
	    var method = pairs[i + 1];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	}
	
	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {
	
	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback, 'replaceState');
	    }
	  },
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  }
	};
	
	var ReactClassComponent = function () {};
	_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
	
	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (initialState === undefined && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;
	
	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, spec);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;
	
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  },
	
	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }
	
	};
	
	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */
	
	'use strict';
	
	var keyMirror = __webpack_require__(199);
	
	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});
	
	module.exports = ReactPropTypeLocations;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(184);
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */
	
	'use strict';
	
	var ReactPropTypeLocationNames = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}
	
	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 201 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(185);
	
	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (process.env.NODE_ENV !== 'production') {
	  var ReactElementValidator = __webpack_require__(203);
	  createDOMFactory = ReactElementValidator.createFactory;
	}
	
	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),
	
	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};
	
	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */
	
	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(186);
	var ReactComponentTreeHook = __webpack_require__(204);
	var ReactElement = __webpack_require__(185);
	var ReactPropTypeLocations = __webpack_require__(198);
	
	var checkReactTypeSpec = __webpack_require__(205);
	
	var canDefineProperty = __webpack_require__(189);
	var getIteratorFn = __webpack_require__(191);
	var warning = __webpack_require__(187);
	
	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};
	
	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();
	
	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}
	
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;
	
	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});
	
	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;
	
	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }
	
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}
	
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, ReactPropTypeLocations.prop, name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}
	
	var ReactElementValidator = {
	
	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : void 0;
	    }
	
	    var element = ReactElement.createElement.apply(this, arguments);
	
	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }
	
	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }
	
	    validatePropTypes(element);
	
	    return element;
	  },
	
	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }
	
	    return validatedFactory;
	  },
	
	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }
	
	};
	
	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeHook
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(183);
	
	var ReactCurrentOwner = __webpack_require__(186);
	
	var invariant = __webpack_require__(184);
	var warning = __webpack_require__(187);
	
	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}
	
	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);
	
	var itemMap;
	var rootIDSet;
	
	var itemByKey;
	var rootByKey;
	
	if (canUseCollections) {
	  itemMap = new Map();
	  rootIDSet = new Set();
	} else {
	  itemByKey = {};
	  rootByKey = {};
	}
	
	var unmountedIDs = [];
	
	// Use non-numeric keys to prevent V8 performance issues:
	// https://github.com/facebook/react/pull/7232
	function getKeyFromID(id) {
	  return '.' + id;
	}
	function getIDFromKey(key) {
	  return parseInt(key.substr(1), 10);
	}
	
	function get(id) {
	  if (canUseCollections) {
	    return itemMap.get(id);
	  } else {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  }
	}
	
	function remove(id) {
	  if (canUseCollections) {
	    itemMap['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  }
	}
	
	function create(id, element, parentID) {
	  var item = {
	    element: element,
	    parentID: parentID,
	    text: null,
	    childIDs: [],
	    isMounted: false,
	    updateCount: 0
	  };
	
	  if (canUseCollections) {
	    itemMap.set(id, item);
	  } else {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  }
	}
	
	function addRoot(id) {
	  if (canUseCollections) {
	    rootIDSet.add(id);
	  } else {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  }
	}
	
	function removeRoot(id) {
	  if (canUseCollections) {
	    rootIDSet['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  }
	}
	
	function getRegisteredIDs() {
	  if (canUseCollections) {
	    return Array.from(itemMap.keys());
	  } else {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  }
	}
	
	function getRootIDs() {
	  if (canUseCollections) {
	    return Array.from(rootIDSet.keys());
	  } else {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  }
	}
	
	function purgeDeep(id) {
	  var item = get(id);
	  if (item) {
	    var childIDs = item.childIDs;
	
	    remove(id);
	    childIDs.forEach(purgeDeep);
	  }
	}
	
	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}
	
	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}
	
	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}
	
	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = get(id);
	    item.childIDs = nextChildIDs;
	
	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = get(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent ID is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    create(id, element, parentID);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = get(id);
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = get(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }
	
	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = get(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var type = topElement.type;
	      var name = typeof type === 'function' ? type.displayName || type.name : type;
	      var owner = topElement._owner;
	      info += describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
	    }
	
	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;
	
	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = get(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = get(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = get(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = get(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = get(id);
	    return item ? item.updateCount : 0;
	  },
	
	
	  getRegisteredIDs: getRegisteredIDs,
	
	  getRootIDs: getRootIDs
	};
	
	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule checkReactTypeSpec
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(183);
	
	var ReactPropTypeLocationNames = __webpack_require__(200);
	var ReactPropTypesSecret = __webpack_require__(206);
	
	var invariant = __webpack_require__(184);
	var warning = __webpack_require__(187);
	
	var ReactComponentTreeHook;
	
	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(204);
	}
	
	var loggedTypeFailures = {};
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	
	        var componentStackInfo = '';
	
	        if (process.env.NODE_ENV !== 'production') {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(204);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }
	
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}
	
	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 206 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypesSecret
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(185);
	var ReactPropTypeLocationNames = __webpack_require__(200);
	var ReactPropTypesSecret = __webpack_require__(206);
	
	var emptyFunction = __webpack_require__(188);
	var getIteratorFn = __webpack_require__(191);
	var warning = __webpack_require__(187);
	
	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */
	
	var ANONYMOUS = '<<anonymous>>';
	
	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	  symbol: createPrimitiveTypeChecker('symbol'),
	
	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	/*eslint-disable no-self-compare*/
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	/*eslint-enable no-self-compare*/
	
	/**
	 * We use an Error-like object for backward compatibility as people may call
	 * PropTypes directly and inspect their output. However we don't use real
	 * Errors anymore. We don't inspect their stack anyway, and creating them
	 * is prohibitively expensive if they are created too often, such as what
	 * happens in oneOfType() for any type before the one that matched.
	 */
	function PropTypeError(message) {
	  this.message = message;
	  this.stack = '';
	}
	// Make `instanceof Error` still work for returned errors.
	PropTypeError.prototype = Error.prototype;
	
	function createChainableTypeChecker(validate) {
	  if (process.env.NODE_ENV !== 'production') {
	    var manualPropTypeCallCache = {};
	  }
	  function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (process.env.NODE_ENV !== 'production') {
	      if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
	        var cacheKey = componentName + ':' + propName;
	        if (!manualPropTypeCallCache[cacheKey]) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in the next major version. You may be ' + 'seeing this warning due to a third-party PropTypes library. ' + 'See https://fb.me/react-warning-dont-call-proptypes for details.', propFullName, componentName) : void 0;
	          manualPropTypeCallCache[cacheKey] = true;
	        }
	      }
	    }
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new PropTypeError('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}
	
	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName, secret) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);
	
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}
	
	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	    }
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!ReactElement.isValidElement(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }
	
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (is(propValue, expectedValues[i])) {
	        return null;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (typeof typeChecker !== 'function') {
	      return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	    }
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	    return emptyFunction.thatReturnsNull;
	  }
	
	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	        return null;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }
	
	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }
	
	      return true;
	    default:
	      return false;
	  }
	}
	
	function isSymbol(propType, propValue) {
	  // Native Symbol.
	  if (propType === 'symbol') {
	    return true;
	  }
	
	  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	  if (propValue['@@toStringTag'] === 'Symbol') {
	    return true;
	  }
	
	  // Fallback for non-spec compliant Symbols which are polyfilled.
	  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	    return true;
	  }
	
	  return false;
	}
	
	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  if (isSymbol(propType, propValue)) {
	    return 'symbol';
	  }
	  return propType;
	}
	
	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}
	
	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return ANONYMOUS;
	  }
	  return propValue.constructor.name;
	}
	
	module.exports = ReactPropTypes;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 208 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */
	
	'use strict';
	
	module.exports = '15.3.1';

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';
	
	var _prodInvariant = __webpack_require__(183);
	
	var ReactElement = __webpack_require__(185);
	
	var invariant = __webpack_require__(184);
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}
	
	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 210 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceMap
	 */
	
	'use strict';
	
	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 */
	
	// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
	
	var ReactInstanceMap = {
	
	  /**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
	  remove: function (key) {
	    key._reactInternalInstance = undefined;
	  },
	
	  get: function (key) {
	    return key._reactInternalInstance;
	  },
	
	  has: function (key) {
	    return key._reactInternalInstance !== undefined;
	  },
	
	  set: function (key, value) {
	    key._reactInternalInstance = value;
	  }
	
	};
	
	module.exports = ReactInstanceMap;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionChildMapping
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(212);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @param {number=} selfDebugID Optional debugID of the current internal instance.
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children, selfDebugID) {
	    if (!children) {
	      return children;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      return flattenChildren(children, selfDebugID);
	    }
	
	    return flattenChildren(children);
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenChildren
	 * 
	 */
	
	'use strict';
	
	var KeyEscapeUtils = __webpack_require__(192);
	var traverseAllChildren = __webpack_require__(190);
	var warning = __webpack_require__(187);
	
	var ReactComponentTreeHook;
	
	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(204);
	}
	
	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 * @param {number=} selfDebugID Optional debugID of the current internal instance.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
	  // We found a component instance.
	  if (traverseContext && typeof traverseContext === 'object') {
	    var result = traverseContext;
	    var keyUnique = result[name] === undefined;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!ReactComponentTreeHook) {
	        ReactComponentTreeHook = __webpack_require__(204);
	      }
	      if (!keyUnique) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
	      }
	    }
	    if (keyUnique && child != null) {
	      result[name] = child;
	    }
	  }
	}
	
	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children, selfDebugID) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	
	  if (process.env.NODE_ENV !== 'production') {
	    traverseAllChildren(children, function (traverseContext, child, name) {
	      return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
	    }, result);
	  } else {
	    traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  }
	  return result;
	}
	
	module.exports = flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FlatButton = __webpack_require__(214);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FlatButton2.default;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(169);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _childUtils = __webpack_require__(215);
	
	var _colorManipulator = __webpack_require__(118);
	
	var _EnhancedButton = __webpack_require__(218);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FlatButtonLabel = __webpack_require__(228);
	
	var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function validateLabel(props, propName, componentName) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}
	
	var FlatButton = function (_Component) {
	  _inherits(FlatButton, _Component);
	
	  function FlatButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, FlatButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FlatButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      isKeyboardFocused: false,
	      touch: false
	    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
	      _this.setState({ isKeyboardFocused: isKeyboardFocused });
	      _this.props.onKeyboardFocus(event, isKeyboardFocused);
	    }, _this.handleMouseEnter = function (event) {
	      // Cancel hover styles for touch devices
	      if (!_this.state.touch) _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({ touch: true });
	      _this.props.onTouchStart(event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(FlatButton, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disabled && this.state.hovered) {
	        this.setState({
	          hovered: false
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var disabled = _props.disabled;
	      var hoverColor = _props.hoverColor;
	      var backgroundColor = _props.backgroundColor;
	      var icon = _props.icon;
	      var label = _props.label;
	      var labelStyle = _props.labelStyle;
	      var labelPosition = _props.labelPosition;
	      var primary = _props.primary;
	      var rippleColor = _props.rippleColor;
	      var secondary = _props.secondary;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['children', 'disabled', 'hoverColor', 'backgroundColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);
	
	      var _context$muiTheme = this.context.muiTheme;
	      var _context$muiTheme$but = _context$muiTheme.button;
	      var buttonHeight = _context$muiTheme$but.height;
	      var buttonMinWidth = _context$muiTheme$but.minWidth;
	      var buttonTextTransform = _context$muiTheme$but.textTransform;
	      var _context$muiTheme$fla = _context$muiTheme.flatButton;
	      var buttonFilterColor = _context$muiTheme$fla.buttonFilterColor;
	      var buttonColor = _context$muiTheme$fla.color;
	      var disabledTextColor = _context$muiTheme$fla.disabledTextColor;
	      var fontSize = _context$muiTheme$fla.fontSize;
	      var fontWeight = _context$muiTheme$fla.fontWeight;
	      var primaryTextColor = _context$muiTheme$fla.primaryTextColor;
	      var secondaryTextColor = _context$muiTheme$fla.secondaryTextColor;
	      var textColor = _context$muiTheme$fla.textColor;
	      var _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform;
	      var textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;
	
	      var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;
	
	      var defaultHoverColor = (0, _colorManipulator.fade)(buttonFilterColor, 0.2);
	      var defaultRippleColor = buttonFilterColor;
	      var buttonHoverColor = hoverColor || defaultHoverColor;
	      var buttonRippleColor = rippleColor || defaultRippleColor;
	      var buttonBackgroundColor = backgroundColor || buttonColor;
	      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        height: buttonHeight,
	        lineHeight: buttonHeight + 'px',
	        minWidth: buttonMinWidth,
	        color: defaultTextColor,
	        transition: _transitions2.default.easeOut(),
	        borderRadius: 2,
	        userSelect: 'none',
	        position: 'relative',
	        overflow: 'hidden',
	        backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
	        padding: 0,
	        margin: 0,
	        textAlign: 'center'
	      }, style);
	
	      var iconCloned = void 0;
	      var labelStyleIcon = {};
	
	      if (icon) {
	        var iconStyles = (0, _simpleAssign2.default)({
	          verticalAlign: 'middle',
	          marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	          marginRight: label && labelPosition === 'before' ? 12 : 0
	        }, icon.props.style);
	        iconCloned = _react2.default.cloneElement(icon, {
	          color: icon.props.color || mergedRootStyles.color,
	          style: iconStyles
	        });
	
	        if (labelPosition === 'before') {
	          labelStyleIcon.paddingRight = 8;
	        } else {
	          labelStyleIcon.paddingLeft = 8;
	        }
	      }
	
	      var mergedLabelStyles = (0, _simpleAssign2.default)({
	        letterSpacing: 0,
	        textTransform: textTransform,
	        fontWeight: fontWeight,
	        fontSize: fontSize
	      }, labelStyleIcon, labelStyle);
	
	      var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { label: label, style: mergedLabelStyles }) : undefined;
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        _extends({}, other, {
	          disabled: disabled,
	          focusRippleColor: buttonRippleColor,
	          focusRippleOpacity: 0.3,
	          onKeyboardFocus: this.handleKeyboardFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onTouchStart: this.handleTouchStart,
	          style: mergedRootStyles,
	          touchRippleColor: buttonRippleColor,
	          touchRippleOpacity: 0.3
	        }),
	        enhancedButtonChildren
	      );
	    }
	  }]);
	
	  return FlatButton;
	}(_react.Component);
	
	FlatButton.muiName = 'FlatButton';
	FlatButton.propTypes = {
	  /**
	   * Color of button when mouse is not hovering over it.
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * This is what will be displayed inside the button.
	   * If a label is specified, the text within the label prop will
	   * be displayed. Otherwise, the component will expect children
	   * which will then be displayed. (In our example,
	   * we are nesting an `<input type="file" />` and a `span`
	   * that acts as our label to be displayed.) This only
	   * applies to flat and raised buttons.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Disables the button if set to true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Color of button when mouse hovers over.
	   */
	  hoverColor: _react.PropTypes.string,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * Use this property to display an icon.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * Label for the button.
	   */
	  label: validateLabel,
	  /**
	   * Place label before or after the passed children.
	   */
	  labelPosition: _react.PropTypes.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react.PropTypes.object,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * If true, colors button according to
	   * primaryTextColor from the Theme.
	   */
	  primary: _react.PropTypes.bool,
	  /**
	   * Color for the ripple after button is clicked.
	   */
	  rippleColor: _react.PropTypes.string,
	  /**
	   * If true, colors button according to secondaryTextColor from the theme.
	   * The primary prop has precendent if set to true.
	   */
	  secondary: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	FlatButton.defaultProps = {
	  disabled: false,
	  labelStyle: {},
	  labelPosition: 'after',
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onTouchStart: function onTouchStart() {},
	  primary: false,
	  secondary: false
	};
	FlatButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = FlatButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createChildFragment = createChildFragment;
	exports.extendChildren = extendChildren;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCreateFragment = __webpack_require__(216);
	
	var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createChildFragment(fragments) {
	  var newFragments = {};
	  var validChildrenCount = 0;
	  var firstKey = void 0;
	
	  // Only create non-empty key fragments
	  for (var key in fragments) {
	    var currentChild = fragments[key];
	
	    if (currentChild) {
	      if (validChildrenCount === 0) firstKey = key;
	      newFragments[key] = currentChild;
	      validChildrenCount++;
	    }
	  }
	
	  if (validChildrenCount === 0) return undefined;
	  if (validChildrenCount === 1) return newFragments[firstKey];
	  return (0, _reactAddonsCreateFragment2.default)(newFragments);
	}
	
	function extendChildren(children, extendedProps, extendedChildren) {
	  return _react2.default.isValidElement(children) ? _react2.default.Children.map(children, function (child) {
	    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;
	
	    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;
	
	    return _react2.default.cloneElement(child, newProps, newChildren);
	  }) : children;
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(217).create;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFragment
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(183);
	
	var ReactChildren = __webpack_require__(181);
	var ReactElement = __webpack_require__(185);
	
	var emptyFunction = __webpack_require__(188);
	var invariant = __webpack_require__(184);
	var warning = __webpack_require__(187);
	
	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set or fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */
	
	var numericPropertyRegex = /^\d+$/;
	
	var warnedAboutNumeric = false;
	
	var ReactFragment = {
	  /**
	   * Wrap a keyed object in an opaque proxy that warns you if you access any
	   * of its properties.
	   * See https://facebook.github.io/react/docs/create-fragment.html
	   */
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : void 0;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : void 0;
	      return object;
	    }
	
	    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.') : _prodInvariant('0') : void 0;
	
	    var result = [];
	
	    for (var key in object) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : void 0;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }
	
	    return result;
	  }
	};
	
	module.exports = ReactFragment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _childUtils = __webpack_require__(215);
	
	var _events = __webpack_require__(219);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _keycode = __webpack_require__(168);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _FocusRipple = __webpack_require__(220);
	
	var _FocusRipple2 = _interopRequireDefault(_FocusRipple);
	
	var _TouchRipple = __webpack_require__(225);
	
	var _TouchRipple2 = _interopRequireDefault(_TouchRipple);
	
	var _deprecatedPropType = __webpack_require__(227);
	
	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styleInjected = false;
	var listening = false;
	var tabPressed = false;
	
	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';
	
	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}
	
	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (event) {
	      tabPressed = (0, _keycode2.default)(event) === 'tab';
	    });
	    listening = true;
	  }
	}
	
	var EnhancedButton = function (_Component) {
	  _inherits(EnhancedButton, _Component);
	
	  function EnhancedButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, EnhancedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(EnhancedButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = { isKeyboardFocused: false }, _this.handleKeyDown = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
	          _this.removeKeyboardFocus(event);
	        }
	      }
	      _this.props.onKeyDown(event);
	    }, _this.handleKeyUp = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	      }
	      _this.props.onKeyUp(event);
	    }, _this.handleBlur = function (event) {
	      _this.cancelFocusTimeout();
	      _this.removeKeyboardFocus(event);
	      _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      if (event) event.persist();
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        // setTimeout is needed because the focus event fires first
	        // Wait so that we can capture if this was a keyboard focus
	        // or touch focus
	        _this.focusTimeout = setTimeout(function () {
	          if (tabPressed) {
	            _this.setKeyboardFocus(event);
	            tabPressed = false;
	          }
	        }, 150);
	
	        _this.props.onFocus(event);
	      }
	    }, _this.handleClick = function (event) {
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.props.onClick(event);
	      }
	    }, _this.handleTouchTap = function (event) {
	      _this.cancelFocusTimeout();
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.removeKeyboardFocus(event);
	        _this.props.onTouchTap(event);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(EnhancedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var disabled = _props.disabled;
	      var disableKeyboardFocus = _props.disableKeyboardFocus;
	      var keyboardFocused = _props.keyboardFocused;
	
	      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
	        this.setState({ isKeyboardFocused: true });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      injectStyle();
	      listenForTabPresses();
	      if (this.state.isKeyboardFocused) {
	        this.refs.enhancedButton.focus();
	        this.props.onKeyboardFocus(null, true);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        if (nextProps.onKeyboardFocus) {
	          nextProps.onKeyboardFocus(null, false);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.focusTimeout);
	    }
	  }, {
	    key: 'isKeyboardFocused',
	    value: function isKeyboardFocused() {
	      return this.state.isKeyboardFocused;
	    }
	  }, {
	    key: 'removeKeyboardFocus',
	    value: function removeKeyboardFocus(event) {
	      if (this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        this.props.onKeyboardFocus(event, false);
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus(event) {
	      if (!this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: true });
	        this.props.onKeyboardFocus(event, true);
	      }
	    }
	  }, {
	    key: 'cancelFocusTimeout',
	    value: function cancelFocusTimeout() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	        this.focusTimeout = null;
	      }
	    }
	  }, {
	    key: 'createButtonChildren',
	    value: function createButtonChildren() {
	      var _props2 = this.props;
	      var centerRipple = _props2.centerRipple;
	      var children = _props2.children;
	      var disabled = _props2.disabled;
	      var disableFocusRipple = _props2.disableFocusRipple;
	      var disableKeyboardFocus = _props2.disableKeyboardFocus;
	      var disableTouchRipple = _props2.disableTouchRipple;
	      var focusRippleColor = _props2.focusRippleColor;
	      var focusRippleOpacity = _props2.focusRippleOpacity;
	      var touchRippleColor = _props2.touchRippleColor;
	      var touchRippleOpacity = _props2.touchRippleOpacity;
	      var isKeyboardFocused = this.state.isKeyboardFocused;
	
	      // Focus Ripple
	
	      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
	        color: focusRippleColor,
	        opacity: focusRippleOpacity,
	        show: isKeyboardFocused
	      }) : undefined;
	
	      // Touch Ripple
	      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	        _TouchRipple2.default,
	        {
	          centerRipple: centerRipple,
	          color: touchRippleColor,
	          opacity: touchRippleOpacity
	        },
	        children
	      ) : undefined;
	
	      return (0, _childUtils.createChildFragment)({
	        focusRipple: focusRipple,
	        touchRipple: touchRipple,
	        children: touchRipple ? undefined : children
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var centerRipple = _props3.centerRipple;
	      var children = _props3.children;
	      var containerElement = _props3.containerElement;
	      var disabled = _props3.disabled;
	      var disableFocusRipple = _props3.disableFocusRipple;
	      var disableKeyboardFocus = _props3.disableKeyboardFocus;
	      var disableTouchRipple = _props3.disableTouchRipple;
	      var focusRippleColor = _props3.focusRippleColor;
	      var focusRippleOpacity = _props3.focusRippleOpacity;
	      var href = _props3.href;
	      var keyboardFocused = _props3.keyboardFocused;
	      var linkButton = _props3.linkButton;
	      var touchRippleColor = _props3.touchRippleColor;
	      var touchRippleOpacity = _props3.touchRippleOpacity;
	      var onBlur = _props3.onBlur;
	      var onClick = _props3.onClick;
	      var onFocus = _props3.onFocus;
	      var onKeyUp = _props3.onKeyUp;
	      var onKeyDown = _props3.onKeyDown;
	      var onKeyboardFocus = _props3.onKeyboardFocus;
	      var onTouchTap = _props3.onTouchTap;
	      var style = _props3.style;
	      var tabIndex = _props3.tabIndex;
	      var type = _props3.type;
	
	      var other = _objectWithoutProperties(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'linkButton', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'onTouchTap', 'style', 'tabIndex', 'type']);
	
	      var _context$muiTheme = this.context.muiTheme;
	      var prepareStyles = _context$muiTheme.prepareStyles;
	      var enhancedButton = _context$muiTheme.enhancedButton;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        border: 10,
	        boxSizing: 'border-box',
	        display: 'inline-block',
	        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
	        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
	        cursor: disabled ? 'default' : 'pointer',
	        textDecoration: 'none',
	        margin: 0,
	        padding: 0,
	        outline: 'none',
	        fontSize: 'inherit',
	        fontWeight: 'inherit',
	        /**
	         * This is needed so that ripples do not bleed
	         * past border radius.
	         * See: http://stackoverflow.com/questions/17298739/
	         * css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
	         */
	        transform: disableTouchRipple && disableFocusRipple ? null : 'translate(0, 0)',
	        verticalAlign: href ? 'middle' : null
	      }, style);
	
	      // Passing both background:none & backgroundColor can break due to object iteration order
	      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
	        mergedStyles.background = 'none';
	      }
	
	      if (disabled && href) {
	        return _react2.default.createElement(
	          'span',
	          _extends({}, other, {
	            style: mergedStyles
	          }),
	          children
	        );
	      }
	
	      var buttonProps = _extends({}, other, {
	        style: prepareStyles(mergedStyles),
	        ref: 'enhancedButton',
	        disabled: disabled,
	        href: href,
	        onBlur: this.handleBlur,
	        onClick: this.handleClick,
	        onFocus: this.handleFocus,
	        onKeyUp: this.handleKeyUp,
	        onKeyDown: this.handleKeyDown,
	        onTouchTap: this.handleTouchTap,
	        tabIndex: tabIndex,
	        type: type
	      });
	      var buttonChildren = this.createButtonChildren();
	
	      if (_react2.default.isValidElement(containerElement)) {
	        return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
	      }
	
	      return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
	    }
	  }]);
	
	  return EnhancedButton;
	}(_react.Component);
	
	EnhancedButton.propTypes = {
	  centerRipple: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  containerElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  disableFocusRipple: _react.PropTypes.bool,
	  disableKeyboardFocus: _react.PropTypes.bool,
	  disableTouchRipple: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  focusRippleColor: _react.PropTypes.string,
	  focusRippleOpacity: _react.PropTypes.number,
	  href: _react.PropTypes.string,
	  keyboardFocused: _react.PropTypes.bool,
	  linkButton: (0, _deprecatedPropType2.default)(_react.PropTypes.bool, 'LinkButton is no longer required when the `href` property is provided.\n      It will be removed with v0.16.0.'),
	  onBlur: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func,
	  onKeyUp: _react.PropTypes.func,
	  onKeyboardFocus: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  onTouchEnd: _react.PropTypes.func,
	  onTouchStart: _react.PropTypes.func,
	  onTouchTap: _react.PropTypes.func,
	  style: _react.PropTypes.object,
	  tabIndex: _react.PropTypes.number,
	  touchRippleColor: _react.PropTypes.string,
	  touchRippleOpacity: _react.PropTypes.number,
	  type: _react.PropTypes.string
	};
	EnhancedButton.defaultProps = {
	  containerElement: 'button',
	  onBlur: function onBlur() {},
	  onClick: function onClick() {},
	  onFocus: function onFocus() {},
	  onKeyDown: function onKeyDown() {},
	  onKeyUp: function onKeyUp() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseDown: function onMouseDown() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onMouseUp: function onMouseUp() {},
	  onTouchEnd: function onTouchEnd() {},
	  onTouchStart: function onTouchStart() {},
	  onTouchTap: function onTouchTap() {},
	  tabIndex: 0,
	  type: 'button'
	};
	EnhancedButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = EnhancedButton;

/***/ },
/* 219 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(event) {
	      event.target.removeEventListener(event.type, recursiveFunction);
	      return callback(event);
	    };
	
	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(event) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
	  }
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(221);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(222);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(169);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _ScaleIn = __webpack_require__(223);
	
	var _ScaleIn2 = _interopRequireDefault(_ScaleIn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var pulsateDuration = 750;
	
	var FocusRipple = function (_Component) {
	  _inherits(FocusRipple, _Component);
	
	  function FocusRipple() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, FocusRipple);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FocusRipple)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.pulsate = function () {
	      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
	      if (!innerCircle) return;
	
	      var startScale = 'scale(1)';
	      var endScale = 'scale(0.85)';
	      var currentScale = innerCircle.style.transform || startScale;
	      var nextScale = currentScale === startScale ? endScale : startScale;
	
	      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
	      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(FocusRipple, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      } else {
	        if (this.timeout) clearTimeout(this.timeout);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'getRippleElement',
	    value: function getRippleElement(props) {
	      var color = props.color;
	      var innerStyle = props.innerStyle;
	      var opacity = props.opacity;
	      var _context$muiTheme = this.context.muiTheme;
	      var prepareStyles = _context$muiTheme.prepareStyles;
	      var ripple = _context$muiTheme.ripple;
	
	
	      var innerStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        opacity: opacity ? opacity : 0.16,
	        backgroundColor: color || ripple.color,
	        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	      }, innerStyle);
	
	      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	      var height = el.offsetHeight;
	      var width = el.offsetWidth;
	      var size = Math.max(height, width);
	
	      var oldTop = 0;
	      // For browsers that don't support endsWith()
	      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	        oldTop = parseInt(el.style.top);
	      }
	      el.style.height = size + 'px';
	      el.style.top = height / 2 - size / 2 + oldTop + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var show = _props.show;
	      var style = _props.style;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0
	      }, style);
	
	      var ripple = show ? this.getRippleElement(this.props) : null;
	
	      return _react2.default.createElement(
	        _ScaleIn2.default,
	        {
	          maxScale: 0.85,
	          style: mergedRootStyles
	        },
	        ripple
	      );
	    }
	  }]);
	
	  return FocusRipple;
	}(_react.Component);
	
	FocusRipple.propTypes = {
	  color: _react.PropTypes.string,
	  innerStyle: _react.PropTypes.object,
	  opacity: _react.PropTypes.number,
	  show: _react.PropTypes.bool,
	  style: _react.PropTypes.object
	};
	FocusRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = FocusRipple;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _shallowEqual = __webpack_require__(167);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _shallowEqual2.default;

/***/ },
/* 222 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  set: function set(style, key, value) {
	    style[key] = value;
	  }
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsTransitionGroup = __webpack_require__(177);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _ScaleInChild = __webpack_require__(224);
	
	var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScaleIn = function (_Component) {
	  _inherits(ScaleIn, _Component);
	
	  function ScaleIn() {
	    _classCallCheck(this, ScaleIn);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ScaleIn).apply(this, arguments));
	  }
	
	  _createClass(ScaleIn, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var childStyle = _props.childStyle;
	      var enterDelay = _props.enterDelay;
	      var maxScale = _props.maxScale;
	      var minScale = _props.minScale;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'relative',
	        overflow: 'hidden',
	        height: '100%'
	      }, style);
	
	      var newChildren = _react2.default.Children.map(children, function (child) {
	        return _react2.default.createElement(
	          _ScaleInChild2.default,
	          {
	            key: child.key,
	            enterDelay: enterDelay,
	            maxScale: maxScale,
	            minScale: minScale,
	            style: childStyle
	          },
	          child
	        );
	      });
	
	      return _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        _extends({}, other, {
	          style: prepareStyles(mergedRootStyles),
	          component: 'div'
	        }),
	        newChildren
	      );
	    }
	  }]);
	
	  return ScaleIn;
	}(_react.Component);
	
	ScaleIn.propTypes = {
	  childStyle: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  enterDelay: _react.PropTypes.number,
	  maxScale: _react.PropTypes.number,
	  minScale: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	ScaleIn.defaultProps = {
	  enterDelay: 0
	};
	ScaleIn.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = ScaleIn;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _autoPrefix = __webpack_require__(222);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(169);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScaleInChild = function (_Component) {
	  _inherits(ScaleInChild, _Component);
	
	  function ScaleInChild() {
	    _classCallCheck(this, ScaleInChild);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ScaleInChild).apply(this, arguments));
	  }
	
	  _createClass(ScaleInChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');
	
	      this.leaveTimer = setTimeout(callback, 450);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '1';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	
	      this.enterTimer = setTimeout(callback, this.props.enterDelay);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var enterDelay = _props.enterDelay;
	      var maxScale = _props.maxScale;
	      var minScale = _props.minScale;
	      var style = _props.style;
	
	      var other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        top: 0,
	        left: 0,
	        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	      }, style);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, { style: prepareStyles(mergedRootStyles) }),
	        children
	      );
	    }
	  }]);
	
	  return ScaleInChild;
	}(_react.Component);
	
	ScaleInChild.propTypes = {
	  children: _react.PropTypes.node,
	  enterDelay: _react.PropTypes.number,
	  maxScale: _react.PropTypes.number,
	  minScale: _react.PropTypes.number,
	  style: _react.PropTypes.object
	};
	ScaleInChild.defaultProps = {
	  enterDelay: 0,
	  maxScale: 1,
	  minScale: 0
	};
	ScaleInChild.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = ScaleInChild;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsTransitionGroup = __webpack_require__(177);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _dom = __webpack_require__(173);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _CircleRipple = __webpack_require__(226);
	
	var _CircleRipple2 = _interopRequireDefault(_CircleRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }
	
	// Remove the first element of the array
	var shift = function shift(_ref) {
	  var _ref2 = _toArray(_ref);
	
	  var newArray = _ref2.slice(1);
	
	  return newArray;
	};
	
	var TouchRipple = function (_Component) {
	  _inherits(TouchRipple, _Component);
	
	  function TouchRipple(props, context) {
	    _classCallCheck(this, TouchRipple);
	
	    // Touch start produces a mouse down event for compat reasons. To avoid
	    // showing ripples twice we skip showing a ripple for the first mouse down
	    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    // to avoid re-rendering when we change it.
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TouchRipple).call(this, props, context));
	
	    _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.start(event, false);
	      }
	    };
	
	    _this.handleMouseUp = function () {
	      _this.end();
	    };
	
	    _this.handleMouseLeave = function () {
	      _this.end();
	    };
	
	    _this.handleTouchStart = function (event) {
	      event.stopPropagation();
	      // If the user is swiping (not just tapping), save the position so we can
	      // abort ripples if the user appears to be scrolling.
	      if (_this.props.abortOnScroll && event.touches) {
	        _this.startListeningForScrollAbort(event);
	        _this.startTime = Date.now();
	      }
	      _this.start(event, true);
	    };
	
	    _this.handleTouchEnd = function () {
	      _this.end();
	    };
	
	    _this.handleTouchMove = function (event) {
	      // Stop trying to abort if we're already 300ms into the animation
	      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
	      if (timeSinceStart > 300) {
	        _this.stopListeningForScrollAbort();
	        return;
	      }
	
	      // If the user is scrolling...
	      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
	      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
	      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
	      if (deltaY > 6 || deltaX > 6) {
	        var currentRipples = _this.state.ripples;
	        var ripple = currentRipples[0];
	        // This clone will replace the ripple in ReactTransitionGroup with a
	        // version that will disappear immediately when removed from the DOM
	        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
	        // Remove the old ripple and replace it with the new updated one
	        currentRipples = shift(currentRipples);
	        currentRipples = [].concat(_toConsumableArray(currentRipples), [abortedRipple]);
	        _this.setState({ ripples: currentRipples }, function () {
	          // Call end after we've set the ripple to abort otherwise the setState
	          // in end() merges with this and the ripple abort fails
	          _this.end();
	        });
	      }
	    };
	
	    _this.ignoreNextMouseDown = false;
	
	    _this.state = {
	      // This prop allows us to only render the ReactTransitionGroup
	      // on the first click of the component, making the inital render faster.
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	    return _this;
	  }
	
	  _createClass(TouchRipple, [{
	    key: 'start',
	    value: function start(event, isRippleTouchGenerated) {
	      var theme = this.context.muiTheme.ripple;
	
	      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
	        this.ignoreNextMouseDown = false;
	        return;
	      }
	
	      var ripples = this.state.ripples;
	
	      // Add a ripple to the ripples array
	      ripples = [].concat(_toConsumableArray(ripples), [_react2.default.createElement(_CircleRipple2.default, {
	        key: this.state.nextKey,
	        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
	        color: this.props.color || theme.color,
	        opacity: this.props.opacity,
	        touchGenerated: isRippleTouchGenerated
	      })]);
	
	      this.ignoreNextMouseDown = isRippleTouchGenerated;
	      this.setState({
	        hasRipples: true,
	        nextKey: this.state.nextKey + 1,
	        ripples: ripples
	      });
	    }
	  }, {
	    key: 'end',
	    value: function end() {
	      var currentRipples = this.state.ripples;
	      this.setState({
	        ripples: shift(currentRipples)
	      });
	      if (this.props.abortOnScroll) {
	        this.stopListeningForScrollAbort();
	      }
	    }
	
	    // Check if the user seems to be scrolling and abort the animation if so
	
	  }, {
	    key: 'startListeningForScrollAbort',
	    value: function startListeningForScrollAbort(event) {
	      this.firstTouchY = event.touches[0].clientY;
	      this.firstTouchX = event.touches[0].clientX;
	      // Note that when scolling Chrome throttles this event to every 200ms
	      // Also note we don't listen for scroll events directly as there's no general
	      // way to cover cases like scrolling within containers on the page
	      document.body.addEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'stopListeningForScrollAbort',
	    value: function stopListeningForScrollAbort() {
	      document.body.removeEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'getRippleStyle',
	    value: function getRippleStyle(event) {
	      var style = {};
	      var el = _reactDom2.default.findDOMNode(this);
	      var elHeight = el.offsetHeight;
	      var elWidth = el.offsetWidth;
	      var offset = _dom2.default.offset(el);
	      var isTouchEvent = event.touches && event.touches.length;
	      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
	      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
	      var pointerX = pageX - offset.left;
	      var pointerY = pageY - offset.top;
	      var topLeftDiag = this.calcDiag(pointerX, pointerY);
	      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
	      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
	      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
	      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	      var rippleSize = rippleRadius * 2;
	      var left = pointerX - rippleRadius;
	      var top = pointerY - rippleRadius;
	
	      style.height = rippleSize + 'px';
	      style.width = rippleSize + 'px';
	      style.top = top + 'px';
	      style.left = left + 'px';
	
	      return style;
	    }
	  }, {
	    key: 'calcDiag',
	    value: function calcDiag(a, b) {
	      return Math.sqrt(a * a + b * b);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var style = _props.style;
	      var _state = this.state;
	      var hasRipples = _state.hasRipples;
	      var ripples = _state.ripples;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var rippleGroup = void 0;
	
	      if (hasRipples) {
	        var mergedStyles = (0, _simpleAssign2.default)({
	          height: '100%',
	          width: '100%',
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          overflow: 'hidden'
	        }, style);
	
	        rippleGroup = _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          { style: prepareStyles(mergedStyles) },
	          ripples
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseUp: this.handleMouseUp,
	          onMouseDown: this.handleMouseDown,
	          onMouseLeave: this.handleMouseLeave,
	          onTouchStart: this.handleTouchStart,
	          onTouchEnd: this.handleTouchEnd
	        },
	        rippleGroup,
	        children
	      );
	    }
	  }]);
	
	  return TouchRipple;
	}(_react.Component);
	
	TouchRipple.propTypes = {
	  abortOnScroll: _react.PropTypes.bool,
	  centerRipple: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  color: _react.PropTypes.string,
	  opacity: _react.PropTypes.number,
	  style: _react.PropTypes.object
	};
	TouchRipple.defaultProps = {
	  abortOnScroll: true
	};
	TouchRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = TouchRipple;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(221);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(222);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(169);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CircleRipple = function (_Component) {
	  _inherits(CircleRipple, _Component);
	
	  function CircleRipple() {
	    _classCallCheck(this, CircleRipple);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CircleRipple).apply(this, arguments));
	  }
	
	  _createClass(CircleRipple, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = 0;
	      // If the animation is aborted, remove from the DOM immediately
	      var removeAfter = this.props.aborted ? 0 : 2000;
	      this.enterTimer = setTimeout(callback, removeAfter);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
	      _autoPrefix2.default.set(style, 'transition', transitionValue);
	      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = this.props.opacity;
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	      this.leaveTimer = setTimeout(callback, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var aborted = _props.aborted;
	      var color = _props.color;
	      var opacity = _props.opacity;
	      var style = _props.style;
	      var touchGenerated = _props.touchGenerated;
	
	      var other = _objectWithoutProperties(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        backgroundColor: color
	      }, style);
	
	      return _react2.default.createElement('div', _extends({}, other, { style: prepareStyles(mergedStyles) }));
	    }
	  }]);
	
	  return CircleRipple;
	}(_react.Component);
	
	CircleRipple.propTypes = {
	  aborted: _react.PropTypes.bool,
	  color: _react.PropTypes.string,
	  opacity: _react.PropTypes.number,
	  style: _react.PropTypes.object,
	  touchGenerated: _react.PropTypes.bool
	};
	CircleRipple.defaultProps = {
	  opacity: 0.1,
	  aborted: false
	};
	CircleRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = CircleRipple;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deprecated;
	
	var _warning = __webpack_require__(156);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {}; /**
	                  * This module is taken from https://github.com/react-bootstrap/react-prop-types.
	                  * It's not a dependency to reduce build size / install time.
	                  * It should be pretty stable.
	                  */
	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;
	
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason)) : void 0;
	
	      warned[messageKey] = true;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      position: 'relative',
	      paddingLeft: baseTheme.spacing.desktopGutterLess,
	      paddingRight: baseTheme.spacing.desktopGutterLess,
	      verticalAlign: 'middle'
	    }
	  };
	}
	
	var FlatButtonLabel = function (_Component) {
	  _inherits(FlatButtonLabel, _Component);
	
	  function FlatButtonLabel() {
	    _classCallCheck(this, FlatButtonLabel);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FlatButtonLabel).apply(this, arguments));
	  }
	
	  _createClass(FlatButtonLabel, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var label = _props.label;
	      var style = _props.style;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	        label
	      );
	    }
	  }]);
	
	  return FlatButtonLabel;
	}(_react.Component);
	
	FlatButtonLabel.propTypes = {
	  label: _react.PropTypes.node,
	  style: _react.PropTypes.object
	};
	FlatButtonLabel.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = FlatButtonLabel;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _RaisedButton = __webpack_require__(230);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _RaisedButton2.default;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpleAssign = __webpack_require__(165);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(169);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colorManipulator = __webpack_require__(118);
	
	var _childUtils = __webpack_require__(215);
	
	var _EnhancedButton = __webpack_require__(218);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _Paper = __webpack_require__(174);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function validateLabel(props, propName, componentName) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}
	
	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var button = _context$muiTheme.button;
	  var raisedButton = _context$muiTheme.raisedButton;
	  var disabled = props.disabled;
	  var disabledBackgroundColor = props.disabledBackgroundColor;
	  var disabledLabelColor = props.disabledLabelColor;
	  var fullWidth = props.fullWidth;
	  var icon = props.icon;
	  var label = props.label;
	  var labelPosition = props.labelPosition;
	  var primary = props.primary;
	  var secondary = props.secondary;
	  var style = props.style;
	
	
	  var amount = primary || secondary ? 0.4 : 0.08;
	
	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;
	
	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }
	
	  var buttonHeight = style && style.height || button.height;
	  var borderRadius = 2;
	
	  return {
	    root: {
	      display: 'inline-block',
	      transition: _transitions2.default.easeOut(),
	      minWidth: fullWidth ? '100%' : button.minWidth
	    },
	    button: {
	      position: 'relative',
	      height: buttonHeight,
	      lineHeight: buttonHeight + 'px',
	      width: '100%',
	      padding: 0,
	      borderRadius: borderRadius,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      opacity: 1,
	      fontSize: raisedButton.fontSize,
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      color: labelColor
	    },
	    icon: {
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}
	
	var RaisedButton = function (_Component) {
	  _inherits(RaisedButton, _Component);
	
	  function RaisedButton() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, RaisedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RaisedButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      keyboardFocused: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	      }
	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.state.keyboardFocused) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth,
	          hovered: false
	        });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.keyboardFocused && !_this.state.touched) {
	        _this.setState({
	          hovered: true
	        });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth + 1
	      });
	
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	
	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;
	
	      _this.setState({
	        zDepth: zDepth,
	        keyboardFocused: keyboardFocused
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      var nextState = {
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      };
	
	      if (nextProps.disabled && this.state.hovered) {
	        nextState.hovered = false;
	      }
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var backgroundColor = _props.backgroundColor;
	      var children = _props.children;
	      var className = _props.className;
	      var disabled = _props.disabled;
	      var fullWidth = _props.fullWidth;
	      var icon = _props.icon;
	      var label = _props.label;
	      var labelColor = _props.labelColor;
	      var labelPosition = _props.labelPosition;
	      var labelStyle = _props.labelStyle;
	      var primary = _props.primary;
	      var rippleStyle = _props.rippleStyle;
	      var secondary = _props.secondary;
	
	      var other = _objectWithoutProperties(_props, ['backgroundColor', 'children', 'className', 'disabled', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'primary', 'rippleStyle', 'secondary']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);
	
	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };
	
	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
	        label
	      );
	
	      var iconCloned = icon && (0, _react.cloneElement)(icon, {
	        color: icon.props.color || styles.label.color,
	        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	      });
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          _extends({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: styles.button,
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles(styles.overlay)
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);
	
	  return RaisedButton;
	}(_react.Component);
	
	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.propTypes = {
	  /**
	   * Override the default background color for the button,
	   * but not the default disabled background color
	   * (use `disabledBackgroundColor` for this).
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * The content of the button.
	   * If a label is provided via the `label` prop, the text within the label
	   * will be displayed in addition to the content provided here.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the button will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Override the default background color for the button
	   * when it is disabled.
	   */
	  disabledBackgroundColor: _react.PropTypes.string,
	  /**
	   * The color of the button's label when the button is disabled.
	   */
	  disabledLabelColor: _react.PropTypes.string,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _react.PropTypes.bool,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * An icon to be displayed within the button.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * The label to be displayed within the button.
	   * If content is provided via the `children` prop, that content will be
	   * displayed in addition to the label provided here.
	   */
	  label: validateLabel,
	  /**
	   * The color of the button's label.
	   */
	  labelColor: _react.PropTypes.string,
	  /**
	   * The position of the button's label relative to the button's `children`.
	   */
	  labelPosition: _react.PropTypes.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react.PropTypes.object,
	  /** @ignore */
	  onMouseDown: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onMouseUp: _react.PropTypes.func,
	  /** @ignore */
	  onTouchEnd: _react.PropTypes.func,
	  /** @ignore */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * If true, the button will use the theme's primary color.
	   */
	  primary: _react.PropTypes.bool,
	  /**
	   * Override the inline style of the ripple element.
	   */
	  rippleStyle: _react.PropTypes.object,
	  /**
	   * If true, the button will use the theme's secondary color.
	   * If both `secondary` and `primary` are true, the button will use
	   * the theme's primary color.
	   */
	  secondary: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = RaisedButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(124)))

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map