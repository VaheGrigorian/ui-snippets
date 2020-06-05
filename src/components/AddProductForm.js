import React from "react";
import Form from "./Form";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import BtnGroup from "./BtnGroup";
import Checkbox from "./Checkbox";

export default ({ divisions, brands }) => (
  <Form>
    <Input type="text" name="title" placeholder="Title" />
    <Input type="number" name="price" placeholder="Price" />
    <Select
      name="divisionId"
      placeholder="Select Division"
      options={divisions}
    />
    <Select name="brandId" placeholder="Select Brand" options={brands} />
    <Checkbox label="Stay Signed In" />
    <BtnGroup>
      <Button type="reset">Cancel</Button>
      <Button type="submit">Save</Button>
    </BtnGroup>
  </Form>
);

