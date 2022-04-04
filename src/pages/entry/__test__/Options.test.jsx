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
