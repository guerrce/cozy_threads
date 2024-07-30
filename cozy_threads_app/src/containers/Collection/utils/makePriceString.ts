const makePriceString = (
  currency: string,
  units: number,
): string => {
  const currencyLabel = currency.toUpperCase();
  const convertedString = (units / 100).toLocaleString("en-US", {style:"currency", currency:currencyLabel});
  return convertedString;
};

export default makePriceString;
