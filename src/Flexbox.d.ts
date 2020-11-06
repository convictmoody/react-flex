"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = exports.flexDirection = exports.flexProps = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("./styled"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var flexProps = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  stretch: 'stretch',
  baseline: 'baseline'
};

exports.flexProps = flexProps;

var BASIS_MAP = {
  auto: 'auto',
  full: '100%',
  '1/2': '50%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

type EdgeType = string | number | {
  top: string | number,
  bottom: string | number,
  right: string | number,
  left: string | number,
  horizontal: string | number,
  vertical: string | number,
  mobile: {
    top: string | number,
    bottom: string | number,
    right: string | number,
    left: string | number,
    horizontal: string | number,
    vertical: string | number,
    [field: string]: any
  },
  [field: string]: any
};

var flexDirection = {
  row: 'row',
  column: 'column',
  rowResponsive: 'row-responsive'
};

exports.flexDirection = flexDirection;

FlexBox.defaultProps = {
  align: flexProps.stretch,
  justify: flexProps.stretch,
  direction: 'row',
  f: null,
  pad: null,
  margin: null,
  full: null,
  pointer: false,
  width: null,
  height: null,
  maxWidth: null,
  secondary: false,
  floating: false,
  basis: null,
  mobileWidth: null,
  mobileHeight: null,
  mobileHidden: false,
  desktopHidden: false,
  visible: false,
  withShadow: false,
  backgroundColor: null,
  onTop: false,
  separator: null,
  noShrink: false,
  overflow: null,
  preventSelection: false,
  wrap: null,
  noRelative: false,
  childrenSpace: null
}

class Flexbox extends React.Component<FlexType, {}> {}

var _default = FlexBox;
exports["default"] = _default;
