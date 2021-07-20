module.exports = {
  backend: {
    generator: 'nexus',
    onDelete: true,
    output: 'src/server/graphql/models',
  },
  frontend: {
    graphql: {
      output: 'src/graphql/generated',
    },
  },
};
