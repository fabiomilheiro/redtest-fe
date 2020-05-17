import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Radio,
  Box,
} from "@material-ui/core";
import { Field } from "react-final-form";
import composeValidators from "../../validators/composeValidators";

const CalculationType = ({ name, validators }) => {
  return (
    <Field
      name={name}
      type="radio"
      validate={composeValidators(
        Array.isArray(validators) ? validators : [validators]
      )}
    >
      {({ input, meta }) => (
        <FormControl error={meta.error && meta.touched} data-testid={name}>
          <Box
            component={FormLabel}
            itemProp={{ component: "legend" }}
            marginBottom={2}
          >
            Calculation type
          </Box>
          <RadioGroup aria-label="Calculation type" name={name} {...input}>
            <FormControlLabel
              value="0"
              control={<Radio />}
              label="Combined"
              data-testid="calculationType-0"
            />
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Either"
              data-testid="calculationType-1"
            />
          </RadioGroup>
          <FormHelperText id="calculation-type-helper-text">
            {meta.error && meta.touched ? meta.error : null}
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};

CalculationType.propTypes = {
  name: PropTypes.string.isRequired,
  validators: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.func),
  ]),
};

CalculationType.defaults = {
  validators: [],
};

export default CalculationType;

/*

import React from "react";
import PropTypes from "prop-types";
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    FormHelperText,
    Radio,
    Box,
} from "@material-ui/core";
import {Field} from "react-final-form";
import composeValidators from "../../validators/composeValidators";
import calculationTypes from "../../services/calculationTypes";

const CalculationType = ({name, validators}) => {
    return (
        <Field
            name={name}
            type="radio"
            validate={composeValidators(
                Array.isArray(validators) ? validators : [validators]
            )}
        >
            {({input, meta}) => (
                <FormControl error={meta.error && meta.touched} data-testid={name}>
                    <Box
                        component={FormLabel}
                        itemProp={{component: "legend"}}
                        marginBottom={2}
                    >
                        Calculation type
                    </Box>
                    <RadioGroup aria-label="Calculation type" name={name} {...input}>
                        {calculationTypes.getArray().map(ct => (
                            <FormControlLabel
                                key={ct.value}
                                value={ct.value}
                                control={<Radio />}
                                label={ct.name}
                            />
                        ))}
                    </RadioGroup>
                    <FormHelperText id="calculation-type-helper-text">
                        {meta.error && meta.touched ? meta.error : null}
                    </FormHelperText>
                </FormControl>
            )}
        </Field>
    );
};

CalculationType.propTypes = {
    name: PropTypes.string.isRequired,
    validators: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.func),
    ]),
};

CalculationType.defaults = {
    validators: [],
};

export default CalculationType;


 */
