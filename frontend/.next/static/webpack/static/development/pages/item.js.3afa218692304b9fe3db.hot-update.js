webpackHotUpdate("static\\development\\pages\\item.js",{

/***/ "./pages/item.js":
/*!***********************!*\
  !*** ./pages/item.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Item */ "./components/Item.js");
/* harmony import */ var _components_UpdateItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UpdateItem */ "./components/UpdateItem.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Projects\\Advanced-React\\sick-fits\\frontend\\pages\\item.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var item =
/*#__PURE__*/
function (_Component) {
  _inherits(item, _Component);

  function item() {
    _classCallCheck(this, item);

    return _possibleConstructorReturn(this, _getPrototypeOf(item).apply(this, arguments));
  }

  _createClass(item, [{
    key: "render",
    value: function render() {
      console.log(this.props.query.id);
      return (// <p>nothing</p>
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_0___default.a, {
          query: _components_UpdateItem__WEBPACK_IMPORTED_MODULE_2__["SINGLE_ITEM_QUERY"],
          variables: {
            id: this.props.query.id
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, function (_ref) {
          var data = _ref.data,
              loading = _ref.loading;
          // console.log(data);
          // <p>temp</p>
          if (!data.item) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }, "No item found for id ");
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
            item: data.item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          });
        }, ";")
      );
    }
  }]);

  return item;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]); // const item = () => {
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
//# sourceMappingURL=item.js.3afa218692304b9fe3db.hot-update.js.map