import React from "react";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel
} from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

const CheckboxExamples = () => {
  return (
    <div>
      <FormControl>
        <FormLabel>Checkboxes</FormLabel>
        <FormGroup>
          <FormControlLabel label="Option 1" control={<Checkbox value="1" />} />
          <FormControlLabel label="Option 2" control={<Checkbox value="2" />} />
          <FormControlLabel label="Option 3" control={<Checkbox value="3" />} />
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default CheckboxExamples;
