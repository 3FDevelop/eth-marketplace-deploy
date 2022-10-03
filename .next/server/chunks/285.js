"use strict";
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 2445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aj": () => (/* binding */ useAdmin),
/* harmony export */   "Ce": () => (/* binding */ useOwnedCourses),
/* harmony export */   "J$": () => (/* binding */ useManagedCourses),
/* harmony export */   "L2": () => (/* binding */ useOwnedCourse),
/* harmony export */   "mA": () => (/* binding */ useAccount),
/* harmony export */   "vL": () => (/* binding */ useWalletInfo)
/* harmony export */ });
/* unused harmony export useNetwork */
/* harmony import */ var _components_providers_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__]);
_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const _isEmpty = (data)=>{
    return data == null || data === "" || Array.isArray(data) && data.length === 0 || data.constructor === Object && Object.keys(data).length === 0;
};
const enhanceHook = (swrRes)=>{
    const { data , error  } = swrRes;
    const hasInitialResponse = !!(data || error);
    const isEmpty = hasInitialResponse && _isEmpty(data);
    return {
        ...swrRes,
        isEmpty,
        hasInitialResponse
    };
};
const useNetwork = ()=>{
    const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)((hooks)=>hooks.useNetwork)());
    return {
        network: swrRes
    };
};
const useAccount = ()=>{
    const swrRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)((hooks)=>hooks.useAccount)());
    return {
        account: swrRes
    };
};
const useAdmin = ({ redirectTo  })=>{
    const { account  } = useAccount();
    const { requireInstall  } = (0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3 */ .$6)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (requireInstall || account.hasInitialResponse && !account.isAdmin || account.isEmpty) {
            next_router__WEBPACK_IMPORTED_MODULE_1___default().push(`${redirectTo}`);
        }
    }, [
        account
    ]);
    return {
        account
    };
};
const useOwnedCourses = (...args)=>{
    const sweRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)((hooks)=>hooks.useOwnedCourses)(...args));
    return {
        ownedCourses: sweRes
    };
};
const useManagedCourses = (...args)=>{
    const sweRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)((hooks)=>hooks.useManagedCourses)(...args));
    return {
        managedCourses: sweRes
    };
};
const useOwnedCourse = (...args)=>{
    const sweRes = enhanceHook((0,_components_providers_web3__WEBPACK_IMPORTED_MODULE_0__/* .useHooks */ .xn)((hooks)=>hooks.useOwnedCourse)(...args));
    return {
        ownedCourse: sweRes
    };
};
const useWalletInfo = ()=>{
    const { account  } = useAccount();
    const { network  } = useNetwork();
    const hasConnectedWallet = !!(account.data && network.isSupported);
    const isConnecting = !account.hasInitialResponse && !network.hasInitialResponse;
    return {
        account,
        network,
        isConnecting,
        hasConnectedWallet
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4853:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$6),
/* harmony export */   "Q": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.ZP)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3__WEBPACK_IMPORTED_MODULE_0__]);
_web3__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ setupHooks)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1700);
/* harmony import */ var _useNetwork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8233);
/* harmony import */ var _useOwnedCourses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(432);
/* harmony import */ var _useOwnedCourse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9822);
/* harmony import */ var _useManagedCourses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(274);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useAccount__WEBPACK_IMPORTED_MODULE_0__, _useNetwork__WEBPACK_IMPORTED_MODULE_1__, _useOwnedCourses__WEBPACK_IMPORTED_MODULE_2__, _useOwnedCourse__WEBPACK_IMPORTED_MODULE_3__, _useManagedCourses__WEBPACK_IMPORTED_MODULE_4__]);
([_useAccount__WEBPACK_IMPORTED_MODULE_0__, _useNetwork__WEBPACK_IMPORTED_MODULE_1__, _useOwnedCourses__WEBPACK_IMPORTED_MODULE_2__, _useOwnedCourse__WEBPACK_IMPORTED_MODULE_3__, _useManagedCourses__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const setupHooks = ({ web3 , provider , contract  })=>{
    return {
        useAccount: (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .handler */ .y)(web3, provider),
        useNetwork: (0,_useNetwork__WEBPACK_IMPORTED_MODULE_1__/* .handler */ .y)(web3),
        useOwnedCourses: (0,_useOwnedCourses__WEBPACK_IMPORTED_MODULE_2__/* .handler */ .y)(web3, contract),
        useOwnedCourse: (0,_useOwnedCourse__WEBPACK_IMPORTED_MODULE_3__/* .handler */ .y)(web3, contract),
        useManagedCourses: (0,_useManagedCourses__WEBPACK_IMPORTED_MODULE_4__/* .handler */ .y)(web3, contract)
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1700:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Keccak256
const adminAddresses = {
    "0x3a6bb78bd1ebc1f72756683c26d3a3eabd96f59a117525655b476f8e4885f587": true,
    "0xd6a27e982613e5fe88b10af0aaeb92a435389371c4ccd8e5301d42158a0bde9c": true
};
const handler = (web3, provider)=>()=>{
        const { data , mutate , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>web3 ? "web3/accounts" : null, async ()=>{
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];
            if (!account) {
                throw new Error("Cannot retrieve an account. Please refresh the browser");
            }
            return accounts[0];
        });
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
            const mutator = (accounts)=>mutate(accounts[0] ?? null);
            provider?.on("accountsChanged", mutator);
            return ()=>{
                provider?.removeListener("accountsChanged", mutator);
            };
        }, [
            provider
        ]);
        return {
            data,
            isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
            mutate,
            ...rest
        };
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const handler = (web3, contract)=>(account)=>{
        const swrRes = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(()=>web3 && contract && account.data && account.isAdmin ? `web3/manageCourses/${account.data}` : null, async ()=>{
            const courses = [];
            const courseCount = await contract.methods.getCourseCount().call();
            for(let i = Number(courseCount) - 1; i >= 0; i--){
                const courseHash = await contract.methods.getCourseHashAtIndex(i).call();
                const course = await contract.methods.getCourseByHash(courseHash).call();
                if (course) {
                    courses.push((0,_utils_normalize__WEBPACK_IMPORTED_MODULE_1__/* .normalizeOwnedCourse */ .h)(web3)({
                        hash: courseHash
                    }, course));
                }
            }
            return courses;
        });
        return swrRes;
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);
swr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const NETWORKS = {
    1: "Ethereum Main Network",
    3: "Ropsten Test Network",
    4: "Rinkeby Test Network",
    5: "Goerli Test Network",
    42: "Kovan Test Network",
    56: "Binance Smart Chain",
    1337: "Ganache"
};
const targetNetwork = NETWORKS["3"];
const handler = (web3)=>()=>{
        const { data , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_1__["default"])(()=>web3 ? "web3/network" : null, async ()=>{
            const chainId = await web3.eth.getChainId();
            if (!chainId) {
                throw new Error("Cannot retrieve network. Please refresh the browser.");
            }
            return NETWORKS[chainId];
        });
        return {
            data,
            targetNetwork: targetNetwork,
            isSupported: data == targetNetwork,
            ...rest
        };
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(413);
/* harmony import */ var _utils_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1582);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const handler = (web3, contract)=>(course, account)=>{
        const swrRes = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(()=>web3 && contract && account ? `web3/ownedCourse/${account}` : null, async ()=>{
            const courseHash = (0,_utils_hash__WEBPACK_IMPORTED_MODULE_2__/* .createCourseHash */ .i)(web3)(course.id, account);
            const ownedCourse = await contract.methods.getCourseByHash(courseHash).call();
            if (ownedCourse.owner === "0x0000000000000000000000000000000000000000") {
                return null;
            }
            return (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_1__/* .normalizeOwnedCourse */ .h)(web3)(course, ownedCourse);
        });
        return swrRes;
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 432:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5941);
/* harmony import */ var _utils_normalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(413);
/* harmony import */ var _utils_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1582);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);
swr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const handler = (web3, contract)=>(courses, account)=>{
        const swrRes = (0,swr__WEBPACK_IMPORTED_MODULE_0__["default"])(()=>web3 && contract && account ? `web3/ownedCourses/${account}` : null, async ()=>{
            const ownedCourses = [];
            for(let i = 0; i < courses.length; i++){
                const course = courses[i];
                if (!course.id) {
                    continue;
                }
                const courseHash = (0,_utils_hash__WEBPACK_IMPORTED_MODULE_2__/* .createCourseHash */ .i)(web3)(course.id, account);
                const ownedCourse = await contract.methods.getCourseByHash(courseHash).call();
                if (ownedCourse.owner !== "0x0000000000000000000000000000000000000000") {
                    const normalized = (0,_utils_normalize__WEBPACK_IMPORTED_MODULE_1__/* .normalizeOwnedCourse */ .h)(web3)(course, ownedCourse);
                    ownedCourses.push(normalized);
                }
            }
            return ownedCourses;
        });
        return {
            ...swrRes,
            lookup: swrRes.data?.reduce((a, c)=>{
                a[c.id] = c;
                return a;
            }, {}) ?? {}
        };
    };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$6": () => (/* binding */ useWeb3),
/* harmony export */   "ZP": () => (/* binding */ Web3Provider),
/* harmony export */   "xn": () => (/* binding */ useHooks)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_loadContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8520);
/* harmony import */ var _hooks_setupHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3247);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3427);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_setupHooks__WEBPACK_IMPORTED_MODULE_1__]);
_hooks_setupHooks__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const { createContext , useContext , useEffect , useState , useMemo  } = __webpack_require__(6689);




const Web3Context = createContext(null);
function createWeb3State({ web3 , provider , contract , isLoading  }) {
    return {
        web3,
        provider,
        contract,
        isLoading,
        hooks: (0,_hooks_setupHooks__WEBPACK_IMPORTED_MODULE_1__/* .setupHooks */ .b)({
            web3,
            provider,
            contract
        })
    };
}
const setListeners = (provider)=>{
    provider.on("chainChanged", (_)=>window.location.reload());
};
function Web3Provider({ children  }) {
    const [web3Api, setWeb3Api] = useState(createWeb3State({
        web3: null,
        provider: null,
        contract: null,
        isLoading: true
    }));
    useEffect(()=>{
        const loadProvider = async ()=>{
            const provider = await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_2___default()();
            if (provider) {
                const web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(provider);
                const contract = await (0,_utils_loadContract__WEBPACK_IMPORTED_MODULE_4__/* .loadContract */ .U)("CourseMarketplace", web3);
                setListeners(provider);
                setWeb3Api(createWeb3State({
                    web3,
                    provider,
                    contract,
                    isLoading: false
                }));
            } else {
                setWeb3Api((api)=>({
                        ...api,
                        isLoading: false
                    }));
                console.log("Please, install Metamask");
            }
        };
        loadProvider();
    }, []);
    const _web3Api = useMemo(()=>{
        const { web3 , provider , isLoading  } = web3Api;
        return {
            ...web3Api,
            requireInstall: !isLoading && !web3,
            connect: provider ? async ()=>{
                try {
                    await provider.request({
                        method: "eth_requestAccounts"
                    });
                } catch (error) {
                    location.reload();
                }
            } : ()=>console.error("Cannot connect to MetaMask, try to reload your browser please!")
        };
    }, [
        web3Api
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Web3Context.Provider, {
        value: _web3Api,
        children: children
    });
}
function useWeb3() {
    return useContext(Web3Context);
}
function useHooks(cb) {
    const { hooks  } = useWeb3();
    return cb(hooks);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Breadcrumb)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_comon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(285);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_comon__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_comon__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Breadcrumb({ items , isAdmin  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        "aria-label": "breadcrumb",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
            className: "flex leading-none text-gray-600 justify-end divide-x ",
            children: items.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                    children: [
                        !item.requireAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: `${i == 0 ? "pr-4" : "px-4"} hover:text-gray-900`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_1__/* .ActiveLink */ .O$, {
                                href: item.href,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: item.value
                                })
                            })
                        }),
                        item.requireAdmin && isAdmin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: `${i == 0 ? "pr-4" : "px-4"} hover:text-gray-900`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_1__/* .ActiveLink */ .O$, {
                                href: item.href,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: item.value
                                })
                            })
                        })
                    ]
                }, item.href))
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Button({ children , className , hoverable =true , variant ="purple" , size ="md" , ...rest }) {
    const variants = {
        white: `text-black bg-white`,
        purple: `text-white bg-indigo-600 ${hoverable && "hover:bg-indigo-700"}`,
        lightPurple: `text-indigo-700 bg-indigo-100 ${hoverable && "hover:bg-indigo-200"}`,
        red: `text-white bg-red-600 ${hoverable && "hover:bg-red-700"}`,
        green: `text-white bg-green-600 ${hoverable && "hover:bg-indigo-700"}`
    };
    const SIZE = {
        sm: "p-2 text-base xs:px-4",
        md: "p-3 text-base xs:px-8",
        lg: "p-3 text-lg xs:px-8"
    };
    const sizeClass = SIZE[size];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...rest,
        className: `${sizeClass} disabled:opacity-50 disabled:cursor-not-allowed xs:px-8 xs:py-3 p-2 border rounded-md text-base font-medium ${className} ${variants[variant]}`,
        children: children
    });
}


/***/ }),

/***/ 7976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-gray-900 pt-1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container mx-auto px-6",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-5 flex flex-col items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-6",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mb-6 text-white text-sm text-primary-2 font-bold",
                        children: [
                            "\xa9 ",
                            new Date().getFullYear(),
                            " Eincode"
                        ]
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 1689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Hero() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "lg:2/6 text-left my-28",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-6xl font-semibold text-gray-900 leading-none",
                children: "Grow your career as a developer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-6 text-xl font-light text-true-gray-500 antialiased",
                children: "Learn programming and web development the easy way! Get unlimited access to all of our courses."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-5 sm:mt-8 flex lg:justify-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "rounded-md shadow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10",
                        children: "Get started"
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "O$": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "Oo": () => (/* reexport safe */ _breadcrumbs__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "VM": () => (/* reexport safe */ _hero__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "aN": () => (/* reexport safe */ _loader__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "u_": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "v0": () => (/* reexport safe */ _message__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "wp": () => (/* reexport safe */ _navbar__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "zx": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7976);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3708);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1689);
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5870);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2371);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6721);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(638);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(747);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3568);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_navbar__WEBPACK_IMPORTED_MODULE_1__, _breadcrumbs__WEBPACK_IMPORTED_MODULE_3__]);
([_navbar__WEBPACK_IMPORTED_MODULE_1__, _breadcrumbs__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ActiveLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function ActiveLink({ children , activeLinkClass , ...props }) {
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let className = children.props.className || "";
    if (pathname === props.href) {
        className = `${className} ${activeLinkClass ? activeLinkClass : "text-indigo-600"}`;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...props,
        children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(children, {
            className
        })
    });
}


/***/ }),

/***/ 3568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SIZES = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12"
};
function Loader({ size ="sm"  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `sk-folding-cube ${SIZES[size]}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sk-cube1 sk-cube"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sk-cube2 sk-cube"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sk-cube4 sk-cube"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sk-cube3 sk-cube"
            })
        ]
    });
}


/***/ }),

/***/ 747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// const TYPES = {
// 	success: "green",
// 	warning: "yellow",
// 	danger: "red"
// }
const BG_CLASSES = {
    success: "bg-green-100",
    warning: "bg-yellow-100",
    danger: "bg-red-100"
};
const TEXT_CLASSES = {
    success: "text-green-900",
    warning: "text-yellow-900",
    danger: "text-red-900"
};
const SIZES = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
};
function Message({ children , type ="success" , size ="md"  }) {
    const { 0: isDisplayed , 1: setIsDisplayed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    if (!isDisplayed) {
        return null;
    }
    const messageSizeClass = SIZES[size];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${BG_CLASSES[type]} rounded-xl mb-3`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "max-w-7xl mx-auto py-2 px-1",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between flex-wrap",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-0 flex-1 flex items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `ml-3 ${messageSizeClass} font-medium ${TEXT_CLASSES[type]}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline",
                                children: children
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "order-2 flex-shrink-0 sm:order-3 sm:ml-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>setIsDisplayed(false),
                            type: "button",
                            className: "-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 sm:-mr-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sr-only",
                                    children: "Dismiss"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    className: `h-6 w-6 ${TEXT_CLASSES[type]}`,
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M6 18L18 6M6 6l12 12"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 2371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Modal({ isOpen , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${!isOpen && "hidden"} fixed z-10 inset-0 overflow-y-auto"`,
            "aria-labelledby": "modal-title",
            role: "dialog",
            "aria-modal": "true",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
                children: [
                    isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                        "aria-hidden": "true"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                        "aria-hidden": "true",
                        children: "​"
                    }),
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 3708:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4853);
/* harmony import */ var _components_ui_comon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(285);
/* harmony import */ var _components_hooks_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2445);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_providers__WEBPACK_IMPORTED_MODULE_1__, _components_ui_comon__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_3__]);
([_components_providers__WEBPACK_IMPORTED_MODULE_1__, _components_ui_comon__WEBPACK_IMPORTED_MODULE_2__, _components_hooks_web3__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Navbar() {
    const { connect , isLoading , requireInstall  } = (0,_components_providers__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)();
    const { account  } = (0,_components_hooks_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .mA)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative pt-6 px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: "relative",
                    "aria-label": "Global",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col xs:flex-row justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .ActiveLink */ .O$, {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "font-medium mr-8 hover:text-gray-900",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .ActiveLink */ .O$, {
                                        href: "/marketplace",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "font-medium mr-8 hover:text-gray-900",
                                            children: "Marketplace"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .ActiveLink */ .O$, {
                                        href: "/blogs",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "font-medium mr-8 hover:text-gray-900",
                                            children: "Blogs"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .ActiveLink */ .O$, {
                                        href: "/wishlist",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "font-medium sm:mr-8 mr-1 text-gray-500 hover:text-gray-900",
                                            children: "WishList"
                                        })
                                    }),
                                    isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        disabled: true,
                                        onClick: connect,
                                        children: "Loading..."
                                    }) : account.data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        hoverable: false,
                                        className: "cursor-default",
                                        children: [
                                            "Hi there ",
                                            account.isAdmin && "Admin"
                                        ]
                                    }) : requireInstall ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        onClick: ()=>window.open("https://metamask.io/download.html", "_blank"),
                                        children: "Install Metamask"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_comon__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                        onClick: connect,
                                        children: "Connect"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            account.data && !pathname.includes("/marketplace") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-end mt-1 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-white bg-indigo-600 rounded-md p-2",
                    children: account.data
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ createCourseHash)
/* harmony export */ });
const createCourseHash = (web3)=>(courseId, account)=>{
        const hexCourseId = web3.utils.utf8ToHex(courseId);
        const courseHash = web3.utils.soliditySha3({
            type: "bytes16",
            value: hexCourseId
        }, {
            type: "address",
            value: account
        });
        return courseHash;
    };


/***/ }),

/***/ 8520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ loadContract)
/* harmony export */ });
const NETWORK_ID = "3";
const loadContract = async (name, web3)=>{
    const res = await fetch(`/contracts/${name}.json`);
    const Artifact = await res.json();
    let contract = null;
    try {
        contract = new web3.eth.Contract(Artifact.abi, Artifact.networks[NETWORK_ID].address);
    } catch  {
        console.error(`Contract ${name} cannot be loaded`);
    }
    return contract;
};


/***/ }),

/***/ 413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ normalizeOwnedCourse)
/* harmony export */ });
/* unused harmony export COURSE_STATE */
const COURSE_STATE = {
    0: "purchased",
    1: "activated",
    2: "deactivated"
};
const normalizeOwnedCourse = (web3)=>(course, ownedCourse)=>{
        return {
            ...course,
            ownedCourseId: ownedCourse.id,
            proof: ownedCourse.proof,
            price: web3.utils.fromWei(ownedCourse.price),
            state: COURSE_STATE[ownedCourse.state],
            owned: ownedCourse.owner
        };
    };


/***/ })

};
;