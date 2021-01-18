import React from 'react';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './style';
export const BigImage = ({
  handleClose,
  currentImg
}) => {
  const classes = useStyles()();
  return /*#__PURE__*/React.createElement(Paper, null, /*#__PURE__*/React.createElement(Fab, {
    onClick: handleClose,
    className: classes.fabClose
  }, /*#__PURE__*/React.createElement(CloseIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: classes.rootOversize
  }, /*#__PURE__*/React.createElement("img", {
    className: classes.oversizeImg,
    src: currentImg?.path,
    alt: currentImg?.label
  })));
};