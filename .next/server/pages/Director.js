(function() {
var exports = {};
exports.id = 370;
exports.ids = [370,279];
exports.modules = {

/***/ 6477:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7386);






const Director = ({
  data_header,
  director_data
}) => {
  var _director_data$data, _director_data$data$, _director_data$data2, _director_data$data$2, _director_data$data3, _director_data$data$3, _director_data$data$4, _director_data$data$5, _director_data$data4, _director_data$data$6;

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "about directer_media",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "info",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "director",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "directorinfo",
              sm: "8",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                  children: (director_data === null || director_data === void 0 ? void 0 : (_director_data$data = director_data.data) === null || _director_data$data === void 0 ? void 0 : _director_data$data.length) > 0 ? director_data === null || director_data === void 0 ? void 0 : (_director_data$data$ = director_data.data[1]) === null || _director_data$data$ === void 0 ? void 0 : _director_data$data$.message : "Director Message"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  style: {
                    fontSize: '1.05rem',
                    textAlign: 'justify'
                  },
                  children: (director_data === null || director_data === void 0 ? void 0 : (_director_data$data2 = director_data.data) === null || _director_data$data2 === void 0 ? void 0 : _director_data$data2.length) > 0 ? director_data === null || director_data === void 0 ? void 0 : (_director_data$data$2 = director_data.data[1]) === null || _director_data$data$2 === void 0 ? void 0 : _director_data$data$2.description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae libero risus. Donec interdum sapien 
                                                id hendrerit sodales. Sed mollis, quam vel laoreet aliquam, nisi est sodales ex, sit amet convallis diam
                                                orci sit amet urna. Maecenas ac quam malesuada, sagittis leo id, dignissim urna. Aliquam dapibus mi a
                                                c ex tempor aliquam. Praesent facilisis, sapien non pretium sagittis, leo leo tincidunt metus, at bibendum 
                                                nisl orci quis orci. Nullam vel tortor eu libero sagittis vestibulum eu at augue. Suspendisse commodo, nisl 
                                                nec blandit rutrum, purus neque tempus sapien, pulvinar pharetra ipsum arcu in justo. Nullam fringilla sem 
                                                arcu, vitae tempor urna auctor et. Proin euismod et leo convallis interdum.`
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "directorimg",
              sm: "4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "thennow",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: (director_data === null || director_data === void 0 ? void 0 : (_director_data$data3 = director_data.data) === null || _director_data$data3 === void 0 ? void 0 : _director_data$data3.length) > 0 ? director_data === null || director_data === void 0 ? void 0 : (_director_data$data$3 = director_data.data[1]) === null || _director_data$data$3 === void 0 ? void 0 : (_director_data$data$4 = _director_data$data$3.photo) === null || _director_data$data$4 === void 0 ? void 0 : (_director_data$data$5 = _director_data$data$4.data) === null || _director_data$data$5 === void 0 ? void 0 : _director_data$data$5.full_url : "/images/a1.jpg",
                  alt: "director",
                  style: {
                    width: "110%",
                    height: "350px"
                  }
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                  className: "text-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                    children: [" ", (director_data === null || director_data === void 0 ? void 0 : (_director_data$data4 = director_data.data) === null || _director_data$data4 === void 0 ? void 0 : _director_data$data4.length) > 0 ? director_data === null || director_data === void 0 ? void 0 : (_director_data$data$6 = director_data.data[1]) === null || _director_data$data$6 === void 0 ? void 0 : _director_data$data$6.full_name : "Demo Name", " "]
                  })
                })]
              })
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Director);
async function getStaticProps(context) {
  let data_header;

  try {
    const response = await fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/config?fields=*,logo.data.full_url`);
    data_header = await response.json();
  } catch (error) {
    data_header = false;
  } // ///////////////////////////// 


  let director_data;

  try {
    const response1 = await fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/faculty?status=published&fields=*.*`);
    director_data = await response1.json();
  } catch (error) {
    director_data = false;
  }

  return {
    props: {
      data_header,
      director_data
    },
    revalidate: 1 // will be passed to the page component as props

  };
}

/***/ }),

/***/ 887:
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 799:
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9614:
/***/ (function(module) {

"use strict";
module.exports = require("react-toast-notifications");;

/***/ }),

/***/ 9012:
/***/ (function(module) {

"use strict";
module.exports = require("react-toast-notifications/dist/ToastProvider");;

/***/ }),

/***/ 1067:
/***/ (function(module) {

"use strict";
module.exports = require("react-tooltip");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,610,665], function() { return __webpack_exec__(6477); });
module.exports = __webpack_exports__;

})();