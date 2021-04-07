(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["com"] = factory();
	else
		root["com"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0e17":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1134");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("bdffbc50", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "1134":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".editButton[data-v-7010b986]{float:right;margin-top:20px;margin-right:30px}.part-content[data-v-7010b986]{align-items:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1d3c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".editButton[data-v-19f7dd1b]{float:right;margin-top:-500px;margin-right:30px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
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
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

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
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

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
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
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

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "b399":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19f7dd1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f191");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19f7dd1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_19f7dd1b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e0e8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7010b986_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0e17");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7010b986_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7010b986_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f191":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1d3c");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("71507aee", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ install; });
__webpack_require__.d(__webpack_exports__, "AttributeInfo", function() { return /* reexport */ attributeInfo; });
__webpack_require__.d(__webpack_exports__, "DrawingList", function() { return /* reexport */ drawingList; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6dfdd40e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/attributeInfo/src/index.vue?vue&type=template&id=19f7dd1b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('a-card',[_c('span',{attrs:{"slot":"title"},slot:"title"},[_c('span',[_vm._v("1")])]),_c('a-tabs',{attrs:{"default-active-key":"2"}},[_c('a-tab-pane',{key:"1",attrs:{"tab":"属性信息"}},[_c('property',{attrs:{"form":_vm.form}}),_c('a-button',{staticClass:"editButton",attrs:{"type":"primary","size":"small"},on:{"click":_vm.showDrawer}},[_vm._v("修改信息")])],1),_c('a-tab-pane',{key:"2",attrs:{"tab":"图纸列表"}},[_c('list',{attrs:{"partColumns":_vm.partColumns,"partData":_vm.partData,"signColumns":_vm.signColumns,"signData":_vm.signData}})],1),_c('a-tab-pane',{key:"3",attrs:{"tab":"流程","force-render":""}},[_c('process',{attrs:{"processColumns":_vm.processColumns,"processData":_vm.processData}})],1),_c('a-tab-pane',{key:"4",attrs:{"tab":"基线"}},[_c('baseline',{attrs:{"baselineColumns":_vm.baselineColumns,"baselineData":_vm.baselineData}})],1)],1)],1),_c('a-drawer',{attrs:{"title":"Basic Drawer","placement":"right","visible":_vm.visible,"width":"300"},on:{"close":_vm.onClose}},[_c('a-form-model',{attrs:{"model":_vm.form}},[_c('a-form-model-item',{attrs:{"label":"名称"}},[_c('a-input',{model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_c('a-form-model-item',{attrs:{"label":"描述"}},[_c('a-textarea',{model:{value:(_vm.form.description),callback:function ($$v) {_vm.$set(_vm.form, "description", $$v)},expression:"form.description"}})],1),_c('a-form-model-item',[_c('a-button',{attrs:{"size":"small"},on:{"click":_vm.onClose}},[_vm._v("取消")]),_c('a-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.onSubmit}},[_vm._v("保存")])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/attributeInfo/src/index.vue?vue&type=template&id=19f7dd1b&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6dfdd40e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/attributeInfo/src/components/List.vue?vue&type=template&id=4853e68a&
var Listvue_type_template_id_4853e68a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('a-modal',{attrs:{"footer":null,"title":"X32泵","width":"100%"},model:{value:(_vm.visible2),callback:function ($$v) {_vm.visible2=$$v},expression:"visible2"}},[_c('iframe',{attrs:{"src":_vm.url,"width":"100%","height":"700","frameborder":"0"}})]),_c('a-modal',{attrs:{"width":1200,"height":500},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('a-table',{attrs:{"columns":_vm.signColumns,"data-source":_vm.signData,"pagination":false}})],1),_c('div',{staticStyle:{"height":"calc(100vh - 142px)"}},[_c('a-table',{attrs:{"columns":_vm.partColumns,"data-source":_vm.partData,"pagination":false},scopedSlots:_vm._u([{key:"name",fn:function(text,record){return _c('a',{on:{"click":function($event){return _vm.open(record)}}},[_vm._v(_vm._s(text))])}},{key:"handle",fn:function(text,record){return _c('a-dropdown',{},[_c('a',[_c('a-icon',{attrs:{"type":"menu"}})],1),_c('a-menu',{attrs:{"slot":"overlay"},slot:"overlay"},[_c('a-menu-item',[_c('a-popconfirm',{attrs:{"title":"是否确认删除?","ok-text":"确认","cancel-text":"取消"},on:{"confirm":function($event){return _vm.confirmPart(record)},"cancel":_vm.cancel}},[_c('a',{attrs:{"href":"#"}},[_vm._v("删除")])])],1),_c('a-menu-item',{on:{"click":_vm.viewSignature}},[_vm._v(" 查看签名 ")]),_c('a-menu-item',[_vm._v(" 查看批注 ")])],1)],1)}},{key:"isAnnotate",fn:function(isAnnotate){return _c('span',{},[(isAnnotate)?_c('a-checkbox',{attrs:{"checked":""}}):_c('a-checkbox',{attrs:{"disabled":""}})],1)}},{key:"isSign",fn:function(isSign){return _c('span',{},[(isSign)?_c('a-checkbox',{attrs:{"checked":""}}):_c('a-checkbox',{attrs:{"disabled":""}})],1)}}])})],1)],1)}
var Listvue_type_template_id_4853e68a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/attributeInfo/src/components/List.vue?vue&type=template&id=4853e68a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/attributeInfo/src/components/List.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Listvue_type_script_lang_js_ = ({
  name:'List',
  data(){
    return{
      visible2:false,
      visible:false,
      url:''
    }
  },
  props:{
    partColumns:{
      type:Array
    },
    partData:{
      type:Array
    },
    signColumns:{
      type:Array
    },
    signData:{
      type:Array
    }
  },
  methods:{
    confirmPart(record){
      this.deletePart(record)
    },
    deletePart(record){
      console.log(record.key)
      this.partData.forEach((item,index)=>{
        if(item.key==record.key){
          this.partData.splice(index,1)
        }
      })
    },
    cancel(){
    },
    test(){
      this.$router.push('/test')
    },
    viewSignature(){
      console.log(444)
      this.visible=true
    },
    open(item){
      this.visible2=true
      console.log(item)
      let obj={
        notifyType:'openObjPage',
        dependParam:{
          id:1,
          title:item.name,
        },
        notifyParam:{
          // isOpenModal:true,
          modalName:item.name,
          internal_name: item.internal_name, //url类型 根据这个跳转页面路径
          date:new Date()
        }
      }
      this.$bridge.notifyScheduler(JSON.stringify(obj))
      /* this.$router.push({
        path: "/"+obj.notifyParam.internal_name,
        query: obj.dependParam,
      }) */
      this.url=`http://${window.location.host}/partItem`
    }
  }
});

// CONCATENATED MODULE: ./packages/attributeInfo/src/components/List.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Listvue_type_script_lang_js_ = (Listvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/attributeInfo/src/components/List.vue





/* normalize component */

var component = normalizeComponent(
  components_Listvue_type_script_lang_js_,
  Listvue_type_template_id_4853e68a_render,
  Listvue_type_template_id_4853e68a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var List = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6dfdd40e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/attributeInfo/src/components/Process.vue?vue&type=template&id=789d4bfe&
var Processvue_type_template_id_789d4bfe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"calc(100vh - 142px)"}},[_c('a-table',{attrs:{"columns":_vm.processColumns,"data-source":_vm.processData,"pagination":false},scopedSlots:_vm._u([{key:"name",fn:function(text,record){return _c('a',{on:{"click":function($event){return _vm.open(record)}}},[_vm._v(_vm._s(text))])}},{key:"handle",fn:function(text,record){return _c('a-dropdown',{},[_c('a',[_c('a-icon',{attrs:{"type":"menu"}})],1),_c('a-menu',{attrs:{"slot":"overlay"},slot:"overlay"},[_c('a-menu-item',[_c('a-popconfirm',{attrs:{"title":"是否确认删除?","ok-text":"确认","cancel-text":"取消"},on:{"confirm":function($event){return _vm.confirmProcess(record)},"cancel":_vm.cancel}},[_c('a',{attrs:{"href":"#"}},[_vm._v("删除")])])],1)],1)],1)}}])})],1)}
var Processvue_type_template_id_789d4bfe_staticRenderFns = []


// CONCATENATED MODULE: ./packages/attributeInfo/src/components/Process.vue?vue&type=template&id=789d4bfe&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/attributeInfo/src/components/Process.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Processvue_type_script_lang_js_ = ({
  name: 'Process',
  props:{
    processColumns:{
      type:Array
    },
    processData:{
      type:Array
    },
  },
  methods:{
    confirmProcess(record){
      this.deleteProcess(record)
    },
    cancel(){
    },
    deleteProcess(record){
      console.log(record.key)
      this.processData.forEach((item,index)=>{
        if(item.key==record.key){
          this.processData.splice(index,1)
        }
      })
    },
  }
});

// CONCATENATED MODULE: ./packages/attributeInfo/src/components/Process.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Processvue_type_script_lang_js_ = (Processvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/attributeInfo/src/components/Process.vue





/* normalize component */

var Process_component = normalizeComponent(
  components_Processvue_type_script_lang_js_,
  Processvue_type_template_id_789d4bfe_render,
  Processvue_type_template_id_789d4bfe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Process = (Process_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6dfdd40e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/attributeInfo/src/components/Baseline.vue?vue&type=template&id=55ed2559&
var Baselinevue_type_template_id_55ed2559_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"calc(100vh - 142px)"}},[_c('a-table',{attrs:{"columns":_vm.baselineColumns,"data-source":_vm.baselineData,"pagination":false},scopedSlots:_vm._u([{key:"handle",fn:function(text,record){return _c('a-dropdown',{},[_c('a',[_c('a-icon',{attrs:{"type":"menu"}})],1),_c('a-menu',{attrs:{"slot":"overlay"},slot:"overlay"},[_c('a-menu-item',[_c('a-popconfirm',{attrs:{"title":"是否确认删除?","ok-text":"确认","cancel-text":"取消"},on:{"confirm":function($event){return _vm.confirmBaseline(record)},"cancel":_vm.cancel}},[_c('a',{attrs:{"href":"#"}},[_vm._v("删除")])])],1)],1)],1)}}])})],1)}
var Baselinevue_type_template_id_55ed2559_staticRenderFns = []


// CONCATENATED MODULE: ./packages/attributeInfo/src/components/Baseline.vue?vue&type=template&id=55ed2559&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/attributeInfo/src/components/Baseline.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Baselinevue_type_script_lang_js_ = ({
  name:'Baseline',
  props:{
    baselineColumns:{
      type:Array
    },
    baselineData:{
      type:Array
    }
  },
  methods:{
    confirmBaseline(record){
      this.deleteBaseline(record)
    },
    cancel(){
    },
    deleteBaseline(record){
      console.log(record.key)
      this.baselineData.forEach((item,index)=>{
        if(item.key==record.key){
          this.baselineData.splice(index,1)
        }
      })
    },
  }
});

// CONCATENATED MODULE: ./packages/attributeInfo/src/components/Baseline.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Baselinevue_type_script_lang_js_ = (Baselinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/attributeInfo/src/components/Baseline.vue





/* normalize component */

var Baseline_component = normalizeComponent(
  components_Baselinevue_type_script_lang_js_,
  Baselinevue_type_template_id_55ed2559_render,
  Baselinevue_type_template_id_55ed2559_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Baseline = (Baseline_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6dfdd40e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/attributeInfo/src/components/Property.vue?vue&type=template&id=2d14547a&
var Propertyvue_type_template_id_2d14547a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"height":"calc(100vh - 142px)"}},[_c('a-descriptions',{attrs:{"column":1,"size":"middle","bordered":""}},[_c('a-descriptions-item',{attrs:{"label":"名称"}},[_vm._v(_vm._s(_vm.form.name))]),_c('a-descriptions-item',{attrs:{"label":"创建人"}},[_vm._v("admin")]),_c('a-descriptions-item',{attrs:{"label":"创建日期"}},[_vm._v("2021-3-24")]),_c('a-descriptions-item',{attrs:{"label":"状态"}},[_vm._v("设计")]),_c('a-descriptions-item',{attrs:{"label":"描述"}},[_vm._v(_vm._s(_vm.form.description))])],1)],1)}
var Propertyvue_type_template_id_2d14547a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/attributeInfo/src/components/Property.vue?vue&type=template&id=2d14547a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/attributeInfo/src/components/Property.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Propertyvue_type_script_lang_js_ = ({
  name: 'Property',
  props: {
    form:{
      type:Object
    }
  }
});

// CONCATENATED MODULE: ./packages/attributeInfo/src/components/Property.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Propertyvue_type_script_lang_js_ = (Propertyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/attributeInfo/src/components/Property.vue





/* normalize component */

var Property_component = normalizeComponent(
  components_Propertyvue_type_script_lang_js_,
  Propertyvue_type_template_id_2d14547a_render,
  Propertyvue_type_template_id_2d14547a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Property = (Property_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/attributeInfo/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






const signColumns = [
  {
    title: "序号",
    dataIndex: "number",
    key: "number",
    align: "center"
  },
  {
    title: "文档名称",
    dataIndex: "name",
    key: "name",
    align: "center"
  },
  {
    title: "文档流程状态",
    dataIndex: "state",
    key: "state",
    align: "center"
  },
  {
    title: "签名人",
    dataIndex: "signer",
    key: "signer",
    align: "center"
  },
  {
    title: "签名时间",
    dataIndex: "time",
    key: "time",
    align: "center"
  },
  {
    title: "内容",
    dataIndex: "content",
    key: "content",
    align: "center"
  }
];

const signData = [
  {
    key: 1,
    number: 1,
    name: "缸体.exb",
    state: "设计",
    signer: "admin",
    time: "2021-03-31 13:23:21",
    content: "管理员"
  },
  {
    key: 2,
    number: 2,
    name: "缸体.exb",
    state: "设计",
    signer: "admin",
    time: "2021-03-31 15:43:41",
    content: "工人1号"
  },
  {
    key: 3,
    number: 3,
    name: "叶轮.exb",
    state: "设计",
    signer: "admin",
    time: "2021-03-31 15:43:41",
    content: "工人1号"
  }
];

const baselineColumns= [
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
    align: "center"
  },
  {
    title: "创建日期",
    dataIndex: "date",
    key: "date",
    align: "center"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "handle",
    key: "handle",
    align: "center",
    width: 180,
    scopedSlots: { customRender: "handle" },
  }
];

const baselineData = [
  {
    key: 1,
    name: "基线1",
    description: "测试基线",
    date: "2021-3-23",
    creator: "admin"
  }
]

const processColumns = [
  {
    title: "序号",
    dataIndex: "number",
    key: "number",
    width: 100,
    align: "center"
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    align: "center",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
    align: "center"
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
    align: "center"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator",
    align: "center"
  },
  {
    title: "创建日期",
    dataIndex: "date",
    key: "date",
    align: "center"
  },
  {
    title: "模板",
    dataIndex: "template",
    key: "template",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "handle",
    key: "handle",
    align: "center",
    width: 180,
    scopedSlots: { customRender: "handle" },
  }
];

const processData = [
  {
    key: 1,
    number: 1,
    name: "EB-32泵审核",
    description: "对EB-32泵进行审核",
    state: "运行",
    creator: "admin",
    date: "2021-3-23",
    template: "审核"
  }
] ;

const partColumns = [
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
    width: 200
  },
  {
    title: "文档分类",
    dataIndex: "type",
    key: "type",
    align: "center"
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
    align: "center"
  },
  {
    title: "类型",
    dataIndex: "format",
    key: "format",
    align: "center"
  },
  {
    title: "红批",
    dataIndex: "isAnnotate",
    key: "isAnnotate",
    scopedSlots: { customRender: "isAnnotate" },
    align: "center"
  },
  {
    title: "签名",
    dataIndex: "isSign",
    key: "isSign",
    scopedSlots: { customRender: "isSign" },
    align: "center"
  },
  {
    title: "大小(KB)",
    dataIndex: "size",
    key: "size",
    align: "center"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator",
    align: "center"
  },
  {
    title: "创建日期",
    dataIndex: "date",
    key: "date",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "handle",
    key: "handle",
    align: "center",
    width: 180,
    scopedSlots: { customRender: "handle" },
  }
];

const partData = [
  {
    key: "1",
    name: "X系列叶轮",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: true,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 178.1
  },
  {
    key: "2",
    name: "X系列叶轮腔体",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: false,
    isSign: true,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 167.4
  },
  {
    key: "3",
    name: "叶轮螺母",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: false,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 89.9
  },
  {
    key: "4",
    name: "齿轮盖",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: false,
    isSign: false,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 106.8
  },
  {
    key: "5",
    name: "磁铁",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: true,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 74.1
  },
  {
    key: "6",
    name: "缸体",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: false,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 132.6
  }
];
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "AttributeInfo",
  data() {
    return {
      signData,
      signColumns,
      partData,
      partColumns,
      processData,
      processColumns,
      baselineData,
      baselineColumns,
      visible:false,
      visible2:false,
      url:'',
      form:{
        name:'X32泵',
        description:'X32泵零件'
      }
    };
  },
  mounted(){
    console.log(this.$route)
  },
  components:{
    List: List,
    Process: Process,
    Baseline: Baseline,
    Property: Property
  },
  methods:{
    
    /* confirmPart(record){
      this.deletePart(record)
    },
    confirmProcess(record){
      this.deleteProcess(record)
    },
    confirmBaseline(record){
      this.deleteBaseline(record)
    },
    cancel(){
    },
    //删除图纸
    deletePart(record){
      console.log(record.key)
      partData.forEach((item,index)=>{
        if(item.key==record.key){
          partData.splice(index,1)
        }
      })
    },
    //删除流程
    deleteProcess(record){
      console.log(record.key)
      processData.forEach((item,index)=>{
        if(item.key==record.key){
          processData.splice(index,1)
        }
      })
    },
    //删除基线
    deleteBaseline(record){
      console.log(record.key)
      baselineData.forEach((item,index)=>{
        if(item.key==record.key){
          baselineData.splice(index,1)
        }
      })
    }, */
    showDrawer(){
      this.visible=true
    },
    onClose(){
      this.visible = false;
    },
    onSubmit(){
      this.visible = false;
      console.log("submit!")
    },
    handleOk(){
      this.visible2=false
    },
    /* open(item){
      this.visible2=true
      console.log(item)
      let obj={
        notifyType:'openObjPage',
        dependParam:{
          id:1,
          title:item.name,
        },
        notifyParam:{
          // isOpenModal:true,
          modalName:item.name,
          internal_name: item.internal_name, //url类型 根据这个跳转页面路径
          date:new Date()
        }
      }
      this.$bridge.notifyScheduler(JSON.stringify(obj))
      // this.$router.push({
      //  path: "/"+obj.notifyParam.internal_name,
      //  query: obj.dependParam,
      //}) 
      this.url=`http://${window.location.host}/part`
    } */
  }
});

// CONCATENATED MODULE: ./packages/attributeInfo/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var attributeInfo_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/attributeInfo/src/index.vue?vue&type=style&index=0&id=19f7dd1b&scoped=true&lang=css&
var srcvue_type_style_index_0_id_19f7dd1b_scoped_true_lang_css_ = __webpack_require__("b399");

// CONCATENATED MODULE: ./packages/attributeInfo/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  attributeInfo_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "19f7dd1b",
  null
  
)

/* harmony default export */ var attributeInfo_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/attributeInfo/index.js


attributeInfo_src.install = function (Vue) {
    Vue.component(attributeInfo_src.name, attributeInfo_src)
}

/* harmony default export */ var attributeInfo = (attributeInfo_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6dfdd40e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/drawingList/src/index.vue?vue&type=template&id=7010b986&scoped=true&
var srcvue_type_template_id_7010b986_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"part-content"},[_c('a-card',[_c('span',{attrs:{"slot":"title"},slot:"title"},[_c('span',[_vm._v("12")])]),_c('a-tabs',{attrs:{"default-active-key":"2"}},[_c('a-tab-pane',{key:"1",attrs:{"tab":"属性信息"}},[_c('div',{staticStyle:{"height":"calc(100vh - 142px)"}},[_c('a-descriptions',{attrs:{"column":1,"size":"middle","bordered":""}},[_c('a-descriptions-item',{attrs:{"label":"名称"}},[_vm._v(_vm._s(_vm.form.name))]),_c('a-descriptions-item',{attrs:{"label":"创建人"}},[_vm._v("admin")]),_c('a-descriptions-item',{attrs:{"label":"创建日期"}},[_vm._v("2021-3-24")]),_c('a-descriptions-item',{attrs:{"label":"状态"}},[_vm._v("设计")]),_c('a-descriptions-item',{attrs:{"label":"描述"}},[_vm._v(_vm._s(_vm.form.description))])],1),_c('a-button',{staticClass:"editButton",attrs:{"type":"primary","size":"small"},on:{"click":_vm.showDrawer}},[_vm._v("修改信息")])],1)]),_c('a-tab-pane',{key:"2",attrs:{"tab":"浏览"}},[_c('div',{staticStyle:{"height":"calc(100vh - 142px)"}})]),_c('a-tab-pane',{key:"3",attrs:{"tab":"工作版本","force-render":""}}),_c('a-tab-pane',{key:"4",attrs:{"tab":"外部引用"}},[_c('div',{staticStyle:{"height":"calc(100vh - 142px)"}},[_c('a-table',{attrs:{"columns":_vm.baselineColumns,"data-source":_vm.baselineData,"pagination":false},scopedSlots:_vm._u([{key:"handle",fn:function(text,record){return _c('a-dropdown',{},[_c('a',[_c('a-icon',{attrs:{"type":"menu"}})],1),_c('a-menu',{attrs:{"slot":"overlay"},slot:"overlay"},[_c('a-menu-item',[_c('a-popconfirm',{attrs:{"title":"是否确认删除?","ok-text":"确认","cancel-text":"取消"},on:{"confirm":function($event){return _vm.confirmBaseline(record)},"cancel":_vm.cancel}},[_c('a',{attrs:{"href":"#"}},[_vm._v("删除")])])],1)],1)],1)}}])})],1)]),_c('a-tab-pane',{key:"5",attrs:{"tab":"哪里被引用","force-render":""}}),_c('a-tab-pane',{key:"6",attrs:{"tab":"关联文件","force-render":""}}),_c('a-tab-pane',{key:"7",attrs:{"tab":"借用信息","force-render":""}}),_c('a-tab-pane',{key:"8",attrs:{"tab":"流程","force-render":""}}),_c('a-tab-pane',{key:"9",attrs:{"tab":"快照","force-render":""}})],1)],1)],1)}
var srcvue_type_template_id_7010b986_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/drawingList/src/index.vue?vue&type=template&id=7010b986&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/drawingList/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Vue from 'vue'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd);
const srcvue_type_script_lang_js_baselineColumns= [
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
    align: "center"
  },
  {
    title: "创建日期",
    dataIndex: "date",
    key: "date",
    align: "center"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "handle",
    key: "handle",
    align: "center",
    width: 180,
    scopedSlots: { customRender: "handle" },
  }
];

const srcvue_type_script_lang_js_baselineData = [
  {
    key: 1,
    name: "基线1",
    description: "测试基线",
    date: "2021-3-23",
    creator: "admin"
  }
]

const srcvue_type_script_lang_js_processColumns = [
  {
    title: "序号",
    dataIndex: "number",
    key: "number",
    width: 100,
    align: "center"
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    align: "center",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
    align: "center"
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
    align: "center"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator",
    align: "center"
  },
  {
    title: "创建日期",
    dataIndex: "date",
    key: "date",
    align: "center"
  },
  {
    title: "模板",
    dataIndex: "template",
    key: "template",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "handle",
    key: "handle",
    align: "center",
    width: 180,
    scopedSlots: { customRender: "handle" },
  }
];

const srcvue_type_script_lang_js_processData = [
  {
    key: 1,
    number: 1,
    name: "EB-32泵审核",
    description: "对EB-32泵进行审核",
    state: "运行",
    creator: "admin",
    date: "2021-3-23",
    template: "审核"
  }
] ;

const srcvue_type_script_lang_js_partColumns = [
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
    width: 200
  },
  {
    title: "文档分类",
    dataIndex: "type",
    key: "type",
    align: "center"
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
    align: "center"
  },
  {
    title: "类型",
    dataIndex: "format",
    key: "format",
    align: "center"
  },
  {
    title: "红批",
    dataIndex: "isAnnotate",
    key: "isAnnotate",
    scopedSlots: { customRender: "isAnnotate" },
    align: "center"
  },
  {
    title: "签名",
    dataIndex: "isSign",
    key: "isSign",
    scopedSlots: { customRender: "isSign" },
    align: "center"
  },
  {
    title: "大小(KB)",
    dataIndex: "size",
    key: "size",
    align: "center"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator",
    align: "center"
  },
  {
    title: "创建日期",
    dataIndex: "date",
    key: "date",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "handle",
    key: "handle",
    align: "center",
    width: 180,
    scopedSlots: { customRender: "handle" },
  }
];

const srcvue_type_script_lang_js_partData = [
  {
    key: "1",
    name: "X系列叶轮",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: true,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 178.1
  },
  {
    key: "2",
    name: "X系列叶轮腔体",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: false,
    isSign: true,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 167.4
  },
  {
    key: "3",
    name: "叶轮螺母",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: false,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 89.9
  },
  {
    key: "4",
    name: "齿轮盖",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: false,
    isSign: false,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 106.8
  },
  {
    key: "5",
    name: "磁铁",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: true,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 74.1
  },
  {
    key: "6",
    name: "缸体",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: false,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 132.6
  }
];
/* harmony default export */ var drawingList_srcvue_type_script_lang_js_ = ({
  name: "DrawingList",
  data() {
    return {
      partData: srcvue_type_script_lang_js_partData,
      partColumns: srcvue_type_script_lang_js_partColumns,
      processData: srcvue_type_script_lang_js_processData,
      processColumns: srcvue_type_script_lang_js_processColumns,
      baselineData: srcvue_type_script_lang_js_baselineData,
      baselineColumns: srcvue_type_script_lang_js_baselineColumns,
      visible:false,
      visible2:false,
      url:'',
      form:{
        name:'X32泵',
        description:'X32泵零件'
      }
    };
  },
  mounted(){
    console.log(this.$route)
  },
  methods:{
    test(){
      this.$router.push('/test')
    },
    confirmPart(record){
      this.deletePart(record)
    },
    confirmProcess(record){
      this.deleteProcess(record)
    },
    confirmBaseline(record){
      this.deleteBaseline(record)
    },
    cancel(){
    },
    //删除图纸
    deletePart(record){
      console.log(record.key)
      srcvue_type_script_lang_js_partData.forEach((item,index)=>{
        if(item.key==record.key){
          srcvue_type_script_lang_js_partData.splice(index,1)
        }
      })
    },
    //删除流程
    deleteProcess(record){
      console.log(record.key)
      srcvue_type_script_lang_js_processData.forEach((item,index)=>{
        if(item.key==record.key){
          srcvue_type_script_lang_js_processData.splice(index,1)
        }
      })
    },
    //删除基线
    deleteBaseline(record){
      console.log(record.key)
      srcvue_type_script_lang_js_baselineData.forEach((item,index)=>{
        if(item.key==record.key){
          srcvue_type_script_lang_js_baselineData.splice(index,1)
        }
      })
    },
    showDrawer(){
      this.visible=true
    },
    onClose(){
      this.visible = false;
    },
    onSubmit(){
      this.visible = false;
      console.log("submit!")
    },
    handleOk(){
      this.visible2=false
    },
    open(item){
      this.visible2=true
      console.log(item)
      let obj={
        notifyType:'openObjPage',
        dependParam:{
          id:1,
          title:item.name,
        },
        notifyParam:{
          // isOpenModal:true,
          modalName:item.name,
          internal_name: item.internal_name, //url类型 根据这个跳转页面路径
          date:new Date()
        }
      }
      this.$bridge.notifyScheduler(JSON.stringify(obj))
      /* this.$router.push({
        path: "/"+obj.notifyParam.internal_name,
        query: obj.dependParam,
      }) */
      this.url=`http://${window.location.host}/folder/${obj.notifyParam.internal_name}/${obj.dependParam}`
    }
  }
});

// CONCATENATED MODULE: ./packages/drawingList/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_drawingList_srcvue_type_script_lang_js_ = (drawingList_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/drawingList/src/index.vue?vue&type=style&index=0&id=7010b986&scoped=true&lang=css&
var srcvue_type_style_index_0_id_7010b986_scoped_true_lang_css_ = __webpack_require__("e0e8");

// CONCATENATED MODULE: ./packages/drawingList/src/index.vue






/* normalize component */

var drawingList_src_component = normalizeComponent(
  packages_drawingList_srcvue_type_script_lang_js_,
  srcvue_type_template_id_7010b986_scoped_true_render,
  srcvue_type_template_id_7010b986_scoped_true_staticRenderFns,
  false,
  null,
  "7010b986",
  null
  
)

/* harmony default export */ var drawingList_src = (drawingList_src_component.exports);
// CONCATENATED MODULE: ./packages/drawingList/index.js


drawingList_src.install = function (Vue) {
    Vue.component(drawingList_src.name, drawingList_src)
}

/* harmony default export */ var drawingList = (drawingList_src);
// CONCATENATED MODULE: ./packages/index.js



const components = [
    attributeInfo,
    drawingList
]

const install = function(Vue) {
    if(install.installed) return

    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
    install,
    AttributeInfo: attributeInfo,
    DrawingList: drawingList
});
/* import fyChatToast from './to ast/src/fyChatToast.vue'
import msg from './toast/src/msg.vue'
import folder from './toast/src/folder.vue'
const toast = {}
toast.install = Vue => {
    // 扩展 vue 插件
    const ToastCon = Vue.extend(fyChatToast)
    const ins = new ToastCon()
    // 挂载 dom
    ins.$mount(document.createElement('div'))
    // 添加到 body 后面
    document.body.appendChild(ins.$el)
    // 给 vue 原型添加 toast 方法
    Vue.prototype.$toast = (msg, duration = 3000) => {
        // 我们调用的时候 赋值 message
        // 将 visible 设置为 true
        // 默认 3s 之后 设置 为 false 关闭 toast
        ins.message = msg
        ins.visible = true
        setTimeout(() => {
            ins.visible = false
        }, duration)
    }
}
msg.install = Vue => {
    console.log(msg.name,msg)
    // if (!Vue) {
    //     window.Vue = Vue = _Vue;
    // }
    Vue.component(msg.name, msg);
};
folder.install = Vue => {
    console.log(folder.name,folder)
    // if (!Vue) {
    //     window.Vue = Vue = _Vue;
    // }
    Vue.component(folder.name, folder);
};
export {toast,msg,folder}  */
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=com.umd.js.map