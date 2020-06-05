import React, { useState } from "react";
import styled from "styled-components";

const Checkbox = styled.label`
  margin: 0.3em;
  min-height: 30px;
  padding-left: 38px;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  color: #222;
  font-family: "Graphik Webfont", -apple-system, BlinkMacSystemFont, "Roboto",
    "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  text-align: left;

  & > input {
    height: 30px;
    width: 30px;
    opacity: 0;
    margin-right: 0;
    position: absolute;
    left: 0;
    top: 1px;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
  }

  & > span {
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
  }

  & > input:checked + span:after {
    content: "";
    position: absolute;
    background-image: url("https://via.placeholder.com/30");
    background-repeat: no-repeat;
    padding: 3px;
    text-indent: 0;
    height: 28px;
    width: 28px;
    left: 1px;
    top: 0;
  }

  & > span:before {
    content: "";
    position: absolute;
    left: 0;
    border: 1px solid #cbccc9;
    border-radius: 3px;
    height: 30px;
    width: 30px;
    top: 0;
    display: inline-block;
    vertical-align: middle;
    box-sizing: border-box;
  }

  & > input:checked + span:before {
    color: #f56400;
    background: #fff;
    border-color: #adaeaa;
    box-shadow: inset 0 1px 4px -1px #faf9f5;
  }
`;

export default ({ label, ...props }) => {
  return (
    <Checkbox>
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </Checkbox>
  );
};
