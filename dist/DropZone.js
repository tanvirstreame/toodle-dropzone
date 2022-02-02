"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./css/drop-zone.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DropZone = props => {
  const uploadButton = (0, _react.useRef)(null);

  const dropHandler = event => {
    event.preventDefault();

    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (event.dataTransfer.items[i].kind === 'file') {
          var file = event.dataTransfer.items[i].getAsFile();
        }
      }

      props === null || props === void 0 ? void 0 : props.handleFileOnChange(file);
    }
  };

  const dragOverHandler = event => {
    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();
  };

  const handleFileChange = event => {
    var _event$target;

    props === null || props === void 0 ? void 0 : props.handleFileOnChange(event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.files[0]);
  };

  const handleClick = () => {
    uploadButton.current.click();
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: props === null || props === void 0 ? void 0 : props.className,
    onDragOver: event => dragOverHandler(event),
    onDrop: event => dropHandler(event),
    onClick: event => handleClick(event)
  }, props.children), /*#__PURE__*/_react.default.createElement("input", {
    ref: uploadButton,
    id: "file-upload",
    onChange: event => handleFileChange(event),
    name: "file",
    type: "file",
    accept: props.accept
  }));
};

var _default = DropZone;
exports.default = _default;