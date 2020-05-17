import React, { useState } from "react";
import { Form } from "react-final-form";
import { Grid, Paper, makeStyles, Button, Box } from "@material-ui/core";
import PercentageField from "../PercentageField/PercentageField";
import CalculationType from "../CalculationType/CalculationType";
import required from "./../../validators/required";
import calculationService from "../../services/calculationService";
import PropTypes from "prop-types";

const onSubmit = async (values, onCalculated, setIsLoading) => {
  setIsLoading(true);
  calculationService
    .calculate({
      a: values.a,
      b: values.b,
      calculationType: values.calculationType,
    })
    .then((result) => {
      setIsLoading(false);
      onCalculated(result);
    })
    .catch((error, b, c) => {
      setIsLoading(false);
    });
};
const validate = () => {
  return {};
};

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

const CalculationForm = ({ onCalculated }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Form
                onSubmit={(values) =>
                  onSubmit(values, onCalculated, setIsLoading)
                }
                validate={validate}
                render={({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Box component="p" margin={0} marginBottom={2}>
                      Please insert two probabilities and choose the calculation
                      type.
                    </Box>
                    <Grid container spacing={4}>
                      <Grid item md={6}>
                        <Box marginBottom={2}>
                          <PercentageField
                            name="a"
                            label="Percentage A"
                            validators={[required]}
                          />
                        </Box>
                        <Box>
                          <PercentageField
                            name="b"
                            label="Percentage B"
                            validators={[required]}
                          />
                        </Box>
                      </Grid>
                      <Grid item md={6}>
                        <CalculationType
                          name="calculationType"
                          validators={[required]}
                        />
                      </Grid>
                    </Grid>
                    <Box component="div" marginTop={4}>
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        type="submit"
                        disabled={isLoading}
                        data-testid="calculateButton"
                      >
                        Calculate
                      </Button>
                    </Box>
                  </form>
                )}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

CalculationForm.propTypes = {
  onCalculated: PropTypes.func,
};

CalculationForm.defaults = {
  onCalculated: () => {},
};

export default CalculationForm;
