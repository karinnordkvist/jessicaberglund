import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import category from './category';
import post from './post';
import home from './home';

export default createSchema({
  name: 'JessicaBerglund',
  types: schemaTypes.concat([home, post, category, blockContent]),
});
