const displayBDTCurrency = (num) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
    currencyDisplay: "narrowSymbol",
  });

  return formatter.format(num);
};

export default displayBDTCurrency;
