export default {
  name: 'navBlock',
  title: 'Text + bild länk',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Rubrik',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
    },
    {
      name: 'backgroundColor',
      title: 'Bakgrundsfärg',
      type: 'color',
    },
    {
      name: 'textColor',
      title: 'Textfärg',
      type: 'color',
    },
  ],

  preview: {
    prepare() {
      return {
        title: `Text + bild-länk`,
      };
    },
  },
};
