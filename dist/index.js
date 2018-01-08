(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ez-tags"] = factory();
	else
		root["ez-tags"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(6);
var defined = __webpack_require__(7);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(37);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__vue_script__ = __webpack_require__(48)
if (__vue_script__ &&
    __vue_script__.__esModule &&
    Object.keys(__vue_script__).length > 1) {
  console.warn("[vue-loader] src/mixins/option.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(49)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
if (__vue_template__) {
(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
}
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "./option.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__vue_script__ = __webpack_require__(50)
if (__vue_script__ &&
    __vue_script__.__esModule &&
    Object.keys(__vue_script__).length > 1) {
  console.warn("[vue-loader] src/mixins/selected.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(51)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
if (__vue_template__) {
(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
}
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "./selected.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_tags_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_tags_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_tags_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_option_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_option_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mixins_option_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_selected_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_selected_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mixins_selected_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "EzTags", function() { return __WEBPACK_IMPORTED_MODULE_1__mixins_tags_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "EzTagsOption", function() { return __WEBPACK_IMPORTED_MODULE_2__mixins_option_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "EzTagsSelected", function() { return __WEBPACK_IMPORTED_MODULE_3__mixins_selected_vue___default.a; });








/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__webpack_require__(15)
__vue_script__ = __webpack_require__(19)
if (__vue_script__ &&
    __vue_script__.__esModule &&
    Object.keys(__vue_script__).length > 1) {
  console.warn("[vue-loader] src/mixins/tags.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(52)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
if (__vue_template__) {
(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
}
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "./tags.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(17)("0b61febd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tags.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tags.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, ".ez-tag {\n  position: relative;\n  box-sizing: border-box;\n  cursor: text; }\n\n.ez-tag * {\n  box-sizing: border-box; }\n\n.ez-tag__pointer {\n  margin: 5px 10px 10px 10px;\n  cursor: pointer;\n  opacity: 0.6;\n  transition: all 0.150s; }\n\n.ez-tag__display {\n  cursor: pointer; }\n\n.ez-tag__placeholder {\n  opacity: 0.5;\n  margin: 5px 10px 10px 10px; }\n\n.ez-tag--focus .ez-tag__input-container {\n  outline: 0;\n  border-color: #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n\n.ez-tag__input-container {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  padding: 10px 10px 5px 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ez-tag__input-container--open {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.ez-tag__display-container {\n  padding: 5px 5px 0 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.ez-tag__display-container:hover {\n  opacity: 1; }\n\n.ez-tag__items {\n  width: calc(100% - 15px); }\n\n.ez-tag__clear-items {\n  background: white;\n  width: 15px;\n  position: relative; }\n\n.ez-tag__item {\n  border-radius: 10px;\n  border: 1px solid #dedede;\n  padding: 5px 20px 5px 10px;\n  display: inline-block;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  position: relative; }\n\n.ez-tag__item-text {\n  display: inline-block;\n  vertical-align: bottom; }\n\n.ez-tag__item-cross {\n  position: absolute;\n  right: 0;\n  top: 5px;\n  font-size: 5px;\n  width: 3em;\n  height: 3em;\n  opacity: 0.5;\n  cursor: pointer; }\n\n.ez-tag__item-cross-line {\n  font-size: inherit;\n  position: absolute;\n  content: ' ';\n  height: 2em;\n  width: 2px;\n  background-color: #333;\n  left: 1em;\n  cursor: pointer; }\n\n.ez-tag__item-cross-line:nth-child(odd) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.ez-tag__item-cross-line:nth-child(even) {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.ez-tag__item-cross:hover, .ez-tag__item-cross--active {\n  opacity: 1; }\n\n.ez-tag__input {\n  border: none;\n  padding: 5px 5px 10px 5px; }\n\n.ez-tag__input:focus {\n  outline: none; }\n\n.ez-tag__input-measure {\n  position: absolute;\n  visibility: hidden;\n  display: inline-block;\n  white-space: nowrap; }\n\n.ez-tag--focus .ez-tag__dropdown {\n  outline: 0;\n  border-color: #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n\n.ez-tag__dropdown {\n  position: absolute;\n  left: 0;\n  top: 100%;\n  width: 100%;\n  background: white;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-top: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n.ez-tag__option-container {\n  overflow-y: auto;\n  max-height: 300px; }\n\n.ez-tag__close {\n  padding: 10px;\n  text-align: center;\n  border-top: 1px solid #ccc;\n  cursor: pointer;\n  transition: all 0.150s; }\n\n.ez-tag__close:hover {\n  background: #f0f0f0; }\n\n.ez-tag__option {\n  word-wrap: break-word;\n  padding: 10px;\n  cursor: pointer;\n  transition: all 0.100s; }\n\n.ez-tag__option:nth-child(even) {\n  background: rgba(227, 227, 227, 0.1); }\n\n.ez-tag__option:hover, .ez-tag__option--active {\n  background: #3498db !important;\n  color: white; }\n\n.ez-tag__footer {\n  padding: 5px 10px;\n  text-align: right;\n  border-top: 1px solid #ccc; }\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(18)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(20);

var _assign2 = _interopRequireDefault(_assign);

var _option = __webpack_require__(9);

var _option2 = _interopRequireDefault(_option);

var _selected = __webpack_require__(10);

var _selected2 = _interopRequireDefault(_selected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    components: { TagOption: _option2.default, TagSelected: _selected2.default },

    data: function data() {

        return {
            input: '',
            selectedTags: [],
            activeOptionIndex: 0,
            inFocus: false
        };
    },


    props: {

        label: {

            default: 'value'

        },
        allowNew: {

            default: true

        },
        options: {

            default: function _default() {
                return [];
            }

        },
        selected: {

            default: function _default() {
                return [];
            }

        },
        placeholder: {

            default: 'Click here to type'

        }

    },

    computed: {
        showDropdown: function showDropdown() {

            console.log('show dropdown?', this.filteredTags.length, this.inFocus, !!(this.filteredTags.length && this.inFocus));
            return !!(this.filteredTags.length && this.inFocus);
        },
        inputIsSelected: function inputIsSelected() {
            var _this = this;

            return !!this.selectedTags.find(function (tag) {
                return tag.value == _this.input;
            });
        },
        inputExists: function inputExists() {
            var _this2 = this;

            return !!this.allTags.find(function (tag) {
                return tag.value == _this2.input;
            });
        },
        allTags: function allTags() {

            return this.unselectedTags.concat(this.selectedTags).map(this.stringifyTagValue);
        },
        unselectedTags: function unselectedTags() {
            var _this3 = this;

            var transformedData = this.options.map(this.stringifyTagValue);

            return transformedData.filter(function (tag) {
                return !_this3.selectedTags.find(function (selected) {
                    return selected.value == tag.value;
                });
            });
        },
        filteredTags: function filteredTags() {
            var _this4 = this;

            var options = [];

            if (this.input) {

                if (this.inputIsSelected) {

                    options.push({
                        value: this.input,
                        selected: true
                    });
                } else if (!this.inputExists) {

                    if (this.allowNew) {

                        options.push({
                            value: this.input,
                            new: true
                        });
                    } else {

                        options.push({
                            value: this.input,
                            invalid: true
                        });
                    }
                }

                options = options.concat(this.unselectedTags.filter(function (tag) {
                    return tag.value.toString().includes(_this4.input);
                }));
            } else {

                options = this.unselectedTags;
            }

            return this.removeDuplicates(options, 'value');
        }
    },

    watch: {
        activeOptionIndex: function activeOptionIndex() {

            this.checkOptionIsInView();
        },
        selected: function selected(tags) {

            this.selectTags(tags);
        },
        selectedTags: function selectedTags(tags) {

            this.$emit('update', tags);
        },
        input: function input(_input) {

            this.setSearchElementsWidth();
            this.resetOptionIndex();
        }
    },

    created: function created() {

        if (this.selected) {

            this.selectTags(this.selected);
        }
    },
    ready: function ready() {

        window.addEventListener('resize', this.setSearchElementsWidth);

        this.setSearchElementsWidth();
        this.addFocusListeners();
    },


    methods: {
        getElementComputedStyle: function getElementComputedStyle(element, key) {

            var style = window.getComputedStyle(element);

            return style.getPropertyValue(key);
        },
        setSearchElementsWidth: function setSearchElementsWidth() {

            var searchElement = this.$els.search;
            var placeholderElement = this.$els.placeholderMeasurement;
            var measurementElement = this.$els.searchMeasurement;
            var maxWidth = searchElement.parentElement.clientWidth;
            var placeholderWidth = placeholderElement.clientWidth;
            var searchWidth = measurementElement.clientWidth;
            var paddingLeft = parseFloat(this.getElementComputedStyle(searchElement, 'padding-left').slice(0, -2));
            var paddingRight = parseFloat(this.getElementComputedStyle(searchElement, 'padding-right').slice(0, -2));
            var newWidth = searchWidth < placeholderWidth ? placeholderWidth : searchWidth;

            newWidth = (newWidth > maxWidth ? maxWidth : newWidth) + 'px';

            this.$els.search.style.width = newWidth;
        },
        removeDuplicates: function removeDuplicates(array, key) {

            var defaultResult = {
                uniqueValues: {},
                items: []
            };

            var uniques = array.reduce(function (result, current) {

                var value = current[key];
                var isUnique = typeof result.uniqueValues[value] == 'undefined';

                if (isUnique) {

                    result.uniqueValues[value] = true;
                    result.items.push(current);
                }

                return result;
            }, defaultResult).items;

            return uniques;
        },
        addFocusListeners: function addFocusListeners() {
            var _this5 = this;

            document.addEventListener('focusin', function (e) {

                var container = _this5.$el;
                var target = e.target;

                if (target == container || container.contains(target)) {

                    _this5.inFocus = true;
                } else {

                    _this5.inFocus = false;
                }
            });

            document.addEventListener('click', function (e) {

                _this5.inFocus = false;
            });
        },
        stringifyTagValue: function stringifyTagValue(tag) {

            return (0, _assign2.default)({}, tag, {
                value: tag.value.toString()
            });
        },
        closeDropdown: function closeDropdown(e) {
            var _this6 = this;

            var dropdown = this.$els.dropdown;

            if (dropdown) {

                dropdown.style.display = 'none';

                this.$nextTick(function () {

                    if (dropdown.style.display == 'none') {

                        _this6.resetOptionIndex();
                    }
                });
            }
        },
        openDropdown: function openDropdown() {
            var _this7 = this;

            var dropdown = this.$els.dropdown;

            if (dropdown) {

                dropdown.style.display = 'block';

                this.$nextTick(function () {

                    if (dropdown.style.display != 'none') {

                        _this7.checkOptionIsInView();
                    }
                });
            }
        },
        clearSelected: function clearSelected() {

            this.selectedTags = [];
        },
        selectOptionFromIndex: function selectOptionFromIndex(index) {

            var options = document.getElementsByClassName('ez-tag__option');
            var option = options[index];

            if (option) {

                this.checkOptionIsInView(option);
            }
        },
        checkOptionIsInView: function checkOptionIsInView(option) {

            var activeOption = document.getElementsByClassName('ez-tag__option--active')[0];

            option = option || activeOption;

            if (option) {

                var containerHeight = option.parentElement.offsetHeight;
                var scrollTop = option.parentElement.scrollTop;
                var positionTop = option.offsetTop;

                if (positionTop < 0 || positionTop > containerHeight || positionTop < scrollTop) {

                    this.scrollToOption(option);
                }
            }
        },
        scrollToOption: function scrollToOption(option) {

            if (option) {

                var parent = option.parentElement;

                parent.scrollTop = option.offsetTop;
            }
        },
        unselectTag: function unselectTag(tag) {

            this.selectedTags = this.selectedTags.filter(function (current) {
                return current != tag;
            });
        },
        selectTagFromOption: function selectTagFromOption() {

            var option = document.getElementsByClassName('ez-tag__option--active')[0];

            if (option) {

                option.click();
            }
        },
        canSelectTag: function canSelectTag(tag) {

            var whitespaceRegex = /^\s*|\s*\Z|\s\B/g;
            var value = typeof tag.value == 'string' ? tag.value.replace(whitespaceRegex, '') : tag.value;
            var hasValue = typeof value == 'number' ? true : !!value;
            var isUnique = !this.tagIsSelected(tag);
            var isValid = !tag.invalid;

            return !!(isUnique && isValid && hasValue);
        },
        addTagToSelected: function addTagToSelected(tag) {

            if (this.canSelectTag(tag)) {

                this.selectedTags.push(tag);
            }
        },
        selectTags: function selectTags(tags) {
            var _this8 = this;

            tags.forEach(this.addTagToSelected);

            this.$nextTick(function () {

                _this8.checkIfActiveOptionExists();
            });
        },
        selectTag: function selectTag(tag) {

            if (this.canSelectTag(tag)) {

                this.selectedTags.push(tag);

                if (this.input == tag.value) {

                    this.input = '';
                }

                this.$nextTick(this.checkIfActiveOptionExists);
            }
        },
        checkIfActiveOptionExists: function checkIfActiveOptionExists() {

            var options = document.getElementsByClassName('ez-tag__option');

            if (this.activeOptionIndex > options.length - 1) {

                this.prevOption();
            }
        },
        focusInput: function focusInput() {

            var search = this.$els.search;

            search.focus();
        },
        unselectLastTag: function unselectLastTag(e) {

            if (!this.input) {

                this.selectedTags.pop();
            }
        },
        tagIsSelected: function tagIsSelected(tag) {

            return this.selectedTags.find(function (selected) {
                return selected.value == tag.value;
            });
        },
        setOptionIndex: function setOptionIndex(index) {

            this.activeOptionIndex = index;
        },
        resetOptionIndex: function resetOptionIndex() {

            var index = this.inputIsSelected ? 1 : 0;

            this.setOptionIndex(index);
        },
        nextOption: function nextOption() {

            var options = document.getElementsByClassName('ez-tag__option');
            var index = this.activeOptionIndex;
            var lastIndex = options.length - 1;

            if (index >= lastIndex) {

                this.setOptionIndex(0);
            } else {

                this.setOptionIndex(this.activeOptionIndex + 1);
            }
        },
        prevOption: function prevOption() {

            var options = document.getElementsByClassName('ez-tag__option');
            var index = this.activeOptionIndex;
            var lastIndex = options.length - 1;

            if (index <= 0) {

                this.setOptionIndex(lastIndex);
            } else {

                this.setOptionIndex(this.activeOptionIndex - 1);
            }
        }
    }

};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(23);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(33) });


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var ctx = __webpack_require__(24);
var hide = __webpack_require__(26);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(25);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(27);
var createDesc = __webpack_require__(32);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(28);
var IE8_DOM_DEFINE = __webpack_require__(29);
var toPrimitive = __webpack_require__(31);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(46);
var toObject = __webpack_require__(47);
var IObject = __webpack_require__(6);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(35);
var enumBugKeys = __webpack_require__(44);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(36);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(38)(false);
var IE_PROTO = __webpack_require__(41)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(39);
var toAbsoluteIndex = __webpack_require__(40);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(42)('keys');
var uid = __webpack_require__(43);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(7);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: {

        label: {

            default: 'value'

        },
        tag: {

            default: function _default() {}

        }

    },

    computed: {
        display: function display() {

            if (this.tag.new) {

                return 'Add "' + this.getLabel() + '"';
            } else if (this.tag.selected) {

                return '"' + this.getLabel() + '" is already selected';
            } else if (this.tag.invalid) {

                return 'No results matches "' + this.getLabel() + '"';
            } else {

                return this.getLabel();
            }
        }
    },

    methods: {
        getLabel: function getLabel() {

            var label = this.tag[this.label];

            if (typeof label !== 'undefined') {

                return label;
            } else {

                return this.tag.value;
            }
        }
    }

};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"ez-tag__option\">{{display}}</div>\n\n";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: {

        label: {

            default: 'value'

        },
        tag: {

            default: function _default() {}

        }

    },

    computed: {
        style: function style() {

            return {
                background: this.tag.color,
                color: this.tag.color ? 'white' : 'black',
                border: '1px solid ' + (this.tag.color ? this.tag.color : '#dedede')
            };
        }
    },

    methods: {
        unselect: function unselect(tag) {

            this.$emit('unselect', tag);
        },
        getLabel: function getLabel() {

            var label = this.tag[this.label];

            if (typeof label !== 'undefined') {

                return label;
            } else {

                return this.tag.value;
            }
        }
    }

};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ez-tag__item\" :style=\"style\">\n    <span class=\"ez-tag__item-text\">{{getLabel()}}</span>\n    <span v-on:click=\"unselect(tag)\" class=\"ez-tag__item-cross\">\n        <span class=\"ez-tag__item-cross-line\" :style=\"{ background: style.color }\"></span>\n        <span class=\"ez-tag__item-cross-line\" :style=\"{ background: style.color }\"></span>\n    </span>\n</div>\n\n";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "\n\n<div v-on:click.stop=\"focusInput\" :class=\"{'ez-tag--focus': inFocus}\" class=\"ez-tag\">\n    <div v-on:keyup.enter=\"selectTagFromOption\" v-on:keydown.down=\"nextOption\" v-on:keydown.up=\"prevOption\" :class=\"{'ez-tag__input-container--open': showDropdown}\" class=\"ez-tag__input-container\">\n        <div class=\"ez-tag__items\">\n            <tag-selected v-for=\"tag in selectedTags\" v-on:unselect=\"unselectTag\" :tag=\"tag\" :label=\"label\" track-by=\"$index\"></tag-selected>\n            <input v-el:search v-on:keydown.8=\"unselectLastTag\" v-model=\"input\" tabindex=\"0\" type=\"text\" class=\"ez-tag__input\" :placeholder=\"placeholder\">\n            <div v-el:placeholder-measurement class=\"ez-tag__input-measure\">{{placeholder}}</div>\n            <div v-el:search-measurement class=\"ez-tag__input-measure\">{{input}}</div>\n        </div>\n        <div v-if=\"selectedTags.length\" class=\"ez-tag__clear-items\">\n            <span v-on:click.stop=\"clearSelected\" class=\"ez-tag__item-cross\">\n                <span class=\"ez-tag__item-cross-line\"></span>\n                <span class=\"ez-tag__item-cross-line\"></span>\n            </span>\n        </div>\n    </div>\n    <div v-if=\"showDropdown\" v-el:dropdown class=\"ez-tag__dropdown\">\n        <div class=\"ez-tag__option-container\">\n            <tag-option v-for=\"tag in filteredTags\" v-on:click=\"selectTag(tag)\" :tag=\"tag\" :label=\"label\" track-by=\"$index\" :class=\"{'ez-tag__option--active': activeOptionIndex == $index}\" track-by=\"$index\"></tag-option>\n        </div>\n        <div v-if=\"1<1\" v-on:click.stop=\"closeDropdown\" class=\"ez-tag__close\">\n            Close\n        </div>\n    </div>\n</div>\n\n";

/***/ })
/******/ ]);
});