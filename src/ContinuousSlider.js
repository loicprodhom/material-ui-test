import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Slider } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

/**
 * Simple continuous sliders, wrapped in Grid components (they adjust the size of
 * GridItems based on available space percentage)
 */

const ContinuousSlider = () => {
  const classes = useStyles();
  const [value, setValue] = useState(30);
  const [feel, setFeel] = useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFeel = (event, newValue) => {
    setFeel(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <div>I Feel terrible today</div>
        </Grid>
        <Grid item xs>
          <Slider
            value={feel}
            onChange={handleFeel}
            max={10}
            defaultValue={5}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <div>I Feel great today</div>
        </Grid>
      </Grid>
      <div>How it will be saved in the data: {feel}</div>
    </div>
  );
};

export default ContinuousSlider;
