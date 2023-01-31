(function() {
var exports = {};
exports.id = 398;
exports.ids = [398,279];
exports.modules = {

/***/ 5936:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2175);
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7386);





const Gallery = ({
  data_header,
  gallery_data
}) => {
  var _gallery_data$data;

  const slides = [{
    title: "/images/a1.jpg",
    description: 'View Gallery'
  }, {
    title: "/images/is8.jpg  ",
    description: 'View Gallery'
  }, {
    title: " /images/is9.jpg ",
    description: 'View Gallery'
  }, {
    title: "/images/is11.jpg  ",
    description: 'View Gallery'
  }, {
    title: " /images/is12.jpg ",
    description: 'View Gallery'
  }, {
    title: "/images/is14.jpg  ",
    description: 'View Gallery'
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_1__.SRLWrapper, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "container-fluid media_top",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mb-3 row",
            children: (gallery_data === null || gallery_data === void 0 ? void 0 : (_gallery_data$data = gallery_data.data) === null || _gallery_data$data === void 0 ? void 0 : _gallery_data$data.length) > 0 ? gallery_data === null || gallery_data === void 0 ? void 0 : gallery_data.data.map((item, i) => {
              var _item$photo, _item$photo$data;

              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-3 col-md-4 col-sm-6 ",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: item === null || item === void 0 ? void 0 : (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$data = _item$photo.data) === null || _item$photo$data === void 0 ? void 0 : _item$photo$data.full_url,
                  className: "mt-3 imght ",
                  alt: "no_img",
                  style: {
                    width: "100%",
                    height: "250px"
                  }
                })
              }, i);
            }) : slides.map((item, i) => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-3 col-md-4 col-sm-6",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                  src: item === null || item === void 0 ? void 0 : item.title,
                  className: "mt-3 imght ",
                  alt: "no_img",
                  style: {
                    width: "100%",
                    height: "250px"
                  }
                })
              }, i);
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);
async function getStaticProps(context) {
  let data_header;

  try {
    const response = await fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/config?fields=*,logo.data.full_url`);
    data_header = await response.json();
  } catch (error) {
    data_header = false;
  } /////////


  let gallery_data;

  try {
    const response1 = await fetch(`${"https://cms.schoolscoop.co.in"}/${"rukhmani"}/items/gallery?fields=*.*.*`);
    gallery_data = await response1.json();
  } catch (error) {
    gallery_data = false;
  }

  return {
    props: {
      data_header,
      gallery_data
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

/***/ 2175:
/***/ (function(module) {

"use strict";
module.exports = require("simple-react-lightbox");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,610,665], function() { return __webpack_exec__(5936); });
module.exports = __webpack_exports__;

})();