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
/******/ 	return __webpack_require__(__webpack_require__.s = "../themes/FamilyFood/js/modules/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../themes/FamilyFood/js/modules/MobileMenuapp.js":
/*!*********************************************************!*\
  !*** ../themes/FamilyFood/js/modules/MobileMenuapp.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar MobileMenu = /*#__PURE__*/function () {\n  function MobileMenu() {\n    _classCallCheck(this, MobileMenu);\n\n    this.menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".site-header__menu\");\n    this.openButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".site-header__menu-trigger\");\n    this.events();\n  }\n\n  _createClass(MobileMenu, [{\n    key: \"events\",\n    value: function events() {\n      this.openButton.on(\"click\", this.openMenu.bind(this));\n    }\n  }, {\n    key: \"openMenu\",\n    value: function openMenu() {\n      this.openButton.toggleClass(\"fa-bars fa-window-close\");\n      this.menu.toggleClass(\"site-header__menu--active\");\n    }\n  }]);\n\n  return MobileMenu;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\n//# sourceURL=webpack:///../themes/FamilyFood/js/modules/MobileMenuapp.js?");

/***/ }),

/***/ "../themes/FamilyFood/js/modules/Searchapp.js":
/*!*****************************************************!*\
  !*** ../themes/FamilyFood/js/modules/Searchapp.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Search = /*#__PURE__*/function () {\n  // 1. describe and create/initiate our object\n  function Search() {\n    _classCallCheck(this, Search);\n\n    // see bottom of footer.php for the divs to these below\n    this.addsearchHTML();\n    this.resultsDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#search-overlay__results\");\n    this.openButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".js-search-trigger\");\n    this.closeButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".search-overlay__close\");\n    this.searchOverlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".search-overlay\");\n    this.searchField = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#search-term\");\n    this.events();\n    this.isOverlayOpen = false;\n    this.isSpinnerVisible = false;\n    this.previousValue;\n    this.typingTimer;\n  } // 2. events\n\n\n  _createClass(Search, [{\n    key: \"events\",\n    value: function events() {\n      this.openButton.on(\"click\", this.openOverlay.bind(this));\n      this.closeButton.on(\"click\", this.closeOverlay.bind(this));\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(\"keydown\", this.keyPressDispatcher.bind(this));\n      this.searchField.on(\"keyup\", this.typingLogic.bind(this));\n    } // 3. methods (function, action...)\n\n  }, {\n    key: \"typingLogic\",\n    value: function typingLogic() {\n      if (this.searchField.val() != this.previousValue) {\n        clearTimeout(this.typingTimer);\n\n        if (this.searchField.val()) {\n          if (!this.isSpinnerVisible) {\n            this.resultsDiv.html('<div class=\"spinner-loader\"></div>');\n            this.isSpinnerVisible = true;\n          }\n\n          this.typingTimer = setTimeout(this.getResults.bind(this), 100);\n        } else {\n          this.resultsDiv.html(\"\");\n          this.isSpinnerVisible = false;\n        }\n      }\n\n      this.previousValue = this.searchField.val();\n    }\n  }, {\n    key: \"getResults\",\n    value: function getResults() {\n      var _this = this;\n\n      // loop through JSON results:\n      // i.e.results.generalInfo.length ? -> all mapped from \"function SearchResults\" in \"inc/search-route.php\"\n      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.getJSON(recipeapiData.root_url + \"/wp-json/dynamic/v1/search?term=\" + this.searchField.val(), function (results) {\n        _this.resultsDiv.html(\"\\n      <div class=\\\"row\\\">\\n \\n        <div class=\\\"one-third\\\">\\n          <h2 class=\\\"search-overlay__section-title\\\">Recipes</h2>\\n          \".concat(results.recipesget.length ? '<ul class=\"professor-cards\">' : \"<p>No Cultures match that search. </p>\", \"\\n            \").concat(results.recipesget.map(function (item) {\n          return \"\\n          <li><a href=\\\"\".concat(item.permalink, \"\\\">\").concat(item.title, \"</a> \").concat(item.postType == \"recipes\" ? \"by \".concat(item.authorName) : \"\", \"</li>\\n          <li   class=\\\"professor-card__list-item\\\">\\n          <a    class=\\\"professor-card\\\" href=\\\"\").concat(item.permalink, \"\\\">\\n          <img  class=\\\"professor-card__image\\\" src=\\\"\").concat(item.image, \"\\\">\\n          <span class=\\\"professor-card__name\\\">\").concat(item.title, \"</span>\\n          </a>\\n          </li>\\n          \");\n        }).join(\"\"), \"\\n          \").concat(results.recipesget.length ? \"</ul>\" : \"\", \"\\n        </div>\\n\\n\\n        <div class=\\\"one-third\\\">\\n        <h2 class=\\\"search-overlay__section-title\\\">General Info Pages</h2>\\n        \").concat(results.generalInfo.length ? '<ul class=\"link-list min-list\">' : \"<p>No general match that search. <a href=\\\"\".concat(recipeapiData.root_url, \"/recipes\\\">View all recipes</a></p>\"), \"\\n          \").concat(results.generalInfo.map(function (item) {\n          return \"<li><a href=\\\"\".concat(item.permalink, \"\\\">\").concat(item.title, \"</a></li>\");\n        }).join(\"\"), \"\\n        \").concat(results.generalInfo.length ? \"</ul>\" : \"\", \"\\n        </div>\\n\\n        <div class=\\\"one-third\\\"> \\n        <h2 class=\\\"search-overlay__section-title\\\">Culture</h2>\\n        \").concat(results.culturesget.length ? '<ul class=\"link-list min-list\">' : \"<p>No culture match that search. <a href=\\\"\".concat(recipeapiData.root_url, \"/recipes\\\">View all cultures</a></p>\"), \"\\n          \").concat(results.culturesget.map(function (item) {\n          return \"<li><a href=\\\"\".concat(item.permalink, \"\\\">\").concat(item.title, \"</a></li>\");\n        }).join(\"\"), \"\\n        \").concat(results.culturesget.length ? \"</ul>\" : \"\", \"\\n         </div>\\n\\n         <div class=\\\"one-third\\\">     \\n\\t            <h2 class=\\\"search-overlay__section-title\\\">Tutorials</h2>\\n\\t            \").concat(results.tutorialsget.length ? '<ul class=\"link-list min-list\">' : \"<p>No tutorials match that search. <a href=\\\"\".concat(recipeapiData.root_url, \"/tutorials\\\">View all tutorials</a></p>\"), \"\\n                \").concat(results.tutorialsget.map(function (item) {\n          return \"<li><a href=\\\"\".concat(item.permalink, \"\\\">\").concat(item.title, \"</a></li>\");\n        }).join(\"\"), \"\\n\\t            \").concat(results.tutorialsget.length ? \"</ul>\" : \"\", \"\\n\\n            \\n\\t          </div>\\n\\t        </div>\\n\\t      \"));\n\n        _this.isSpinnerVisible = false;\n      });\n    }\n  }, {\n    key: \"keyPressDispatcher\",\n    value: function keyPressDispatcher(e) {\n      if (e.keyCode == 83 && !this.isOverlayOpen && !jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"input, textarea\").is(\":focus\")) {\n        this.openOverlay();\n      }\n\n      if (e.keyCode == 27 && this.isOverlayOpen) {\n        this.closeOverlay();\n      }\n    }\n  }, {\n    key: \"openOverlay\",\n    value: function openOverlay() {\n      var _this2 = this;\n\n      this.searchOverlay.addClass(\"search-overlay--active\");\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"body\").addClass(\"body-no-scroll\");\n      this.searchField.val(\"\");\n      setTimeout(function () {\n        return _this2.searchField.focus();\n      }, 301); // allows page to reload with spinner\n\n      console.log(\"our open method just ran!\");\n      this.isOverlayOpen = true;\n    }\n  }, {\n    key: \"closeOverlay\",\n    value: function closeOverlay() {\n      this.searchOverlay.removeClass(\"search-overlay--active\");\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"body\").removeClass(\"body-no-scroll\");\n      console.log(\"our close method just ran!\");\n      this.isOverlayOpen = false;\n    }\n  }, {\n    key: \"addsearchHTML\",\n    value: function addsearchHTML() {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"body\").append(\"\\n <div class=\\\"search-overlay\\\">\\n <div class=\\\"search-overlay__top\\\">\\n <div class=\\\"container\\\">\\n <i class=\\\"fa fa-search search-overlay__icon\\\" aria-hidden=\\\"true\\\"></i>\\n <input type=\\\"text\\\" class=\\\"search-term\\\" placeholder=\\\"What are you searching for?\\\" id=\\\"search-term\\\">\\n <i class=\\\"fa fa-window-close search-overlay__close\\\" aria-hidden=\\\"true\\\"></i>\\n </div>\\n</div>\\n<div class='container'>\\n<div id=\\\"search-overlay__results\\\"></div>\\n</div>\\n</div> \\n\");\n    }\n  }]);\n\n  return Search;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///../themes/FamilyFood/js/modules/Searchapp.js?");

/***/ }),

/***/ "../themes/FamilyFood/js/modules/scripts.js":
/*!***************************************************!*\
  !*** ../themes/FamilyFood/js/modules/scripts.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MobileMenuapp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileMenuapp */ \"../themes/FamilyFood/js/modules/MobileMenuapp.js\");\n/* harmony import */ var _Searchapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Searchapp */ \"../themes/FamilyFood/js/modules/Searchapp.js\");\n// 3rd party packages from NPM\n //import slick from 'slick-carousel';\n// Our modules / classes\n\n //import HeroSlider from './modules/HeroSliderapp';\n\n // Instantiate a new object using our modules/classes\n\nvar mobileMenu = new _MobileMenuapp__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); //var heroSlider = new HeroSlider();\n\nvar search = new _Searchapp__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n//# sourceURL=webpack:///../themes/FamilyFood/js/modules/scripts.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });