import React, { useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";

/**
 * Several input examples using the TextField component (examples include plain text,
 * password input, dropdown picker, and date and time pickers)
 */

const TextFieldExamples = () => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState("EUR");
  const currencies = [
    {
      value: "USD",
      label: "$"
    },
    {
      value: "EUR",
      label: "€"
    },
    {
      value: "BTC",
      label: "฿"
    },
    {
      value: "JPY",
      label: "¥"
    }
  ];

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <TextField
        label="basic text input"
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
      />{" "}
      <TextField
        label="outlined text input"
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
        variant="outlined"
      />{" "}
      <TextField
        error
        label="error text input"
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
        variant="outlined"
      />{" "}
      <TextField
        label="password input"
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
        variant="outlined"
        type="password"
      />{" "}
      <TextField
        label="dense text input"
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
        variant="outlined"
        margin="dense"
      />{" "}
      <TextField
        label="Search field"
        type="search"
        margin="none"
        variant="outlined"
        value={input}
        onChange={event => {
          setInput(event.target.value);
        }}
      />{" "}
      <br />
      <TextField
        style={{ width: 130 }}
        label="Select Currencies"
        select
        value={value}
        onChange={handleChange}
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>{" "}
      <TextField
        type="date"
        label="basic date picker"
        defaultValue="2017-05-24"
      />{" "}
      <TextField
        type="datetime-local"
        label="date and time picker"
        defaultValue="2017-05-24T10:30"
      />{" "}
      <TextField type="time" label="time picker" defaultValue="10:30" />{" "}
    </div>
  );
};

export default TextFieldExamples;
