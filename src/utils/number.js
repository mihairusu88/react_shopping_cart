export const priceFormat = ({ value = null, currency = 'USD' }) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value);
};
