System.register([], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {


	return {

		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/shared-code/environments/constants.ts":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/environments/constants.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ABWIDGET_STATE_ID: () => (/* binding */ ABWIDGET_STATE_ID),
/* harmony export */   CONSTANTS: () => (/* binding */ CONSTANTS),
/* harmony export */   NOTIFICATION_STATE_ID: () => (/* binding */ NOTIFICATION_STATE_ID),
/* harmony export */   SERVICES: () => (/* binding */ SERVICES),
/* harmony export */   SQL_CONSULTA_STATE_ID: () => (/* binding */ SQL_CONSULTA_STATE_ID),
/* harmony export */   STREET_VIEW_STATE_ID: () => (/* binding */ STREET_VIEW_STATE_ID)
/* harmony export */ });
const SERVICES = {
    auth: `ms-auth`,
    sap: `ms-sap`,
    configs: 'ms-configs'
};
const CONSTANTS = {
    endpoints: {
        auth: `${SERVICES.auth}/authenticate`,
        config: `${SERVICES.auth}/config`,
        sap: `${SERVICES.sap}/login`,
        get_config: `${SERVICES.sap}/getConfig`,
        get_request: `${SERVICES.sap}/request?endPointUrl=`
    }
};
const NOTIFICATION_STATE_ID = 'notificationState';
const ABWIDGET_STATE_ID = 'abwidget';
const SQL_CONSULTA_STATE_ID = 'sql_consulta';
const STREET_VIEW_STATE_ID = 'widget_street_view';


/***/ }),

/***/ "./your-extensions/widgets/shared-code/environments/enums.ts":
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/environments/enums.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RedLinePublic: () => (/* binding */ RedLinePublic),
/* harmony export */   RedLineStates: () => (/* binding */ RedLineStates),
/* harmony export */   RedLineTypologieTypes: () => (/* binding */ RedLineTypologieTypes)
/* harmony export */ });
var RedLineTypologieTypes;
(function (RedLineTypologieTypes) {
    RedLineTypologieTypes["General"] = "General";
    RedLineTypologieTypes["Especific"] = "Especific";
})(RedLineTypologieTypes || (RedLineTypologieTypes = {}));
var RedLineStates;
(function (RedLineStates) {
    RedLineStates["Creat"] = "Creat";
    RedLineStates["Modificat"] = "Modificat";
    RedLineStates["Eliminat"] = "Eliminat";
})(RedLineStates || (RedLineStates = {}));
var RedLinePublic;
(function (RedLinePublic) {
    RedLinePublic["Si"] = "S\u00ED";
    RedLinePublic["No"] = "No";
})(RedLinePublic || (RedLinePublic = {}));


/***/ }),

/***/ "./your-extensions/widgets/shared-code/environments/environment.interface.ts":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/environments/environment.interface.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./your-extensions/widgets/shared-code/environments/environment.local.ts":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/environments/environment.local.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    backend: 'https://sigab2.nexusgeografics.com/api-sigab',
    portalLogout: 'https://srvarcgisdev.nexusgeografics.com/portal/home/gallery.html',
    //Tota configuració de widget (datasources) serà diferent a cada entorn. En aquest diccionari hi haurà totes les traduccions que caldrà,p.ex:Canviar l'itemid de webmaps,url de serveis de mapa,etc
    configInterceptorDict: {
        "33182cc4e7c949fbbc436440776c4fd8": "33182cc4e7c949fbbc436440776c4fd8"
    },
    geoProcessCADAction: 'https://apides.aiguesdebarcelona.cat/server/rest/services/SIGAB/ExportCADtoJSON/GPServer/ExportCADtoJSON',
    geoProcessCADUploadFile: 'https://apides.aiguesdebarcelona.cat/server/rest/services/SIGAB/ExportCADtoJSON/GPServer/uploads/upload',
    piccoloFormEndpoint: 'https://apides.aiguesdebarcelona.cat/server/rest/services/SIGAB/Piccolo_arees/FeatureServer/0/applyEdits',
    piccoloLayerEndpoint: 'https://apides.aiguesdebarcelona.cat/server/rest/services/SIGAB/Piccolo_arees/FeatureServer',
    // Notem que tenim %SAP_ID% a la url sapFormURL, aquest valor li fem un replace per codi allà on l'utilitzem
    sapFormURL: 'https://sapabq.agbar.local:8001/sap/bc/gui/sap/its/webgui/!?sap-client=520&~transaction=IE02&RM63E-EQUNR=%SAP_ID%&~okcode=/00#',
    searchOriginUrl: "https://ppportalgis.repsol.com/arcgis/rest/services/GPS/RMLogistica/MapServer/0",
};


/***/ }),

/***/ "./your-extensions/widgets/shared-code/environments/environment.pro.ts":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/environments/environment.pro.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environmentNexus: () => (/* binding */ environmentNexus)
/* harmony export */ });
const environmentNexus = {
    backend: '%API_SIGAB_URL%',
    portalLogout: '%LOGOUT_URL%',
    configInterceptorDict: {},
    geoProcessCADAction: '%GEOPROCESS_CAD_ACTION%',
    geoProcessCADUploadFile: '%GEOPROCESS_CAD_UPLOAD%',
    piccoloFormEndpoint: '%PICCOLO_FORM_ENDPOINT%',
    piccoloLayerEndpoint: '%PICCOLO_LAYER_ENDPOINT%',
    sapFormURL: '%SAP_FORM_URL%'
};


/***/ }),

/***/ "./your-extensions/widgets/shared-code/environments/permissions.ts":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/environments/permissions.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Permissions: () => (/* binding */ Permissions)
/* harmony export */ });
const Permissions = {
    //Els userGroups ens arriben del portal
    userGroups: {
        //config per defecte del widget cerca (sense rol que el definixi)
        default: {
            Cerca: {
                sources: ['carrerer'] //Tots els sources q l'user podrà fer servir
            },
            'Red-line': {}
        },
        qualificatOrg: {
            Cerca: {
                sources: ['carrerer', 'polissa', 'abastament', 'sanejament', 'clavagueram']
            },
            'Red-line': {}
        },
        qualificatUnitat: {
            Cerca: { sources: ['carrerer', 'abastament'], actives: ['abastament'] },
            'Red-line': {}
        },
        operacions: {
            Cerca: {
                sources: ['carrerer', 'polissa', 'abastament', 'sanejament', 'clavagueram']
            },
            'Red-line': {}
        },
        restringit: {
            Cerca: null, //No veuran el widget,
            'Red-line': null
        }
    },
    widgetConfigs: {
        Cerca: {
            carrerer: ['Carrerer', 'Cruïlles'], //Els valors corresponen al label de cada datasource tal com apareix al fitxer config.json de l'app
            polissa: ['Pòlissa ramal', 'Pòlissa subministrament'],
            abastament: ['Abastament'],
            sanejament: ['Sanejament'],
            clavagueram: ['Clavagueram']
        },
        'Widget label': {}
    }
};


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
  !*** ./your-extensions/widgets/shared-code/environments.ts ***!
  \*************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ABWIDGET_STATE_ID: () => (/* reexport safe */ _environments_constants__WEBPACK_IMPORTED_MODULE_1__.ABWIDGET_STATE_ID),
/* harmony export */   CONSTANTS: () => (/* reexport safe */ _environments_constants__WEBPACK_IMPORTED_MODULE_1__.CONSTANTS),
/* harmony export */   NOTIFICATION_STATE_ID: () => (/* reexport safe */ _environments_constants__WEBPACK_IMPORTED_MODULE_1__.NOTIFICATION_STATE_ID),
/* harmony export */   Permissions: () => (/* reexport safe */ _environments_permissions__WEBPACK_IMPORTED_MODULE_0__.Permissions),
/* harmony export */   RedLinePublic: () => (/* reexport safe */ _environments_enums__WEBPACK_IMPORTED_MODULE_2__.RedLinePublic),
/* harmony export */   RedLineStates: () => (/* reexport safe */ _environments_enums__WEBPACK_IMPORTED_MODULE_2__.RedLineStates),
/* harmony export */   RedLineTypologieTypes: () => (/* reexport safe */ _environments_enums__WEBPACK_IMPORTED_MODULE_2__.RedLineTypologieTypes),
/* harmony export */   SERVICES: () => (/* reexport safe */ _environments_constants__WEBPACK_IMPORTED_MODULE_1__.SERVICES),
/* harmony export */   SQL_CONSULTA_STATE_ID: () => (/* reexport safe */ _environments_constants__WEBPACK_IMPORTED_MODULE_1__.SQL_CONSULTA_STATE_ID),
/* harmony export */   STREET_VIEW_STATE_ID: () => (/* reexport safe */ _environments_constants__WEBPACK_IMPORTED_MODULE_1__.STREET_VIEW_STATE_ID),
/* harmony export */   environment: () => (/* reexport safe */ _environments_environment_local__WEBPACK_IMPORTED_MODULE_4__.environment),
/* harmony export */   environmentNexus: () => (/* reexport safe */ _environments_environment_pro__WEBPACK_IMPORTED_MODULE_5__.environmentNexus)
/* harmony export */ });
/* harmony import */ var _environments_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/permissions */ "./your-extensions/widgets/shared-code/environments/permissions.ts");
/* harmony import */ var _environments_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/constants */ "./your-extensions/widgets/shared-code/environments/constants.ts");
/* harmony import */ var _environments_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/enums */ "./your-extensions/widgets/shared-code/environments/enums.ts");
/* harmony import */ var _environments_environment_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment.interface */ "./your-extensions/widgets/shared-code/environments/environment.interface.ts");
/* harmony import */ var _environments_environment_local__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment.local */ "./your-extensions/widgets/shared-code/environments/environment.local.ts");
/* harmony import */ var _environments_environment_pro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment.pro */ "./your-extensions/widgets/shared-code/environments/environment.pro.ts");







})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zaGFyZWQtY29kZS9lbnZpcm9ubWVudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNLFFBQVEsR0FBRztJQUN0QixJQUFJLEVBQUUsU0FBUztJQUNmLEdBQUcsRUFBRSxRQUFRO0lBQ2IsT0FBTyxFQUFFLFlBQVk7Q0FDdEI7QUFFTSxNQUFNLFNBQVMsR0FBRztJQUN2QixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxlQUFlO1FBQ3JDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLFNBQVM7UUFDakMsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsUUFBUTtRQUM1QixVQUFVLEVBQUUsR0FBRyxRQUFRLENBQUMsR0FBRyxZQUFZO1FBQ3ZDLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLHVCQUF1QjtLQUNwRDtDQUNGO0FBRU0sTUFBTSxxQkFBcUIsR0FBRyxtQkFBbUI7QUFDakQsTUFBTSxpQkFBaUIsR0FBRyxVQUFVO0FBQ3BDLE1BQU0scUJBQXFCLEdBQUcsY0FBYztBQUM1QyxNQUFNLG9CQUFvQixHQUFHLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ4RCxJQUFZLHFCQUdYO0FBSEQsV0FBWSxxQkFBcUI7SUFDL0IsNENBQW1CO0lBQ25CLGdEQUF1QjtBQUN6QixDQUFDLEVBSFcscUJBQXFCLEtBQXJCLHFCQUFxQixRQUdoQztBQUVELElBQVksYUFJWDtBQUpELFdBQVksYUFBYTtJQUN2QixnQ0FBZTtJQUNmLHdDQUF1QjtJQUN2QixzQ0FBcUI7QUFDdkIsQ0FBQyxFQUpXLGFBQWEsS0FBYixhQUFhLFFBSXhCO0FBRUQsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLCtCQUFTO0lBQ1QsMEJBQVM7QUFDWCxDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFWk0sTUFB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Ozs7Ozs7OztBQ05UO0FBQ0Y7QUFDSjtBQUNnQjtBQUNKO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2hhcmVkLWNvZGUvZW52aXJvbm1lbnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2hhcmVkLWNvZGUvZW52aXJvbm1lbnRzL2VudW1zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zaGFyZWQtY29kZS9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQuaW50ZXJmYWNlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zaGFyZWQtY29kZS9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQubG9jYWwudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NoYXJlZC1jb2RlL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC5wcm8udHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NoYXJlZC1jb2RlL2Vudmlyb25tZW50cy9wZXJtaXNzaW9ucy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NoYXJlZC1jb2RlL2Vudmlyb25tZW50cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0VSVklDRVMgPSB7XHJcbiAgYXV0aDogYG1zLWF1dGhgLFxyXG4gIHNhcDogYG1zLXNhcGAsXHJcbiAgY29uZmlnczogJ21zLWNvbmZpZ3MnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDT05TVEFOVFMgPSB7XHJcbiAgZW5kcG9pbnRzOiB7XHJcbiAgICBhdXRoOiBgJHtTRVJWSUNFUy5hdXRofS9hdXRoZW50aWNhdGVgLFxyXG4gICAgY29uZmlnOiBgJHtTRVJWSUNFUy5hdXRofS9jb25maWdgLFxyXG4gICAgc2FwOiBgJHtTRVJWSUNFUy5zYXB9L2xvZ2luYCxcclxuICAgIGdldF9jb25maWc6IGAke1NFUlZJQ0VTLnNhcH0vZ2V0Q29uZmlnYCxcclxuICAgIGdldF9yZXF1ZXN0OiBgJHtTRVJWSUNFUy5zYXB9L3JlcXVlc3Q/ZW5kUG9pbnRVcmw9YFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5PVElGSUNBVElPTl9TVEFURV9JRCA9ICdub3RpZmljYXRpb25TdGF0ZSdcclxuZXhwb3J0IGNvbnN0IEFCV0lER0VUX1NUQVRFX0lEID0gJ2Fid2lkZ2V0J1xyXG5leHBvcnQgY29uc3QgU1FMX0NPTlNVTFRBX1NUQVRFX0lEID0gJ3NxbF9jb25zdWx0YSdcclxuZXhwb3J0IGNvbnN0IFNUUkVFVF9WSUVXX1NUQVRFX0lEID0gJ3dpZGdldF9zdHJlZXRfdmlldydcclxuIiwiZXhwb3J0IGVudW0gUmVkTGluZVR5cG9sb2dpZVR5cGVzIHtcclxuICBHZW5lcmFsID0gJ0dlbmVyYWwnLFxyXG4gIEVzcGVjaWZpYyA9ICdFc3BlY2lmaWMnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZWRMaW5lU3RhdGVzIHtcclxuICBDcmVhdCA9ICdDcmVhdCcsXHJcbiAgTW9kaWZpY2F0ID0gJ01vZGlmaWNhdCcsXHJcbiAgRWxpbWluYXQgPSAnRWxpbWluYXQnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZWRMaW5lUHVibGljIHtcclxuICBTaSA9ICdTw60nLFxyXG4gIE5vID0gJ05vJyxcclxufVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElFbnZpcm9ubWVudCB7XHJcbiAgYmFja2VuZDogc3RyaW5nO1xyXG4gIHBvcnRhbExvZ291dDogc3RyaW5nO1xyXG4gIGNvbmZpZ0ludGVyY2VwdG9yRGljdDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBnZW9Qcm9jZXNzQ0FEVXBsb2FkRmlsZTogc3RyaW5nO1xyXG4gIGdlb1Byb2Nlc3NDQURBY3Rpb246IHN0cmluZztcclxuICBwaWNjb2xvRm9ybUVuZHBvaW50OiBzdHJpbmc7XHJcbiAgcGljY29sb0xheWVyRW5kcG9pbnQ6IHN0cmluZztcclxuICBzYXBGb3JtVVJMOiBzdHJpbmc7XHJcbiAgc2VhcmNoT3JpZ2luVXJsOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgSUVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudC5pbnRlcmZhY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50OiBJRW52aXJvbm1lbnQgPSB7XHJcbiAgYmFja2VuZDogJ2h0dHBzOi8vc2lnYWIyLm5leHVzZ2VvZ3JhZmljcy5jb20vYXBpLXNpZ2FiJyxcclxuICBwb3J0YWxMb2dvdXQ6ICdodHRwczovL3NydmFyY2dpc2Rldi5uZXh1c2dlb2dyYWZpY3MuY29tL3BvcnRhbC9ob21lL2dhbGxlcnkuaHRtbCcsXHJcbiAgLy9Ub3RhIGNvbmZpZ3VyYWNpw7MgZGUgd2lkZ2V0IChkYXRhc291cmNlcykgc2Vyw6AgZGlmZXJlbnQgYSBjYWRhIGVudG9ybi4gRW4gYXF1ZXN0IGRpY2Npb25hcmkgaGkgaGF1csOgIHRvdGVzIGxlcyB0cmFkdWNjaW9ucyBxdWUgY2FsZHLDoCxwLmV4OkNhbnZpYXIgbCdpdGVtaWQgZGUgd2VibWFwcyx1cmwgZGUgc2VydmVpcyBkZSBtYXBhLGV0Y1xyXG4gIGNvbmZpZ0ludGVyY2VwdG9yRGljdDoge1xyXG4gICAgXCIzMzE4MmNjNGU3Yzk0OWZiYmM0MzY0NDA3NzZjNGZkOFwiOiBcIjMzMTgyY2M0ZTdjOTQ5ZmJiYzQzNjQ0MDc3NmM0ZmQ4XCJcclxuICB9LFxyXG4gIGdlb1Byb2Nlc3NDQURBY3Rpb246ICdodHRwczovL2FwaWRlcy5haWd1ZXNkZWJhcmNlbG9uYS5jYXQvc2VydmVyL3Jlc3Qvc2VydmljZXMvU0lHQUIvRXhwb3J0Q0FEdG9KU09OL0dQU2VydmVyL0V4cG9ydENBRHRvSlNPTicsXHJcbiAgZ2VvUHJvY2Vzc0NBRFVwbG9hZEZpbGU6ICdodHRwczovL2FwaWRlcy5haWd1ZXNkZWJhcmNlbG9uYS5jYXQvc2VydmVyL3Jlc3Qvc2VydmljZXMvU0lHQUIvRXhwb3J0Q0FEdG9KU09OL0dQU2VydmVyL3VwbG9hZHMvdXBsb2FkJyxcclxuICBwaWNjb2xvRm9ybUVuZHBvaW50OiAnaHR0cHM6Ly9hcGlkZXMuYWlndWVzZGViYXJjZWxvbmEuY2F0L3NlcnZlci9yZXN0L3NlcnZpY2VzL1NJR0FCL1BpY2NvbG9fYXJlZXMvRmVhdHVyZVNlcnZlci8wL2FwcGx5RWRpdHMnLFxyXG4gIHBpY2NvbG9MYXllckVuZHBvaW50OiAnaHR0cHM6Ly9hcGlkZXMuYWlndWVzZGViYXJjZWxvbmEuY2F0L3NlcnZlci9yZXN0L3NlcnZpY2VzL1NJR0FCL1BpY2NvbG9fYXJlZXMvRmVhdHVyZVNlcnZlcicsXHJcblxyXG4gIC8vIE5vdGVtIHF1ZSB0ZW5pbSAlU0FQX0lEJSBhIGxhIHVybCBzYXBGb3JtVVJMLCBhcXVlc3QgdmFsb3IgbGkgZmVtIHVuIHJlcGxhY2UgcGVyIGNvZGkgYWxsw6Agb24gbCd1dGlsaXR6ZW1cclxuICBzYXBGb3JtVVJMOiAnaHR0cHM6Ly9zYXBhYnEuYWdiYXIubG9jYWw6ODAwMS9zYXAvYmMvZ3VpL3NhcC9pdHMvd2ViZ3VpLyE/c2FwLWNsaWVudD01MjAmfnRyYW5zYWN0aW9uPUlFMDImUk02M0UtRVFVTlI9JVNBUF9JRCUmfm9rY29kZT0vMDAjJyxcclxuICBzZWFyY2hPcmlnaW5Vcmw6IFwiaHR0cHM6Ly9wcHBvcnRhbGdpcy5yZXBzb2wuY29tL2FyY2dpcy9yZXN0L3NlcnZpY2VzL0dQUy9STUxvZ2lzdGljYS9NYXBTZXJ2ZXIvMFwiLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBJRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50LmludGVyZmFjZSdcclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudE5leHVzOiBJRW52aXJvbm1lbnQgPSB7XHJcbiAgYmFja2VuZDogJyVBUElfU0lHQUJfVVJMJScsXHJcbiAgcG9ydGFsTG9nb3V0OiAnJUxPR09VVF9VUkwlJyxcclxuICBjb25maWdJbnRlcmNlcHRvckRpY3Q6IHt9LFxyXG4gIGdlb1Byb2Nlc3NDQURBY3Rpb246ICclR0VPUFJPQ0VTU19DQURfQUNUSU9OJScsXHJcbiAgZ2VvUHJvY2Vzc0NBRFVwbG9hZEZpbGU6ICclR0VPUFJPQ0VTU19DQURfVVBMT0FEJScsXHJcbiAgcGljY29sb0Zvcm1FbmRwb2ludDogJyVQSUNDT0xPX0ZPUk1fRU5EUE9JTlQlJyxcclxuICBwaWNjb2xvTGF5ZXJFbmRwb2ludDogJyVQSUNDT0xPX0xBWUVSX0VORFBPSU5UJScsXHJcbiAgc2FwRm9ybVVSTDogJyVTQVBfRk9STV9VUkwlJ1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBQZXJtaXNzaW9ucyA9IHtcclxuICAvL0VscyB1c2VyR3JvdXBzIGVucyBhcnJpYmVuIGRlbCBwb3J0YWxcclxuICB1c2VyR3JvdXBzOiB7XHJcbiAgICAvL2NvbmZpZyBwZXIgZGVmZWN0ZSBkZWwgd2lkZ2V0IGNlcmNhIChzZW5zZSByb2wgcXVlIGVsIGRlZmluaXhpKVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBDZXJjYToge1xyXG4gICAgICAgIHNvdXJjZXM6IFsnY2FycmVyZXInXSAvL1RvdHMgZWxzIHNvdXJjZXMgcSBsJ3VzZXIgcG9kcsOgIGZlciBzZXJ2aXJcclxuICAgICAgfSxcclxuICAgICAgJ1JlZC1saW5lJzoge31cclxuICAgIH0sXHJcbiAgICBxdWFsaWZpY2F0T3JnOiB7XHJcbiAgICAgIENlcmNhOiB7XHJcbiAgICAgICAgc291cmNlczogWydjYXJyZXJlcicsICdwb2xpc3NhJywgJ2FiYXN0YW1lbnQnLCAnc2FuZWphbWVudCcsICdjbGF2YWd1ZXJhbSddXHJcbiAgICAgIH0sXHJcbiAgICAgICdSZWQtbGluZSc6IHt9XHJcbiAgICB9LFxyXG4gICAgcXVhbGlmaWNhdFVuaXRhdDoge1xyXG4gICAgICBDZXJjYTogeyBzb3VyY2VzOiBbJ2NhcnJlcmVyJywgJ2FiYXN0YW1lbnQnXSwgYWN0aXZlczogWydhYmFzdGFtZW50J10gfSxcclxuICAgICAgJ1JlZC1saW5lJzoge31cclxuICAgIH0sXHJcbiAgICBvcGVyYWNpb25zOiB7XHJcbiAgICAgIENlcmNhOiB7XHJcbiAgICAgICAgc291cmNlczogWydjYXJyZXJlcicsICdwb2xpc3NhJywgJ2FiYXN0YW1lbnQnLCAnc2FuZWphbWVudCcsICdjbGF2YWd1ZXJhbSddXHJcbiAgICAgIH0sXHJcbiAgICAgICdSZWQtbGluZSc6IHt9XHJcbiAgICB9LFxyXG4gICAgcmVzdHJpbmdpdDoge1xyXG4gICAgICBDZXJjYTogbnVsbCwgLy9ObyB2ZXVyYW4gZWwgd2lkZ2V0LFxyXG4gICAgICAnUmVkLWxpbmUnOiBudWxsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgd2lkZ2V0Q29uZmlnczoge1xyXG4gICAgQ2VyY2E6IHtcclxuICAgICAgY2FycmVyZXI6IFsnQ2FycmVyZXInLCAnQ3J1w69sbGVzJ10sIC8vRWxzIHZhbG9ycyBjb3JyZXNwb25lbiBhbCBsYWJlbCBkZSBjYWRhIGRhdGFzb3VyY2UgdGFsIGNvbSBhcGFyZWl4IGFsIGZpdHhlciBjb25maWcuanNvbiBkZSBsJ2FwcFxyXG4gICAgICBwb2xpc3NhOiBbJ1DDsmxpc3NhIHJhbWFsJywgJ1DDsmxpc3NhIHN1Ym1pbmlzdHJhbWVudCddLFxyXG4gICAgICBhYmFzdGFtZW50OiBbJ0FiYXN0YW1lbnQnXSxcclxuICAgICAgc2FuZWphbWVudDogWydTYW5lamFtZW50J10sXHJcbiAgICAgIGNsYXZhZ3VlcmFtOiBbJ0NsYXZhZ3VlcmFtJ11cclxuICAgIH0sXHJcbiAgICAnV2lkZ2V0IGxhYmVsJzoge31cclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9lbnZpcm9ubWVudHMvcGVybWlzc2lvbnMnXHJcbmV4cG9ydCAqIGZyb20gJy4vZW52aXJvbm1lbnRzL2NvbnN0YW50cydcclxuZXhwb3J0ICogZnJvbSAnLi9lbnZpcm9ubWVudHMvZW51bXMnXHJcbmV4cG9ydCAqIGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LmludGVyZmFjZSdcclxuZXhwb3J0ICogZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQubG9jYWwnXHJcbmV4cG9ydCAqIGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnBybyciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=