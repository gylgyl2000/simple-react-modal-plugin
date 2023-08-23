"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HrnetModal;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function HrnetModal(_ref) {
  var open = _ref.open,
    setOpen = _ref.setOpen,
    title = _ref.title,
    titleColor = _ref.titleColor,
    message = _ref.message,
    backdropBg = _ref.backdropBg,
    modalBg = _ref.modalBg,
    xCloseColor = _ref.xCloseColor,
    modalWidth = _ref.modalWidth,
    okButton = _ref.okButton,
    okButtonColor = _ref.okButtonColor,
    okButtonColorHover = _ref.okButtonColorHover,
    okButtonBg = _ref.okButtonBg,
    okButtonBgHover = _ref.okButtonBgHover,
    okButtonAction = _ref.okButtonAction,
    cancelButton = _ref.cancelButton,
    cancelButtonColor = _ref.cancelButtonColor,
    cancelButtonColorHover = _ref.cancelButtonColorHover,
    cancelButtonBg = _ref.cancelButtonBg,
    cancelButtonBgHover = _ref.cancelButtonBgHover;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isOkHover = _useState2[0],
    setIsOkHover = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    isCancelHover = _useState4[0],
    setIsCancelHover = _useState4[1];
  var handleOkMouseEnter = function handleOkMouseEnter() {
    return setIsOkHover(true);
  };
  var handleOkMouseLeave = function handleOkMouseLeave() {
    return setIsOkHover(false);
  };
  var handleCancelMouseEnter = function handleCancelMouseEnter() {
    return setIsCancelHover(true);
  };
  var handleCancelMouseLeave = function handleCancelMouseLeave() {
    return setIsCancelHover(false);
  };
  var handleSubmit = function handleSubmit() {
    okButtonAction();
    setOpen(function (toggle) {
      return !toggle;
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, open ? /*#__PURE__*/_react.default.createElement(StyleBody, null, /*#__PURE__*/_react.default.createElement(Backdrop, {
    "aria-hidden": "true",
    style: {
      backgroundColor: backdropBg
    }
  }), /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(Modal, {
    id: "dialog-:r1:",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "dialog-:r1:-title",
    style: {
      width: modalWidth + 'px'
    }
  }, /*#__PURE__*/_react.default.createElement(Dialog, {
    role: "document"
  }, /*#__PURE__*/_react.default.createElement(ModalContent, {
    style: {
      backgroundColor: modalBg
    }
  }, /*#__PURE__*/_react.default.createElement(ModalHeader, null, /*#__PURE__*/_react.default.createElement(ModalHeaderClose, {
    role: "button",
    title: "Close",
    "aria-label": "Close",
    onClick: function onClick() {
      return setOpen(function (toggle) {
        return !toggle;
      });
    },
    style: {
      color: xCloseColor
    }
  }, "X"), /*#__PURE__*/_react.default.createElement(ModalTitle, {
    id: "dialog-:r1:-title",
    style: {
      color: titleColor
    }
  }, title)), /*#__PURE__*/_react.default.createElement(ModalBody, null, message), /*#__PURE__*/_react.default.createElement(ModalFooter, null, okButton ? /*#__PURE__*/_react.default.createElement(ModalBtn, {
    id: "okButton",
    "aria-label": "Close Modal",
    type: "button",
    onClick: handleSubmit,
    onMouseEnter: handleOkMouseEnter,
    onMouseLeave: handleOkMouseLeave,
    style: {
      color: isOkHover ? okButtonColorHover : okButtonColor,
      backgroundColor: isOkHover ? okButtonBgHover : okButtonBg
    }
  }, "Ok") : '', cancelButton ? /*#__PURE__*/_react.default.createElement(ModalBtn, {
    id: "cancelButton",
    "aria-label": "Cancel Modal",
    type: "button",
    onClick: function onClick() {
      return setOpen(function (toggle) {
        return !toggle;
      });
    },
    onMouseEnter: handleCancelMouseEnter,
    onMouseLeave: handleCancelMouseLeave,
    style: {
      color: isCancelHover ? cancelButtonColorHover : cancelButtonColor,
      backgroundColor: isCancelHover ? cancelButtonBgHover : cancelButtonBg
    }
  }, "Cancel") : '')))))) : null);
}
var StyleBody = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n    color: #e9ebf0;\n    font-family: Apple-System,Arial,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,STXihei,sans-serif;\n    font-size: 14px;\n    line-height: 1.42857143;\n"])));
var Backdrop = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n    pointer-events: unset;\n    height: 100vh;\n    left: 0;\n    position: fixed;\n    top: 0;\n    width: 100vw;\n    z-index: 1049;\n"])));
var Wrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n    margin: 20vh auto;\n    height: 100%;\n    left: 0;\n    overflow: auto;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 1050;\n    outline: none;\n"])));
var BounceIn = (0, _styledComponents.keyframes)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n    from {\n        opacity: 0;\n        transform: scale(0.8);\n    }\n    to {\n        opacity: 1;\n        transform: scale(1);\n    }\n"])));
var Modal = _styledComponents.default.div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n    display: block;\n    margin: 20vh auto;\n    max-width: calc(100% - 10px);\n    outline: 0;\n    overflow: visible;\n    position: relative;\n    z-zndex: 1050;\n    animation-duration: .3s;\n    animation-fill-mode: forwards;\n    animation-name: ", ";\n    animation-timing-function: cubic-bezier(.68,-.55,.27,1.55);\n"])), BounceIn);
var Dialog = _styledComponents.default.div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)([""])));
var ModalContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n    border: none;\n    border-radius: 6px;\n    box-shadow: 0 4px 4px rgba(0,0,0,.12),0 0 10px rgba(0,0,0,.06);\n    outline: 0;\n    padding: 20px;\n    position: relative;\n"])));
var ModalHeader = _styledComponents.default.div(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n    padding-right: 20px;\n    & ::after {\n        clear: both;\n    }\n    & ::after, ::before {\n        content: \" \";\n        display: table;\n    }\n"])));
var ModalHeaderClose = _styledComponents.default.span(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n    font-size: 12px;\n    padding: 0;\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    line-height: 1;\n    outline: none !important;\n"])));
var ModalTitle = _styledComponents.default.h4(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n    display: block;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.25;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    text-align: left;\n"])));
var ModalBody = _styledComponents.default.div(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2.default)(["\n    overflow: auto;\n    max-height: 136px;\n    margin-top: 20px;\n    padding-bottom: 20px;\n    position: relative;\n    text-align: left;\n"])));
var ModalFooter = _styledComponents.default.div(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2.default)(["\n    border-top: none;\n    text-align: right;\n    & ::after {\n        clear: both;\n    }\n    & ::after, ::before {\n        content: \" \";\n        display: table;\n    }\n"])));
var ModalBtn = _styledComponents.default.button(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2.default)(["\n    align-items: center;\n    border: none;\n    border-radius: 6px;\n    cursor: pointer;\n    display: inline-flex;\n    font-size: 14px;\n    font-weight: 400;\n    justify-content: center;\n    line-height: 20px;\n    margin-bottom: 0;\n    overflow: hidden;\n    padding: 8px 12px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    transition: color .15s ease-out,background-color .15s ease-out;\n    user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n"])));