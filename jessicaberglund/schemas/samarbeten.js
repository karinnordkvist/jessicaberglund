import { string } from 'prop-types';

export default {
  name: 'samarbeten',
  title: 'Samarbeten',
  type: 'document',
  fieldsets: [
    {
      name: 'hero_section',
      title: 'Toppsektion',
    },
    {
      name: 'section_1',
      title: 'Sektion 1',
    },
    {
      name: 'section_2',
      title: 'Sektion 2',
    },
    {
      name: 'section_3',
      title: 'Sektion 3',
    },
    {
      name: 'section_4',
      title: 'Sektion 4',
    },
    {
      name: 'section_5',
      title: 'Sektion 5',
    },
  ],
  fields: [
    {
      name: 'hero_img',
      fieldset: 'hero_section',
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
    // {
    //   name: 's1_text',
    //   fieldset: 'section_1',
    //   title: 'Introtext',
    //   type: 'array',
    //   of: [{ type: 'block' }, { type: 'image' }],
    // },
    {
      name: 's1_text',
      fieldset: 'section_1',
      title: 'Introtext',
      type: 'blockContent',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Samarbeten',
      };
    },
  },
};
