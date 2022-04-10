import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('displays image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  //   expect(scoopImages.length).toBe(2);
  // find images
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((image) => image.getAttribute('alt'));
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Displays image for each topping option from server', async () => {
  render(<Options optionType="toppings" />);
  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  //   expect(toppingImages.length).toBe(3);
  // find images
  expect(toppingImages).toHaveLength(3);

  // Check the actual alt text for the images
  const altText = toppingImages.map((image) => image.getAttribute('alt'));
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
