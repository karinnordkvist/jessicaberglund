export default {
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'fraga',
      title: 'Fråga',
      type: 'string',
    },
    {
      name: 'svar',
      title: 'Svar',
      type: 'string',
    },
  ],

  preview: {
    prepare(selection) {
      const { fraga, svar } = selection;

      return {
        title: `Fråga`,
      };
    },
  },
};
