import React from "react";
import Form from "./Form";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import BtnGroup from "./BtnGroup";

export default ({ divisions }) => (
  <Form>
    <Select
      name="divisionId"
      placeholder="Select Division"
      options={divisions}
    />
    <BtnGroup>
      <Button>Cancel</Button>
      <Button bg="#222222" color="#ffffff">
        Save
      </Button>
    </BtnGroup>
  </Form>
);
