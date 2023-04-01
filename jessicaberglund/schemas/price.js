export default {
  name: 'price',
  title: 'Pris',
  type: 'document',
  fields: [
    {
      name: 'priceTitle',
      title: 'Namn',
      type: 'string',
    },
    {
      name: 'priceText',
      title: 'Information',
      type: 'string',
    },
    {
      name: 'pricePrice',
      title: 'Pris',
      type: 'string',
    },
  ],

  preview: {
    prepare() {
      return {
        title: `Pris`,
      };
    },
  },
};
