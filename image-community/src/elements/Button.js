import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
    children,
    margin,
    width,
    padding,
    invisible,
    color,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    backgroundColor: color,
  };

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  if (invisible) {
    return (
      <React.Fragment>
        <ElButton {...styles} onClick={_onClick} style={{ display: "none" }}>
          {text ? text : children}
        </ElButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
  invisible: false,
  color: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  ${(props) =>
    props.color
      ? `background-color: ${(props) => props.color};`
      : "background-color: #FFBCBC;"}
  color: #000000;
  font-family: "Noto Serif KR", serif;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const FloatButton = styled.button`
  width: 52px;
  height: 52px;
  background-color: #f38ba0;
  color: #000000;
  font-family: "Noto Serif KR", serif;
  box-sizing: border-box;
  font-size: 26px;
  font-weight: 800;
  position: fixed;
  bottom: 46px;
  right: 23px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 26px;
`;

export default Button;
