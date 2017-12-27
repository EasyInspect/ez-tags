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
var cof = __webpack_require__(32);
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
__vue_script__ = __webpack_require__(43)
if (__vue_script__ &&
    __vue_script__.__esModule &&
    Object.keys(__vue_script__).length > 1) {
  console.warn("[vue-loader] src/mixins/option.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(44)
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
__vue_script__ = __webpack_require__(45)
if (__vue_script__ &&
    __vue_script__.__esModule &&
    Object.keys(__vue_script__).length > 1) {
  console.warn("[vue-loader] src/mixins/selected.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(46)
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_select_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_selected_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_selected_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_selected_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_option_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_option_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mixins_option_vue__);





module.exports = { EzTags: __WEBPACK_IMPORTED_MODULE_0__mixins_select_vue___default.a, EzSelected: __WEBPACK_IMPORTED_MODULE_1__mixins_selected_vue___default.a, EzOption: __WEBPACK_IMPORTED_MODULE_2__mixins_option_vue___default.a };
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(12)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__vue_script__ = __webpack_require__(14)
if (__vue_script__ &&
    __vue_script__.__esModule &&
    Object.keys(__vue_script__).length > 1) {
  console.warn("[vue-loader] src/mixins/select.vue: named exports in *.vue files are ignored.")}
__vue_template__ = __webpack_require__(47)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
if (__vue_template__) {
(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
}
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  var id = "./select.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__(15);

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
            selectedTags: [{ value: 'kek' }],
            activeOptionIndex: 0
        };
    },


    props: {

        data: {

            default: function _default() {
                return [];
            }

        },
        placeholder: {

            default: 'Click here to type'

        }

    },

    computed: {
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

            var transformedData = this.data.map(this.stringifyTagValue);

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

                    options.push({
                        value: this.input,
                        new: true
                    });
                }

                options = options.concat(this.unselectedTags.filter(function (tag) {
                    return tag.value.toString().includes(_this4.input);
                }));
            } else {

                options = this.unselectedTags;
            }

            return options;
        }
    },

    watch: {
        activeOptionIndex: function activeOptionIndex() {

            this.checkOptionIsInView();
        },
        selectedTags: function selectedTags(tags) {

            this.$emit('update', tags);
        },
        unselectedTags: function unselectedTags(tags) {

            this.focusInput();
        },
        input: function input(_input) {

            console.log('input', _input);

            this.resetOptionIndex();

            if (_input) {

                this.openDropdown();
            }
        }
    },

    ready: function ready() {
        var _this5 = this;

        $(document).focusin(function (e) {

            var search = $(_this5.$els.search);
            var target = $(e.target);

            if (target.is(search)) {

                _this5.openDropdown();
            } else {

                _this5.closeDropdown();
            }
        });

        $(document).click(function (e) {

            _this5.closeDropdown();
        });
    },


    methods: {
        stringifyTagValue: function stringifyTagValue(tag) {

            return (0, _assign2.default)({}, tag, {
                value: tag.value.toString()
            });
        },
        closeDropdown: function closeDropdown(e) {
            var _this6 = this;

            var dropdown = $(this.$els.dropdown);

            dropdown.hide();

            this.$nextTick(function () {

                if (dropdown.is(':hidden')) {

                    _this6.resetOptionIndex();
                }
            });
        },
        openDropdown: function openDropdown() {
            var _this7 = this;

            var dropdown = $(this.$els.dropdown);

            dropdown.show();

            this.$nextTick(function () {

                if (dropdown.is(':visible')) {

                    _this7.checkOptionIsInView();
                }
            });
        },
        clearSelected: function clearSelected() {

            this.selectedTags = [];
        },
        selectOptionFromIndex: function selectOptionFromIndex(index) {

            var options = $('.ez-tag__option');
            var option = $(options[index]);

            if (option) {

                this.checkOptionIsInView(option);
            }
        },
        checkOptionIsInView: function checkOptionIsInView(option) {

            var activeOption = $('.ez-tag__option--active');

            option = option || activeOption;

            if (option && option.length) {

                var containerHeight = option.parent().height();
                var scrollTop = option.parent().scrollTop();
                var positionTop = option.position().top;

                if (positionTop < 0 || positionTop > containerHeight) {

                    this.scrollToOption(option);
                }
            }
        },
        scrollToOption: function scrollToOption(option) {

            if (option && option.length) {

                option.parent().scrollTop(option.position().top + option.parent().scrollTop());
            }
        },
        unselectTag: function unselectTag(tag) {

            this.selectedTags = this.selectedTags.filter(function (current) {
                return current != tag;
            });
        },
        selectTagFromOption: function selectTagFromOption() {

            var option = $('.ez-tag__option--active');

            if (option.length) {

                option.click();
            }
        },
        selectTag: function selectTag(tag) {
            var _this8 = this;

            if (!this.tagIsSelected(tag)) {

                this.selectedTags.push(tag);

                if (this.input == tag.value) {

                    this.input = '';
                }

                this.$nextTick(function () {

                    _this8.checkIfActiveOptionExists();
                });
            }
        },
        checkIfActiveOptionExists: function checkIfActiveOptionExists() {

            var options = $('.ez-tag__option');

            if (this.activeOptionIndex > options.length - 1) {

                this.prevOption();
            }
        },
        focusInput: function focusInput() {

            var search = $(this.$els.search);

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

            var options = $('.ez-tag__option');
            var index = this.activeOptionIndex;
            var lastIndex = options.length - 1;

            if (index >= lastIndex) {

                this.setOptionIndex(0);
            } else {

                this.setOptionIndex(this.activeOptionIndex + 1);
            }
        },
        prevOption: function prevOption() {

            var options = $('.ez-tag__option');
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(18);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(28) });


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var ctx = __webpack_require__(19);
var hide = __webpack_require__(21);
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(20);
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
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(22);
var createDesc = __webpack_require__(27);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var IE8_DOM_DEFINE = __webpack_require__(24);
var toPrimitive = __webpack_require__(26);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(25)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(40);
var pIE = __webpack_require__(41);
var toObject = __webpack_require__(42);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(30);
var enumBugKeys = __webpack_require__(39);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(31);
var toIObject = __webpack_require__(5);
var arrayIndexOf = __webpack_require__(33)(false);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');

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
/* 31 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(5);
var toLength = __webpack_require__(34);
var toAbsoluteIndex = __webpack_require__(35);
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(37)('keys');
var uid = __webpack_require__(38);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 40 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(7);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: {

        tag: {

            default: function _default() {}

        }

    },

    computed: {
        display: function display() {

            if (this.tag.new) {

                return "Add \"" + this.tag.value + "\"";
            } else if (this.tag.selected) {

                return "\"" + this.tag.value + " is already selected\"";
            } else {

                return this.tag.value;
            }
        }
    }

};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"ez-tag__option\">{{display}}</div>\n\n";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: {

        tag: {

            default: function _default() {}

        }

    },

    computed: {
        style: function style() {

            return {
                background: this.tag.color,
                color: this.tag.color ? 'white' : 'black'
            };
        }
    },

    methods: {
        unselect: function unselect(tag) {

            this.$emit('unselect', tag);
        }
    }

};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ez-tag__item\" :style=\"style\">\n    <span class=\"ez-tag__item-text\">{{tag.value}}</span>\n    <span v-on:click=\"unselect(tag)\" class=\"ez-tag__item-cross\">\n        <span class=\"fa fa-remove\"></span>\n    </span>\n</div>\n\n";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div v-on:click.stop=\"focusInput\" class=\"ez-tag\">\n    <div v-on:keyup.enter=\"selectTagFromOption\" v-on:keydown.down=\"nextOption\" v-on:keydown.up=\"prevOption\" class=\"ez-tag__input-container\">\n        <div class=\"ez-tag__items\">\n            <tag-selected v-for=\"tag in selectedTags\" v-on:unselect=\"unselectTag\" :tag=\"tag\"></tag-selected>\n            <input v-el:search v-on:keydown.8=\"unselectLastTag\" v-model=\"input\" tabindex=\"0\" type=\"text\" class=\"ez-tag__input\" :placeholder=\"placeholder\">\n        </div>\n        <div v-if=\"selectedTags.length\" class=\"ez-tag__clear-items\">\n            <span v-on:click=\"clearSelected\" class=\"fa fa-remove\"></span>\n        </div>\n    </div>\n    <div v-el:dropdown class=\"ez-tag__dropdown\">\n        <div class=\"ez-tag__option-container\">\n            <tag-option v-for=\"tag in filteredTags\" v-on:click=\"selectTag(tag)\" :tag=\"tag\" track-by=\"$index\" :class=\"{'ez-tag__option--active': activeOptionIndex == $index}\"></tag-option>\n        </div>\n        <div v-on:click.stop=\"closeDropdown\" class=\"ez-tag__close\">\n            Close\n        </div>\n    </div>\n</div>\n\n";

/***/ })
/******/ ]);