import React from "react";
import { Field, Form } from "react-final-form";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  Paper,
  makeStyles,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@material-ui/core";

const required = (value) => {
  if (value) {
    return undefined;
  }

  return "The field is required.";
};
const percentage = (value) => {
  const errorMessage =
    "The field requires a percentage value between 0 and 100.";

  if (Number.isNaN(value)) {
    return errorMessage;
  }

  if (value < 0 || value > 100) {
    return errorMessage;
  }

  return undefined;
};

const composeValidators = (validators) => (value) => {
  const r = validators.reduce(
    (error, validator) => error || validator(value),
    undefined
  );
  return r;
};

const handleSubmit = () => {};
const onSubmit = () => {};
const validate = () => {};
const handleChange = () => {};

const renderForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <p>Please insert two probabilities and choose the calculation type.</p>
        <Grid container spacing={3}>
          <Grid container item xs={6} spacing={2}>
            <Grid item xs={12}>
              <Field
                name="a"
                validate={composeValidators([required, percentage])}
              >
                {({ input, meta }) => (
                  <FormControl error={meta.error && meta.touched}>
                    <InputLabel htmlFor="percentage-a">Percentage A</InputLabel>
                    <Input
                      id="percentage-a"
                      aria-describedby="Percentage A"
                      {...input}
                    />
                    <FormHelperText id="percentage-a-helper-text">
                      {meta.error && meta.touched
                        ? meta.error
                        : "A number between 0 and 100."}
                    </FormHelperText>
                  </FormControl>
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field
                name="b"
                validate={composeValidators([required, percentage])}
              >
                {({ input, meta }) => (
                  <FormControl error={meta.error && meta.touched}>
                    <InputLabel htmlFor="percentage-b">Percentage B</InputLabel>
                    <Input
                      id="percentage-b"
                      aria-describedby="Percentage B"
                      {...input}
                    />
                    <FormHelperText id="percentage-b-helper-text">
                      {meta.error && meta.touched
                        ? meta.error
                        : "A number between 0 and 100."}
                    </FormHelperText>
                  </FormControl>
                )}
              </Field>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Field name="calculationType" type="radio" validate={required}>
              {({ input, meta }) => (
                <FormControl error={meta.error && meta.touched}>
                  <FormLabel component="legend">Calculation type</FormLabel>
                  <RadioGroup
                    aria-label="Calculation type"
                    name="calculationType"
                    onChange={handleChange}
                    {...input}
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Combined"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Either"
                    />
                  </RadioGroup>
                  <FormHelperText id="calculation-type-helper-text">
                    {meta.error && meta.touched ? meta.error : null}
                  </FormHelperText>
                </FormControl>
              )}
            </Field>
          </Grid>
        </Grid>
      </form>
    )}
  />
);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

const CalculationForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{renderForm()}</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CalculationForm;
