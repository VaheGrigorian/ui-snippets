import React from "react";
import styled from "styled-components";

export default styled.button`
  background: ${({ bg }) => bg};
  border: 2px solid #222222;
  color: ${({ color }) => color};
  font: inherit;
  cursor: pointer;
  text-align: left;
  outline: none;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  font-family: "Graphik Webfont", -apple-system, BlinkMacSystemFont, "Roboto",
    "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif;
  border-radius: 24px;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  min-height: 48px;
  min-width: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 18px;
  padding-right: 18px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  z-index: 10;
  box-sizing: border-box;
  transition: transform 200ms cubic-bezier(0.345, 0.115, 0.135, 1.42),
    opacity 150ms ease-out;
  box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);

  &:hover {
    transform: scaleX(1.015) scaleY(1.035) perspective(1px);
  }
`;
