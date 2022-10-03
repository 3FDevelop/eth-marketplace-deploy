"use strict";
(() => {
var exports = {};
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 1637:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1757);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal__WEBPACK_IMPORTED_MODULE_0__]);
_modal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1757:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OrderModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2041);
/* harmony import */ var _components_ui_comon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(285);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__, _components_ui_comon__WEBPACK_IMPORTED_MODULE_2__]);
([_components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__, _components_ui_comon__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const defaultOrder = {
    price: "",
    email: "",
    confirmationEmail: ""
};
const _createFormState = (isDisabled = false, message = "")=>({
        isDisabled,
        message
    });
const createFormState = ({ price , email , confirmationEmail  }, hasAgreedTOS, isNewPurchase)=>{
    if (!price || Number(price) <= 0) {
        return _createFormState(true, "Price is not valid.");
    }
    if (isNewPurchase) {
        if (confirmationEmail.length === 0 || email.length === 0) {
            return _createFormState(true);
        } else if (email !== confirmationEmail) {
            return _createFormState(true, "Email are not matching.");
        }
    } else if (!hasAgreedTOS) {
        return _createFormState(true, "You need to accept terms of service.");
    }
    return _createFormState();
};
function OrderModal({ course , onClose , onSubmit , isNewPurchase  }) {
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: order , 1: setOrder  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultOrder);
    const { 0: enablePrice , 1: setEnablePrice  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: hasAgreedTOS , 1: setHasAgreedTos  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { eth  } = (0,_components_hooks_useEthPrice__WEBPACK_IMPORTED_MODULE_1__/* .useEthPrice */ .B)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!!course) {
            setIsOpen(true);
            setOrder({
                ...defaultOrder,
                price: eth.perItem
            });
        }
    }, [
        course
    ]);
    const closeModal = ()=>{
        setIsOpen(false);
        setOrder(defaultOrder);
        setHasAgreedTos(false);
        setEnablePrice(false);
        onClose();
    };
    const formState = createFormState(order, hasAgreedTOS, isNewPurchase);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Modal */ .u_, {
        isOpen: isOpen,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sm:flex sm:items-start",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-3 sm:mt-0 sm:ml-4 sm:text-left",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "mb-7 text-lg font-bold leading-6 text-gray-900",
                                    id: "modal-title",
                                    children: course.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-1 relative rounded-md",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    className: "mb-2 font-bold",
                                                    children: "Price(eth)"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-xs text-gray-700 flex",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            className: "flex items-center mr-2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                onChange: ({ target: { checked  }  })=>{
                                                                    setOrder({
                                                                        ...order,
                                                                        price: checked ? order.price : eth.perItem
                                                                    });
                                                                    setEnablePrice(checked);
                                                                },
                                                                checked: enablePrice,
                                                                type: "checkbox",
                                                                className: "form-checkbox"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Adjust Price - only when the price is not correct"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            disabled: !enablePrice,
                                            onChange: ({ target: { value  }  })=>{
                                                if (isNaN(value)) {
                                                    return;
                                                } else {
                                                    setOrder({
                                                        ...order,
                                                        price: value
                                                    });
                                                }
                                            },
                                            value: order.price,
                                            type: "text",
                                            name: "price",
                                            id: "price",
                                            className: "disabled:opacity-50 w-80 mb-1 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xs text-gray-700",
                                            children: "Price will be verified at the time of the order. If the price will be lower, order can be declined (+- 2% slipage is allowed)"
                                        })
                                    ]
                                }),
                                isNewPurchase && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-2 relative rounded-md",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mb-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "mb-2 font-bold",
                                                        children: "Email"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    onChange: ({ target: { value  }  })=>{
                                                        setOrder({
                                                            ...order,
                                                            email: value.trim()
                                                        });
                                                    },
                                                    value: order.email,
                                                    type: "email",
                                                    name: "email",
                                                    id: "email",
                                                    className: "w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md",
                                                    placeholder: "x@y.com"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs text-gray-700 mt-1",
                                                    children: "It's important to fill a correct email, otherwise the order cannot be verified. We are not storing your email anywhere"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "my-2 relative rounded-md",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mb-1",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        className: "mb-2 font-bold",
                                                        children: "Repeat Email"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    onChange: ({ target: { value  }  })=>{
                                                        setOrder({
                                                            ...order,
                                                            confirmationEmail: value.trim()
                                                        });
                                                    },
                                                    value: order.confirmationEmail,
                                                    type: "email",
                                                    name: "confirmationEmail",
                                                    id: "confirmationEmail",
                                                    className: "w-80 focus:ring-indigo-500 shadow-md focus:border-indigo-500 block pl-7 p-4 sm:text-sm border-gray-300 rounded-md",
                                                    placeholder: "x@y.com"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-xs text-gray-700 flex mt-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "flex items-center mr-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                checked: hasAgreedTOS,
                                                onChange: ({ target: { checked  }  })=>{
                                                    setHasAgreedTos(checked);
                                                },
                                                type: "checkbox",
                                                className: "form-checkbox"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "I accept Eincode 'terms of service' and I agree that my order can be rejected in the case data provided above are not correct"
                                        })
                                    ]
                                }),
                                formState.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "p-4 my-3 text-red-700 bg-red-200 rounded-lg text-sm",
                                    children: formState.message
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                            disabled: formState.isDisabled,
                            onClick: ()=>{
                                onSubmit(order, course);
                            },
                            children: "Submit"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                            onClick: closeModal,
                            variant: "red",
                            children: "Cancel"
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Marketplace),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2445);
/* harmony import */ var _components_ui_comon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(285);
/* harmony import */ var _components_ui_course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3424);
/* harmony import */ var _content_courses_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5537);
/* harmony import */ var _components_ui_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1637);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ui_marketplace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1577);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4853);
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2881);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__, _components_ui_comon__WEBPACK_IMPORTED_MODULE_2__, _components_ui_course__WEBPACK_IMPORTED_MODULE_3__, _components_ui_order__WEBPACK_IMPORTED_MODULE_5__, _components_ui_marketplace__WEBPACK_IMPORTED_MODULE_7__, _components_providers__WEBPACK_IMPORTED_MODULE_8__, _utils_toast__WEBPACK_IMPORTED_MODULE_9__]);
([_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__, _components_ui_comon__WEBPACK_IMPORTED_MODULE_2__, _components_ui_course__WEBPACK_IMPORTED_MODULE_3__, _components_ui_order__WEBPACK_IMPORTED_MODULE_5__, _components_ui_marketplace__WEBPACK_IMPORTED_MODULE_7__, _components_providers__WEBPACK_IMPORTED_MODULE_8__, _utils_toast__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Marketplace({ courses  }) {
    const { 0: selectedCourse , 1: setSelectedCourse  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const { 0: isNewPurchase , 1: setIsNewPurchase  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
    const { 0: busyCourse , 1: setBusyCourse  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const { web3 , contract , requireInstall  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_8__/* .useWeb3 */ .$)();
    const { isConnecting , hasConnectedWallet , account , network  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__/* .useWalletInfo */ .vL)();
    const { ownedCourses  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_1__/* .useOwnedCourses */ .Ce)(courses, account.data, network.data);
    const purchaseCourse = async (order, course)=>{
        const hexCourseId = web3.utils.utf8ToHex(course.id);
        const orderHash = web3.utils.soliditySha3({
            type: "bytes16",
            value: hexCourseId
        }, {
            type: "address",
            value: account.data
        });
        const value = web3.utils.toWei(String(order.price));
        setBusyCourse(course.id);
        if (isNewPurchase) {
            const emailHash = web3.utils.sha3(order.email);
            const proof = web3.utils.soliditySha3({
                type: "bytes32",
                value: emailHash
            }, {
                type: "bytes32",
                value: orderHash
            });
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_9__/* .withToast */ .f)(_purchaseCourse({
                hexCourseId,
                proof,
                value
            }, course));
        } else {
            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_9__/* .withToast */ .f)(_repurchaseCourse({
                courseHash: orderHash,
                value
            }, course));
        }
    };
    const _purchaseCourse = async ({ hexCourseId , proof , value  }, course)=>{
        try {
            const result = await contract.methods.purchaseCourse(hexCourseId, proof).send({
                from: account.data,
                value
            });
            ownedCourses.mutate([
                ...ownedCourses.data,
                {
                    ...course,
                    proof,
                    state: "purchase",
                    owner: account.data,
                    price: value
                }
            ]);
            return result;
        } catch (e) {
            throw new Error(e.message);
        } finally{
            setBusyCourse(null);
        }
    };
    const _repurchaseCourse = async ({ courseHash , value  }, course)=>{
        try {
            const result = await contract.methods.repurchaseCourse(courseHash).send({
                from: account.data,
                value
            });
            const index = ownedCourses.data.findIndex((c)=>c.id === course.id);
            if (index >= 0) {
                ownedCourses.data[index].state = "purchased";
                ownedCourses.mutate(ownedCourses.data);
            } else {
                ownedCourses.mutate();
            }
            return result;
        } catch (e) {
            throw new Error(e.message);
        } finally{
            setBusyCourse(null);
        }
    };
    const cleanupModal = ()=>{
        setSelectedCourse(null);
        setIsNewPurchase(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_marketplace__WEBPACK_IMPORTED_MODULE_7__/* .MarketHeader */ .Y, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_course__WEBPACK_IMPORTED_MODULE_3__/* .CourseList */ .cQ, {
                courses: courses,
                children: (course)=>{
                    const owned = ownedCourses.lookup[course.id];
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_course__WEBPACK_IMPORTED_MODULE_3__/* .CourseCard */ .Pg, {
                        course: course,
                        state: owned?.state,
                        disabled: !hasConnectedWallet,
                        Footer: ()=>{
                            if (requireInstall) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                    size: "sm",
                                    disabled: true,
                                    variant: "lightPurple",
                                    children: "Install"
                                });
                            }
                            if (isConnecting) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                    size: "sm",
                                    disabled: true,
                                    variant: "lightPurple",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Loader */ .aN, {
                                        size: "sm"
                                    })
                                });
                            }
                            if (!ownedCourses.hasInitialResponse) {
                                return(// <div style={{height: "42px"}}></div>
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                    size: "sm",
                                    disabled: true,
                                    children: hasConnectedWallet ? "Loading State..." : "Connect"
                                }));
                            }
                            const isBusy = busyCourse === course.id;
                            if (owned) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                                size: "sm",
                                                onClick: ()=>alert("You are owner of this course."),
                                                disabled: false,
                                                variant: "green",
                                                children: "Yours ✔"
                                            }),
                                            owned.state === "deactivated" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "ml-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                                    size: "sm",
                                                    disabled: false,
                                                    onClick: ()=>{
                                                        setIsNewPurchase(false);
                                                        setSelectedCourse(course);
                                                    },
                                                    variant: "purple",
                                                    children: isBusy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Loader */ .aN, {
                                                                size: "sm"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "ml-2",
                                                                children: "In progress"
                                                            })
                                                        ]
                                                    }) : "Fund to Activate"
                                                })
                                            })
                                        ]
                                    })
                                });
                            }
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                size: "sm",
                                onClick: ()=>setSelectedCourse(course),
                                disabled: !hasConnectedWallet,
                                variant: "lightPurple",
                                children: isBusy ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Loader */ .aN, {
                                            size: "sm"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "ml-2",
                                            children: "In progress"
                                        })
                                    ]
                                }) : "Purchase"
                            });
                        }
                    }, course.id);
                }
            }),
            selectedCourse && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_order__WEBPACK_IMPORTED_MODULE_5__/* .OrderModal */ .h, {
                isNewPurchase: isNewPurchase,
                onSubmit: (formData, course)=>{
                    purchaseCourse(formData, course);
                    cleanupModal();
                },
                course: selectedCourse,
                onClose: cleanupModal
            })
        ]
    });
}
function getStaticProps() {
    const { data  } = (0,_content_courses_fetcher__WEBPACK_IMPORTED_MODULE_4__/* .getAllCourses */ .V)();
    return {
        props: {
            courses: data
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

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,285,424,537,577,881], () => (__webpack_exec__(9818)));
module.exports = __webpack_exports__;

})();