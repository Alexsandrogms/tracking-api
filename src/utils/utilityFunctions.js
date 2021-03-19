const isEmpty = (value) => {
  return Object.values(value).map((v) => v.length <= 0)[0];
};

const resolveObjectPriceTerm = (values) => {
  if (
    Object.entries(values)
      .map((_, idx) => Number(values[idx].Erro) < 0)
      .includes(true)
  ) {
    return false;
  }

  return Object.entries(values).map((_, idx) => values[idx]);
};

module.exports = {
  isEmpty,
  resolveObjectPriceTerm,
};
