function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { animated } from "react-spring";
import { useStyles } from "./style";
import { getShadowImage } from "./utils/getShadow";

const AnimatedPicture = props => {
  const {
    imageShadow
  } = props;
  let iShadow = getShadowImage(imageShadow);
  const classes = useStyles(iShadow)();
  const {
    i,
    new_bind,
    display,
    x,
    new_data,
    scale
  } = props;
  return /*#__PURE__*/React.createElement(animated.picture, _extends({
    key: i
  }, new_bind(), {
    className: classes.appExt,
    style: {
      display,
      x
    }
  }), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(animated.source, {
    className: classes.appInt,
    srcSet: new_data[i].path
  }), /*#__PURE__*/React.createElement(animated.div, {
    className: classes.imgContainer
  }, /*#__PURE__*/React.createElement(animated.img, {
    className: classes.appIntImg,
    src: new_data[i].path,
    alt: new_data[i].label,
    style: {
      scale
    }
  }))));
};

export default AnimatedPicture;