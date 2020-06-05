import React from "react";
import Label from "./Label";
import styled from "styled-components";

export const Input = styled.input`
  margin: 0.3em 0;
  transition: border-color 200ms ease-out, box-shadow 200ms ease-out;
  appearance: none;
  box-shadow: 0 1px 6px 0 rgba(34, 34, 34, 0.15);
  display: block;
  font-family: inherit;
  font-size: 16px;
  height: 48px;
  padding-left: 12px;
  padding-right: 36px;
  width: 100%;
  border-radius: 6px;
  background: #ffffff;
  border-color: rgba(34, 34, 34, 0.15);
  border-style: solid;
  border-width: 1px;
  color: #222222;
  text-indent: 0.01px;
  text-overflow: "";
  cursor: pointer;
  text-transform: none;
  box-sizing: border-box;

  &:hover {
    border-color: rgba(34, 34, 34, 0.5);
    box-shadow: 0 1px 12px 0 rgba(34, 34, 34, 0.2);
  }
  &:focus {
    border-color: #222222;
    outline: 0;
  }
`;

export default ({ label, name, id, placeholder, ...props }) => (
  <div>
    {label && <Label htmlFor={id}>{label}</Label>}
    <Input
      placeholder={placeholder ? placeholder : ""}
      name={name}
      {...props}
    />
  </div>
);
