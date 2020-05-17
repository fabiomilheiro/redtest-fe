const composeValidators = (validators) => (value) => {
  const r = validators.reduce(
    (error, validator) => error || validator(value),
    undefined
  );
  return r;
};

export default composeValidators;
