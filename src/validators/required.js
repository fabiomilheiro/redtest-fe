const required = (value) => {
  if (value) {
    return undefined;
  }

  return "The field is required.";
};

export default required;
