export const formatNumber = (value, options = {}) => {
  const { decimals, decPoint, thousandsSep } = {
    decimals: 0,
    decPoint: '.',
    thousandsSep: ' ',
    ...options,
  };

  value = `${value}`.replace(/[^0-9+\-Ee.]/g, '');

  let number = !isFinite(+value) ? 0 : +value;
  let bigNumber = false;
  let bigNumberPosfix = '';
  let result = [];

  const toFixedFix = (n, p) => {
    const k = Math.pow(10, p);
    return '' + Math.round(n * k) / k;
  };

  const d = decimals;

  result = (d ? toFixedFix(number, d) : '' + Math.round(number)).split('.');

  if (result[0].length > 3) {
    result[0] = result[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, thousandsSep);
  }

  return `${result.join(decPoint)} ${bigNumber ? bigNumberPosfix : ''}`;
};
