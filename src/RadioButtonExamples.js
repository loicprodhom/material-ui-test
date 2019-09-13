import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

const RadioButtonExamples = () => {
  return (
    <div>
      <FormControl>
        <FormLabel>Options</FormLabel>
        <RadioGroup>
          <FormControlLabel
            label="option 1"
            value="1"
            control={<Radio color="primary" />}
          />
          <FormControlLabel
            label="option 2"
            value="2"
            control={<Radio color="primary" />}
          />
          <FormControlLabel
            label="option 3"
            value="3"
            control={<Radio color="primary" />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButtonExamples;
