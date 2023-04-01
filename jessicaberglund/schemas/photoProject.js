import { string } from 'prop-types';

export default {
  name: 'project',
  title: 'Foto',
  type: 'document',
  initialValue: {
    selected_home: false,
    hidden_project: false,
  },
  fields: [
    {
      name: 'title',
      title: 'Title*',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug*',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'tags',
      title: 'Type of project*',
      description:
        'Add all tags needed and make sure you spell it right, and use right case (upper/lower) to be able to sort them later. Choose from: fotografi, styling, PR(upper case), editorial or rörligt.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Company / Client',
      type: 'string',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail*',
      description: 'Format: 240x220px',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'main_image',
      title: 'Main Image*',
      type: 'image',
      description:
        'Format: Full width, max 500px high (Horizontal on desktop, vertical on mobile).',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
    },
    {
      name: 'text',
      title: 'Main Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'grids',
      title: 'Image Grids',
      description:
        'Add 2 images and/or some text, and select a type of layout.',
      type: 'array',
      of: [{ type: 'grid' }],
    },
  ],
};
