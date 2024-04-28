import {createSchema} from 'sanity'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// import blockContent from './blockContent'
import category from './category'
import restaurant from './restaurant'
import dish from './dish'
import featured from './featured'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([restaurant, dish, category, featured]),
})
