import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import category from './category';
import post from './post';
import home from './home';
import foto from './foto';
import flora from './flora';
import faq from './faq';
import about from './about';
import samarbeten from './samarbeten';
import price from './price';
import prices from './prices';
import grid from './grid';
import photoProject from './photoProject';

export default createSchema({
  name: 'JessicaBerglund',
  types: schemaTypes.concat([
    home,
    foto,
    flora,
    samarbeten,
    post,
    category,
    blockContent,
    price,
    prices,
    photoProject,
    grid,
    faq,
    about,
  ]),
});
