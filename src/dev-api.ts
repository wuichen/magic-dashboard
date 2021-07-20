import { ApolloServer } from 'apollo-server'
import { schema } from './server/nexusSchema'
import { createContext } from './server/context'
import { beforeHooks, afterHooks } from './server/middleware';
import { applyMiddleware } from 'graphql-middleware';
import requireContext from './server/utils/requireContext'

import path from 'path'

const middlewares = {}
const middlewareContext = requireContext(path.resolve('src/server/middleware'), true, /\.ts$/)
Object.keys(middlewareContext).forEach((key) => {
  middlewares[key] = middlewareContext[key].default
})

const server = new ApolloServer({
  cors: {
    origin: ['http://www.mercy.com:3000', 'http://www.mercy.com:3003'], // <- allow request from all domains
    credentials: true,
  },
  schema: applyMiddleware(schema, beforeHooks, afterHooks),
  context: async ({ req, res }) => createContext({ req, res, middlewares }),
})

server.listen(3002).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
