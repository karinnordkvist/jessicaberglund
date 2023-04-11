import { string } from 'prop-types';

export default {
  name: 'prices',
  title: 'Prislista',
  type: 'document',
  fieldsets: [
    {
      name: 'foto',
      title: 'Foto',
    },
    {
      name: 'flora',
      title: 'Flora',
    },
  ],
  fields: [
    {
      name: 'hero_img',
      title: 'Startbild',
      description:
        'Format: Fullskärm, på dator en liggande rektangel, på tablet/telefon en stående rektangel. Centrerad i höjd och bredd.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Bildtext',
          description: 'Beskrivning av bilden (för tillgänglighet)',
        },
      ],
    },
    {
      name: 's1_text',
      title: 'Introtext',
      type: 'blockContent',
    },
    {
      name: 'foto_prices',
      fieldset: 'foto',
      title: 'Priser',
      description:
        'Lägg till alla typer av plåtningar du erbjuder och vad de kostar här.',
      type: 'array',
      of: [{ type: 'price' }],
    },
    {
      name: 'flora_prices',
      fieldset: 'flora',
      title: 'Priser',
      description:
        'Lägg till alla sorters tjänster du har som är blomrelaterade här.',
      type: 'array',
      of: [{ type: 'price' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Prislista',
      };
    },
  },
};
