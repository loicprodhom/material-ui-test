import { Slider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const DiscreteSlider = () => {
  const classes = makeStyles(theme => ({
    root: {
      width: 300
    },
    margin: {
      height: theme.spacing(3)
    }
  }));

  const marks = [
    {
      value: -10,
      label: "-10°C"
    },
    {
      value: 0,
      label: "0°C"
    },
    {
      value: 20,
      label: "20°C"
    },
    {
      value: 37,
      label: "37°C"
    },
    {
      value: 45,
      label: "45°C"
    },
    {
      value: 100,
      label: "100°C"
    }
  ];

  const valueText = value => {
    return `${value}°C`;
  };

  const valueLabelFormat = value => {
    return marks.findIndex(mark => mark.value === value) + 1;
  };

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Slider without marks
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={10}
        max={110}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-custom" gutterBottom>
        Custom marks with steps of 10
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        min={-20}
        marks={marks}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Steps restricted to marks
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        min={-20}
        marks={marks}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Always visible with steps of 0.1
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider-always"
        step={0.1}
        min={-20}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
};

export default DiscreteSlider;
