/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/blue.jpg":
/*!*****************************!*\
  !*** ./src/images/blue.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a96d6249f0d704981e87.jpg";

/***/ }),

/***/ "./src/images/green.jpg":
/*!******************************!*\
  !*** ./src/images/green.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a9d1b96e4431c1588fdd.jpg";

/***/ }),

/***/ "./src/images/orange.jpg":
/*!*******************************!*\
  !*** ./src/images/orange.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcd8f337bb12485ba69f.jpg";

/***/ }),

/***/ "./src/images/purple.jpg":
/*!*******************************!*\
  !*** ./src/images/purple.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dff6a2d2f74690bdea11.jpg";

/***/ }),

/***/ "./src/images/red.jpg":
/*!****************************!*\
  !*** ./src/images/red.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98b1dd45acc8c824173e.jpg";

/***/ }),

/***/ "./src/images/yellow.jpg":
/*!*******************************!*\
  !*** ./src/images/yellow.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a154df996cd50c4f6253.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayImages: () => (/* binding */ displayImages)
/* harmony export */ });
/* harmony import */ var _images_red_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/red.jpg */ "./src/images/red.jpg");
/* harmony import */ var _images_orange_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/orange.jpg */ "./src/images/orange.jpg");
/* harmony import */ var _images_yellow_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/yellow.jpg */ "./src/images/yellow.jpg");
/* harmony import */ var _images_green_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/green.jpg */ "./src/images/green.jpg");
/* harmony import */ var _images_blue_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/blue.jpg */ "./src/images/blue.jpg");
/* harmony import */ var _images_purple_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/purple.jpg */ "./src/images/purple.jpg");







function displayImages() {
  const container = document.querySelector(".container");
  const imageRed = document.createElement("img");
  imageRed.src = _images_red_jpg__WEBPACK_IMPORTED_MODULE_0__;
  imageRed.classList.add("image");
  container.appendChild(imageRed);

  const imageOrange = document.createElement("img");
  imageOrange.src = _images_orange_jpg__WEBPACK_IMPORTED_MODULE_1__;
  imageOrange.classList.add("image");
  container.appendChild(imageOrange);

  const imageYellow = document.createElement("img");
  imageYellow.src = _images_yellow_jpg__WEBPACK_IMPORTED_MODULE_2__;
  imageYellow.classList.add("image");
  container.appendChild(imageYellow);

  const imageGreen = document.createElement("img");
  imageGreen.src = _images_green_jpg__WEBPACK_IMPORTED_MODULE_3__;
  imageGreen.classList.add("image");
  container.appendChild(imageGreen);

  const imageBlue = document.createElement("img");
  imageBlue.src = _images_blue_jpg__WEBPACK_IMPORTED_MODULE_4__;
  imageBlue.classList.add("image");
  container.appendChild(imageBlue);

  const imagePurple = document.createElement("img");
  imagePurple.src = _images_purple_jpg__WEBPACK_IMPORTED_MODULE_5__;
  imagePurple.classList.add("image");
  container.appendChild(imagePurple);
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCbUM7QUFDTTtBQUNBO0FBQ0Y7QUFDRjtBQUNJOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNENBQUc7QUFDcEI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwrQ0FBTTtBQUMxQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLCtDQUFNO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsOENBQUs7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiw2Q0FBSTtBQUN0QjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLCtDQUFNO0FBQzFCO0FBQ0E7QUFDQTs7QUFFeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljZWFuaW1hdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcmFjdGljZWFuaW1hdGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJhY3RpY2VhbmltYXRpb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcmFjdGljZWFuaW1hdGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ByYWN0aWNlYW5pbWF0aW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJhY3RpY2VhbmltYXRpb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJhY3RpY2VhbmltYXRpb24vLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBSZWQgZnJvbSBcIi4vaW1hZ2VzL3JlZC5qcGdcIjtcbmltcG9ydCBPcmFuZ2UgZnJvbSBcIi4vaW1hZ2VzL29yYW5nZS5qcGdcIjtcbmltcG9ydCBZZWxsb3cgZnJvbSBcIi4vaW1hZ2VzL3llbGxvdy5qcGdcIjtcbmltcG9ydCBHcmVlbiBmcm9tIFwiLi9pbWFnZXMvZ3JlZW4uanBnXCI7XG5pbXBvcnQgQmx1ZSBmcm9tIFwiLi9pbWFnZXMvYmx1ZS5qcGdcIjtcbmltcG9ydCBQdXJwbGUgZnJvbSBcIi4vaW1hZ2VzL3B1cnBsZS5qcGdcIjtcblxuZnVuY3Rpb24gZGlzcGxheUltYWdlcygpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gIGNvbnN0IGltYWdlUmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2VSZWQuc3JjID0gUmVkO1xuICBpbWFnZVJlZC5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZVJlZCk7XG5cbiAgY29uc3QgaW1hZ2VPcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZU9yYW5nZS5zcmMgPSBPcmFuZ2U7XG4gIGltYWdlT3JhbmdlLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlT3JhbmdlKTtcblxuICBjb25zdCBpbWFnZVllbGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlWWVsbG93LnNyYyA9IFllbGxvdztcbiAgaW1hZ2VZZWxsb3cuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VZZWxsb3cpO1xuXG4gIGNvbnN0IGltYWdlR3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZUdyZWVuLnNyYyA9IEdyZWVuO1xuICBpbWFnZUdyZWVuLmNsYXNzTGlzdC5hZGQoXCJpbWFnZVwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlR3JlZW4pO1xuXG4gIGNvbnN0IGltYWdlQmx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlQmx1ZS5zcmMgPSBCbHVlO1xuICBpbWFnZUJsdWUuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VCbHVlKTtcblxuICBjb25zdCBpbWFnZVB1cnBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlUHVycGxlLnNyYyA9IFB1cnBsZTtcbiAgaW1hZ2VQdXJwbGUuY2xhc3NMaXN0LmFkZChcImltYWdlXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VQdXJwbGUpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5SW1hZ2VzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=