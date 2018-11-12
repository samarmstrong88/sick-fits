webpackHotUpdate("static\\development\\pages\\item.js",{

/***/ "./pages/item.js":
/*!***********************!*\
  !*** ./pages/item.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Item */ "./components/Item.js");
/* harmony import */ var _components_UpdateItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UpdateItem */ "./components/UpdateItem.js");
var _jsxFileName = "C:\\Projects\\Advanced-React\\sick-fits\\frontend\\pages\\item.js";





var item = function item(_ref) {
  var query = _ref.query;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1___default.a, {
    query: _components_UpdateItem__WEBPACK_IMPORTED_MODULE_3__["SINGLE_ITEM_QUERY"],
    variables: {
      id: query.id
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        loading = _ref2.loading;
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "temp"); // return <Item item={data.item} />;
  });
}; // const item = () => {
//   return <p>item</p>
// }


/* harmony default export */ __webpack_exports__["default"] = (item);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/item")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=item.js.101f748143662e98b46b.hot-update.js.map