"use strict";
(() => {
var exports = {};
exports.id = 355;
exports.ids = [355];
exports.modules = {

/***/ 5333:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Course),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_comon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(285);
/* harmony import */ var _components_ui_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3424);
/* harmony import */ var content_courses_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5537);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2445);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4853);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_comon__WEBPACK_IMPORTED_MODULE_1__, _components_ui_course__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_4__, _components_providers__WEBPACK_IMPORTED_MODULE_5__]);
([_components_ui_comon__WEBPACK_IMPORTED_MODULE_1__, _components_ui_course__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_4__, _components_providers__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Course({ course  }) {
    const { isLoading  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_5__/* .useWeb3 */ .$)();
    const { account  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_4__/* .useAccount */ .mA)();
    const { ownedCourse  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_4__/* .useOwnedCourse */ .L2)(course, account.data);
    const courseState = ownedCourse.data?.state;
    const isLocked = !courseState || courseState === "purchased" || courseState === "deactivated";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_course__WEBPACK_IMPORTED_MODULE_2__/* .CourseHero */ .FP, {
                    hasOwner: !!ownedCourse.data,
                    title: course.title,
                    description: course.description,
                    image: course.coverImage
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_course__WEBPACK_IMPORTED_MODULE_2__/* .Keypoints */ .Zb, {
                points: course.wsl
            }),
            courseState && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-5xl mx-auto",
                children: [
                    courseState === "purchased" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_comon__WEBPACK_IMPORTED_MODULE_1__/* .Message */ .v0, {
                        type: "success",
                        children: [
                            "Course is purchased and waiting for the activations. Process may take up 24 hours.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "block font-normal",
                                children: "In case of any questions, please contact info@3fdevelop.com"
                            })
                        ]
                    }),
                    courseState === "activated" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_1__/* .Message */ .v0, {
                        type: "success",
                        children: "3F wishes you happy waiting of the course."
                    }),
                    courseState === "deactivated" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_comon__WEBPACK_IMPORTED_MODULE_1__/* .Message */ .v0, {
                        type: "danger",
                        children: [
                            "Course has been deactivated, due the incorrect purchase data. The functionality to wath the course has been temporaly disabled.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "block font-normal",
                                children: "In case of any questions, please contact info@3fdevelop.com"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_course__WEBPACK_IMPORTED_MODULE_2__/* .Curriculum */ .NX, {
                isLoading: isLoading,
                locked: isLocked,
                courseState: courseState
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_1__/* .Modal */ .u_, {})
        ]
    });
}
function getStaticPaths() {
    const { data  } = (0,content_courses_fetcher__WEBPACK_IMPORTED_MODULE_3__/* .getAllCourses */ .V)();
    return {
        paths: data.map((c)=>({
                params: {
                    slug: c.slug
                }
            })),
        fallback: false
    };
}
function getStaticProps({ params  }) {
    const { data  } = (0,content_courses_fetcher__WEBPACK_IMPORTED_MODULE_3__/* .getAllCourses */ .V)();
    const course = data.filter((c)=>c.slug === params.slug)[0];
    return {
        props: {
            course
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3427:
/***/ ((module) => {

module.exports = require("@metamask/detect-provider");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5690:
/***/ ((module) => {

module.exports = require("react-simple-animate");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,285,424,537], () => (__webpack_exec__(5333)));
module.exports = __webpack_exports__;

})();