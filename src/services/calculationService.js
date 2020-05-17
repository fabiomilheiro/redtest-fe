import http from "./http";
import config from "./config";
import calculationTypes from "./calculationTypes";

const calculate = async (input) => {
  const sanitizedInput = {
    a: parseFloat(input.a) / 100,
    b: parseFloat(input.b) / 100,
    calculationType: parseInt(input.calculationType),
  };

  const response = await http.post(
    `${config.apiBaseUrl}/calculations`,
    sanitizedInput,
    {
      accept: "application/json",
    }
  );

  return {
    a: sanitizedInput.a * 100,
    b: sanitizedInput.b * 100,
    calculationType: calculationTypes.getByValue(input.calculationType),
    value: parseFloat((response.data.value * 100).toFixed(2)),
  };
};

export default { calculate };
