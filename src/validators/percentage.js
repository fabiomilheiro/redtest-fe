const percentage = (value) => {
  const errorMessage =
    "The field requires a percentage value between 0 and 100.";

  value = parseFloat(value);

  if (Number.isNaN(value)) {
    return errorMessage;
  }

  if (value < 0 || value > 100) {
    return errorMessage;
  }

  return undefined;
};

export default percentage;
