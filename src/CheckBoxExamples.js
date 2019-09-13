import React from "react";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel
} from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

const CheckBoxExamples = () => {
  return (
    <div>
      <FormControl>
        <FormLabel>Checkboxes</FormLabel>
        <FormGroup>
          <FormControlLabel label="Option 1" control={<Checkbox value="1" />} />
          <FormControlLabel label="Option 2" control={<Checkbox value="2" />} />
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default CheckBoxExamples;
