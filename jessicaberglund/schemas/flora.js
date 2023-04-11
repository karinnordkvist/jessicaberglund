import { string } from 'prop-types';

export default {
  name: 'flora',
  title: 'Flora',
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
    // {
    //   name: 'testBody',
    //   title: 'Body',
    //   type: 'array',
    //   of: [
    //     { type: 'block' },
    //     {
    //       type: 'image',
    //     },
    //   ],
    // },
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
    {
      name: 's1_text',
      fieldset: 'section_1',
      title: 'Introtext',
      type: 'blockContent',
    },
    {
      name: 's2_img1',
      fieldset: 'section_2',
      title: 'Bild 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 's2_link1',
      fieldset: 'section_2',
      title: 'Länk 1',
      description:
        'Välj var du vill att bilden ska länka till. OBS. Endast 1 val möjligt.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Foto', value: '/foto' },
          { title: 'Flora', value: '/flora' },
          { title: 'Samarbeten', value: '/samarbeten' },
          { title: 'Priser', value: '/priser' },
          { title: 'Kontakt', value: '/kontakt' },
        ],
      },
      validation: (Rule) => Rule.unique(),
    },
    {
      name: 's2_img2',
      fieldset: 'section_2',
      title: 'Bild 2',
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
      name: 's2_link2',
      fieldset: 'section_2',
      title: 'Länk 2',
      description:
        'Välj var du vill att bilden ska länka till. OBS. Endast 1 val möjligt.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Foto', value: '/foto' },
          { title: 'Flora', value: '/flora' },
          { title: 'Samarbeten', value: '/samarbeten' },
          { title: 'Priser', value: '/priser' },
          { title: 'Kontakt', value: '/kontakt' },
        ],
      },
    },
    {
      name: 's3_img',
      fieldset: 'section_3',
      title: 'Bild',
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
      name: 's3_link',
      fieldset: 'section_3',
      title: 'Länk',
      description:
        'Välj var du vill att bilden ska länka till. OBS. Endast 1 val möjligt.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Foto', value: '/foto' },
          { title: 'Flora', value: '/flora' },
          { title: 'Samarbeten', value: '/samarbeten' },
          { title: 'Priser', value: '/priser' },
          { title: 'Kontakt', value: '/kontakt' },
        ],
      },
    },
    {
      name: 's4_img',
      fieldset: 'section_4',
      title: 'Bild',
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
      name: 's4_title',
      fieldset: 'section_4',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 's4_text',
      fieldset: 'section_4',
      title: 'Text',
      type: 'string',
    },
    {
      name: 's4_linktext',
      fieldset: 'section_4',
      title: 'Knapptext',
      type: 'string',
    },
    {
      name: 's4_link',
      fieldset: 'section_4',
      title: 'Länk',
      description:
        'Välj var du vill att bilden ska länka till. OBS. Endast 1 val möjligt.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Foto', value: '/foto' },
          { title: 'Flora', value: '/flora' },
          { title: 'Samarbeten', value: '/samarbeten' },
          { title: 'Priser', value: '/priser' },
          { title: 'Kontakt', value: '/kontakt' },
        ],
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Flora',
      };
    },
  },
};
