"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["your-extensions_widgets_shared-code_environments_environment_local_ts"],{

/***/ "./your-extensions/widgets/shared-code/environments/environment.local.ts":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/shared-code/environments/environment.local.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3Mvc2hhcmVkLWNvZGVfZW52aXJvbm1lbnRzX2Vudmlyb25tZW50X2xvY2FsX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFTyxNQUFNLFdBQVcsR0FBaUI7SUFDdkMsT0FBTyxFQUFFLDhDQUE4QztJQUN2RCxZQUFZLEVBQUUsbUVBQW1FO0lBQ2pGLG1NQUFtTTtJQUNuTSxxQkFBcUIsRUFBRTtRQUNyQixrQ0FBa0MsRUFBRSxrQ0FBa0M7S0FDdkU7SUFDRCxtQkFBbUIsRUFBRSwwR0FBMEc7SUFDL0gsdUJBQXVCLEVBQUUseUdBQXlHO0lBQ2xJLG1CQUFtQixFQUFFLDBHQUEwRztJQUMvSCxvQkFBb0IsRUFBRSw2RkFBNkY7SUFFbkgsNEdBQTRHO0lBQzVHLFVBQVUsRUFBRSxnSUFBZ0k7SUFDNUksZUFBZSxFQUFFLGlGQUFpRjtDQUNuRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NoYXJlZC1jb2RlL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC5sb2NhbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50LmludGVyZmFjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQ6IElFbnZpcm9ubWVudCA9IHtcclxuICBiYWNrZW5kOiAnaHR0cHM6Ly9zaWdhYjIubmV4dXNnZW9ncmFmaWNzLmNvbS9hcGktc2lnYWInLFxyXG4gIHBvcnRhbExvZ291dDogJ2h0dHBzOi8vc3J2YXJjZ2lzZGV2Lm5leHVzZ2VvZ3JhZmljcy5jb20vcG9ydGFsL2hvbWUvZ2FsbGVyeS5odG1sJyxcclxuICAvL1RvdGEgY29uZmlndXJhY2nDsyBkZSB3aWRnZXQgKGRhdGFzb3VyY2VzKSBzZXLDoCBkaWZlcmVudCBhIGNhZGEgZW50b3JuLiBFbiBhcXVlc3QgZGljY2lvbmFyaSBoaSBoYXVyw6AgdG90ZXMgbGVzIHRyYWR1Y2Npb25zIHF1ZSBjYWxkcsOgLHAuZXg6Q2FudmlhciBsJ2l0ZW1pZCBkZSB3ZWJtYXBzLHVybCBkZSBzZXJ2ZWlzIGRlIG1hcGEsZXRjXHJcbiAgY29uZmlnSW50ZXJjZXB0b3JEaWN0OiB7XHJcbiAgICBcIjMzMTgyY2M0ZTdjOTQ5ZmJiYzQzNjQ0MDc3NmM0ZmQ4XCI6IFwiMzMxODJjYzRlN2M5NDlmYmJjNDM2NDQwNzc2YzRmZDhcIlxyXG4gIH0sXHJcbiAgZ2VvUHJvY2Vzc0NBREFjdGlvbjogJ2h0dHBzOi8vYXBpZGVzLmFpZ3Vlc2RlYmFyY2Vsb25hLmNhdC9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9TSUdBQi9FeHBvcnRDQUR0b0pTT04vR1BTZXJ2ZXIvRXhwb3J0Q0FEdG9KU09OJyxcclxuICBnZW9Qcm9jZXNzQ0FEVXBsb2FkRmlsZTogJ2h0dHBzOi8vYXBpZGVzLmFpZ3Vlc2RlYmFyY2Vsb25hLmNhdC9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9TSUdBQi9FeHBvcnRDQUR0b0pTT04vR1BTZXJ2ZXIvdXBsb2Fkcy91cGxvYWQnLFxyXG4gIHBpY2NvbG9Gb3JtRW5kcG9pbnQ6ICdodHRwczovL2FwaWRlcy5haWd1ZXNkZWJhcmNlbG9uYS5jYXQvc2VydmVyL3Jlc3Qvc2VydmljZXMvU0lHQUIvUGljY29sb19hcmVlcy9GZWF0dXJlU2VydmVyLzAvYXBwbHlFZGl0cycsXHJcbiAgcGljY29sb0xheWVyRW5kcG9pbnQ6ICdodHRwczovL2FwaWRlcy5haWd1ZXNkZWJhcmNlbG9uYS5jYXQvc2VydmVyL3Jlc3Qvc2VydmljZXMvU0lHQUIvUGljY29sb19hcmVlcy9GZWF0dXJlU2VydmVyJyxcclxuXHJcbiAgLy8gTm90ZW0gcXVlIHRlbmltICVTQVBfSUQlIGEgbGEgdXJsIHNhcEZvcm1VUkwsIGFxdWVzdCB2YWxvciBsaSBmZW0gdW4gcmVwbGFjZSBwZXIgY29kaSBhbGzDoCBvbiBsJ3V0aWxpdHplbVxyXG4gIHNhcEZvcm1VUkw6ICdodHRwczovL3NhcGFicS5hZ2Jhci5sb2NhbDo4MDAxL3NhcC9iYy9ndWkvc2FwL2l0cy93ZWJndWkvIT9zYXAtY2xpZW50PTUyMCZ+dHJhbnNhY3Rpb249SUUwMiZSTTYzRS1FUVVOUj0lU0FQX0lEJSZ+b2tjb2RlPS8wMCMnLFxyXG4gIHNlYXJjaE9yaWdpblVybDogXCJodHRwczovL3BwcG9ydGFsZ2lzLnJlcHNvbC5jb20vYXJjZ2lzL3Jlc3Qvc2VydmljZXMvR1BTL1JNTG9naXN0aWNhL01hcFNlcnZlci8wXCIsXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==