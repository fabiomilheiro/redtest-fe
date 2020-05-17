import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  InputAdornment,
} from "@material-ui/core";
import composeValidators from "../../validators/composeValidators";
import percentage from "./../../validators/percentage";

const PercentageField = ({ name, validators, label }) => {
  const id = name;
  const helperTextId = `${id}-helper-text`;
  return (
    <Field
      name={name}
      validate={composeValidators([...validators, percentage])}
    >
      {({ input, meta }) => (
        <FormControl error={meta.error && meta.touched}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Input
            id={id}
            aria-describedby={label}
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
            inputProps={{ "data-testid": id }}
            {...input}
          />
          <FormHelperText id={helperTextId} data-testid={helperTextId}>
            {meta.error && meta.touched
              ? meta.error
              : "A number between 0 and 100."}
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};

PercentageField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validators: PropTypes.arrayOf(PropTypes.func).isRequired,
};

export default PercentageField;
