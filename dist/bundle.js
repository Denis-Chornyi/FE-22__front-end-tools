/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2sxLy4vc3JjL2luZGV4LmNzcz9lMzVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.css\n");

/***/ }),

/***/ "./src/profile/profile.scss":
/*!**********************************!*\
  !*** ./src/profile/profile.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9wcm9maWxlLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzazEvLi9zcmMvcHJvZmlsZS9wcm9maWxlLnNjc3M/MzViYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/profile.scss\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _profile_renderProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/renderProfile */ \"./src/profile/renderProfile.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\nconst profileData = {\n  name: 'Tom',\n  location: 'The World',\n};\n\n(0,_profile_renderProfile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(profileData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9EO0FBQy9COztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2sxLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlbmRlclByb2ZpbGUgZnJvbSAnLi9wcm9maWxlL3JlbmRlclByb2ZpbGUnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IHByb2ZpbGVEYXRhID0ge1xuICBuYW1lOiAnVG9tJyxcbiAgbG9jYXRpb246ICdUaGUgV29ybGQnLFxufTtcblxucmVuZGVyUHJvZmlsZShwcm9maWxlRGF0YSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/profile/renderProfile.js":
/*!**************************************!*\
  !*** ./src/profile/renderProfile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _profile_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.scss */ \"./src/profile/profile.scss\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ name, location }) => {\n  const nameElem = document.querySelector('.profile__name');\n  const locationElem = document.querySelector('.profile__location');\n\n  nameElem.textContent = name;\n  locationElem.textContent = `from ${location}`;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9yZW5kZXJQcm9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdCOztBQUV4QixpRUFBZSxHQUFHLGdCQUFnQjtBQUNsQztBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2sxLy4vc3JjL3Byb2ZpbGUvcmVuZGVyUHJvZmlsZS5qcz85YmZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9wcm9maWxlLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBuYW1lLCBsb2NhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IG5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX25hbWUnKTtcbiAgY29uc3QgbG9jYXRpb25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2xvY2F0aW9uJyk7XG5cbiAgbmFtZUVsZW0udGV4dENvbnRlbnQgPSBuYW1lO1xuICBsb2NhdGlvbkVsZW0udGV4dENvbnRlbnQgPSBgZnJvbSAke2xvY2F0aW9ufWA7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/profile/renderProfile.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;