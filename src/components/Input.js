import React from "react";
import styled from "styled-components";

const Input = styled.input``;

export default ({ label, name, ...props }) => (
  <div>
    <label>{label}</label>
    <Input {...props} />
  </div>
);
