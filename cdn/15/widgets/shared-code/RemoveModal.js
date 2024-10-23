System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/shared-code/translations/default.ts":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/translations/default.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    cancel: 'Cancel·la',
    delete: 'Esborra'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/RemoveModal.tsx ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveModal: () => (/* binding */ RemoveModal)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/shared-code/translations/default.ts");
/** @jsx jsx */




const RemoveModal = (props) => {
    const { removeModalCallback, updateShowModalStatus, showModalStatus, headerText, bodyText } = props;
    const translate = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
    const handleClose = () => updateShowModalStatus(false);
    const handleRemove = () => {
        handleClose();
        removeModalCallback();
    };
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, { toggle: handleClose, isOpen: showModalStatus, contentClassName: "remove-modal", css: styles },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, { closeIcon: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>', style: { marginRight: '10px' } }), toggle: handleClose }, headerText),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalBody, null, bodyText),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: handleClose, type: "secondary" }, translate('cancel')),
            ' ',
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: handleRemove, type: "danger" }, translate('delete')))));
};
const styles = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
  .remove-modal .modal-header .close {
    padding: initial !important;
    margin: initial !important;
  }
`;

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zaGFyZWQtY29kZS9SZW1vdmVNb2RhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixNQUFNLEVBQUUsV0FBVztJQUNuQixNQUFNLEVBQUUsU0FBUztDQUNsQixFQUFDOzs7Ozs7Ozs7Ozs7QUNIRjs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQUNpRDtBQUNrQjtBQUNqRDtBQUNtQjtBQVU3QyxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtJQUNyRCxNQUFNLEVBQ0osbUJBQW1CLEVBQUUscUJBQXFCLEVBQzFDLGVBQWUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUN0QyxHQUFHLEtBQUs7SUFDVCxNQUFNLFNBQVMsR0FBRyw0Q0FBSyxDQUFDLGNBQWMsQ0FBQyw2REFBZSxDQUFDO0lBRXZELE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztJQUN0RCxNQUFNLFlBQVksR0FBRyxHQUFHLEVBQUU7UUFDeEIsV0FBVyxFQUFFO1FBQ2IsbUJBQW1CLEVBQUU7SUFDdkIsQ0FBQztJQUNELE9BQU8sQ0FDTCwrQ0FBQywwQ0FBSyxJQUNKLE1BQU0sRUFBRSxXQUFXLEVBQ25CLE1BQU0sRUFBRSxlQUFlLEVBQ3ZCLGdCQUFnQixFQUFDLGNBQWMsRUFDL0IsR0FBRyxFQUFFLE1BQU07UUFFWCwrQ0FBQyxnREFBVyxJQUNWLFNBQVMsRUFBRSwrQ0FBQyx5Q0FBSSxJQUFDLElBQUksRUFBQyxrUkFBb1UsRUFDeFYsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLE1BQU0sRUFBQyxHQUFJLEVBQ2xDLE1BQU0sRUFBRSxXQUFXLElBRWxCLFVBQVUsQ0FDQztRQUVkLCtDQUFDLDhDQUFTLFFBQ1AsUUFBUSxDQUNDO1FBRVosK0NBQUMsZ0RBQVc7WUFDViwrQ0FBQywyQ0FBTSxJQUFDLE9BQU8sRUFBRSxXQUFXLEVBQzFCLElBQUksRUFBQyxXQUFXLElBQ2YsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUNiO1lBQ1IsR0FBRztZQUNKLCtDQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLFlBQVksRUFDckIsSUFBSSxFQUFDLFFBQVEsSUFFWixTQUFTLENBQUMsUUFBUSxDQUFDLENBQ2IsQ0FDRyxDQUNSLENBQ1Q7QUFDSCxDQUFDO0FBRUQsTUFBTSxNQUFNLEdBQUcsOENBQUc7Ozs7O0NBS2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NoYXJlZC1jb2RlL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zaGFyZWQtY29kZS9SZW1vdmVNb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNhbmNlbDogJ0NhbmNlbMK3bGEnLFxyXG4gIGRlbGV0ZTogJ0VzYm9ycmEnXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgTW9kYWwsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIsIE1vZGFsSGVhZGVyIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgaG9va3MgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuXHJcbmludGVyZmFjZSBSZW1vdmVNb2RhbFByb3BzIHtcclxuICByZW1vdmVNb2RhbENhbGxiYWNrOiAoKSA9PiB2b2lkOyBcclxuICB1cGRhdGVTaG93TW9kYWxTdGF0dXM6IChib29sZWFuKSA9PiB2b2lkO1xyXG4gIHNob3dNb2RhbFN0YXR1czogYm9vbGVhbjsgXHJcbiAgaGVhZGVyVGV4dDogc3RyaW5nOyBcclxuICBib2R5VGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUmVtb3ZlTW9kYWwgPSAocHJvcHM6IFJlbW92ZU1vZGFsUHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZW1vdmVNb2RhbENhbGxiYWNrLCB1cGRhdGVTaG93TW9kYWxTdGF0dXMsXHJcbiAgICBzaG93TW9kYWxTdGF0dXMsIGhlYWRlclRleHQsIGJvZHlUZXh0XHJcbiAgfSA9IHByb3BzXHJcbiAgY29uc3QgdHJhbnNsYXRlID0gaG9va3MudXNlVHJhbnNsYXRpb24oZGVmYXVsdE1lc3NhZ2VzKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHVwZGF0ZVNob3dNb2RhbFN0YXR1cyhmYWxzZSlcclxuICBjb25zdCBoYW5kbGVSZW1vdmUgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVDbG9zZSgpXHJcbiAgICByZW1vdmVNb2RhbENhbGxiYWNrKClcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICB0b2dnbGU9e2hhbmRsZUNsb3NlfVxyXG4gICAgICBpc09wZW49e3Nob3dNb2RhbFN0YXR1c31cclxuICAgICAgY29udGVudENsYXNzTmFtZT1cInJlbW92ZS1tb2RhbFwiXHJcbiAgICAgIGNzcz17c3R5bGVzfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWxIZWFkZXJcclxuICAgICAgICBjbG9zZUljb249ezxJY29uIGljb249JzxzdmcgeG1sbnM9JnF1b3Q7aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcmcXVvdDsgZmlsbD0mcXVvdDtub25lJnF1b3Q7IHZpZXdCb3g9JnF1b3Q7MCAwIDE2IDE2JnF1b3Q7PjxwYXRoIGZpbGw9JnF1b3Q7IzAwMCZxdW90OyBkPSZxdW90O204Ljc0NSA4IDYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0NS43NDZMOCA4Ljc0NmwtNi4xIDYuMWEuNTI3LjUyNyAwIDEgMS0uNzQ2LS43NDZsNi4xLTYuMS02LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYtLjc0Nmw2LjEgNi4xIDYuMS02LjFhLjUyNy41MjcgMCAwIDEgLjc0Ni43NDZ6JnF1b3Q7PjwvcGF0aD48L3N2Zz4nIFxyXG4gICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogJzEwcHgnfX0gLz59XHJcbiAgICAgICAgdG9nZ2xlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtoZWFkZXJUZXh0fVxyXG4gICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICBcclxuICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICB7Ym9keVRleHR9XHJcbiAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICBcclxuICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICB7dHJhbnNsYXRlKCdjYW5jZWwnKX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB7JyAnfVxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlbW92ZX1cclxuICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0cmFuc2xhdGUoJ2RlbGV0ZScpfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgPC9Nb2RhbD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IGNzc2BcclxuICAucmVtb3ZlLW1vZGFsIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuICAgIHBhZGRpbmc6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIH1cclxuYCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==