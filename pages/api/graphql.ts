import { ApolloServer } from 'apollo-server-micro';
import { schema } from 'src/server/nexusSchema';
import { createContext } from 'src/server/context';

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
