exports.id = "main";
exports.modules = {

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nodegui/react-nodegui */ "./node_modules/@nodegui/react-nodegui/dist/index.js");
/* harmony import */ var _nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const minSize = {
  width: 500,
  height: 600
};

const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["Window"], {
    styleSheet: styleSheet,
    minSize: minSize,
    windowTitle: "Calculator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["View"], {
    id: "rootView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["View"], {
    id: "label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["View"], {
    id: "calBtn"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["View"], {
    id: "calBtn"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["View"], {
    id: "calBtn"
  })));
};

const styleSheet = `
  #rootView{
    height: '100%';
    background-color: blue;
  }

  #label {
    background-color: white;
    flex: 1;
  }

  #calBtn {
    background-color: #222;
    flex: 1;
  }
`;
_nodegui_react_nodegui__WEBPACK_IMPORTED_MODULE_0__["Renderer"].render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, null));

/***/ })

};
//# sourceMappingURL=main.43520cdf0e61fd4c22ea.hot-update.js.map