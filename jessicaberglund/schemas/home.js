import { string } from 'prop-types';

export default {
  name: 'home',
  title: 'Startsidan',
  type: 'document',
  fields: [
    {
      name: 'hero_image',
      title: 'Hero Bild',
      description:
        'Format: Fullskärm, på dator en liggande rektangel, på tablet/telefon en stående rektangel. Centrerad i höjd och bredd.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'hero_image_alt',
      title: 'Bildtext (Hero-bilden)',
      description: 'Beskrivning av bilden (för tillgänglighet)',
      type: 'string',
    },
    {
      name: 'intro_text',
      title: 'Introtext',
      type: 'string',
    },
    {
      name: 'intro_image',
      description: 'Format: 300x370px.',
      title: 'Intro Image',
      type: 'image',
    },
    {
      name: 'intro_image_alt',
      title: 'Bildtext (Intro-bilden)',
      description: 'Beskrivning av bilden (för tillgänglighet)',
      type: 'string',
    },
    {
      name: 'duo_nav_link1',
      title: '2 bilder navigation: Länk 1',
      description: 'Ex /flora',
      type: 'string',
    },
    {
      name: 'duo_nav_img1',
      title: '2 bilder navigation: Bild 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'duo_nav_link2',
      title: '2 bilder navigation: Länk 2',
      description: 'Ex /flora',
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
      name: 'duo_nav_img2',
      title: '2 bilder navigation: Bild 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'single_category_title',
      title: 'Single Category Title',
      description:
        'Title for above image. Choose from Alla projekt, Fotografi, PR, Styling, Editorial or Rörligt.',
      type: 'string',
    },
    {
      name: 'work_title',
      title: 'Work Together - Title',
      type: 'string',
    },
    {
      name: 'work_text',
      title: 'Work Together - Text',
      description:
        'Text can be parted up into sections by creating a new paragraph.',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'work_text2',
      title: 'Work Together - Text 2',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
