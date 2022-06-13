import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

import { Context } from '../context';

export const Query = new GraphQLObjectType<undefined, Context>({
  name: 'Query',
  fields: {
    greeting: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (): string => 'Hello World!'
    }
  }
});
