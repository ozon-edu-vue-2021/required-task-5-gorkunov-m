const prices = [1000, 800, 360, 1220, 900, 240, 160, 940, 669];
const images = [
  '6123150777.webp',
  '6126039472.webp',
  '6126040354.webp',
  '6128597660.webp',
  '6134992334.webp',
  '6136170572.webp',
  '6136172483.webp',
  '6140906765.webp',
  '6142673815.webp',
  '6142681673.webp',
  '6142683276.webp',
  '6148226736.webp',
];

const getRandomValue = (values = []) => {
  const max = values.length - 1;
  const index = Math.round(Math.random() * max);

  return values[index];
};

export function transformProducts(products) {
  return products.map((product) => {
    return {
      id: product.id,
      uid: product.uid,
      name: product.ingredient,
      price: getRandomValue(prices),
      image: `/images/${getRandomValue(images)}`,
      favorite: false,
    };
  });
}
