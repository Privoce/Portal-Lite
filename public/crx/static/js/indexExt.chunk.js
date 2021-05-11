(this["webpackJsonpportal-lite"] = this["webpackJsonpportal-lite"] || []).push([["indexExt"],{

/***/ "./src/component/Vera/Button.js":
/*!**************************************!*\
  !*** ./src/component/Vera/Button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

// import React from 'react';

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button`
  min-width: initial;
  border: none;
  white-space: nowrap;
  background-color: var(--vera-camera-bg-color);
  color: var(--vera-font-color);
  border-radius: var(--vera-border-radius);
  padding: 4px 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in;
  font-size: 14px;
  line-height: 1.4;
  &.blue {
    background-color: #5480f4;
  }
  &.large {
    font-size: 22px;
    padding-right: 20px;
    padding-left: 20px;
  }
  &:disabled {
    background-color: #ccc;
  }
  &:active {
    transform: scale(0.9);
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledButton);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Camera/BgRemoveMask.js":
/*!***************************************************!*\
  !*** ./src/component/Vera/Camera/BgRemoveMask.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BgRemoveMask; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Camera/BgRemoveMask.js",
    _s = __webpack_require__.$Refresh$.signature();




const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    &.side {
      display: none;
    }
  }
  .tip {
    text-transform: capitalize;
    padding: 1em;
    border-radius: 0.5em;
    background-color: var(--vera-camera-bg-color);
    font-size: 2.2em;
    color: var(--vera-font-color);
  }
`;
_c = StyledWrapper;
let STOP = false;

const draw = async ({
  video,
  canvas,
  offCanvas,
  net
}) => {
  if (STOP) return;
  let ctx = canvas.getContext('2d');
  console.log('start draw');
  let offCtx = offCanvas.getContext('2d');
  offCtx.drawImage(video, 0, 0);
  const res = await net.segmentPerson(offCanvas); // document.getElementById('i').style.display = 'none';

  tf.tidy(() => {
    const maskTensor = tf.tensor3d(res.data, [200, 200, 1]);
    const imageTensor = tf.browser.fromPixels(offCanvas);
    const t1 = tf.mul(imageTensor, maskTensor);
    const t2 = tf.concat([t1, tf.mul(maskTensor, 255)], 2);
    t2.data().then(rawData => {
      const rawImageData = new ImageData(new Uint8ClampedArray(rawData), 200, 200);
      ctx.putImageData(rawImageData, 0, 0);
      ctx.scale(-1, 1);
      ctx.translate(-canvas.width, 0);
    });
  });
  requestAnimationFrame(draw.bind(undefined, {
    video,
    canvas,
    offCanvas,
    net
  }));
};

const bgRemove = async (videoEle, canvas, offCanvas) => {
  const net = await bodyPix.load({
    architecture: 'MobileNetV1',
    outputStride: 16,
    multiplier: 0.75,
    quantBytes: 2
  });
  draw({
    video: videoEle,
    canvas,
    offCanvas,
    net
  });
};

function BgRemoveMask({
  video
}) {
  _s();

  const [processing, setProcessing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const renderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const side = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const startProcess = async () => {
      await bgRemove(video, renderRef.current, side.current);
      setProcessing(false);
    };

    if (video) {
      console.log('start processing');
      STOP = false;
      startProcess();
    }

    return () => {
      console.log('bg remove off');
      STOP = true;
    };
  }, [video]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("canvas", {
      ref: side,
      className: "side",
      width: "200",
      height: "200"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("canvas", {
      ref: renderRef,
      className: "render",
      width: "200",
      height: "200"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this), processing && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "tip",
      children: "processing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 22
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

_s(BgRemoveMask, "ghLgJ54WYsdNJOBu0V7q63TqT8k=");

_c2 = BgRemoveMask;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "StyledWrapper");
__webpack_require__.$Refresh$.register(_c2, "BgRemoveMask");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Camera/CameraOffMask.js":
/*!****************************************************!*\
  !*** ./src/component/Vera/Camera/CameraOffMask.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const StyledMask = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  z-index: 6;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/user.svg`});
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledMask);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Camera/ErrorMask.js":
/*!************************************************!*\
  !*** ./src/component/Vera/Camera/ErrorMask.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorMask; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Camera/ErrorMask.js";



const StyledMask = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  z-index: 6;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  .tip {
    font-size: 1.8em;
    color: red;
    font-weight: 800;
  }
`;
_c = StyledMask;
function ErrorMask({
  tip = 'Error'
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledMask, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "tip",
      children: tip
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
_c2 = ErrorMask;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "StyledMask");
__webpack_require__.$Refresh$.register(_c2, "ErrorMask");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Camera/index.js":
/*!********************************************!*\
  !*** ./src/component/Vera/Camera/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Username__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Username */ "./src/component/Vera/Username.js");
/* harmony import */ var _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useEmitter */ "./src/component/Vera/hooks/useEmitter.js");
/* harmony import */ var _ErrorMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMask */ "./src/component/Vera/Camera/ErrorMask.js");
/* harmony import */ var _CameraOffMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CameraOffMask */ "./src/component/Vera/Camera/CameraOffMask.js");
/* harmony import */ var _BgRemoveMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BgRemoveMask */ "./src/component/Vera/Camera/BgRemoveMask.js");
/* harmony import */ var _hooks_useUserMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useUserMedia */ "./src/component/Vera/hooks/useUserMedia.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ "./src/component/Vera/Camera/styled.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Camera/index.js",
    _s = __webpack_require__.$Refresh$.signature();










const tipVideo = chrome.i18n.getMessage('tipDisableVideo');
const tipAudio = chrome.i18n.getMessage('tipDisableAudio');
const tipRemoveBg = chrome.i18n.getMessage('tipRemoveBg'); // const tipProcessing = chrome.i18n.getMessage('tipProcessing');

const tipPin = chrome.i18n.getMessage('tipPin');
let triggerByCmd = {
  video: false,
  audio: false
}; // status: loading ready error

function Camera({
  username = 'Guest',
  peerId,
  remote = true,
  mediaStream = null,
  dataConnections = null
}) {
  _s();

  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [controls, setControls] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    pin: false,
    video: true,
    audio: true,
    bg: true
  });
  const {
    enableStream,
    error
  } = Object(_hooks_useUserMedia__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const updateControls = st => {
    let tmp = {
      audio: false,
      video: false
    };
    let hasAudio = !!st.getAudioTracks().length;
    let hasVideo = !!st.getVideoTracks().length;
    tmp.audio = hasAudio;
    tmp.video = hasVideo;
    setControls(prev => {
      return { ...prev,
        ...tmp
      };
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const attachLocalStream = async () => {
      let localStream = await enableStream();
      console.log({
        localStream
      });

      if (localStream) {
        let cloned = localStream.clone();
        cloned.getAudioTracks().forEach(t => t.enabled = false);
        updateControls(cloned);
        videoRef.current.srcObject = cloned;
      }
    };

    if (!remote) {
      attachLocalStream();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [remote]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (mediaStream) {
      videoRef.current.srcObject = mediaStream;
      updateControls(mediaStream);
    }
  }, [mediaStream]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // 来自远程对方的消息
    _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["default"].on(_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].CAMERA_CONTROL, ({
      pid,
      type
    }) => {
      if (pid !== peerId) return;
      console.log('data connection msg in camra', pid, peerId, type);

      switch (type) {
        case 'CC_VIDEO_ON':
          setMedia({
            type: 'video',
            enable: true,
            cmd: true
          });
          break;

        case 'CC_VIDEO_OFF':
          setMedia({
            type: 'video',
            enable: false,
            cmd: true
          });
          break;

        case 'CC_AUDIO_ON':
          setMedia({
            type: 'audio',
            enable: true,
            cmd: true
          });
          break;

        case 'CC_AUDIO_OFF':
          setMedia({
            type: 'audio',
            enable: false,
            cmd: true
          });
          break;

        case 'CC_BG_ON':
          setBackground({
            keep: true
          });
          break;

        case 'CC_BG_OFF':
          setBackground({
            keep: false
          });
          break;

        default:
          break;
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peerId]); // 画中画

  const handlePin = () => {
    const {
      pin
    } = controls;

    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }

    if (!pin) {
      let videoEle = videoRef.current;
      videoEle.requestPictureInPicture().then(() => {
        setControls(prev => {
          return { ...prev,
            pin: true
          };
        });

        videoEle.onleavepictureinpicture = () => {
          setControls(prev => {
            return { ...prev,
              pin: false
            };
          });
        };
      }).catch(error => {
        // Error handling
        console.log('pip error', error);
      });
    }
  }; // 音视频


  const setMedia = ({
    type = 'video',
    enable = true,
    cmd = false
  }) => {
    console.log('start toggle media');
    let stream = videoRef.current.srcObject;
    const tracks = type == 'video' ? stream.getVideoTracks() : stream.getAudioTracks(); // 巨复杂的一个判断：当前状态是button置的，而且cmd想开启

    if (cmd && !triggerByCmd[type] && enable && tracks.filter(t => t.enabled == false).length) {
      return;
    }

    tracks.forEach(t => {
      t.enabled = enable;
    });
    setControls(prev => {
      return { ...prev,
        [type]: enable
      };
    }); // 如果是host，则同步给每个连接

    if (dataConnections) {
      let cmd = {
        type: `CC_${type.toUpperCase()}_${enable ? 'ON' : 'OFF'}`
      };
      Object.entries(dataConnections).forEach(([, conn]) => {
        console.log('send msg to connection', conn.peer);
        conn.send(cmd);
      });
    } // 更新全局标识


    triggerByCmd[type] = cmd;
  }; // 背景


  const setBackground = ({
    keep = true
  }) => {
    setControls(prev => {
      return { ...prev,
        bg: keep
      };
    }); // 如果是host，则同步给每个连接

    if (dataConnections) {
      let cmd = {
        type: `CC_BG_${keep ? 'ON' : 'OFF'}`
      };
      Object.entries(dataConnections).forEach(([, conn]) => {
        console.log('send msg to connection', conn.peer);
        conn.send(cmd);
      });
    }
  };

  const handleMediaControl = ({
    target
  }) => {
    // if (remote) return;
    const {
      type,
      status
    } = target.dataset;
    let isOn = status == 'true';

    if (isOn || !isOn && !triggerByCmd[type]) {
      setMedia({
        type,
        enable: status !== 'true'
      });
    }
  };

  const handleBgControl = ({
    target
  }) => {
    const {
      video
    } = controls;
    if (remote || !video) return;
    const {
      status
    } = target.dataset;
    setBackground({
      keep: status !== 'true'
    });
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_ErrorMask__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tip: error.tip
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 178,
    columnNumber: 21
  }, this);
  const {
    pin,
    video,
    audio,
    bg
  } = controls;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "data-peer": peerId,
    className: remote ? 'remote' : 'local',
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      className: `video ${!bg ? 'hidden' : ''}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_Username__WEBPACK_IMPORTED_MODULE_1__["default"], {
        local: !remote,
        name: username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "opts",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
          className: "opt bg",
          onClick: handleBgControl,
          "data-status": bg,
          title: tipRemoveBg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
          className: "opt video",
          onClick: handleMediaControl,
          "data-type": 'video',
          "data-status": video,
          title: tipVideo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
          className: "opt audio",
          onClick: handleMediaControl,
          "data-type": 'audio',
          "data-status": audio,
          title: tipAudio
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
          className: "opt pin",
          onClick: handlePin,
          "data-status": pin,
          title: tipPin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this), (!video || !loaded) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_CameraOffMask__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 33
      }, this), !bg && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_BgRemoveMask__WEBPACK_IMPORTED_MODULE_5__["default"], {
        video: videoRef.current
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("video", {
        ref: videoRef,
        onPlay: handleLoad,
        playsInline: true,
        autoPlay: true,
        muted: remote ? false : 'muted'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 181,
    columnNumber: 5
  }, this);
}

_s(Camera, "PGlY64K02j+aP47YDPw8gcd24lA=", false, function () {
  return [_hooks_useUserMedia__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = Camera;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Camera));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Camera");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Camera/styled.js":
/*!*********************************************!*\
  !*** ./src/component/Vera/Camera/styled.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 20em;
  height: 20em;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--vera-box-border-radius);
  border: none;
  background: transparent;
  .video .username,
  .opts {
    visibility: hidden;
  }
  &:hover {
    .video {
      .username,
      .opts {
        visibility: visible;
      }
    }
  }
  .processing {
    z-index: 10;
    display: none;
    text-transform: capitalize;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -70%, 0);
    padding: 1em;
    border-radius: 0.5em;
    background-color: var(--vera-camera-bg-color);
    font-size: 2.2em;
    color: var(--vera-font-color);
  }
  .video {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    width: -webkit-fill-available;
    &.hidden video {
      visibility: hidden;
    }
    video {
      border-radius: 50%;
      width: -webkit-fill-available;
    }
    .opts {
      z-index: 7;
      position: absolute;
      bottom: 1em;
      left: 50%;
      padding: 0.5em;
      display: flex;
      transform: translateX(-50%);
      gap: 0.4em;
      /* visibility: hidden; */
      .opt {
        padding: 0;
        border: none;
        border-radius: var(--vera-border-radius);
        background-color: var(--vera-button-bg-color);
        height: 2em !important;
        width: 2em !important;
        min-width: unset;
        background-size: 65%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        &.bg {
          background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/bg.rm.svg`});
          &[data-status='false'] {
            background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/bg.rm.off.svg`});
          }
        }
        &.video {
          background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/video.on.svg`});
          &[data-status='false'] {
            background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/video.off.svg`});
          }
        }
        &.audio {
          background-color: var(--vera-button-bg-color);
          background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/audio.on.svg`});
          &[data-status='false'] {
            background-color: #863733;
            background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/audio.off.svg`});
          }
        }
        &.pin {
          background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/pin.off.svg`});
          &[data-status='false'] {
            background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/pin.svg`});
          }
        }
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledWrapper);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Chat/index.js":
/*!******************************************!*\
  !*** ./src/component/Vera/Chat/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stream_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stream-chat */ "./node_modules/stream-chat/dist/browser.es.js");
/* harmony import */ var stream_chat_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stream-chat-react */ "./node_modules/stream-chat-react/dist/index.es.js");
/* harmony import */ var stream_chat_react_dist_css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stream-chat-react/dist/css/index.css */ "./node_modules/stream-chat-react/dist/css/index.css");
/* harmony import */ var _hooks_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/utils */ "./src/component/Vera/hooks/utils.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./src/component/Vera/Chat/styled.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Chat/index.js",
    _s = __webpack_require__.$Refresh$.signature();








const chatClient = stream_chat__WEBPACK_IMPORTED_MODULE_1__["StreamChat"].getInstance('fwcuynkafsqt');
function ChatBox({
  channelId = null,
  visible = false,
  toggleVisible
}) {
  _s();

  const [channel, setChannel] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const chatBoxRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  console.log({
    channelId
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const initialChat = async () => {
      console.log('start init chat');
      const user = await Object(_hooks_utils__WEBPACK_IMPORTED_MODULE_4__["getUser"])();

      if (user) {
        const {
          username,
          id,
          photo
        } = user;
        const response = await fetch(`${"https://api.yangerxiao.com"}/service/chat/token/${id}`);
        const {
          code,
          data: userToken
        } = await response.json();

        if (code == 0) {
          await chatClient.connectUser({
            id,
            name: username,
            image: photo
          }, userToken);
        }
      } else {
        console.log('init chat guest user');
        await chatClient.setGuestUser({
          id: Math.random().toString(20).substr(2, 6),
          username: 'Guest'
        });
      } // 初始化channel


      let cn = chatClient.channel('livestream', channelId, {
        image: 'https://static.nicegoodthings.com/privoce/works.portal.logo.png',
        name: 'Vera Chat'
      });
      setChannel(cn);
      console.log('end init chat');
      setTimeout(() => {
        let chatBox = chatBoxRef.current;
        let dragEle = chatBox.querySelector('[class^=str-chat__header]');
        let containment = document.querySelector('#VERA_FULLSCREEN_CONTAINER');
        new PlainDraggable(chatBox, {
          handle: dragEle,
          containment
        });
      }, 3000);
    };

    if (channelId) {
      initialChat();
    }
  }, [channelId]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: chatBoxRef,
    className: visible ? 'visible' : '',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
      className: "close",
      onClick: toggleVisible
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), channel && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(stream_chat_react__WEBPACK_IMPORTED_MODULE_2__["Chat"], {
      client: chatClient,
      theme: "livestream dark",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(stream_chat_react__WEBPACK_IMPORTED_MODULE_2__["Channel"], {
        channel: channel,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(stream_chat_react__WEBPACK_IMPORTED_MODULE_2__["Window"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(stream_chat_react__WEBPACK_IMPORTED_MODULE_2__["ChannelHeader"], {
            live: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(stream_chat_react__WEBPACK_IMPORTED_MODULE_2__["VirtualizedMessageList"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(stream_chat_react__WEBPACK_IMPORTED_MODULE_2__["MessageInput"], {
            Input: stream_chat_react__WEBPACK_IMPORTED_MODULE_2__["MessageInputSmall"],
            focus: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

_s(ChatBox, "qiOHv0OBO3j5vEg7eAGgboZfsIA=");

_c = ChatBox;

var _c;

__webpack_require__.$Refresh$.register(_c, "ChatBox");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Chat/styled.js":
/*!*******************************************!*\
  !*** ./src/component/Vera/Chat/styled.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  height: 80vh;
  min-width: 40vw;
  &.visible {
    pointer-events: all;
    visibility: visible;
  }
  .str-chat-channel {
    max-height: 80vh;
  }
  .close {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #333;
    border: none;
    background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/close.svg`});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledWrapper);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Cursor/index.js":
/*!********************************************!*\
  !*** ./src/component/Vera/Cursor/index.js ***!
  \********************************************/
/*! exports provided: default, initCursor, destoryCursor, bindCursorSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCursor", function() { return initCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destoryCursor", function() { return destoryCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCursorSync", function() { return bindCursorSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useEmitter */ "./src/component/Vera/hooks/useEmitter.js");
/* harmony import */ var _hooks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/utils */ "./src/component/Vera/hooks/utils.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/component/Vera/Cursor/styled.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Cursor/index.js",
    _s = __webpack_require__.$Refresh$.signature();







function Cursor({
  id,
  username = 'Guest'
}) {
  _s();

  const wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(wrapper.current);
    _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["default"].on(_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].CURSOR_MOVE, ({
      pid,
      data
    }) => {
      //  不是当前鼠标的更新数据
      if (pid !== id) return;
      const {
        pos: {
          x,
          y
        }
      } = data;
      wrapper.current.style.transform = `translate3d(${x}px,${y}px,0)`; // console.log('data connection msg in cursor', pid, id, data);
    });
    _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["default"].on(_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].CURSOR_CLICK, ({
      pid
    }) => {
      //  不是当前鼠标的更新数据
      if (pid !== id) return;
      wrapper.current.classList.add('clicked');
    });
    _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["default"].on(_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].CURSOR_SELECT, ({
      pid,
      data
    }) => {
      //  不是当前鼠标的更新数据
      if (pid !== id) return;
      const {
        selection
      } = data;

      try {
        rangy.deserializeSelection(selection);
      } catch (error) {
        console.error(error);
      }
    });
  }, [id]);

  const handleAniEnd = () => {
    wrapper.current.classList.remove('clicked');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id,
    ref: wrapper,
    onAnimationEnd: handleAniEnd,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "circle"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "pointer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), username ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
      className: "name",
      children: username
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

_s(Cursor, "WHr8hq6aG1PTfvrLfR8RaAq5tP4=");

_c = Cursor;

const initCursor = ({
  id,
  username
}) => {
  if (typeof username == 'undefined') return false;
  let wrapper = document.getElementById(id); // 存在了

  if (!wrapper) {
    console.log('cursor init');
    wrapper = document.createElement('aside');
    wrapper.id = id;
    document.body.appendChild(wrapper);
  }

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Cursor, {
    id: id,
    username: username
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 19
  }, undefined), wrapper);
  return true;
};

const destoryCursor = ({
  id
}) => {
  let wrapper = document.getElementById(id);
  wrapper === null || wrapper === void 0 ? void 0 : wrapper.remove();
};

const sendData = (conn, data) => {
  if (conn.open) {
    conn.send(data);
  }
};

const bindCursorSync = ({
  conn
}) => {
  console.log('bind cursor sync');
  document.addEventListener('mousemove', Object(_hooks_utils__WEBPACK_IMPORTED_MODULE_3__["throttle"])(evt => {
    const {
      clientX,
      clientY
    } = evt;
    const {
      scrollTop,
      scrollLeft
    } = document.scrollingElement;
    sendData(conn, {
      type: _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].CURSOR_MOVE,
      data: {
        pos: {
          x: clientX + scrollLeft,
          y: clientY + scrollTop
        }
      }
    });
  }), false);
  document.addEventListener('mousedown', () => {
    sendData(conn, {
      type: _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].CURSOR_CLICK,
      data: {
        click: true
      }
    });
  }, false);
  document.addEventListener('mouseup', () => {
    try {
      let selection = rangy.getSelection();

      if (selection) {
        selection = rangy.serializeSelection(selection, true);
        sendData(conn, {
          type: _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_2__["EVENTS"].CURSOR_SELECT,
          data: {
            selection
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, false);
};



var _c;

__webpack_require__.$Refresh$.register(_c, "Cursor");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Cursor/styled.js":
/*!*********************************************!*\
  !*** ./src/component/Vera/Cursor/styled.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const AniScaleIn = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
  from {
    transform: scale(0.5, 0.5);
    opacity: 0.5;
  }
  to {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
`;
const StyledCursor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  z-index: 99999;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  will-change: transform;
  .circle {
    border-radius: 50%;
    background-color: deepskyblue;
    position: absolute;
    left: -50%;
    top: -50%;
    width: 40px;
    height: 40px;
    opacity: 0;
  }
  &.clicked .circle {
    animation: ${AniScaleIn} 0.5s cubic-bezier(0.36, 0.11, 0.89, 0.32);
    // animation-iteration-count: 2;
  }
  .pointer {
    width: 25px;
    height: 25px;
    background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/cursor.svg`});
    background-size: contain;
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.8));
  }
  .name {
    margin-top: 5px;
    font-size: 10px;
    color: #333;
    padding: 4px 6px;
    background-color: #f4ea2a;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledCursor);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/InviteBox/InviteList.js":
/*!****************************************************!*\
  !*** ./src/component/Vera/InviteBox/InviteList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InviteList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./src/component/Vera/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/InviteBox/InviteList.js",
    _s = __webpack_require__.$Refresh$.signature();



 // import useCopy from '../hooks/useCopy';



const inviteTxt = chrome.i18n.getMessage('invite'); // const invitedTxt = chrome.i18n.getMessage('invited');

const StyledList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul`
  height: fit-content;
  overflow: scroll;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  background-color: #1f1f1f;
  padding: 0.6em 0.4em;
  border-radius: var(--vera-border-radius);
  color: var(--vera-font-color);
  &::-webkit-scrollbar {
    display: none;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child) {
      padding-bottom: 0.4em;
      border-bottom: 1px dashed #333;
    }
    .avator {
      width: 2.5em;
      height: 2.5em;
      border-radius: 50%;
    }
    .name {
      color: inherit;
      font-size: 1em;
    }
  }
`;
_c = StyledList;

const fetcher = (...args) => fetch(...args).then(res => res.json()).then(resp => resp.data);

const PUSH_API = 'https://api.pushy.me/push?api_key=f827c5a08c5cc9dc01d697ba652d02ae30e090242f396561e3ed059642ec6d58';

const pushNotify = (host, id, url) => {
  // TODO[eric]: put apikey here fornow, should move to a private place when in production
  // add custom icon
  fetch(PUSH_API, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      to: [id],
      data: {
        message: `${host} invites you to vera!`,
        url
      },
      time_to_live: 2000
    })
  });
};

function InviteList({
  link = '',
  username = ''
}) {
  _s();

  // const { copied, copy } = useCopy();
  const [btnText, setBtnText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(inviteTxt);
  const {
    data,
    error
  } = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(username ? `https://api.yangerxiao.com/service/authing/vera/${encodeURIComponent(username)}/userlist` : null, fetcher);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {}, [username]); // const handleCopy = ({ target }) => {
  //   if (copied) return;
  //   target.innerText = invitedTxt;
  //   copy(link);
  //   setTimeout(() => {
  //     target.innerText = inviteTxt;
  //   }, 1500);
  // };

  const handleInvite = async (id, url) => {
    if (!id) id = 'd301e1d1721d76ed821d70';
    setBtnText('Notifying...');
    const result = await pushNotify('fixed', id, url);

    if (result.success) {
      setBtnText('success');
    } else {
      setBtnText('fail');
    }

    setTimeout(() => setBtnText(inviteTxt), 1500);
  }; // loading


  if (!data) return null;
  if (error) return 'error';
  if (data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(StyledList, {
    children: data.map(user => {
      const {
        username,
        name,
        nickname,
        photo,
        tracerId
      } = user;
      const finalName = username || name || nickname;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
        className: "user",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
          src: photo,
          alt: "avator",
          className: "avator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          className: "name",
          children: finalName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: () => handleInvite(tracerId, link),
          children: btnText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }, this)]
      }, user.finalName, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 7
  }, this);
}

_s(InviteList, "3YjFhKE4XKSuaCLWDUOIpb3VmRc=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c2 = InviteList;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "StyledList");
__webpack_require__.$Refresh$.register(_c2, "InviteList");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/InviteBox/LoginArea.js":
/*!***************************************************!*\
  !*** ./src/component/Vera/InviteBox/LoginArea.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Login */ "./src/component/Vera/Login.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/InviteBox/LoginArea.js";
// import { useEffect } from 'react';



const tipLogin = chrome.i18n.getMessage('tipLogin');
const StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  height: fit-content;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #000;
  padding: 2em;
  border-radius: var(--vera-border-radius);
  color: var(--vera-font-color);
  .tip {
    white-space: nowrap;
    font-size: 1.4em;
  }
  .btns {
    display: flex;
    justify-content: space-between;
    margin: 1.5em 0.5em;
  }
`;
_c = StyledBox;
function LoginBox() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledBox, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "tip",
      children: tipLogin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "btns",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "reg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
_c2 = LoginBox;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "StyledBox");
__webpack_require__.$Refresh$.register(_c2, "LoginBox");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/InviteBox/index.js":
/*!***********************************************!*\
  !*** ./src/component/Vera/InviteBox/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InviteBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/component/Vera/InviteBox/styled.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./src/component/Vera/Button.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loading */ "./src/component/Vera/Loading.js");
/* harmony import */ var _InviteList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InviteList */ "./src/component/Vera/InviteBox/InviteList.js");
/* harmony import */ var _LoginArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginArea */ "./src/component/Vera/InviteBox/LoginArea.js");
/* harmony import */ var _hooks_useCopy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useCopy */ "./src/component/Vera/hooks/useCopy.js");
/* harmony import */ var _hooks_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/utils */ "./src/component/Vera/hooks/utils.js");
/* harmony import */ var _hooks_useUsername__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useUsername */ "./src/component/Vera/hooks/useUsername.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/InviteBox/index.js",
    _s = __webpack_require__.$Refresh$.signature();











const copyTxt = chrome.i18n.getMessage('copy');
const copiedTxt = chrome.i18n.getMessage('copied');
function InviteBox({
  peerId = ''
}) {
  _s();

  const [inviteUrl, setInviteUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    username
  } = Object(_hooks_useUsername__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const {
    copied,
    copy
  } = Object(_hooks_useCopy__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (peerId) {
      setInviteUrl(Object(_hooks_utils__WEBPACK_IMPORTED_MODULE_7__["getInviteUrl"])(peerId));
    }
  }, [peerId]);

  const handleLinkClick = ({
    target
  }) => {
    Object(_hooks_utils__WEBPACK_IMPORTED_MODULE_7__["selectText"])(target);
  };

  const handleCopyClick = () => {
    copy(inviteUrl);
  };

  if (!inviteUrl) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 26
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "link",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
        className: "url",
        onClick: handleLinkClick,
        children: inviteUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "blue",
        onClick: handleCopyClick,
        children: copied ? copiedTxt : copyTxt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), username ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_InviteList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      username: username,
      link: inviteUrl
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_LoginArea__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 73
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(InviteBox, "oU8K3qeiaeyJSAlxz9hOUybz9C4=", false, function () {
  return [_hooks_useUsername__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useCopy__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = InviteBox;

var _c;

__webpack_require__.$Refresh$.register(_c, "InviteBox");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/InviteBox/styled.js":
/*!************************************************!*\
  !*** ./src/component/Vera/InviteBox/styled.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  box-sizing: border-box;
  height: 20em;
  width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 5px;
  padding: 5px;
  background-color: var(--vera-camera-bg-color);
  border-radius: var(--vera-border-radius);
  .link {
    width: 100%;
    width: -webkit-fill-available;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4em;
    background: var(--vera-button-bg-color);
    border-radius: var(--vera-border-radius);
    font-size: 1em;
    .url {
      user-select: text;
      color: var(--vera-font-color);
      width: 100%;
      height: fit-content;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-word;
      text-align: left;
      line-height: 1.2;
      max-height: 9em;
      overflow: hidden;
    }
  }
  .users {
    height: fit-content;
    overflow: scroll;
    width: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    gap: 0.6em;
    background-color: #1f1f1f;
    padding: 0.6em 0.4em;
    border-radius: var(--vera-border-radius);
    color: var(--vera-font-color);
    &::-webkit-scrollbar {
      /* visibility: hidden; */
      display: none;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    .user {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:not(:last-child) {
        padding-bottom: 0.4em;
        border-bottom: 1px dashed #333;
      }
      .avator {
        width: 2.5em;
        height: 2.5em;
        border-radius: 50%;
      }
      .name {
        color: inherit;
        font-size: 1em;
      }
    }
  }
  .login {
    margin-top: 1.5em;
    padding: 1em 2em;
    background-color: #c4c4c4;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledBox);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/JoinBox/index.js":
/*!*********************************************!*\
  !*** ./src/component/Vera/JoinBox/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JoinBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./src/component/Vera/Button.js");
/* harmony import */ var _Username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Username */ "./src/component/Vera/Username.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Login */ "./src/component/Vera/Login.js");
/* harmony import */ var _hooks_useUsername__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useUsername */ "./src/component/Vera/hooks/useUsername.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/JoinBox/index.js",
    _s = __webpack_require__.$Refresh$.signature();







const prepareTxt = chrome.i18n.getMessage('prepare');
const joinTxt = chrome.i18n.getMessage('join');
const joinAsGuestTxt = chrome.i18n.getMessage('joinAsGuest');
const StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  box-sizing: border-box;
  height: 20em;
  width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  justify-content: space-around;
  padding: 5px;
  padding-top: 3em;
  background: transparent;
  border-radius: var(--vera-border-radius);
  .btns {
    display: flex;
    justify-content: center;
    gap: 5em;
    width: 100%;
  }
`;
_c = StyledBox;
let clicked = false;
function JoinBox({
  ready = false,
  peerClient,
  peerIds = [],
  addMediaConnection
}) {
  _s();

  const {
    username
  } = Object(_hooks_useUsername__WEBPACK_IMPORTED_MODULE_4__["default"])();

  const handleJoin = () => {
    if (clicked) return;

    if (!window.LOCAL_MEDIA_STREAM) {
      alert('Local MediaStream Null');
      return;
    }

    console.log({
      peerIds
    });
    peerIds.forEach(id => {
      let newMediaConn = peerClient.call(id, window.LOCAL_MEDIA_STREAM);
      console.log({
        newMediaConn
      });
      addMediaConnection(newMediaConn);
    });
    clicked = true;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledBox, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Username__WEBPACK_IMPORTED_MODULE_2__["default"], {
      local: true,
      readonly: false,
      fixed: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "btns",
      children: [username ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 28
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        disabled: !ready,
        className: "blue",
        onClick: handleJoin,
        children: ready ? username ? joinTxt : joinAsGuestTxt : `${prepareTxt}...`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(JoinBox, "WOLcYr4PssC6BNRZsksVVJ3eTjc=", false, function () {
  return [_hooks_useUsername__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c2 = JoinBox;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "StyledBox");
__webpack_require__.$Refresh$.register(_c2, "JoinBox");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Loading.js":
/*!***************************************!*\
  !*** ./src/component/Vera/Loading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Loading.js";
// import React from 'react';


const AniLodaing = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
 0% {
    stroke-dasharray: 1, 126; /*实线部分1，虚线部分126*/
    stroke-dashoffset: 0; /*前面1/126显示实线，后面125显示空白*/
  }

  50% {
    stroke-dasharray: 95, 126; /*实线部分95，虚线部分126*/
    stroke-dashoffset: -31px; /*顺时针偏移31/126，即前31/126显示空白，后面3/4显示线条*/
  }

  to {
    stroke-dasharray: 6, 120; /*实线部分6，虚线部分120*/
    stroke-dashoffset: -120px; /*最后顺时针偏移120/126，即前120/126显示空白，后面6点显示线条部分*/
  }
`;
const AniRotate = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
 to {
    transform: rotate(1turn); // 旋转1圈
  }
`;
const StyledLoading = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  position: relative;
  width: ${({
  size
}) => `${size}px`};
  height: ${({
  size
}) => `${size}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  .circle {
    width: 100px;
    height: 100px;
    animation: ${AniRotate} 1.5s infinite ease-in-out; /*给svg也加上一个旋转动画*/
    .path {
      stroke: #000; /*给画笔设置一个颜色*/
      stroke-width: 3; /*设置线条的宽度*/
      stroke-dasharray: 95, 126; /*设置实现长95，虚线长126*/
      stroke-dashoffset: 0; /*设置虚线的偏移位置*/
      animation: ${AniLodaing} 1.5s ease-in-out infinite;
    }
  }
  .txt {
    font-size: 14px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--vera-font-color);
  }
`;
_c = StyledLoading;
const loadingTxt = chrome.i18n.getMessage('tipLoading');

const svg = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  className: "circle",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("circle", {
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    className: "path"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 54,
  columnNumber: 3
}, undefined);

function Loading({
  tip = loadingTxt,
  size = 200
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(StyledLoading, {
    size: size,
    children: [svg, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "txt",
      children: tip
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
_c2 = Loading;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "StyledLoading");
__webpack_require__.$Refresh$.register(_c2, "Loading");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Login.js":
/*!*************************************!*\
  !*** ./src/component/Vera/Login.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/component/Vera/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Login.js",
    _s = __webpack_require__.$Refresh$.signature();




const loginTxt = chrome.i18n.getMessage('login');
const regTxt = chrome.i18n.getMessage('reg');
function Login({
  type = 'login'
}) {
  _s();

  const handleLogin = () => {
    chrome.runtime.sendMessage({
      action: 'LOGIN'
    }, function () {
      /* callback */
      console.log('send login message');
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // 监听
    chrome.runtime.onMessage.addListener(request => {
      console.log({
        request
      });

      if (request.user) {
        let {
          username
        } = request.user;
        console.log({
          username
        }); // VERA_EMITTER.emit('login', { isHost, localId, inviteId, username });
      }
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: handleLogin,
    children: type == 'login' ? loginTxt : regTxt
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 10
  }, this);
}

_s(Login, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Login;

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Panel/Info.js":
/*!******************************************!*\
  !*** ./src/component/Vera/Panel/Info.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Panel/Info.js";



const StyledInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 10px;
  color: #333;
  position: absolute;
  right: 0;
  bottom: -10px;
`;
_c = StyledInfo;
const {
  version
} = chrome.runtime.getManifest();
function Info() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(StyledInfo, {
    className: "info",
    children: version
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, this);
}
_c2 = Info;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "StyledInfo");
__webpack_require__.$Refresh$.register(_c2, "Info");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Panel/Resize.js":
/*!********************************************!*\
  !*** ./src/component/Vera/Panel/Resize.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-resizable */ "./node_modules/react-resizable/index.js");
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_resizable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Panel/Resize.js";



function Resize({
  width = 440,
  height = 250,
  left = 0,
  top = 0,
  onResizeStart,
  onResizeStop,
  updateSize
}) {
  const handleResize = (evt, {
    size
  }) => {
    updateSize(size);
  }; // lockAspectRatio={true}


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_resizable__WEBPACK_IMPORTED_MODULE_1__["ResizableBox"], {
    lockAspectRatio: true,
    onResizeStart: onResizeStart,
    onResizeStop: onResizeStop,
    style: {
      left: `${left}px`,
      top: `${top}px`
    },
    width: width,
    height: height,
    minConstraints: [220, 250],
    onResize: handleResize,
    maxConstraints: [1200, 500],
    resizeHandles: ['sw', 'se', 'nw', 'ne']
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
_c = Resize;

var _c;

__webpack_require__.$Refresh$.register(_c, "Resize");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Panel/Topbar.js":
/*!********************************************!*\
  !*** ./src/component/Vera/Panel/Topbar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Topbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/utils */ "./src/component/Vera/hooks/utils.js");
/* harmony import */ var _hooks_useCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useCopy */ "./src/component/Vera/hooks/useCopy.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Panel/Topbar.js",
    _s = __webpack_require__.$Refresh$.signature();







const copiedTxt = chrome.i18n.getMessage('copied');
const StyledBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  padding: 0 1.2em;
  .left {
    display: flex;
    align-items: center;
    gap: 0.4em;
    .rect {
      cursor: pointer;
      width: 3em;
      height: 2em;
      background-size: 50%;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: var(--vera-border-radius);
      &.close {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/tel.svg`});
        background-color: #eb2027;
      }
      &.chat {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/chat.svg`});
        background-color: #85e89e;
      }
      &.invite:not(.copied) {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/invite.svg`});
        background-color: #5e7fec;
      }
      &.copied.invite {
        background: #0d1117;
        color: #fff;
        font-size: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5em 1em;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .layout {
      display: flex;
      align-items: center;
      border-radius: var(--vera-border-radius);
      background-color: var(--vera-button-bg-color);
      padding: 0.4em;
      gap: 1em;
      .item {
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1px;
        width: 1.5em;
        height: 1.5em;
        margin: 0;
        &:after {
          position: absolute;
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
        &:hover,
        &.curr {
          background-color: var(--vera-camera-bg-color);
        }
        &.vt {
          flex-direction: column;
        }
        .mock {
          border-radius: 1px;
          width: 4px;
          background: var(--vera-font-color);
          &.box {
            height: 0.4em;
          }
          &.line {
            height: 0.2em;
          }
        }
      }
    }
  }
`;
_c = StyledBar;
const layouts = {
  min: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "mock line"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 8
  }, undefined),
  one: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "mock box"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 8
  }, undefined),
  vt: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "mock box"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "mock box"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, undefined)]
  }, void 0, true),
  hz: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "mock box"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "mock box"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined)]
  }, void 0, true)
};
function Topbar({
  pid = null,
  layout,
  handleClose,
  handleLayout,
  toggleChatBoxVisible
}) {
  _s();

  const {
    copied,
    copy
  } = Object(_hooks_useCopy__WEBPACK_IMPORTED_MODULE_3__["default"])();

  const handleInvite = () => {
    let link = Object(_hooks_utils__WEBPACK_IMPORTED_MODULE_2__["getInviteUrl"])(pid);
    copy(link);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(StyledBar, {
    className: "topbar",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "left",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "rect close",
        onClick: handleClose
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), pid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: `rect invite ${copied ? 'copied' : ''}`,
        onClick: handleInvite,
        children: copied && copiedTxt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }, this), pid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: `rect chat`,
        onClick: toggleChatBoxVisible
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "right",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
        className: "layout",
        children: Object.entries(layouts).map(([key, mocks]) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
            onClick: handleLayout,
            className: `item ${key} ${key == layout ? 'curr' : ''}`,
            layout: key,
            children: mocks
          }, key, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 5
  }, this);
}

_s(Topbar, "hbrI5hMnPIyayPly8qDuaA1CZ0I=", false, function () {
  return [_hooks_useCopy__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c2 = Topbar;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "StyledBar");
__webpack_require__.$Refresh$.register(_c2, "Topbar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Panel/index.js":
/*!*******************************************!*\
  !*** ./src/component/Vera/Panel/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Panel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Camera */ "./src/component/Vera/Camera/index.js");
/* harmony import */ var _InviteBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InviteBox */ "./src/component/Vera/InviteBox/index.js");
/* harmony import */ var _JoinBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../JoinBox */ "./src/component/Vera/JoinBox/index.js");
/* harmony import */ var _hooks_usePeer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/usePeer */ "./src/component/Vera/hooks/usePeer.js");
/* harmony import */ var _hooks_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/utils */ "./src/component/Vera/hooks/utils.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./src/component/Vera/Panel/styled.js");
/* harmony import */ var _Topbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Topbar */ "./src/component/Vera/Panel/Topbar.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Info */ "./src/component/Vera/Panel/Info.js");
/* harmony import */ var _Resize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Resize */ "./src/component/Vera/Panel/Resize.js");
/* harmony import */ var _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useEmitter */ "./src/component/Vera/hooks/useEmitter.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Panel/index.js",
    _s = __webpack_require__.$Refresh$.signature();


 // import Loading from '../Loading';











const quitConfirmTxt = chrome.i18n.getMessage('quitConfirm');
let used = false;
let draggable = null;
function Panel({
  closePanel,
  invitePeerId = null,
  updateChannelId,
  toggleChatVisible
}) {
  _s();

  const {
    peer,
    shutdownPeer,
    dataConnections,
    mediaConnections,
    addMediaConnection,
    streams,
    usernames,
    status
  } = Object(_hooks_usePeer__WEBPACK_IMPORTED_MODULE_4__["default"])({
    invitePeerId
  });
  const [resizing, setResizing] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [panelSize, setPanelSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: 440,
    height: 250
  });
  const [movePosition, setMovePosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    left: 0,
    top: 0
  });
  const [layout, setLayout] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('hz');
  const panelRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleLayout = ({
    target
  }) => {
    if (target.classList.contains('curr')) return;
    let tmp = target.getAttribute('layout');
    setLayout(tmp);
  }; // 视频过


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (Object.keys(streams).length) {
      used = true;
    }
  }, [streams]);

  const handleResizeStop = () => {
    draggable.remove();
    initDraggable();
    setResizing(false);
  };

  const handleResizeStart = () => {
    setResizing(true);
  };

  const initDraggable = () => {
    let dragEle = panelRef.current;
    let containment = document.querySelector('#VERA_FULLSCREEN_CONTAINER');
    draggable = new PlainDraggable(dragEle, {
      containment,
      // autoScroll: true,
      onMove: pos => {
        console.log({
          pos,
          draggable
        });
        let {
          x,
          y
        } = Object(_hooks_utils__WEBPACK_IMPORTED_MODULE_5__["getTranslateValues"])(dragEle); // let { left, top } = pos;

        setMovePosition({
          left: x,
          top: y
        });
      }
    });
  }; // 拖拽


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (panelRef) {
      initDraggable();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (status == _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_10__["STATUS"].OPEN) {
      let channelId = invitePeerId || (peer === null || peer === void 0 ? void 0 : peer.id);
      updateChannelId(channelId);
    }
  }, [status, invitePeerId, peer]);

  const handleClose = () => {
    let letGo = Object.keys(dataConnections).length ? confirm(quitConfirmTxt) : true;

    if (letGo) {
      console.log('clean up stream');
      let cameras = [...panelRef.current.querySelectorAll('video')];
      cameras.forEach(c => {
        var _c$srcObject;

        (_c$srcObject = c.srcObject) === null || _c$srcObject === void 0 ? void 0 : _c$srcObject.getTracks().forEach(t => t.stop());
        c.srcObject = null;
      });
      shutdownPeer();
      closePanel();
    }
  };

  let noConnection = Object.keys(mediaConnections).length == 0; // let reset='reset'==status;

  let miniLayout = layout == 'min';
  let boxVisible = noConnection && !miniLayout;
  let {
    width,
    height
  } = panelSize;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: resizing ? 'resizing' : '',
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
      className: `panel ${layout}`,
      "data-status": status,
      ref: panelRef,
      style: {
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${width / 440 * 10}px`
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        className: "cameras",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Camera__WEBPACK_IMPORTED_MODULE_1__["default"], {
          dataConnections: dataConnections,
          peerId: peer === null || peer === void 0 ? void 0 : peer.id,
          remote: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), Object.entries(mediaConnections).map(([pid, conn]) => {
          let st = streams[pid];
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Camera__WEBPACK_IMPORTED_MODULE_1__["default"], {
            username: usernames[pid],
            peerId: pid,
            mediaConnection: conn,
            dataConnection: dataConnections[pid],
            mediaStream: st
          }, pid, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this), boxVisible ? invitePeerId ? used ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_InviteBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        peerId: peer === null || peer === void 0 ? void 0 : peer.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_JoinBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ready: status == _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_10__["STATUS"].READY,
        peerClient: peer,
        peerIds: Object.keys(usernames),
        addMediaConnection: addMediaConnection
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_InviteBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        peerId: peer === null || peer === void 0 ? void 0 : peer.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Topbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        pid: !noConnection ? invitePeerId || (peer === null || peer === void 0 ? void 0 : peer.id) : null,
        layout: layout,
        handleLayout: handleLayout,
        handleClose: handleClose,
        toggleChatBoxVisible: toggleChatVisible
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Info__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_Resize__WEBPACK_IMPORTED_MODULE_9__["default"], { ...panelSize,
      ...movePosition,
      updateSize: setPanelSize,
      onResizeStart: handleResizeStart,
      onResizeStop: handleResizeStop
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

_s(Panel, "3+dqlFanvovYoa0ehdHc3HSOQEY=", false, function () {
  return [_hooks_usePeer__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = Panel;

var _c;

__webpack_require__.$Refresh$.register(_c, "Panel");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Panel/styled.js":
/*!********************************************!*\
  !*** ./src/component/Vera/Panel/styled.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useEmitter */ "./src/component/Vera/hooks/useEmitter.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].aside`
  position: relative;
  pointer-events: all;
  font-family: sans-serif;
  .react-resizable {
    visibility:hidden;
    pointer-events:none;
    position: absolute;
    left:0;
    top:0;
    width:100% !important;
    height:100% !important;
      .react-resizable-handle {
        pointer-events:all;
        position: absolute;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-origin: content-box;
        box-sizing: border-box;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+');
        background-position: bottom right;
        padding: 0 3px 3px 0;
        &.react-resizable-handle-sw {
          bottom: 0;
          left: 0;
          cursor: sw-resize;
          transform: rotate(90deg);
        }
        &.react-resizable-handle-se {
          bottom: 0;
          right: 0;
          cursor: se-resize;
        }
        &.react-resizable-handle-nw {
          top: 0;
          left: 0;
          cursor: nw-resize;
          transform: rotate(180deg);
        }
        &.react-resizable-handle-ne {
          top: 0;
          right: 0;
          cursor: ne-resize;
          transform: rotate(270deg);
        }
        &.react-resizable-handle-w,
        &.react-resizable-handle-e {
          top: 50%;
          margin-top: -10px;
          cursor: ew-resize;
        }
        &.react-resizable-handle-w {
          left: 0;
          transform: rotate(135deg);
        }
        &.react-resizable-handle-e {
          right: 0;
          transform: rotate(315deg);
        }
        &.react-resizable-handle-n,
        &.react-resizable-handle-s {
          left: 50%;
          margin-left: -10px;
          cursor: ns-resize;
        }
        &.react-resizable-handle-n {
          top: 0;
          transform: rotate(225deg);
        }
        &.react-resizable-handle-s {
          bottom: 0;
          transform: rotate(45deg);
        }
      }
    }
  .panel{
    display: flex !important;
    align-items: center;
    justify-content: space-evenly;
    gap: 15px;
    padding: 12px;
    padding-top: 40px;
    border-radius: var(--vera-border-radius);
    transition: all 0.5s ease-in-out;
    transition-property: background-color;
    background-color: var(--vera-panel-bg-color);
    font-size:10px;
    width:fit-content !important;
    &:after {
      content: '';
      position: absolute;
      left: -15px;
      top: 0;
      width: 10px;
      height: 10px;
      background-color: #999;
      border-radius: 50%;
    }
    &[data-status='${_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].OPEN}']:after {
      background-color: #ee7f3d;
    }
    &[data-status='${_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].CLOSE}']:after {
      background-color: #fff;
    }
    &[data-status='${_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].CALLING}']:not(.min),
    &[data-status='${_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].STREAMING}']:not(.min) {
      &:after {
        background-color: #85e89e;
      }
      background: transparent;
      .topbar,
      .info,
      &:after {
        visibility: hidden;
      }
      &:hover {
        background: var(--vera-panel-bg-color);
        .topbar,
        .info,
        &:after {
          visibility: visible;
        }
      }
    }
    &[data-status='${_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].CONNECTED}']:after,&[data-status='${_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].READY}']:after {
      background-color: #48baff;
    }
    &[data-status='${_hooks_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].DISCONNECTED}']:after {
      background-color: #ccc;
    }
    &.vt {
      flex-direction: column;
      height: fit-content !important;
      .cameras {
        flex-direction: column;
      }
    }
    &.one {
      gap: 0;
      width:fit-content !important;
      .cameras .local {
        display: none;
      }
    }
    &.min {
      min-height: fit-content;
      min-width: 250px;
      height: fit-content !important;
      padding-bottom: 2px;
      .cameras {
        display: none;
      }
    }
    
    .topbar {
      position: absolute;
      top: 10px;
      left: 0;
      justify-content: space-between;
      width: -webkit-fill-available;
    }
    .cameras {
      overflow: hidden;
      display: flex;
      gap: 15px;
    }
  }
  &:hover{
    .react-resizable{
      visibility:visible;
    }
    .panel{
      background-color:var(--vera-panel-bg-color) !important;
    }
  }
  &.resizing .panel{
      background: var(--vera-panel-bg-color) !important;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledWrapper);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Username.js":
/*!****************************************!*\
  !*** ./src/component/Vera/Username.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Username; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useUsername__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useUsername */ "./src/component/Vera/hooks/useUsername.js");
/* harmony import */ var _hooks_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/utils */ "./src/component/Vera/hooks/utils.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Username.js",
    _s = __webpack_require__.$Refresh$.signature();






const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  line-height: 1;
  max-width: 100px;
  user-select: text;
  /* width: 100%;
  width: -webkit-fill-available; */
  border: none;
  text-align: center;
  padding: 10px 6px;
  font-size: 18px;
  color: var(--vera-font-color);
  border-radius: var(--vera-border-radius);
  background-color: var(--vera-button-bg-color);
  &.fixed {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    > input {
      padding: 4px 6px;
    }
  }
`;
_c = StyledWrapper;
function Username({
  local = false,
  name = 'Guest',
  readonly = true,
  fixed = true
}) {
  _s();

  const {
    username,
    updateUsername
  } = Object(_hooks_useUsername__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [finalName, setFinalName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])((local ? username || 'Guest' : name) || 'Guest');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (local && username) {
      setFinalName(username);
      console.log('set final name', local);
    }
  }, [username, local]);

  const handleChange = ({
    target
  }) => {
    let newVal = target.innerText;
    updateUsername(newVal);
  };

  const handleClick = ({
    target
  }) => {
    Object(_hooks_utils__WEBPACK_IMPORTED_MODULE_3__["selectText"])(target);
  };

  console.log({
    local,
    name,
    fixed,
    readonly,
    finalName
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(StyledWrapper, {
    className: `username ${fixed ? 'fixed' : ''}`,
    contentEditable: !readonly,
    onClick: handleClick,
    type: "text",
    onInput: username ? null : handleChange,
    children: finalName
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(Username, "eYDzwBVIwf4W8Vwv3MVqOzuV/Vw=", false, function () {
  return [_hooks_useUsername__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c2 = Username;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "StyledWrapper");
__webpack_require__.$Refresh$.register(_c2, "Username");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Widget/index.js":
/*!********************************************!*\
  !*** ./src/component/Vera/Widget/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Widget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/component/Vera/Widget/styled.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/Widget/index.js",
    _s = __webpack_require__.$Refresh$.signature();




let dragMoving = false;
function Widget({
  openPanel
}) {
  _s();

  const widgetRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (widgetRef) {
      let dragEle = widgetRef.current;
      let handle = dragEle.querySelector('.handle');
      new PlainDraggable(dragEle, {
        onMove: () => {
          console.log('moving');
          dragMoving = true;
        },
        onDragEnd: () => {
          console.log('drag end');
          dragMoving = false;
        },
        handle // autoScroll: true

      });
    }
  }, []);

  const handleLogoMouseUp = () => {
    chrome.runtime.sendMessage({
      action: 'OPEN_HOME'
    }, function () {
      /* callback */
      console.log('send open home message');
    });
  };

  const handleCameraMouseUp = () => {
    // 正在拖动...
    if (dragMoving) return;
    openPanel();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_styled__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "widget",
      ref: widgetRef,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "drag",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "handle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "portal_logo",
          onMouseUpCapture: handleLogoMouseUp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "camera",
        onMouseUp: handleCameraMouseUp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(Widget, "CZzzYrIwcW/Y90FcvHOrjP2cLf4=");

_c = Widget;

var _c;

__webpack_require__.$Refresh$.register(_c, "Widget");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/Widget/styled.js":
/*!*********************************************!*\
  !*** ./src/component/Vera/Widget/styled.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const AniSlideOut = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
    from {
        transform: translateX(-30px);
        opacity: 0.1;
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;
const StyledWidget = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].aside`
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  height: 100vh;
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  background: transparent;
  border: none;
  box-shadow: none;
  .widget {
    pointer-events: all;
    cursor: pointer;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .drag {
      margin-left: -25px;
      width: 50px;
      height: 50px;
      background-color: var(--vera-widget-bg-color);
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: margin-left 0.5s ease-in-out;
      will-change: margin-left;
      > .portal_logo {
        width: 25px;
        height: 25px;
        background-color: transparent;
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/logo.png`});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      > .handle {
        border-radius: 4px;
        width: 12px;
        height: 30px;
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/drag-vertical.svg`});
        background-size: cover;
        background-color: #333;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .camera {
      will-change: transform;
      filter: drop-shadow(0 2px 4px rgba(34, 36, 38, 0.35));
      margin-left: 8px;
      cursor: pointer;
      visibility: hidden;
      content: '';
      width: 50px;
      height: 50px;
      background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/video.svg`});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    &:hover {
      .drag {
        margin-left: 0;
      }
      .camera {
        visibility: visible;
        animation: ${AniSlideOut} 0.3s ease-in forwards;
      }
    }
    &.plain-draggable-moving {
      .camera {
        visibility: visible;
      }
      &:hover .camera {
        animation: none;
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (StyledWidget);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/hooks/useCopy.js":
/*!*********************************************!*\
  !*** ./src/component/Vera/hooks/useCopy.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCopy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();



const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

function useCopy(duration = 2000) {
  _s();

  const [copied, setCopied] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const copy = (content = '') => {
    if (copied || !content) return;

    if (location.hostname.indexOf('figma') > -1) {
      unlocker.enable();
    }

    copyToClipboard(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, duration);

    if (location.hostname.indexOf('figma') > -1) {
      unlocker.disable();
    }
  };

  return {
    copied,
    copy
  };
}

_s(useCopy, "NE86rL3vg4NVcTTWDavsT0hUBJs=");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/hooks/useEmitter.js":
/*!************************************************!*\
  !*** ./src/component/Vera/hooks/useEmitter.js ***!
  \************************************************/
/*! exports provided: default, EVENTS, STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS", function() { return EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

window.VERA_EMITTER = window.VERA_EMITTER || {
  events: {},

  emit(event, ...args) {
    (this.events[event] || []).forEach(i => i(...args));
  },

  on(event, cb) {
    (this.events[event] = this.events[event] || []).push(cb);
    return () => this.events[event] = (this.events[event] || []).filter(i => i !== cb);
  }

};
const emitter = window.VERA_EMITTER;
/* harmony default export */ __webpack_exports__["default"] = (emitter);
const EVENTS = {
  CURSOR_SELECT: 'CURSOR.SELECT',
  CURSOR_MOVE: 'CURSOR.MOVE',
  CURSOR_CLICK: 'CURSOR.CLICK',
  CAMERA_CONTROL: 'CAMERA.CONTROL',
  USERNAME: 'USERNAME'
};
const STATUS = {
  OPEN: 'CONNECT.OPEN',
  READY: 'READY.TO.CONNECT.OTHERS',
  WAITING: 'WAITING',
  CONNECTED: 'CONNECTED',
  ERROR: 'ERROR',
  CLOSE: 'CLOSE',
  CALLING: 'CALL',
  STREAMING: 'STREAM',
  DISCONNECTED: 'DISCONNECTED'
};


const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/hooks/usePeer.js":
/*!*********************************************!*\
  !*** ./src/component/Vera/hooks/usePeer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEmitter */ "./src/component/Vera/hooks/useEmitter.js");
/* harmony import */ var _Cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cursor */ "./src/component/Vera/Cursor/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/component/Vera/hooks/utils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();





const peerConfig = {
  host: 'r.nicegoodthings.com',
  // port: '80',
  path: '/ngt',
  config: {
    iceServers: [{
      urls: 'stun:47.93.119.186:3478'
    }, {
      urls: 'turn:47.93.119.186:3478',
      username: 'a',
      credential: 'b'
    }]
  } // debug: 3

};

const usePeer = ({
  invitePeerId = null
}) => {
  _s();

  const [myPeer, setMyPeer] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('waiting');
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [dataConns, setDataConns] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const dataConnsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
  const [mediaConns, setMediaConns] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const mediaConnsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
  const [streams, setStreams] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const usernamesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
  const usernameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])('');

  const updateConns = ({
    conn,
    remove = false,
    type = 'media'
  }) => {
    let current = type == 'media' ? mediaConnsRef.current : dataConnsRef.current;

    let _setState = type == 'media' ? setMediaConns : setDataConns;

    if (remove) {
      // remove
      delete current[conn.peer];

      _setState(prev => {
        delete prev[conn.peer];
        return { ...prev
        };
      }); // 如果移除的是视频连接 则把stream也去掉


      if (type == 'media') {
        setStreams(prev => {
          delete prev[conn.peer];
          return { ...prev
          };
        });
      }
    } else {
      // add
      current = { ...current,
        [conn.peer]: conn
      };

      _setState(prev => {
        prev[conn.peer] = conn;
        return { ...prev
        };
      });
    }
  }; // 初始化Peer


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const initUsername = async () => {
      usernameRef.current = await Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUsername"])();
    };

    if (!myPeer) {
      let tmp = new Peer(peerConfig);
      setMyPeer(tmp);
      initUsername();
    }
  }, [myPeer]);

  const clearUpConnect = conn => {
    let pid = conn.peer; // 删掉data&media连接，去掉名字

    updateConns({
      conn,
      type: 'data',
      remove: true
    });
    updateConns({
      conn,
      type: 'media',
      remove: true
    });
    delete usernamesRef.current[pid];

    if (Object.keys(usernamesRef.current).length == 0) {
      // 重置为等待连接的初始状态
      window.removeEventListener('beforeunload', _utils__WEBPACK_IMPORTED_MODULE_3__["preventCloseTabHandler"]);
      setStatus(_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].WAITING);
    } // 销毁鼠标


    Object(_Cursor__WEBPACK_IMPORTED_MODULE_2__["destoryCursor"])({
      id: pid
    });
  };

  const initDataChannel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(conn => {
    conn.on('close', () => {
      console.log('peer data connection close');
      clearUpConnect(conn);
    });
    conn.on('error', err => {
      console.log('peer data connection error', err);
      clearUpConnect(conn);
    });
    conn.on('open', async () => {
      console.log('peer data connection open');

      if (!invitePeerId) {
        // host给guest发初始化命令，把host 名字和当前已连接的数据带过去
        conn.send({
          type: 'INIT',
          data: {
            username: usernameRef.current,
            connections: usernamesRef.current
          }
        });
      }

      let {
        username
      } = conn.metadata || {}; // update username 集合

      if (typeof username !== 'undefined' && typeof usernamesRef.current[conn.peer] == 'undefined') {
        console.log('set username', conn.peer, myPeer.id, username, !!invitePeerId); // 更新到usernames集合里

        usernamesRef.current = { ...usernamesRef.current,
          [conn.peer]: username
        }; // 同时初始化鼠标

        let inited = Object(_Cursor__WEBPACK_IMPORTED_MODULE_2__["initCursor"])({
          id: conn.peer,
          username
        });

        if (inited) {
          Object(_Cursor__WEBPACK_IMPORTED_MODULE_2__["bindCursorSync"])({
            conn
          });
        }
      }

      console.log('new dataChannel added:', conn.peer); // 开始监听消息

      conn.on('data', obj => {
        const {
          type = '',
          data
        } = obj;

        if (type == 'INIT') {
          let {
            connections,
            username
          } = data;
          console.log('connections from host:', connections); // 更新到usernames集合里

          usernamesRef.current = { ...usernamesRef.current,
            ...connections,
            [invitePeerId]: username
          };
          Object.keys(connections).forEach(id => {
            // 遍历房主发过来的连接
            let newConn = myPeer.connect(id, {
              metadata: {
                username: usernameRef.current
              }
            });
            initDataChannel(newConn);
          });
        }

        if (type.startsWith('CC_')) {
          _useEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit(_useEmitter__WEBPACK_IMPORTED_MODULE_1__["EVENTS"].CAMERA_CONTROL, {
            pid: conn.peer,
            type
          });
        }

        if (type.startsWith('CURSOR')) {
          _useEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit(type, {
            pid: conn.peer,
            data
          });
        }
      }); // 更新到dataConnections集合里

      updateConns({
        conn,
        type: 'data'
      }); // dataChannel ready

      setStatus(_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].READY);
    });
  }, [invitePeerId, myPeer]);

  const addMediaConnection = mediaConn => {
    // 更新到mediaConnections集合里
    updateConns({
      conn: mediaConn,
      type: 'media'
    }); // 新增vera历史记录

    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["appendVeraHistory"])({
      peerId: mediaConn.peer,
      isHost: !invitePeerId,
      usernames: usernamesRef.current
    }); // console.log({ mediaConns });

    mediaConn.on('close', () => {
      console.log('peer media connection close');
      clearUpConnect(mediaConn);
    });
    mediaConn.on('error', err => {
      console.log('peer media connection error', err);
      clearUpConnect(mediaConn);
    });
    mediaConn.on('stream', st => {
      setStatus(_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].STREAMING);
      console.log('peer media connection stream', st);
      setStreams(prev => {
        prev[mediaConn.peer] = st;
        return { ...prev
        };
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (myPeer) {
      myPeer.on('open', () => {
        console.log('peer connection open');
        setStatus(_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].OPEN); // 受邀者则主动连接房主，并报上自己的名字

        if (invitePeerId) {
          let username = usernameRef.current; // myPeer.connect(invitePeerId, {

          let invitedDataConn = myPeer.connect(invitePeerId, {
            metadata: {
              username
            }
          }); // 初始化通用的监听事件

          initDataChannel(invitedDataConn);
        } // 有连接请求过来


        myPeer.on('connection', conn => {
          window.addEventListener('beforeunload', _utils__WEBPACK_IMPORTED_MODULE_3__["preventCloseTabHandler"]);
          console.log('peer data connection incoming', conn);
          setStatus(_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].CONNECTED);
          initDataChannel(conn);
        });
      });
      myPeer.on('call', call => {
        // 有人呼叫
        console.log('peer connection call from the other');
        setStatus(_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].CALLING); // 回应

        call.answer(window.LOCAL_MEDIA_STREAM);
        addMediaConnection(call);
      });
      myPeer.on('disconnected', () => {
        console.log('peer connection disconnected');
        setStatus(_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].DISCONNECTED);
      });
      myPeer.on('close', () => {
        console.log('peer connection close');
        setStatus(_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].CLOSE);
      });
      myPeer.on('error', err => {
        console.log('peer connection error', {
          err
        });
        setStatus(_useEmitter__WEBPACK_IMPORTED_MODULE_1__["STATUS"].ERROR);
        setError(err.type);
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [myPeer, invitePeerId]); //关闭peer连接

  const shutdownPeer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    var _window$LOCAL_MEDIA_S;

    window.removeEventListener('beforeunload', _utils__WEBPACK_IMPORTED_MODULE_3__["preventCloseTabHandler"]); // 关闭每个mediaConn

    Object.entries(mediaConnsRef.current).forEach(([, conn]) => {
      conn.close();
    });
    (_window$LOCAL_MEDIA_S = window.LOCAL_MEDIA_STREAM) === null || _window$LOCAL_MEDIA_S === void 0 ? void 0 : _window$LOCAL_MEDIA_S.getTracks().forEach(t => {
      t.stop();
    });
    window.LOCAL_MEDIA_STREAM = null;
    myPeer.destroy();
  }, [myPeer]);
  return {
    shutdownPeer,
    peer: myPeer,
    dataConnections: dataConns,
    mediaConnections: mediaConns,
    addMediaConnection,
    streams,
    usernames: usernamesRef.current,
    status,
    error
  };
};

_s(usePeer, "GfaW4FePiFNodJM1rWf7/m9xYpA=");

/* harmony default export */ __webpack_exports__["default"] = (usePeer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/hooks/useUserMedia.js":
/*!**************************************************!*\
  !*** ./src/component/Vera/hooks/useUserMedia.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUserMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();


const videoStreamConfig = {
  video: {
    facingMode: 'user',
    width: {
      min: 200,
      ideal: 200,
      max: 720
    },
    height: {
      min: 200,
      ideal: 200,
      max: 720
    }
  },
  audio: false
};
const audioStreamConfig = {
  video: false,
  audio: true
};
const fullStreamConfig = {
  video: {
    facingMode: 'user',
    width: {
      min: 200,
      ideal: 200,
      max: 720
    },
    height: {
      min: 200,
      ideal: 200,
      max: 720
    }
  },
  audio: true
};
const Tips = {
  ['NotAllowedError']: 'Permission denied'
};
window.LOCAL_MEDIA_STREAM = window.LOCAL_MEDIA_STREAM || null;
function useUserMedia() {
  _s();

  const [mediaStream, setMediaStream] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.LOCAL_MEDIA_STREAM);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); // 更新到全局变量

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.LOCAL_MEDIA_STREAM = mediaStream;
  }, [mediaStream]);

  const enableStream = async () => {
    if (mediaStream) return mediaStream;

    try {
      // 一次性获取两个授权
      let devices = await navigator.mediaDevices.enumerateDevices();
      let hasCamera = devices.some(d => {
        return d.kind == 'videoinput';
      });
      let hasAudio = devices.some(d => {
        return d.kind == 'audioinput';
      });
      let mediaConfig = hasCamera && hasAudio ? fullStreamConfig : hasCamera ? videoStreamConfig : hasAudio ? audioStreamConfig : null;

      if (mediaConfig) {
        const stream = await navigator.mediaDevices.getUserMedia(mediaConfig);
        setMediaStream(stream);
        return stream;
      } // 既没有摄像头 也没有麦克风


      return null;
    } catch (error) {
      let {
        name
      } = error;
      console.log(error, {
        name
      });
      setError({
        type: name,
        tip: Tips[name]
      });
      return null;
    }
  };

  const stopStream = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => {
        track.stop();
      });
    }
  };

  return {
    mediaStream,
    enableStream,
    stopStream,
    error
  };
}

_s(useUserMedia, "a7yeLiMCWPaRG4CxcI4WJX+uW5M=");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/hooks/useUsername.js":
/*!*************************************************!*\
  !*** ./src/component/Vera/hooks/useUsername.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();



const useUsername = (defaultName = '') => {
  _s();

  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultName);
  const [fake, setFake] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    chrome.storage.sync.get(['user', 'fakename'], res => {
      console.log('local user data', res.user, res.fakename);
      const {
        user = null,
        fakename = null
      } = res;

      if (user) {
        setName(user.username);
        setFake(false);
      } else if (fakename) {
        setName(fakename);
        setFake(true);
      }
    });
    chrome.storage.onChanged.addListener((changes, area) => {
      var _changes$user, _changes$fakename;

      console.log({
        changes,
        area
      });

      if (area == 'sync' && ((_changes$user = changes.user) === null || _changes$user === void 0 ? void 0 : _changes$user.newValue)) {
        let {
          username
        } = changes.user.newValue;
        setName(username);
        setFake(false);
      }

      if (area == 'sync' && ((_changes$fakename = changes.fakename) === null || _changes$fakename === void 0 ? void 0 : _changes$fakename.newValue)) {
        let newName = changes.fakename.newValue;
        setName(newName);
        setFake(true);
      }
    });
    return () => {// chrome.storage.onChanged = null;
    };
  }, []);

  const updateUsername = name => {
    chrome.storage.sync.set({
      fakename: name
    }, () => {
      // Notify that we saved.
      console.log('set fakename');
    });
  };

  return {
    username: name,
    fake,
    updateUsername
  };
};

_s(useUsername, "BeprMZ4/i0zlHQwgXO4ylRB4Ays=");

/* harmony default export */ __webpack_exports__["default"] = (useUsername);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/hooks/utils.js":
/*!*******************************************!*\
  !*** ./src/component/Vera/hooks/utils.js ***!
  \*******************************************/
/*! exports provided: getInviteUrl, throttle, selectText, getUser, getUsername, appendVeraHistory, preventCloseTabHandler, getTranslateValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInviteUrl", function() { return getInviteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectText", function() { return selectText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsername", function() { return getUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendVeraHistory", function() { return appendVeraHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventCloseTabHandler", function() { return preventCloseTabHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslateValues", function() { return getTranslateValues; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const selectText = node => {
  // node = document.getElementById(node);
  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn('Could not select text in node: Unsupported browser.');
  }
};

function getUsername(withFake = false) {
  return new Promise(resolve => {
    let arr = withFake ? ['user', 'fakename'] : ['user'];
    chrome.storage.sync.get(arr, result => {
      var _result$user, _result$user2;

      let name = withFake ? ((_result$user = result.user) === null || _result$user === void 0 ? void 0 : _result$user.username) || result.fakename : ((_result$user2 = result.user) === null || _result$user2 === void 0 ? void 0 : _result$user2.username) || '';
      resolve(name || '');
    });
  });
}

function getUser() {
  return new Promise(resolve => {
    let arr = ['user'];
    chrome.storage.sync.get(arr, result => {
      resolve(result.user || null);
    });
  });
}

function getInviteUrl(pid = null) {
  let obj = new URL(location.href);
  obj.searchParams.append('portal-vera-id', pid);
  return `https://nicegoodthings.com/transfer/${encodeURIComponent(obj.href)}?extid=${chrome.runtime.id}`;
}

async function appendVeraHistory({
  peerId,
  isHost,
  usernames
}) {
  let un = await getUsername();
  if (!un) return;
  const putMethod = {
    method: 'PUT',
    // Method itself
    headers: {
      'Content-type': 'application/json; charset=UTF-8' // Indicates the content

    },
    body: JSON.stringify({
      title: document.title,
      url: location.href,
      timestamp: new Date().getTime(),
      peerId,
      host: isHost ? un : '',
      username: un,
      participants: Object.values(usernames)
    }) // We send data in JSON format

  };
  let data = {
    code: -1
  };

  try {
    // let resp = await fetch(`http://localhost:3008/service/authing/Tristan/udf/vera`, putMethod);
    let resp = await fetch(`https://api.yangerxiao.com/service/authing/${encodeURIComponent(un)}/udf/vera`, putMethod);
    data = await resp.json();
  } catch (error) {
    console.log(error);
  }

  return data;
}

const preventCloseTabHandler = evt => {
  evt.preventDefault();
  evt.returnValue = 'Vera is still in connectiong, ary you sure to quit?'; // return 'Vera is still in connectiong, ary you sure to quit?';
};

function throttle(fn, interval = 200) {
  // 维护上次执行的时间
  let last = 0;
  let inter = 0;
  return function () {
    const context = this;
    const args = arguments;
    const now = Date.now(); // 根据当前时间和上次执行时间的差值判断是否频繁

    if (now - last >= interval) {
      last = now;
      clearTimeout(inter);
      fn.apply(context, args);
    } else {
      setTimeout(() => {
        fn.apply(context, args);
      }, interval);
    }
  };
}

function getTranslateValues(element) {
  const style = window.getComputedStyle(element);
  const matrix = style['transform'] || style.webkitTransform || style.mozTransform; // No transform property. Simply return 0 values.

  if (matrix === 'none' || typeof matrix === 'undefined') {
    return {
      x: 0,
      y: 0,
      z: 0
    };
  } // Can either be 2d or 3d transform


  const matrixType = matrix.includes('3d') ? '3d' : '2d';
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', '); // 2d matrices have 6 values
  // Last 2 values are X and Y.
  // 2d matrices does not have Z value.

  if (matrixType === '2d') {
    return {
      x: matrixValues[4],
      y: matrixValues[5],
      z: 0
    };
  } // 3d matrices have 16 values
  // The 13th, 14th, and 15th values are X, Y, and Z


  if (matrixType === '3d') {
    return {
      x: matrixValues[12],
      y: matrixValues[13],
      z: matrixValues[14]
    };
  }
}



const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/component/Vera/index.js":
/*!*************************************!*\
  !*** ./src/component/Vera/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vera; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Panel */ "./src/component/Vera/Panel/index.js");
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Widget */ "./src/component/Vera/Widget/index.js");
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chat */ "./src/component/Vera/Chat/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/component/Vera/index.js",
    _s = __webpack_require__.$Refresh$.signature();







const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  line-height: 1;
`;
_c = StyledWrapper;
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
  ol, ul {
    list-style: none;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  :root {
      --vera-widget-bg-color: #000;
      --vera-panel-bg-color: rgba(50, 54, 57,90%);
      --vera-camera-bg-color: #5f6368;
      --vera-button-bg-color: #000;
      --vera-font-color: #fff;
      --vera-border-radius: 5px;
      --vera-box-border-radius: 50%;
    }
`;
_c2 = GlobalStyle;
function Vera() {
  _s();

  const [chatVisible, setChatVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [channelId, setChannelId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const [invitePeerId, setInvitePeerId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [visible, setVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const openPanel = () => {
    setVisible(true);
  };

  const closePanel = () => {
    setVisible(false);
  };

  const toggleChatVisible = () => {
    setChatVisible(prev => !prev);
  };

  const specifyChannelId = id => {
    setChannelId(id);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getPvid = () => {
      chrome.storage.sync.get(['pvid'], res => {
        // Notify that we saved.
        const {
          pvid = null
        } = res;
        console.log('pvid from storage', pvid);

        if (pvid) {
          // 立即删掉，防止下次访问依然存在
          chrome.storage.sync.remove('pvid', () => {
            console.log('pvid removed');
          });
          setInvitePeerId(pvid);
          setVisible(true);
        }

        setLoading(false);
      });
    }; // 显示的时候 再执行


    getPvid();
  }, []); // if (!visible) return null;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledWrapper, {
    id: "VERA_FULLSCREEN_CONTAINER",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(GlobalStyle, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this), !loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
      openPanel: openPanel
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 20
    }, this), !loading && visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
      closePanel: closePanel,
      invitePeerId: invitePeerId,
      toggleChatVisible: toggleChatVisible,
      updateChannelId: specifyChannelId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }, this), !loading && visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Chat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      channelId: channelId,
      visible: chatVisible,
      toggleVisible: toggleChatVisible
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

_s(Vera, "dNu+1/JdHy5+8bJdT9a32Wm3o/I=");

_c3 = Vera;

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "StyledWrapper");
__webpack_require__.$Refresh$.register(_c2, "GlobalStyle");
__webpack_require__.$Refresh$.register(_c3, "Vera");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.ext.js":
/*!**************************!*\
  !*** ./src/index.ext.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Vera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/Vera */ "./src/component/Vera/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/eric/dev/Portal-Lite/src/index.ext.js";
// import { StrictMode } from 'react';



const PanelID = 'PORTAL_VERA_PANEL';
console.log('index.ext exe');
let panel = document.createElement('aside');
panel.id = PanelID;
document.body.appendChild(panel);
react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Vera__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 17
}, undefined), document.getElementById(PanelID));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 3:
/*!**************************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.ext.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/eric/dev/Portal-Lite/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/eric/dev/Portal-Lite/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/eric/dev/Portal-Lite/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/eric/dev/Portal-Lite/src/index.ext.js */"./src/index.ext.js");


/***/ })

},[[3,"runtime-indexExt",0,3,5,15,17,23,41]]]);
//# sourceMappingURL=indexExt.chunk.js.map