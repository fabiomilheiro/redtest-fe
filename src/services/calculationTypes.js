const calculationTypes = {
  combined: {
    value: 0,
    name: "Combined",
  },
  either: {
    value: 1,
    name: "Either",
  },
};

const calculationTypesByValue = Object.keys(calculationTypes)
  .map((key) => calculationTypes[key])
  .reduce((previous, current) => {
    previous[current.value] = current;
    return previous;
  }, {});

export default {
  get: () => calculationTypes,
  getArray: () =>
    Object.keys(calculationTypes).map((key) => calculationTypes[key]),
  getByValue: (value) => calculationTypesByValue[value],
};
