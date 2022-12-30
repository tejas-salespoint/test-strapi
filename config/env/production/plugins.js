module.exports = {
    //
    graphql: {
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 20,
        amountLimit: 2000,
        apolloServer: {
          tracing: false,
          bodyParserConfig: {
            // koa-bodyparser/node_modules/co-body/lib/json.js#36
            limit: "256mb",
            // koa-bodyparser/index.js#69
            formLimit: "256mb",
            jsonLimit: "256mb",
            textLimit: "256mb",
            xmlLimit: "256mb",
          },
        },
      },
    },
  };
  
  // module.exports = ({ env }) => ({
  //   graphql: {
  //     endpoint: "/graphql",
  //     shadowCRUD: true,
  //     playgroundAlways: env.bool("GRAPHQL_PLAYGROUND_ENABLE", false),
  //     depthLimit: 7,
  //     amountLimit: 2000,
  //     apolloServer: {
  //       tracing: false,
  //       bodyParserConfig: {
  //         // koa-bodyparser/node_modules/co-body/lib/json.js#36
  //         limit: "256mb",
  //         // koa-bodyparser/index.js#69
  //         formLimit: "256mb",
  //         jsonLimit: "256mb",
  //         textLimit: "256mb",
  //         xmlLimit: "256mb",
  //       },
  //     },
  //   },
  // });
  