import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

/**
 * A few button examples, with different variants, sizes and colours
 */

const ButtonExamples = () => {
  const classes = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    }
  }));

  return (
    <div>
      <Button
        color="inherit"
        variant="text"
        size="small"
        className={classes.button}
      >
        Small Text Button
      </Button>
      <Button
        color="primary"
        variant="outlined"
        size="medium"
        className={classes.button}
      >
        Medium Outlined Button
      </Button>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
      >
        Large Contained Button
      </Button>
    </div>
  );
};

export default ButtonExamples;
